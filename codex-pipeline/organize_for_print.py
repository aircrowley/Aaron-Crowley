#!/usr/bin/env python3
"""
ColorKind Press — Print-Ready Organizer
Copies and renames all generated images into print-ready page order.

Page numbering:
    Pages 1-3 are reserved for template pages (title, copyright, etc.)
    Content starts at page 4.
    Each spread occupies two pages:
        - Left page (even) = activity page
        - Right page (odd) = coloring page

Usage:
    python organize_for_print.py
    python organize_for_print.py --book 1    # Only organize Book 1
"""

import argparse
import json
import shutil
import sys
from pathlib import Path

SCRIPT_DIR = Path(__file__).resolve().parent
PROMPTS_FILE = SCRIPT_DIR / "prompts.json"
OUTPUT_DIR = SCRIPT_DIR / "output"
PRINT_DIR = SCRIPT_DIR / "print_ready"

# Pages 1-3 are template pages (title, copyright, intro).
# Content starts at page 4.
FIRST_CONTENT_PAGE = 4


def load_prompts() -> dict:
    if not PROMPTS_FILE.exists():
        print(f"ERROR: {PROMPTS_FILE} not found.")
        sys.exit(1)
    with open(PROMPTS_FILE, "r") as f:
        return json.load(f)


def organize(args: argparse.Namespace) -> None:
    prompts_data = load_prompts()
    books = prompts_data.get("books", [])

    if args.book is not None:
        book_idx = args.book - 1
        if book_idx < 0 or book_idx >= len(books):
            print(f"ERROR: --book {args.book} is out of range (1–{len(books)}).")
            sys.exit(1)
        books = [books[book_idx]]

    total_copied = 0
    total_missing = 0

    for book in books:
        book_num = book["book_number"]
        book_folder = book["folder"]
        book_title = book["title"]
        spreads = book.get("spreads", [])

        print(f"\n{'='*60}")
        print(f"Book {book_num}: {book_title}")
        print(f"{'='*60}")

        dest_dir = PRINT_DIR / f"book{book_num}"
        dest_dir.mkdir(parents=True, exist_ok=True)

        page_num = FIRST_CONTENT_PAGE
        manifest_lines: list[str] = []

        for spread in spreads:
            spread_num = spread["spread_number"]
            subject = spread.get("subject", "unknown")
            pages = spread.get("pages", [])

            # Identify activity and coloring pages from the spread.
            activity_page = None
            coloring_page = None
            for page in pages:
                ptype = page.get("type", "").lower()
                if "activity" in ptype:
                    activity_page = page
                elif "coloring" in ptype:
                    coloring_page = page

            # Left page (even) = activity.
            if activity_page:
                src = OUTPUT_DIR / book_folder / activity_page["filename"]
                slug = subject.lower().replace(" ", "_").replace("'", "")
                dest_name = f"page_{page_num:03d}_{slug}_activity.png"
                dest_path = dest_dir / dest_name

                if src.exists():
                    shutil.copy2(src, dest_path)
                    manifest_lines.append(f"  p{page_num:03d}  (L)  {dest_name}")
                    total_copied += 1
                else:
                    manifest_lines.append(f"  p{page_num:03d}  (L)  MISSING — {activity_page['filename']}")
                    total_missing += 1
            page_num += 1

            # Right page (odd) = coloring.
            if coloring_page:
                src = OUTPUT_DIR / book_folder / coloring_page["filename"]
                slug = subject.lower().replace(" ", "_").replace("'", "")
                dest_name = f"page_{page_num:03d}_{slug}_coloring.png"
                dest_path = dest_dir / dest_name

                if src.exists():
                    shutil.copy2(src, dest_path)
                    manifest_lines.append(f"  p{page_num:03d}  (R)  {dest_name}")
                    total_copied += 1
                else:
                    manifest_lines.append(f"  p{page_num:03d}  (R)  MISSING — {coloring_page['filename']}")
                    total_missing += 1
            page_num += 1

        # Print manifest for this book.
        print(f"\nPage manifest ({len(manifest_lines)} pages):")
        for line in manifest_lines:
            print(line)

        # Write manifest to file.
        manifest_path = dest_dir / "manifest.txt"
        with open(manifest_path, "w") as f:
            f.write(f"Book {book_num}: {book_title}\n")
            f.write(f"{'='*50}\n")
            f.write(f"Pages 1-3: Template pages (title, copyright, intro)\n\n")
            for line in manifest_lines:
                f.write(line + "\n")
            f.write(f"\nTotal content pages: {len(manifest_lines)}\n")
        print(f"\nManifest written to: {manifest_path}")

    # Final summary.
    print(f"\n{'='*60}")
    print("ORGANIZE SUMMARY")
    print(f"{'='*60}")
    print(f"  Copied  : {total_copied}")
    print(f"  Missing : {total_missing}")
    print(f"  Output  : {PRINT_DIR}")
    if total_missing > 0:
        print("\nSome source images are missing. Run generate_images.py first.")
    else:
        print("\nAll images organized and ready for print!")
    print()


def main() -> None:
    parser = argparse.ArgumentParser(
        description="ColorKind Press — Organize images into print-ready page order."
    )
    parser.add_argument(
        "--book",
        type=int,
        default=None,
        metavar="N",
        help="Organize only book N (1–5).",
    )
    args = parser.parse_args()
    organize(args)


if __name__ == "__main__":
    main()
