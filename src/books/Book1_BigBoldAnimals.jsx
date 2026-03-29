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
      prompt: "cute cartoon baby elephant, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Count the Baby Elephants!",
      type: "counting",
      prompt: "counting activity page for toddlers, seven cute cartoon baby elephants in different playful poses with large numbers 1 through 7 next to empty boxes, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
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
      prompt: "letter tracing activity page for toddlers, large dotted outline letters spelling GIRAFFE with a cute cartoon giraffe peeking from the side, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 4,
    animal: "Puppy",
    coloringPage: {
      prompt: "cute cartoon puppy dog, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
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
      prompt: "connect the dots activity page for toddlers, numbered dots 1 through 15 forming the outline of a cute cartoon kitten with partially drawn face, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 6,
    animal: "Bunny",
    coloringPage: {
      prompt: "cute cartoon bunny rabbit, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Match the Bunnies to Their Carrots!",
      type: "matching",
      prompt: "matching activity page for toddlers, three cute cartoon bunnies on the left and three carrots on the right with tangled lines connecting them, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 7,
    animal: "Bear",
    coloringPage: {
      prompt: "cute cartoon bear, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Color the Bear by Numbers!",
      type: "color-by-number",
      prompt: "color by number activity page for toddlers, large cute cartoon bear divided into simple sections with numbers 1 through 5 and a color key at the bottom, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 8,
    animal: "Monkey",
    coloringPage: {
      prompt: "cute cartoon monkey hanging from a branch, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Which Monkey is Different?",
      type: "which-is-different",
      prompt: "which is different activity page for toddlers, four cute cartoon monkeys in a row where one monkey has a small difference from the other three, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
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
      prompt: "big vs small activity page for toddlers, pairs of cute cartoon penguins in different sizes asking children to circle the big one and cross the small one, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 10,
    animal: "Owl",
    coloringPage: {
      prompt: "cute cartoon owl sitting on a branch, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Complete the Owl Pattern!",
      type: "pattern-completion",
      prompt: "pattern completion activity page for toddlers, repeating pattern of cute cartoon owl then star then owl then star with missing items for children to fill in, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
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
      prompt: "shadow matching activity page for toddlers, three cute cartoon turtles on top and three turtle silhouettes on bottom in different order for matching, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
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
      prompt: "hidden objects activity page for toddlers, woodland scene with five cute cartoon foxes partially hidden behind trees bushes and flowers for children to find, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 13,
    animal: "Panda",
    coloringPage: {
      prompt: "cute cartoon panda bear eating bamboo, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Help the Panda Find the Bamboo!",
      type: "maze",
      prompt: "simple maze puzzle for toddlers, cute cartoon panda on one side and a pile of bamboo on other side with simple wide paths, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
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
      prompt: "counting activity page for toddlers, cute cartoon dinosaur sitting next to a nest with six large eggs numbered for counting, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 15,
    animal: "Hippo",
    coloringPage: {
      prompt: "cute cartoon hippopotamus in water, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Trace the Letters: H-I-P-P-O",
      type: "tracing",
      prompt: "letter tracing activity page for toddlers, large dotted outline letters spelling HIPPO with a cute cartoon hippo splashing in water at the bottom, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
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
      prompt: "spot the difference activity page for toddlers, two nearly identical cute cartoon zebras side by side with three simple differences in their stripe patterns, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 17,
    animal: "Frog",
    coloringPage: {
      prompt: "cute cartoon frog sitting on a lily pad, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Connect the Dots to Reveal the Frog!",
      type: "connect-dots",
      prompt: "connect the dots activity page for toddlers, numbered dots 1 through 12 forming the outline of a cute cartoon frog on a lily pad, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 18,
    animal: "Dolphin",
    coloringPage: {
      prompt: "cute cartoon dolphin jumping out of water, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Match the Dolphins to Their Waves!",
      type: "matching",
      prompt: "matching activity page for toddlers, four cute cartoon dolphins on the left and four different wave shapes on the right with tangled lines connecting them, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 19,
    animal: "Butterfly",
    coloringPage: {
      prompt: "cute cartoon butterfly with big decorative wings, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Color the Butterfly by Numbers!",
      type: "color-by-number",
      prompt: "color by number activity page for toddlers, large cute cartoon butterfly with wings divided into simple sections with numbers 1 through 6 and a color key at the bottom, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 20,
    animal: "Koala",
    coloringPage: {
      prompt: "cute cartoon koala hugging a tree branch, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Which Koala is Different?",
      type: "which-is-different",
      prompt: "which is different activity page for toddlers, four cute cartoon koalas in a row where one koala holds a different item from the other three, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
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
      prompt: "big vs small activity page for toddlers, pairs of cute cartoon pigs in different sizes asking children to circle the bigger pig in each pair, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 22,
    animal: "Duck",
    coloringPage: {
      prompt: "cute cartoon duck swimming in a pond, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Complete the Duck Pattern!",
      type: "pattern-completion",
      prompt: "pattern completion activity page for toddlers, repeating pattern of cute cartoon duck then fish then duck then fish with missing items for children to draw, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 23,
    animal: "Horse",
    coloringPage: {
      prompt: "cute cartoon horse in a meadow, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Match the Horse to Its Shadow!",
      type: "shadow-matching",
      prompt: "shadow matching activity page for toddlers, four cute cartoon horses in different poses on top and four horse silhouettes on bottom in shuffled order for matching, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 24,
    animal: "Shark",
    coloringPage: {
      prompt: "cute cartoon friendly shark, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Find the Hidden Sharks!",
      type: "find-the-hidden",
      prompt: "hidden objects activity page for toddlers, underwater ocean scene with five cute cartoon sharks partially hidden behind coral rocks and seaweed for children to find, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 25,
    animal: "Octopus",
    coloringPage: {
      prompt: "cute cartoon octopus with curly tentacles, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Help the Octopus Find Its Treasure!",
      type: "maze",
      prompt: "simple maze puzzle for toddlers, cute cartoon octopus on one side and a treasure chest on other side with simple curvy paths through underwater scene, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  }
];

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
      <div style={{ background: "#FFFBF7", minHeight: "100vh", fontFamily: "'Nunito', sans-serif", padding: "2rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "2rem", padding: "2rem", background: "linear-gradient(135deg, #FFE0B2, #FFF3E0)", borderRadius: 16 }}>
            <h1 style={{ fontFamily: "'Fredoka', sans-serif", fontSize: "2rem", color: "#E65100", margin: 0 }}>
              {metadata.title}
            </h1>
            <p style={{ color: "#BF360C", margin: "0.5rem 0 0", fontSize: "1.1rem" }}>{metadata.subtitle}</p>
            <div style={{ display: "flex", justifyContent: "center", gap: "2rem", marginTop: "1rem", flexWrap: "wrap" }}>
              {[
                ["Ages", metadata.ages],
                ["Price", metadata.price],
                ["Size", metadata.size],
                ["Pages", metadata.pageCount],
                ["Interior", metadata.interior],
                ["Author", metadata.author]
              ].map(([label, value]) => (
                <span key={label} style={{ fontSize: "0.9rem", color: "#5D4037" }}>
                  <strong>{label}:</strong> {value}
                </span>
              ))}
            </div>
          </div>

          {/* Tips */}
          <div style={{ background: "#FFF8E1", border: "2px dashed #FFB300", borderRadius: 12, padding: "1.5rem", marginBottom: "2rem" }}>
            <h2 style={{ fontFamily: "'Fredoka', sans-serif", fontSize: "1.3rem", color: "#F57F17", marginTop: 0 }}>Production Tips</h2>
            <ul style={{ margin: 0, paddingLeft: "1.5rem", color: "#5D4037", lineHeight: 1.8 }}>
              <li>Copy each prompt with the button -- it auto-prepends <code>/imagine prompt:</code></li>
              <li>Right page = coloring page, Left page = activity page (same animal on both)</li>
              <li>All prompts use <strong>--ar 17:22</strong> for 8.5 x 11 portrait pages</li>
              <li>Generate at Midjourney, upscale to 300 DPI, place in your KDP template</li>
              <li>Activity types rotate through 12 varieties for maximum engagement</li>
            </ul>
          </div>

          {/* Spreads Accordion */}
          <h2 style={{ fontFamily: "'Fredoka', sans-serif", fontSize: "1.5rem", color: "#E65100" }}>All 25 Spreads</h2>
          {spreads.map((spread) => {
            const isOpen = openSpread === spread.spreadNumber;
            return (
              <div key={spread.spreadNumber} style={{ marginBottom: "0.75rem", border: "2px solid #FFE0B2", borderRadius: 12, overflow: "hidden" }}>
                <button
                  onClick={() => setOpenSpread(isOpen ? null : spread.spreadNumber)}
                  style={{
                    width: "100%", padding: "1rem 1.5rem", background: isOpen ? "#FFE0B2" : "#FFF3E0",
                    border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center",
                    fontFamily: "'Nunito', sans-serif", fontSize: "1rem"
                  }}
                >
                  <span style={{ fontWeight: 700, color: "#E65100" }}>
                    Spread {spread.spreadNumber}: {spread.animal}
                  </span>
                  <span style={{ fontSize: "0.85rem", color: "#BF360C", background: "#FFF8E1", padding: "2px 10px", borderRadius: 8 }}>
                    {spread.activityPage.type}
                  </span>
                </button>
                {isOpen && (
                  <div style={{ padding: "1.5rem", background: "#FFFBF7" }}>
                    {/* Coloring Page */}
                    <div style={{ marginBottom: "1.25rem" }}>
                      <h4 style={{ fontFamily: "'Fredoka', sans-serif", color: "#2E7D32", margin: "0 0 0.5rem" }}>
                        Right Page -- Coloring Page ({spread.animal})
                      </h4>
                      <div style={{ background: "#F1F8E9", borderRadius: 8, padding: "1rem", position: "relative" }}>
                        <code style={{ fontSize: "0.85rem", lineHeight: 1.6, color: "#33691E", wordBreak: "break-word" }}>
                          {spread.coloringPage.prompt}
                        </code>
                        <button
                          onClick={() => handleCopy(spread.coloringPage.prompt, `c-${spread.spreadNumber}`)}
                          style={{
                            marginTop: "0.75rem", padding: "6px 16px", background: copiedId === `c-${spread.spreadNumber}` ? "#4CAF50" : "#66BB6A",
                            color: "#fff", border: "none", borderRadius: 6, cursor: "pointer", fontSize: "0.85rem", fontWeight: 600
                          }}
                        >
                          {copiedId === `c-${spread.spreadNumber}` ? "Copied!" : "Copy Coloring Prompt"}
                        </button>
                      </div>
                    </div>
                    {/* Activity Page */}
                    <div>
                      <h4 style={{ fontFamily: "'Fredoka', sans-serif", color: "#1565C0", margin: "0 0 0.5rem" }}>
                        Left Page -- {spread.activityPage.title}
                      </h4>
                      <div style={{ background: "#E3F2FD", borderRadius: 8, padding: "1rem", position: "relative" }}>
                        <code style={{ fontSize: "0.85rem", lineHeight: 1.6, color: "#0D47A1", wordBreak: "break-word" }}>
                          {spread.activityPage.prompt}
                        </code>
                        <button
                          onClick={() => handleCopy(spread.activityPage.prompt, `a-${spread.spreadNumber}`)}
                          style={{
                            marginTop: "0.75rem", padding: "6px 16px", background: copiedId === `a-${spread.spreadNumber}` ? "#1976D2" : "#42A5F5",
                            color: "#fff", border: "none", borderRadius: 6, cursor: "pointer", fontSize: "0.85rem", fontWeight: 600
                          }}
                        >
                          {copiedId === `a-${spread.spreadNumber}` ? "Copied!" : "Copy Activity Prompt"}
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {/* Template Pages */}
          <div style={{ marginTop: "2rem", background: "#F3E5F5", borderRadius: 12, padding: "1.5rem" }}>
            <h2 style={{ fontFamily: "'Fredoka', sans-serif", fontSize: "1.3rem", color: "#6A1B9A", marginTop: 0 }}>Template Pages ({metadata.templatePages.length})</h2>
            <ol style={{ margin: 0, paddingLeft: "1.5rem", color: "#4A148C", lineHeight: 2 }}>
              {metadata.templatePages.map((page, i) => (
                <li key={i}>{page}</li>
              ))}
            </ol>
          </div>

          {/* KDP Listing Draft */}
          <div style={{ marginTop: "2rem", background: "#E8F5E9", borderRadius: 12, padding: "1.5rem" }}>
            <h2 style={{ fontFamily: "'Fredoka', sans-serif", fontSize: "1.3rem", color: "#2E7D32", marginTop: 0 }}>KDP Listing Draft</h2>
            <div style={{ color: "#1B5E20", lineHeight: 1.8 }}>
              <p><strong>Title:</strong> {metadata.title}</p>
              <p><strong>Subtitle:</strong> {metadata.subtitle}</p>
              <p><strong>Description:</strong> Introduce your little one to 25 adorable animals with this jumbo coloring and activity book! Each spread features a big, bold coloring page paired with a fun activity -- mazes, counting, matching, tracing, spot-the-difference, and more. Designed with thick outlines and simple shapes perfect for tiny hands. Great for ages 2-5.</p>
              <p><strong>Keywords:</strong> toddler coloring book, animal coloring book, activity book ages 2-5, preschool coloring, kids animal activities, bold outlines coloring, kindergarten workbook</p>
            </div>
          </div>

          {/* Workflow */}
          <div style={{ marginTop: "2rem", background: "#E0F7FA", borderRadius: 12, padding: "1.5rem", marginBottom: "2rem" }}>
            <h2 style={{ fontFamily: "'Fredoka', sans-serif", fontSize: "1.3rem", color: "#00695C", marginTop: 0 }}>Production Workflow</h2>
            <ol style={{ margin: 0, paddingLeft: "1.5rem", color: "#004D40", lineHeight: 2 }}>
              <li>Copy each prompt and generate in Midjourney (50 total images)</li>
              <li>Upscale all images to 300 DPI using Topaz or similar</li>
              <li>Place images in your 8.5 x 11 KDP interior template</li>
              <li>Add template pages (title, belongs-to, certificate, etc.)</li>
              <li>Export as print-ready PDF (CMYK, 300 DPI)</li>
              <li>Design the cover (front, spine, back) per KDP specs</li>
              <li>Upload to KDP, set pricing, and publish</li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}
