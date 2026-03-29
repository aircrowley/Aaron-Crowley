import { useState } from "react";

export const metadata = {
  bookNumber: 4,
  title: "Dinosaur Adventures Coloring & Activity Book",
  subtitle: "25 Matched Dinosaur Spreads with Coloring Pages and Activities for Toddlers",
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
    animal: "T-Rex",
    coloringPage: {
      prompt: "cute cartoon T-Rex dinosaur with tiny arms, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Help the T-Rex Find His Dinner!",
      type: "maze",
      prompt: "simple maze puzzle for toddlers, cute cartoon T-Rex on one side and a pile of leaves and fruit on other side with simple wide paths through a prehistoric landscape, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 2,
    animal: "Triceratops",
    coloringPage: {
      prompt: "cute cartoon triceratops with three horns and frill, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Count the Triceratops Horns!",
      type: "counting",
      prompt: "counting activity page for toddlers, several cute cartoon triceratops of different sizes with varying features for children to count, numbers and empty boxes, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 3,
    animal: "Brontosaurus",
    coloringPage: {
      prompt: "cute cartoon brontosaurus with very long neck eating from a tall tree, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Match the Brontosaurus to Its Tree!",
      type: "matching",
      prompt: "matching activity page for toddlers, three cute cartoon brontosauruses of different heights on the left and three trees of matching heights on the right with tangled lines connecting them, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 4,
    animal: "Stegosaurus",
    coloringPage: {
      prompt: "cute cartoon stegosaurus with big back plates, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Trace the Letters: D-I-N-O",
      type: "tracing",
      prompt: "letter tracing activity page for toddlers, large dotted outline letters spelling DINO with a cute cartoon stegosaurus standing proudly at the bottom, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 5,
    animal: "Pterodactyl",
    coloringPage: {
      prompt: "cute cartoon pterodactyl flying in the sky, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Find 3 Differences Between the Pterodactyls!",
      type: "spot-the-difference",
      prompt: "spot the difference activity page for toddlers, two nearly identical cute cartoon pterodactyls flying side by side with three simple differences in their wings, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 6,
    animal: "Velociraptor",
    coloringPage: {
      prompt: "cute cartoon velociraptor standing and looking curious, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Connect the Dots to Reveal the Velociraptor!",
      type: "connect-dots",
      prompt: "connect the dots activity page for toddlers, numbered dots 1 through 15 forming the outline of a cute cartoon velociraptor with head partially drawn, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 7,
    animal: "Ankylosaurus",
    coloringPage: {
      prompt: "cute cartoon ankylosaurus with armored body and club tail, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Color the Ankylosaurus by Numbers!",
      type: "color-by-number",
      prompt: "color by number activity page for toddlers, large cute cartoon ankylosaurus with armored plates divided into simple sections with numbers 1 through 5 and a color key at the bottom, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 8,
    animal: "Diplodocus",
    coloringPage: {
      prompt: "cute cartoon diplodocus with extremely long neck and tail, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Which Diplodocus is Different?",
      type: "which-is-different",
      prompt: "which is different activity page for toddlers, four cute cartoon diplodocuses in a row where one has a different length neck from the other three, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 9,
    animal: "Spinosaurus",
    coloringPage: {
      prompt: "cute cartoon spinosaurus with big sail on its back, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Big Spinosaurus and Small Spinosaurus!",
      type: "big-vs-small",
      prompt: "big vs small activity page for toddlers, pairs of cute cartoon spinosauruses in different sizes asking children to circle the bigger one in each pair, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 10,
    animal: "Parasaurolophus",
    coloringPage: {
      prompt: "cute cartoon parasaurolophus with long curved head crest, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Complete the Dinosaur Pattern!",
      type: "pattern-completion",
      prompt: "pattern completion activity page for toddlers, repeating pattern of cute cartoon parasaurolophus then palm tree then parasaurolophus then palm tree with missing items for children to fill in, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 11,
    animal: "Baby Dino in Egg",
    coloringPage: {
      prompt: "cute cartoon baby dinosaur hatching from a cracked egg, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Match the Baby Dino to Its Egg!",
      type: "shadow-matching",
      prompt: "shadow matching activity page for toddlers, three cute cartoon baby dinosaurs on top and three egg-shaped silhouettes on bottom in different order for matching, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 12,
    animal: "Dino Family",
    coloringPage: {
      prompt: "cute cartoon dinosaur family with mama papa and baby dinosaur together, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Find the Hidden Dinosaurs!",
      type: "find-the-hidden",
      prompt: "hidden objects activity page for toddlers, prehistoric jungle scene with five cute cartoon dinosaurs partially hidden behind palm trees rocks and ferns for children to find, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 13,
    animal: "Dino with Volcano",
    coloringPage: {
      prompt: "cute cartoon dinosaur standing in front of a friendly volcano, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Help the Dino Escape the Volcano!",
      type: "maze",
      prompt: "simple maze puzzle for toddlers, cute cartoon dinosaur near a volcano on one side and a safe meadow on other side with simple wide paths, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 14,
    animal: "Dino in Jungle",
    coloringPage: {
      prompt: "cute cartoon dinosaur exploring a lush jungle with big leaves, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Count the Jungle Dinosaurs!",
      type: "counting",
      prompt: "counting activity page for toddlers, cute cartoon dinosaurs peeking out from jungle leaves and bushes for children to count, numbers 1 through 5 with empty boxes, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 15,
    animal: "Dino Playing",
    coloringPage: {
      prompt: "cute cartoon dinosaur playing with a ball happily, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Match the Dinos to Their Toys!",
      type: "matching",
      prompt: "matching activity page for toddlers, three cute cartoon dinosaurs on the left and three different toys ball kite and teddy bear on the right with tangled lines connecting them, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 16,
    animal: "Dino Eating Leaves",
    coloringPage: {
      prompt: "cute cartoon dinosaur happily munching on big green leaves, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Trace the Letters: R-O-A-R",
      type: "tracing",
      prompt: "letter tracing activity page for toddlers, large dotted outline letters spelling ROAR with a cute cartoon dinosaur eating leaves at the bottom, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 17,
    animal: "Dino Swimming",
    coloringPage: {
      prompt: "cute cartoon dinosaur swimming happily in a lake, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Find 3 Differences Between the Swimming Dinos!",
      type: "spot-the-difference",
      prompt: "spot the difference activity page for toddlers, two nearly identical cute cartoon dinosaurs swimming in a lake side by side with three simple differences, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 18,
    animal: "Dino Flying",
    coloringPage: {
      prompt: "cute cartoon baby pterodactyl learning to fly with tiny wings spread, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Connect the Dots to Reveal the Flying Dino!",
      type: "connect-dots",
      prompt: "connect the dots activity page for toddlers, numbered dots 1 through 12 forming the outline of a cute cartoon flying dinosaur with clouds partially drawn, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 19,
    animal: "Two Dino Friends",
    coloringPage: {
      prompt: "two cute cartoon dinosaur friends standing together happily, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Color the Dino Friends by Numbers!",
      type: "color-by-number",
      prompt: "color by number activity page for toddlers, two cute cartoon dinosaur friends divided into simple sections with numbers 1 through 6 and a color key at the bottom, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 20,
    animal: "Dino with Butterfly",
    coloringPage: {
      prompt: "cute cartoon dinosaur looking at a butterfly on its nose, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Which Dino and Butterfly Pair is Different?",
      type: "which-is-different",
      prompt: "which is different activity page for toddlers, four cute cartoon dinosaurs each with a butterfly where one pair has a noticeable difference from the other three, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 21,
    animal: "Dino Sleeping",
    coloringPage: {
      prompt: "cute cartoon dinosaur curled up sleeping peacefully, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes closed --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Big Sleeping Dino and Small Sleeping Dino!",
      type: "big-vs-small",
      prompt: "big vs small activity page for toddlers, pairs of cute cartoon sleeping dinosaurs in different sizes asking children to circle the bigger one in each pair, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 22,
    animal: "Dino Running",
    coloringPage: {
      prompt: "cute cartoon dinosaur running fast with happy expression, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Complete the Running Dino Pattern!",
      type: "pattern-completion",
      prompt: "pattern completion activity page for toddlers, repeating pattern of cute cartoon running dinosaur then footprint then running dinosaur then footprint with missing items for children to fill in, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 23,
    animal: "Dino and Palm Tree",
    coloringPage: {
      prompt: "cute cartoon dinosaur standing next to a tall palm tree, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Match the Dino to Its Shadow!",
      type: "shadow-matching",
      prompt: "shadow matching activity page for toddlers, four cute cartoon dinosaurs in different poses on top and four dinosaur silhouettes on bottom in shuffled order for matching, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 24,
    animal: "Dino Footprints",
    coloringPage: {
      prompt: "cute cartoon dinosaur looking at its own big footprints in the ground, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Find the Hidden Dino Footprints!",
      type: "find-the-hidden",
      prompt: "hidden objects activity page for toddlers, prehistoric scene with a cute cartoon dinosaur and eight dinosaur footprints partially hidden in the ground among rocks and plants for children to find, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 25,
    animal: "Dino Party",
    coloringPage: {
      prompt: "cute cartoon dinosaurs having a party with party hats and balloons, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Help the Dino Get to the Party!",
      type: "maze",
      prompt: "simple maze puzzle for toddlers, cute cartoon dinosaur on one side and a dinosaur party with balloons and cake on other side with simple wide festive paths, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  }
];

export default function Book4_DinosaurAdventures() {
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
          <div style={{ textAlign: "center", marginBottom: "2rem", padding: "2rem", background: "linear-gradient(135deg, #FFCC80, #FFF3E0)", borderRadius: 16 }}>
            <h1 style={{ fontFamily: "'Fredoka', sans-serif", fontSize: "2rem", color: "#BF360C", margin: 0 }}>
              {metadata.title}
            </h1>
            <p style={{ color: "#D84315", margin: "0.5rem 0 0", fontSize: "1.1rem" }}>{metadata.subtitle}</p>
            <div style={{ display: "flex", justifyContent: "center", gap: "2rem", marginTop: "1rem", flexWrap: "wrap" }}>
              {[
                ["Ages", metadata.ages],
                ["Price", metadata.price],
                ["Size", metadata.size],
                ["Pages", metadata.pageCount],
                ["Interior", metadata.interior],
                ["Author", metadata.author]
              ].map(([label, value]) => (
                <span key={label} style={{ fontSize: "0.9rem", color: "#4E342E" }}>
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
              <li>Right page = coloring page, Left page = activity page (same dinosaur on both)</li>
              <li>All prompts use <strong>--ar 17:22</strong> for 8.5 x 11 portrait pages</li>
              <li>Generate at Midjourney, upscale to 300 DPI, place in your KDP template</li>
              <li>Activity types rotate through 12 varieties for maximum engagement</li>
            </ul>
          </div>

          {/* Spreads Accordion */}
          <h2 style={{ fontFamily: "'Fredoka', sans-serif", fontSize: "1.5rem", color: "#BF360C" }}>All 25 Spreads</h2>
          {spreads.map((spread) => {
            const isOpen = openSpread === spread.spreadNumber;
            return (
              <div key={spread.spreadNumber} style={{ marginBottom: "0.75rem", border: "2px solid #FFCC80", borderRadius: 12, overflow: "hidden" }}>
                <button
                  onClick={() => setOpenSpread(isOpen ? null : spread.spreadNumber)}
                  style={{
                    width: "100%", padding: "1rem 1.5rem", background: isOpen ? "#FFCC80" : "#FFF3E0",
                    border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center",
                    fontFamily: "'Nunito', sans-serif", fontSize: "1rem"
                  }}
                >
                  <span style={{ fontWeight: 700, color: "#BF360C" }}>
                    Spread {spread.spreadNumber}: {spread.animal}
                  </span>
                  <span style={{ fontSize: "0.85rem", color: "#D84315", background: "#FFF8E1", padding: "2px 10px", borderRadius: 8 }}>
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
              <p><strong>Description:</strong> ROAR! Travel back in time with 25 adorable dinosaurs in this jumbo coloring and activity book! Each spread features a big, bold dino coloring page paired with a prehistoric adventure activity -- mazes, counting, matching, tracing, spot-the-difference, and more. Thick outlines and simple shapes are perfect for tiny hands. Great for ages 2-5.</p>
              <p><strong>Keywords:</strong> dinosaur coloring book toddler, dino activity book, preschool dinosaur book, T-Rex coloring pages, dinosaur activities ages 2-5, kids dinosaur worksheets, cute dinosaur coloring</p>
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
