#!/usr/bin/env python3
"""
ColorKind Press — Image Generation Pipeline
Generates all 250 coloring book pages using OpenAI's GPT Image API.

Usage:
    python generate_images.py                  # Generate all books
    python generate_images.py --book 1         # Generate only Book 1
    python generate_images.py --book 1 --start 5   # Book 1 starting from spread 5
    python generate_images.py --dry-run        # Preview prompts without generating

Requires:
    pip install openai
    export OPENAI_API_KEY=your-key-here
"""

import argparse
import base64
import json
import os
import sys
import time
from pathlib import Path

try:
    from openai import OpenAI
except ImportError:
    print("ERROR: openai package not installed. Run: pip install openai>=1.0.0")
    sys.exit(1)

# ---------------------------------------------------------------------------
# Constants
# ---------------------------------------------------------------------------

SCRIPT_DIR = Path(__file__).resolve().parent
PROMPTS_FILE = SCRIPT_DIR / "prompts.json"
OUTPUT_DIR = SCRIPT_DIR / "output"
PROGRESS_FILE = SCRIPT_DIR / "progress.json"

STYLE_PREFIX = (
    "Create a black and white coloring book page with bold thick outlines "
    "on pure white background. No shading, no gray, no color fills. "
    "Toddler-friendly simple shapes. "
)

MODEL = "gpt-image-1"
IMAGE_SIZE = "1024x1536"  # Portrait, closest to 8.5x11 ratio

# Seconds to sleep between API requests to respect rate limits.
REQUEST_DELAY = 2.0

# ---------------------------------------------------------------------------
# Progress tracking
# ---------------------------------------------------------------------------


def load_progress() -> dict:
    """Load the progress file, returning an empty dict if it doesn't exist."""
    if PROGRESS_FILE.exists():
        try:
            with open(PROGRESS_FILE, "r") as f:
                return json.load(f)
        except (json.JSONDecodeError, OSError):
            print("WARNING: progress.json is corrupt — starting fresh.")
    return {"completed": []}


def save_progress(progress: dict) -> None:
    """Persist progress to disk."""
    with open(PROGRESS_FILE, "w") as f:
        json.dump(progress, f, indent=2)


# ---------------------------------------------------------------------------
# Prompt loading
# ---------------------------------------------------------------------------


def load_prompts() -> dict:
    """Load prompts.json and return its contents."""
    if not PROMPTS_FILE.exists():
        print(f"ERROR: {PROMPTS_FILE} not found.")
        print("Place prompts.json in the same directory as this script.")
        sys.exit(1)
    with open(PROMPTS_FILE, "r") as f:
        return json.load(f)


# ---------------------------------------------------------------------------
# Image generation
# ---------------------------------------------------------------------------


def generate_image(client: OpenAI, prompt: str) -> bytes | None:
    """Call the OpenAI image generation API and return raw PNG bytes.

    Returns None on failure.
    """
    full_prompt = STYLE_PREFIX + prompt

    try:
        result = client.images.generate(
            model=MODEL,
            prompt=full_prompt,
            size=IMAGE_SIZE,
            n=1,
            quality="high",
        )

        # gpt-image-1 returns base64-encoded image data by default.
        # Handle both b64_json and url response formats.
        image_data = result.data[0]
        if hasattr(image_data, "b64_json") and image_data.b64_json:
            return base64.b64decode(image_data.b64_json)
        elif hasattr(image_data, "url") and image_data.url:
            # Fall back to downloading from URL.
            import urllib.request
            with urllib.request.urlopen(image_data.url) as resp:
                return resp.read()
        else:
            print("  ERROR: API returned no image data.")
            return None

    except Exception as e:
        print(f"  ERROR generating image: {e}")
        return None


# ---------------------------------------------------------------------------
# Main pipeline
# ---------------------------------------------------------------------------


