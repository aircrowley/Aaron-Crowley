import { useState } from "react";

export const metadata = {
  bookNumber: 1,
  title: "Big Bold Animals Coloring & Activity Book",
  subtitle: "25 Matched Animal Spreads with Coloring Pages and Activities for Toddlers",
  author: "ColorKind Press",
  price: "$9.99",
  size: "8.5 × 11 inches",
  interior: "Black & White",
  ages: "2-5",
  pageCount: 62,
  templatePages: [
    "Title Page (ColorKind Press branding)",
    "\"This Book Belongs To\" page",
    "Note to Parents / How to Use",
    "\"You Did It!\" completion certificate",
    "\"More from ColorKind Press\" CTA page",
    "Back page"
  ]
};

export const spreads = [
  {
    spreadNumber: 1,
    animal: "Lion",
    coloringPage: {
      prompt: "cute cartoon lion, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Help the Lion Find His Cubs!",
      type: "maze",
      prompt: "simple maze puzzle for toddlers, cute cartoon lion on one side and two lion cubs on other side, bold thick black outlines, simple paths, coloring book style, no shading, no color, white background --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 2,
    animal: "Elephant",
    coloringPage: {
      prompt: "cute cartoon elephant, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Count the Baby Elephants!",
      type: "counting",
      prompt: "counting activity page for toddlers, six cute cartoon baby elephants in different poses scattered across the page, large number 6 at bottom to trace, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 3,
    animal: "Giraffe",
    coloringPage: {
      prompt: "cute cartoon giraffe, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Trace the Letters: G-I-R-A-F-F-E",
      type: "tracing",
      prompt: "letter tracing activity page for toddlers, large dotted outline letters spelling GIRAFFE with directional arrows, cute small cartoon giraffe in corner, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 4,
    animal: "Puppy",
    coloringPage: {
      prompt: "cute cartoon puppy, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Find 3 Differences Between the Puppies!",
      type: "spot-the-difference",
      prompt: "spot the difference activity page for toddlers, two nearly identical cute cartoon puppies side by side with three simple differences, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 5,
    animal: "Kitten",
    coloringPage: {
      prompt: "cute cartoon kitten, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Connect the Dots to Reveal the Kitten!",
      type: "connect-dots",
      prompt: "connect the dots activity page for toddlers, numbered dots 1 through 10 forming the outline of a cute cartoon kitten, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 6,
    animal: "Bunny",
    coloringPage: {
      prompt: "cute cartoon bunny rabbit, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Color the Bunny by Numbers!",
      type: "color-by-number",
      prompt: "color by number activity page for toddlers, large cute cartoon bunny divided into simple sections each labeled with numbers 1 through 4, color key at bottom, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 7,
    animal: "Bear",
    coloringPage: {
      prompt: "cute cartoon bear, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Match the Bears to Their Honey Pots!",
      type: "matching",
      prompt: "matching activity page for toddlers, three cute cartoon bears on left side and three honey pots on right side with lines to draw between them, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 8,
    animal: "Monkey",
    coloringPage: {
      prompt: "cute cartoon monkey, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Which Monkey Is Different?",
      type: "which-is-different",
      prompt: "which is different activity page for toddlers, four cute cartoon monkeys in a row where one monkey is slightly different from the other three, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 9,
    animal: "Penguin",
    coloringPage: {
      prompt: "cute cartoon penguin, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Big Penguin and Small Penguin!",
      type: "big-vs-small",
      prompt: "big vs small activity page for toddlers, one large cute cartoon penguin and one small cute cartoon penguin side by side, text asking which is big and which is small, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 10,
    animal: "Owl",
    coloringPage: {
      prompt: "cute cartoon owl, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Complete the Owl Pattern!",
      type: "pattern-completion",
      prompt: "pattern completion activity page for toddlers, repeating pattern of cute cartoon owl and star with last item missing for child to complete, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 11,
    animal: "Turtle",
    coloringPage: {
      prompt: "cute cartoon turtle, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Match the Turtle to Its Shadow!",
      type: "shadow-matching",
      prompt: "shadow matching activity page for toddlers, cute cartoon turtle on top and three shadow silhouettes below where only one matches the turtle, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 12,
    animal: "Fox",
    coloringPage: {
      prompt: "cute cartoon fox, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Find the Hidden Foxes!",
      type: "find-the-hidden",
      prompt: "hidden object activity page for toddlers, woodland scene with five cute cartoon foxes hiding behind trees and bushes for children to find, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 13,
    animal: "Panda",
    coloringPage: {
      prompt: "cute cartoon panda bear, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Help the Panda Find the Bamboo!",
      type: "maze",
      prompt: "simple maze puzzle for toddlers, cute cartoon panda on one side and bamboo stalks on other side, bold thick black outlines, simple paths, coloring book style, no shading, no color, white background --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 14,
    animal: "Dinosaur",
    coloringPage: {
      prompt: "cute cartoon baby dinosaur, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Count the Dinosaur Eggs!",
      type: "counting",
      prompt: "counting activity page for toddlers, cute cartoon dinosaur sitting next to a nest with five eggs, large number 5 at bottom to trace, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 15,
    animal: "Hippo",
    coloringPage: {
      prompt: "cute cartoon hippopotamus, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Trace the Letters: H-I-P-P-O",
      type: "tracing",
      prompt: "letter tracing activity page for toddlers, large dotted outline letters spelling HIPPO with directional arrows, cute small cartoon hippo in corner, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 16,
    animal: "Zebra",
    coloringPage: {
      prompt: "cute cartoon zebra, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Find 3 Differences Between the Zebras!",
      type: "spot-the-difference",
      prompt: "spot the difference activity page for toddlers, two nearly identical cute cartoon zebras side by side with three simple differences in their stripes and features, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 17,
    animal: "Frog",
    coloringPage: {
      prompt: "cute cartoon frog, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Connect the Dots to Reveal the Frog!",
      type: "connect-dots",
      prompt: "connect the dots activity page for toddlers, numbered dots 1 through 12 forming the outline of a cute cartoon frog sitting on a lily pad, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 18,
    animal: "Dolphin",
    coloringPage: {
      prompt: "cute cartoon dolphin, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Color the Dolphin by Numbers!",
      type: "color-by-number",
      prompt: "color by number activity page for toddlers, large cute cartoon dolphin jumping over waves divided into simple sections each labeled with numbers 1 through 4, color key at bottom, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 19,
    animal: "Butterfly",
    coloringPage: {
      prompt: "cute cartoon butterfly, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Match the Butterflies to Their Flowers!",
      type: "matching",
      prompt: "matching activity page for toddlers, three cute cartoon butterflies on left side and three flowers on right side with lines to draw between them, each pair has matching wing patterns, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 20,
    animal: "Koala",
    coloringPage: {
      prompt: "cute cartoon koala on a tree branch, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Which Koala Is Different?",
      type: "which-is-different",
      prompt: "which is different activity page for toddlers, four cute cartoon koalas in a row where one koala is slightly different from the other three, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 21,
    animal: "Pig",
    coloringPage: {
      prompt: "cute cartoon pig, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Big Pig and Small Pig!",
      type: "big-vs-small",
      prompt: "big vs small activity page for toddlers, one large cute cartoon pig and one small cute cartoon piglet side by side, text asking which is big and which is small, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 22,
    animal: "Duck",
    coloringPage: {
      prompt: "cute cartoon duck, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Complete the Duck Pattern!",
      type: "pattern-completion",
      prompt: "pattern completion activity page for toddlers, repeating pattern of cute cartoon duck and pond with last item missing for child to complete, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 23,
    animal: "Horse",
    coloringPage: {
      prompt: "cute cartoon horse, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Match the Horse to Its Shadow!",
      type: "shadow-matching",
      prompt: "shadow matching activity page for toddlers, cute cartoon horse on top and three shadow silhouettes below where only one matches the horse, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 24,
    animal: "Shark",
    coloringPage: {
      prompt: "cute cartoon shark, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Find the Hidden Sharks!",
      type: "find-the-hidden",
      prompt: "hidden object activity page for toddlers, underwater ocean scene with five cute cartoon sharks hiding behind coral and seaweed for children to find, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 25,
    animal: "Octopus",
    coloringPage: {
      prompt: "cute cartoon octopus, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Help the Octopus Find the Seashell!",
      type: "maze",
      prompt: "simple maze puzzle for toddlers, cute cartoon octopus on one side and a seashell on other side, bold thick black outlines, simple paths, coloring book style, no shading, no color, white background --ar 17:22 --style raw --v 6.1"
    }
  }
];

const activityColors = {
  maze: "#FFE0B2",
  counting: "#C8E6C9",
  matching: "#BBDEFB",
  tracing: "#F8BBD0",
  "spot-the-difference": "#D1C4E9",
  "color-by-number": "#FFE082",
  "connect-dots": "#B2EBF2",
  "which-is-different": "#FFCCBC",
  "big-vs-small": "#C5E1A5",
  "pattern-completion": "#E1BEE7",
  "shadow-matching": "#B0BEC5",
  "find-the-hidden": "#FFF9C4"
};

export default function Book1_BigBoldAnimals() {
  const [openSpread, setOpenSpread] = useState(null);
  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText("/imagine prompt: " + text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Nunito:wght@400;600;700&display=swap" rel="stylesheet" />
      <div style={{ background: "#FFFBF7", minHeight: "100vh", fontFamily: "'Nunito', sans-serif", padding: "2rem", maxWidth: 900, margin: "0 auto" }}>
        <header style={{ textAlign: "center", marginBottom: "2rem", borderBottom: "3px solid #FF8A65", paddingBottom: "1.5rem" }}>
          <h1 style={{ fontFamily: "'Fredoka', sans-serif", fontSize: "2rem", color: "#E65100", margin: 0 }}>
            {metadata.title}
          </h1>
          <p style={{ color: "#6D4C41", fontSize: "1.1rem", margin: "0.5rem 0" }}>{metadata.subtitle}</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginTop: "1rem" }}>
            {[
              ["Author", metadata.author],
              ["Price", metadata.price],
              ["Size", metadata.size],
              ["Interior", metadata.interior],
              ["Ages", metadata.ages],
              ["Pages", metadata.pageCount]
            ].map(([label, val]) => (
              <span key={label} style={{ background: "#FFF3E0", padding: "0.3rem 0.8rem", borderRadius: 8, fontSize: "0.85rem", color: "#5D4037" }}>
                <strong>{label}:</strong> {val}
              </span>
            ))}
          </div>
        </header>

        <section style={{ background: "#FFF8E1", border: "1px solid #FFE082", borderRadius: 12, padding: "1rem 1.5rem", marginBottom: "2rem" }}>
          <h3 style={{ fontFamily: "'Fredoka', sans-serif", color: "#F57F17", marginTop: 0 }}>Tips</h3>
          <ul style={{ margin: 0, paddingLeft: "1.2rem", color: "#5D4037", lineHeight: 1.8 }}>
            <li>Each spread is a matched pair: same animal on both pages</li>
            <li>Right page = coloring page | Left page = activity page</li>
            <li>Click any prompt to copy with <code>/imagine prompt:</code> prefix</li>
            <li>Activity types rotate through 12 categories for variety</li>
          </ul>
        </section>

        <h2 style={{ fontFamily: "'Fredoka', sans-serif", color: "#E65100" }}>All 25 Spreads</h2>

        {spreads.map((spread) => {
          const isOpen = openSpread === spread.spreadNumber;
          const actColor = activityColors[spread.activityPage.type] || "#eee";
          return (
            <div key={spread.spreadNumber} style={{ marginBottom: "0.75rem", border: "1px solid #FFCC80", borderRadius: 10, overflow: "hidden" }}>
              <button
                onClick={() => setOpenSpread(isOpen ? null : spread.spreadNumber)}
                style={{
                  width: "100%", padding: "0.8rem 1.2rem", background: isOpen ? "#FFE0B2" : "#FFF3E0",
                  border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center",
                  fontFamily: "'Nunito', sans-serif", fontSize: "1rem"
                }}
              >
                <span><strong>Spread {spread.spreadNumber}:</strong> {spread.animal}</span>
                <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <span style={{ background: actColor, padding: "0.15rem 0.5rem", borderRadius: 6, fontSize: "0.75rem" }}>{spread.activityPage.type}</span>
                  <span>{isOpen ? "\u25B2" : "\u25BC"}</span>
                </span>
              </button>
              {isOpen && (
                <div style={{ padding: "1rem 1.2rem", background: "#fff" }}>
                  <div style={{ marginBottom: "1rem" }}>
                    <h4 style={{ margin: "0 0 0.3rem", color: "#E65100" }}>Coloring Page (Right)</h4>
                    <div style={{ background: "#FFF8E1", padding: "0.75rem", borderRadius: 8, fontSize: "0.85rem", lineHeight: 1.6, position: "relative" }}>
                      {spread.coloringPage.prompt}
                      <button
                        onClick={() => handleCopy(spread.coloringPage.prompt, `c-${spread.spreadNumber}`)}
                        style={{
                          position: "absolute", top: 6, right: 6, background: copiedId === `c-${spread.spreadNumber}` ? "#66BB6A" : "#FF8A65",
                          color: "#fff", border: "none", borderRadius: 6, padding: "0.25rem 0.6rem", cursor: "pointer", fontSize: "0.75rem"
                        }}
                      >
                        {copiedId === `c-${spread.spreadNumber}` ? "Copied!" : "Copy"}
                      </button>
                    </div>
                  </div>
                  <div>
                    <h4 style={{ margin: "0 0 0.3rem", color: "#6A1B9A" }}>
                      Activity Page (Left) - {spread.activityPage.title}
                    </h4>
                    <div style={{ background: "#F3E5F5", padding: "0.75rem", borderRadius: 8, fontSize: "0.85rem", lineHeight: 1.6, position: "relative" }}>
                      {spread.activityPage.prompt}
                      <button
                        onClick={() => handleCopy(spread.activityPage.prompt, `a-${spread.spreadNumber}`)}
                        style={{
                          position: "absolute", top: 6, right: 6, background: copiedId === `a-${spread.spreadNumber}` ? "#66BB6A" : "#AB47BC",
                          color: "#fff", border: "none", borderRadius: 6, padding: "0.25rem 0.6rem", cursor: "pointer", fontSize: "0.75rem"
                        }}
                      >
                        {copiedId === `a-${spread.spreadNumber}` ? "Copied!" : "Copy"}
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}

        <section style={{ marginTop: "2rem", background: "#FFF3E0", borderRadius: 12, padding: "1.5rem" }}>
          <h3 style={{ fontFamily: "'Fredoka', sans-serif", color: "#E65100", marginTop: 0 }}>Template Pages</h3>
          <ol style={{ color: "#5D4037", lineHeight: 2 }}>
            {metadata.templatePages.map((page, i) => <li key={i}>{page}</li>)}
          </ol>
        </section>

        <section style={{ marginTop: "2rem", background: "#E8F5E9", borderRadius: 12, padding: "1.5rem" }}>
          <h3 style={{ fontFamily: "'Fredoka', sans-serif", color: "#2E7D32", marginTop: 0 }}>KDP Listing Draft</h3>
          <div style={{ color: "#33691E", lineHeight: 1.8 }}>
            <p><strong>Title:</strong> {metadata.title}</p>
            <p><strong>Subtitle:</strong> {metadata.subtitle}</p>
            <p><strong>Description:</strong> Introduce your little one to 25 adorable animals with this fun-filled coloring and activity book! Each spread features a big, bold coloring page paired with an engaging activity like mazes, counting, tracing, matching, and more. Designed for ages 2-5 with thick outlines and simple shapes perfect for little hands. Keep toddlers entertained and learning with every page!</p>
            <p><strong>Keywords:</strong> toddler coloring book, animal coloring book, activity book ages 2-5, coloring and activity, preschool workbook, kindergarten activities, kawaii animals coloring</p>
          </div>
        </section>

        <section style={{ marginTop: "2rem", background: "#E3F2FD", borderRadius: 12, padding: "1.5rem", marginBottom: "2rem" }}>
          <h3 style={{ fontFamily: "'Fredoka', sans-serif", color: "#1565C0", marginTop: 0 }}>Workflow</h3>
          <ol style={{ color: "#1A237E", lineHeight: 2 }}>
            <li>Generate all 50 images in Midjourney using the prompts above</li>
            <li>Upscale each image to U1 at minimum</li>
            <li>Process images: remove any artifacts, ensure pure white backgrounds</li>
            <li>Layout in Canva/InDesign at 8.5 x 11 inches, 300 DPI</li>
            <li>Add template pages (title, belongs-to, parents note, certificate, CTA, back)</li>
            <li>Export as print-ready PDF (PDF/X-1a for KDP)</li>
            <li>Create cover using KDP cover calculator dimensions</li>
            <li>Upload to KDP and set pricing</li>
          </ol>
        </section>
      </div>
    </>
  );
}
