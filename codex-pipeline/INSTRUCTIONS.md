# ColorKind Press — Image Generation Pipeline

## What This Does
Generates 250 coloring book page images (125 coloring + 125 activity) for 5 children's books using OpenAI's GPT Image API.

## Books
1. Big Bold Animals (25 spreads = 50 images)
2. Ocean Friends (25 spreads = 50 images)
3. Farm Friends (25 spreads = 50 images)
4. Dinosaur Adventures (25 spreads = 50 images)
5. Bugs, Birds & Butterflies (25 spreads = 50 images)

## Setup
```bash
pip install -r requirements.txt
export OPENAI_API_KEY=your-key
```

## Run
```bash
python generate_images.py
```

## Options
- `--book N` — Only generate book N (1-5)
- `--start N` — Start from spread N
- `--dry-run` — Preview prompts without generating

## Output
Images saved to: `output/{book_folder}/{filename}.png`
Progress tracked in: `progress.json` (auto-resume on restart)

## For Codex
Just run: `python generate_images.py`
It will generate all 250 images and save them organized by book.
