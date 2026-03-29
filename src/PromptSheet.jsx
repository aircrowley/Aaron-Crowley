import { useState } from "react";

const sections = [
  {
    title: "Book Structure Overview",
    icon: "📖",
    content: null,
    structure: [
      { page: "1", desc: "Title Page (ColorKind Press branding)", type: "template" },
      { page: "2", desc: "\"This Book Belongs To\" page", type: "template" },
      { page: "3", desc: "Note to Parents / How to Use", type: "template" },
      { page: "4–43", desc: "20 Big Bold Animal Pages (each with blank backing)", type: "midjourney" },
      { page: "44–63", desc: "10 Animal Scene Pages (with backing)", type: "midjourney" },
      { page: "64–83", desc: "10 Activity Pages (mazes, matching, counting)", type: "midjourney" },
      { page: "84–93", desc: "5 Bonus Pages (connect dots, color by number)", type: "midjourney" },
      { page: "94–103", desc: "5 Draw Your Own / Creative Prompt Pages", type: "template" },
      { page: "104", desc: "\"You Did It!\" completion certificate page", type: "template" },
      { page: "105", desc: "\"More from ColorKind Press\" — CTA page", type: "template" },
      { page: "106", desc: "Back page", type: "template" },
    ],
  },
  {
    title: "Section 1: Big Bold Animals (20 pages)",
    icon: "🦁",
    subtitle: "One animal per page. Full page. Thick bold outlines. Simple shapes. Perfect for toddlers.",
    prompts: [
      { animal: "Lion", prompt: "cute cartoon lion, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1" },
      { animal: "Elephant", prompt: "cute cartoon baby elephant, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1" },
      { animal: "Giraffe", prompt: "cute cartoon giraffe, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1" },
      { animal: "Puppy/Dog", prompt: "cute cartoon puppy dog sitting, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1" },
      { animal: "Cat/Kitten", prompt: "cute cartoon kitten playing with yarn, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style --ar 17:22 --style raw --v 6.1" },
      { animal: "Bunny", prompt: "cute cartoon bunny rabbit, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style --ar 17:22 --style raw --v 6.1" },
      { animal: "Bear", prompt: "cute cartoon teddy bear waving, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style --ar 17:22 --style raw --v 6.1" },
      { animal: "Monkey", prompt: "cute cartoon monkey hanging from branch, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style --ar 17:22 --style raw --v 6.1" },
      { animal: "Penguin", prompt: "cute cartoon penguin standing, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style --ar 17:22 --style raw --v 6.1" },
      { animal: "Owl", prompt: "cute cartoon owl sitting on branch, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style --ar 17:22 --style raw --v 6.1" },
      { animal: "Turtle", prompt: "cute cartoon turtle with patterned shell, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style --ar 17:22 --style raw --v 6.1" },
      { animal: "Fox", prompt: "cute cartoon fox sitting with fluffy tail, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style --ar 17:22 --style raw --v 6.1" },
      { animal: "Panda", prompt: "cute cartoon panda bear eating bamboo, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style --ar 17:22 --style raw --v 6.1" },
      { animal: "Dinosaur", prompt: "cute cartoon baby dinosaur trex, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, friendly not scary --ar 17:22 --style raw --v 6.1" },
      { animal: "Hippo", prompt: "cute cartoon hippo smiling, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style --ar 17:22 --style raw --v 6.1" },
      { animal: "Zebra", prompt: "cute cartoon zebra with stripes, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style --ar 17:22 --style raw --v 6.1" },
      { animal: "Frog", prompt: "cute cartoon frog sitting on lily pad, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style --ar 17:22 --style raw --v 6.1" },
      { animal: "Dolphin", prompt: "cute cartoon dolphin jumping, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style --ar 17:22 --style raw --v 6.1" },
      { animal: "Butterfly", prompt: "cute cartoon butterfly with big wings, coloring book page for toddlers, bold thick black outlines, simple symmetrical shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style --ar 17:22 --style raw --v 6.1" },
      { animal: "Koala", prompt: "cute cartoon koala hugging tree branch, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style --ar 17:22 --style raw --v 6.1" },
    ],
  },
  {
    title: "Section 2: Animal Scenes (10 pages)",
    icon: "🌿",
    subtitle: "Animals in fun settings. Still bold outlines but with simple backgrounds. More engaging for older toddlers.",
    prompts: [
      { animal: "Jungle Friends", prompt: "cute cartoon lion and monkey in jungle with trees and flowers, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, kawaii style --ar 17:22 --style raw --v 6.1" },
      { animal: "Farm Scene", prompt: "cute cartoon cow and chicken on a farm with barn and fence, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, kawaii style --ar 17:22 --style raw --v 6.1" },
      { animal: "Ocean Adventure", prompt: "cute cartoon fish and starfish underwater with bubbles and seaweed, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, kawaii style --ar 17:22 --style raw --v 6.1" },
      { animal: "Safari Ride", prompt: "cute cartoon elephant and giraffe standing together on savanna with sun, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, kawaii style --ar 17:22 --style raw --v 6.1" },
      { animal: "Pond Friends", prompt: "cute cartoon frog and duck at a pond with lily pads and cattails, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, kawaii style --ar 17:22 --style raw --v 6.1" },
      { animal: "Forest Walk", prompt: "cute cartoon bear and fox in forest with trees mushrooms and flowers, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, kawaii style --ar 17:22 --style raw --v 6.1" },
      { animal: "Arctic Play", prompt: "cute cartoon penguin and polar bear on ice with snowflakes, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, kawaii style --ar 17:22 --style raw --v 6.1" },
      { animal: "Garden Party", prompt: "cute cartoon butterfly and caterpillar in garden with big flowers and sun, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, kawaii style --ar 17:22 --style raw --v 6.1" },
      { animal: "Bedtime", prompt: "cute cartoon owl and bunny under moon and stars with clouds, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, kawaii style --ar 17:22 --style raw --v 6.1" },
      { animal: "Picnic", prompt: "cute cartoon puppy and kitten having a picnic with basket fruits and blanket, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, kawaii style --ar 17:22 --style raw --v 6.1" },
    ],
  },
  {
    title: "Section 3: Activity Pages (10 pages)",
    icon: "🧩",
    subtitle: "Mazes, counting, matching, spot-the-difference. These add value and justify the premium price.",
    prompts: [
      { animal: "Maze: Help Bunny Find Carrots", prompt: "simple maze puzzle for toddlers, cute bunny on one side carrots on other side, bold thick black outlines, simple paths, coloring book style, no shading, no color, white background --ar 17:22 --style raw --v 6.1" },
      { animal: "Maze: Penguin to Igloo", prompt: "simple maze puzzle for toddlers, cute penguin on one side igloo on other side, bold thick black outlines, simple paths, coloring book style, no shading, no color, white background --ar 17:22 --style raw --v 6.1" },
      { animal: "Count the Animals", prompt: "counting activity page for toddlers with groups of cute simple animals to count, 3 cats 5 dogs 2 birds 4 fish, bold thick black outlines, no shading, no color, white background, numbers 1-5 --ar 17:22 --style raw --v 6.1" },
      { animal: "Match the Animals", prompt: "matching activity page for toddlers, column of cute animals on left connected by lines to animal homes on right, bird to nest fish to bowl dog to doghouse, bold thick outlines, no color, white background --ar 17:22 --style raw --v 6.1" },
      { animal: "Spot the Difference (Lions)", prompt: "spot the difference activity for toddlers, two cute cartoon lions side by side with 3 simple differences, bold thick outlines, no shading, no color, white background --ar 17:22 --style raw --v 6.1" },
      { animal: "Spot the Difference (Ocean)", prompt: "spot the difference activity for toddlers, two cute ocean scenes side by side with 3 simple differences, bold thick outlines, no shading, no color, white background --ar 17:22 --style raw --v 6.1" },
      { animal: "Which One Is Different?", prompt: "odd one out activity page for toddlers, rows of four cute animals where one is slightly different, bold thick outlines, simple shapes, no shading, no color, white background --ar 17:22 --style raw --v 6.1" },
      { animal: "Big and Small Sorting", prompt: "size sorting activity page for toddlers, pairs of cute animals in big and small versions to circle the big one, bold thick outlines, no shading, no color, white background --ar 17:22 --style raw --v 6.1" },
      { animal: "Trace the Animal Names", prompt: "letter tracing activity for toddlers, dotted outline letters spelling CAT DOG and BEAR with cute small animal illustrations next to each word, bold outlines, no color, white background --ar 17:22 --style raw --v 6.1" },
      { animal: "Color by Number (Fish)", prompt: "color by number page for toddlers, large cute cartoon fish divided into simple numbered sections 1-5, bold thick outlines, numbers clearly visible, no shading, white background --ar 17:22 --style raw --v 6.1" },
    ],
  },
  {
    title: "Section 4: Bonus Pages (5 pages)",
    icon: "⭐",
    subtitle: "Connect the dots, color by number, and simple pattern completion pages.",
    prompts: [
      { animal: "Connect the Dots: Star", prompt: "connect the dots activity for toddlers, numbered dots 1-10 forming a simple star shape, bold large numbers, cute star face partially visible, no shading, no color, white background --ar 17:22 --style raw --v 6.1" },
      { animal: "Connect the Dots: Cat", prompt: "connect the dots activity for toddlers, numbered dots 1-15 forming a cute cat face, bold large numbers, no shading, no color, white background --ar 17:22 --style raw --v 6.1" },
      { animal: "Connect the Dots: Dinosaur", prompt: "connect the dots activity for toddlers, numbered dots 1-12 forming a cute dinosaur, bold large numbers, no shading, no color, white background --ar 17:22 --style raw --v 6.1" },
      { animal: "Pattern Completion", prompt: "pattern completion activity for toddlers, rows showing animal patterns like cat dog cat dog blank, cute simple animals, bold thick outlines, no color, white background --ar 17:22 --style raw --v 6.1" },
      { animal: "Color by Number: Butterfly", prompt: "color by number page for toddlers, large cute butterfly with symmetrical wings divided into simple sections numbered 1-4, bold thick outlines, no shading, white background --ar 17:22 --style raw --v 6.1" },
    ],
  },
  {
    title: "Section 5: Draw Your Own (5 pages)",
    icon: "✏️",
    subtitle: "These don't need Midjourney — I'll create these as text-based template pages.",
    items: [
      "\"Draw Your Favorite Animal\" — blank page with a decorative border and prompt text",
      "\"What Makes You Happy?\" — draw inside a big heart shape",
      "\"Finish the Drawing\" — half an animal drawn, child completes it",
      "\"My Family\" — empty frame for child to draw their family",
      "\"Color the World with Kindness\" — globe outline for free coloring",
    ],
  },
];