def run_pipeline(args: argparse.Namespace) -> None:
    prompts_data = load_prompts()
    books = prompts_data.get("books", [])

    if not books:
        print("ERROR: No books found in prompts.json.")
        sys.exit(1)

    # Filter to a single book if requested.
    if args.book is not None:
        book_idx = args.book - 1
        if book_idx < 0 or book_idx >= len(books):
            print(f"ERROR: --book {args.book} is out of range (1–{len(books)}).")
            sys.exit(1)
        books = [books[book_idx]]

    progress = load_progress()
    completed_set = set(progress.get("completed", []))

    if not args.dry_run:
        client = OpenAI()  # Uses OPENAI_API_KEY env var.
    else:
        client = None

    total_generated = 0
    total_skipped = 0
    total_errors = 0

    for book in books:
        book_num = book["book_number"]
        book_folder = book["folder"]
        book_title = book["title"]
        spreads = book.get("spreads", [])

        print(f"\n{'='*60}")
        print(f"Book {book_num}: {book_title}")
        print(f"Folder: {book_folder}")
        print(f"Spreads: {len(spreads)}")
        print(f"{'='*60}")

        book_output_dir = OUTPUT_DIR / book_folder
        if not args.dry_run:
            book_output_dir.mkdir(parents=True, exist_ok=True)

        for spread in spreads:
            spread_num = spread["spread_number"]

            # Skip spreads before the --start threshold.
            if args.start is not None and spread_num < args.start:
                continue

            # Each spread has two pages: activity (left) and coloring (right).
            pages = spread.get("pages", [])
            for page in pages:
                filename = page["filename"]
                prompt_text = page["prompt"]
                page_type = page.get("type", "unknown")
                subject = spread.get("subject", "unknown")

                output_path = book_output_dir / filename
                progress_key = f"{book_folder}/{filename}"

                # Status line.
                label = f"Book {book_num} | Spread {spread_num}/{len(spreads)} | {subject} - {page_type.title()}"

                # Skip if already completed.
                if progress_key in completed_set and output_path.exists():
                    print(f"  {label} | SKIPPED (already done)")
                    total_skipped += 1
                    continue

                if args.dry_run:
                    print(f"  {label} | DRY RUN")
                    print(f"    Prompt: {STYLE_PREFIX}{prompt_text[:120]}...")
                    print(f"    Output: {output_path}")
                    continue

                # Generate the image.
                print(f"  {label} | Generating...", end="", flush=True)
                image_bytes = generate_image(client, prompt_text)

                if image_bytes is not None:
                    with open(output_path, "wb") as img_file:
                        img_file.write(image_bytes)
                    completed_set.add(progress_key)
                    progress["completed"] = sorted(completed_set)
                    save_progress(progress)
                    total_generated += 1
                    size_kb = len(image_bytes) / 1024
                    print(f" DONE ({size_kb:.0f} KB)")
                else:
                    total_errors += 1
                    print(" FAILED")

                # Rate-limit pause.
                time.sleep(REQUEST_DELAY)

    # Final summary.
    print(f"\n{'='*60}")
    print("SUMMARY")
    print(f"{'='*60}")
    print(f"  Generated : {total_generated}")
    print(f"  Skipped   : {total_skipped}")
    print(f"  Errors    : {total_errors}")
    print(f"  Total done: {len(completed_set)}")
    if total_errors > 0:
        print("\nSome images failed. Re-run the script to retry them.")
    print()


# ---------------------------------------------------------------------------
# CLI
# ---------------------------------------------------------------------------


def main() -> None:
    parser = argparse.ArgumentParser(
        description="ColorKind Press — Generate coloring book images via OpenAI API."
    )
    parser.add_argument(
        "--book",
        type=int,
        default=None,
        metavar="N",
        help="Generate only book N (1–5).",
    )
    parser.add_argument(
        "--start",
        type=int,
        default=None,
        metavar="N",
        help="Start from spread N (skips earlier spreads).",
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Preview prompts without calling the API.",
    )

    args = parser.parse_args()
    run_pipeline(args)


if __name__ == "__main__":
    main()
