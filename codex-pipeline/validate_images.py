#!/usr/bin/env python3
"""
ColorKind Press — Image Validator
Validates that all 250 images have been generated and are not corrupt.

Usage:
    python validate_images.py
"""

import json
import sys
from pathlib import Path

SCRIPT_DIR = Path(__file__).resolve().parent
PROMPTS_FILE = SCRIPT_DIR / "prompts.json"
OUTPUT_DIR = SCRIPT_DIR / "output"

MIN_FILE_SIZE_KB = 10  # Files smaller than this are flagged as potentially corrupt.


def load_prompts() -> dict:
    if not PROMPTS_FILE.exists():
        print(f"ERROR: {PROMPTS_FILE} not found.")
        sys.exit(1)
    with open(PROMPTS_FILE, "r") as f:
        return json.load(f)


def validate() -> None:
    prompts_data = load_prompts()
    books = prompts_data.get("books", [])

    total_expected = 0
    total_found = 0
    total_missing = 0
    total_suspect = 0

    missing_files: list[str] = []
    suspect_files: list[tuple[str, float]] = []

    for book in books:
        book_folder = book["folder"]
        book_title = book["title"]
        book_num = book["book_number"]
        spreads = book.get("spreads", [])

        book_expected = 0
        book_found = 0

        for spread in spreads:
            for page in spread.get("pages", []):
                filename = page["filename"]
                output_path = OUTPUT_DIR / book_folder / filename
                book_expected += 1

                if output_path.exists():
                    book_found += 1
                    size_kb = output_path.stat().st_size / 1024
                    if size_kb < MIN_FILE_SIZE_KB:
                        suspect_files.append((str(output_path.relative_to(SCRIPT_DIR)), size_kb))
                        total_suspect += 1
                else:
                    missing_files.append(f"{book_folder}/{filename}")
                    total_missing += 1

        total_expected += book_expected
        total_found += book_found

        status = "OK" if book_found == book_expected else "INCOMPLETE"
        print(f"  Book {book_num}: {book_title:30s} {book_found:3d}/{book_expected:3d}  [{status}]")

    # Summary
    print(f"\n{'='*60}")
    print("VALIDATION SUMMARY")
    print(f"{'='*60}")
    print(f"  Expected : {total_expected}")
    print(f"  Found    : {total_found}")
    print(f"  Missing  : {total_missing}")
    print(f"  Suspect  : {total_suspect} (under {MIN_FILE_SIZE_KB} KB)")

    if missing_files:
        print(f"\n--- Missing Files ({len(missing_files)}) ---")
        for mf in missing_files:
            print(f"  {mf}")

    if suspect_files:
        print(f"\n--- Suspect Files ({len(suspect_files)}) ---")
        for sf, size in suspect_files:
            print(f"  {sf}  ({size:.1f} KB)")

    if total_missing == 0 and total_suspect == 0:
        print("\nAll images present and valid!")
        sys.exit(0)
    else:
        print(f"\nAction needed: {total_missing} missing, {total_suspect} suspect.")
        sys.exit(1 if total_missing > 0 else 0)


if __name__ == "__main__":
    print(f"{'='*60}")
    print("ColorKind Press — Image Validation")
    print(f"{'='*60}\n")
    validate()