const tips = [
  "Run all prompts with --ar 17:22 to match the 8.5×11 page ratio",
  "If you get gray fills or shading, add: --no shading, gradient, gray, halftone",
  "Upscale your favorites to max resolution before downloading",
  "Save all images as PNG at 300 DPI minimum (Midjourney default is fine)",
  "If outlines are too thin, re-run with: extra thick bold outlines, 5px line weight",
  "Check every image: no stray gray areas, no partial fills, clean white background",
];

export default function PromptSheet() {
  const [openSection, setOpenSection] = useState(0);
  const [copiedIdx, setCopiedIdx] = useState(null);

  const copyPrompt = (text, idx) => {
    navigator.clipboard.writeText("/imagine prompt: " + text);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 1500);
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "#FFFBF7",
      fontFamily: "'Nunito', 'Segoe UI', sans-serif",
      padding: "24px 16px",
    }}>
      <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Nunito:wght@400;600;700&display=swap" rel="stylesheet" />

      <div style={{ maxWidth: 680, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 28 }}>
          <h1 style={{
            fontFamily: "'Fredoka'",
            fontSize: 22,
            fontWeight: 600,
            color: "#1E293B",
            margin: "0 0 6px 0",
          }}>
            Book #1 — Complete Build Sheet
          </h1>
          <p style={{ color: "#FF6B6B", fontSize: 14, fontWeight: 600, margin: "0 0 4px 0" }}>
            Big Bold Animals Coloring & Activity Book
          </p>
          <p style={{ color: "#94A3B8", fontSize: 13, margin: 0 }}>
            50 pages · 45 Midjourney prompts · 5 template pages
          </p>
        </div>

        {/* Tips box */}
        <div style={{
          background: "#FFF7ED",
          border: "1px solid #FDBA74",
          borderRadius: 12,
          padding: "14px 16px",
          marginBottom: 20,
        }}>
          <p style={{ fontWeight: 700, fontSize: 13, color: "#9A3412", margin: "0 0 8px 0" }}>
            ⚡ Midjourney Tips Before You Start:
          </p>
          {tips.map((tip, i) => (
            <p key={i} style={{ fontSize: 12, color: "#78350F", margin: "4px 0", lineHeight: 1.5 }}>
              • {tip}
            </p>
          ))}
        </div>

        {/* Sections */}
        {sections.map((section, sIdx) => (
          <div key={sIdx} style={{
            background: "white",
            borderRadius: 14,
            marginBottom: 12,
            border: openSection === sIdx ? "2px solid #FF6B6B" : "1px solid #E2E8F0",
            overflow: "hidden",
            transition: "all 0.2s",
          }}>
            {/* Section header */}
            <div
              onClick={() => setOpenSection(openSection === sIdx ? -1 : sIdx)}
              style={{
                padding: "14px 16px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 10,
                background: openSection === sIdx ? "#FFF5F5" : "white",
              }}
            >
              <span style={{ fontSize: 20 }}>{section.icon}</span>
              <div style={{ flex: 1 }}>
                <h2 style={{ fontSize: 15, fontWeight: 700, color: "#1E293B", margin: 0 }}>
                  {section.title}
                </h2>
                {section.subtitle && (
                  <p style={{ fontSize: 12, color: "#94A3B8", margin: "2px 0 0 0" }}>
                    {section.subtitle}
                  </p>
                )}
              </div>
              <span style={{
                fontSize: 18,
                color: "#94A3B8",
                transform: openSection === sIdx ? "rotate(180deg)" : "none",
                transition: "transform 0.2s",
              }}>▾</span>
            </div>

            {/* Section content */}
            {openSection === sIdx && (
              <div style={{ padding: "0 16px 16px" }}>
                {/* Book structure table */}
                {section.structure && (
                  <div style={{ marginTop: 8 }}>
                    {section.structure.map((row, i) => (
                      <div key={i} style={{
                        display: "flex",
                        alignItems: "center",
                        padding: "8px 0",
                        borderBottom: "1px solid #F1F5F9",
                        gap: 12,
                      }}>
                        <span style={{
                          fontSize: 12,
                          fontWeight: 700,
                          color: "#94A3B8",
                          minWidth: 55,
                          fontFamily: "monospace",
                        }}>
                          p.{row.page}
                        </span>
                        <span style={{ fontSize: 13, color: "#1E293B", flex: 1 }}>{row.desc}</span>
                        <span style={{
                          fontSize: 10,
                          padding: "2px 8px",
                          borderRadius: 10,
                          background: row.type === "midjourney" ? "#DBEAFE" : "#F0FDF4",
                          color: row.type === "midjourney" ? "#1E40AF" : "#166534",
                          fontWeight: 600,
                        }}>
                          {row.type === "midjourney" ? "MJ" : "TEMPLATE"}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Prompts */}
                {section.prompts && section.prompts.map((p, pIdx) => {
                  const globalIdx = `${sIdx}-${pIdx}`;
                  return (
                    <div key={pIdx} style={{
                      marginTop: 10,
                      background: "#FAFBFC",
                      borderRadius: 10,
                      padding: 12,
                      border: "1px solid #F1F5F9",
                    }}>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
                        <span style={{
                          fontSize: 13,
                          fontWeight: 700,
                          color: "#1E293B",
                        }}>
                          {pIdx + 1}. {p.animal}
                        </span>
                        <button
                          onClick={(e) => { e.stopPropagation(); copyPrompt(p.prompt, globalIdx); }}
                          style={{
                            background: copiedIdx === globalIdx ? "#10B981" : "#FF6B6B",
                            color: "white",
                            border: "none",
                            borderRadius: 6,
                            padding: "4px 12px",
                            fontSize: 11,
                            fontWeight: 600,
                            cursor: "pointer",
                          }}
                        >
                          {copiedIdx === globalIdx ? "Copied!" : "Copy Prompt"}
                        </button>
                      </div>
                      <p style={{
                        fontSize: 11.5,
                        color: "#64748B",
                        margin: 0,
                        lineHeight: 1.6,
                        fontFamily: "monospace",
                        wordBreak: "break-word",
                      }}>
                        /imagine prompt: {p.prompt}
                      </p>
                    </div>
                  );
                })}

                {/* Items (for draw your own section) */}
                {section.items && section.items.map((item, i) => (
                  <div key={i} style={{
                    padding: "10px 0",
                    borderBottom: "1px solid #F1F5F9",
                    fontSize: 13,
                    color: "#1E293B",
                  }}>
                    {i + 1}. {item}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Next steps */}
        <div style={{
          background: "linear-gradient(135deg, #FF6B6B 0%, #FFA45B 100%)",
          borderRadius: 14,
          padding: "20px",
          marginTop: 20,
          color: "white",
        }}>
          <h3 style={{ fontSize: 16, fontWeight: 700, margin: "0 0 10px 0" }}>
            Your workflow:
          </h3>
          <div style={{ fontSize: 13, lineHeight: 1.8 }}>
            <p style={{ margin: "4px 0" }}>1️⃣ Open Midjourney → paste prompts one by one</p>
            <p style={{ margin: "4px 0" }}>2️⃣ Pick the best result from each batch → upscale it</p>
            <p style={{ margin: "4px 0" }}>3️⃣ Download all 45 images as PNGs</p>
            <p style={{ margin: "4px 0" }}>4️⃣ Come back here → I'll assemble the full print-ready PDF</p>
            <p style={{ margin: "4px 0" }}>5️⃣ I'll create the KDP cover at the same time</p>
          </div>
        </div>

        {/* KDP listing preview */}
        <div style={{
          background: "white",
          borderRadius: 14,
          padding: "20px",
          marginTop: 12,
          border: "1px solid #E2E8F0",
        }}>
          <h3 style={{ fontSize: 14, fontWeight: 700, color: "#1E293B", margin: "0 0 10px 0" }}>
            📝 KDP Listing (Draft)
          </h3>
          <div style={{ fontSize: 12, color: "#64748B", lineHeight: 1.7 }}>
            <p style={{ margin: "4px 0" }}><strong style={{ color: "#1E293B" }}>Title:</strong> Big Bold Animals Coloring and Activity Book for Toddlers Ages 3-5</p>
            <p style={{ margin: "4px 0" }}><strong style={{ color: "#1E293B" }}>Subtitle:</strong> 50 Fun Pages of Easy Coloring, Mazes, Matching, and More | Perfect for Preschool Boys and Girls</p>
            <p style={{ margin: "4px 0" }}><strong style={{ color: "#1E293B" }}>Author:</strong> ColorKind Press</p>
            <p style={{ margin: "4px 0" }}><strong style={{ color: "#1E293B" }}>Price:</strong> $9.99</p>
            <p style={{ margin: "4px 0" }}><strong style={{ color: "#1E293B" }}>Size:</strong> 8.5 × 11 inches</p>
            <p style={{ margin: "4px 0" }}><strong style={{ color: "#1E293B" }}>Interior:</strong> Black & White, 106 pages</p>
          </div>
        </div>
      </div>
    </div>
  );
}
