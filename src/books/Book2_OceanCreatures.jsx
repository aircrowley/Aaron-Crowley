import { useState } from "react";

export const metadata = {
  bookNumber: 2,
  title: "Ocean Friends Coloring & Activity Book",
  subtitle: "25 Matched Ocean Creature Spreads with Coloring Pages and Activities for Toddlers",
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
    animal: "Dolphin",
    coloringPage: {
      prompt: "cute cartoon dolphin jumping out of ocean waves, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Help the Dolphin Find Its Pod!",
      type: "maze",
      prompt: "simple maze puzzle for toddlers, cute cartoon dolphin on one side and a group of three dolphins on other side with simple wide ocean-wave paths, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 2,
    animal: "Whale",
    coloringPage: {
      prompt: "cute cartoon whale spouting water, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Count the Whale Spouts!",
      type: "counting",
      prompt: "counting activity page for toddlers, cute cartoon whales spouting water with different numbers of water drops above each whale for counting, numbers 1 through 5, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 3,
    animal: "Octopus",
    coloringPage: {
      prompt: "cute cartoon octopus with curly tentacles underwater, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Match the Octopus to Its Treasure!",
      type: "matching",
      prompt: "matching activity page for toddlers, three cute cartoon octopuses on the left holding different items and three matching treasures on the right with tangled lines connecting them, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 4,
    animal: "Starfish",
    coloringPage: {
      prompt: "cute cartoon starfish on sandy ocean floor, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Trace the Letters: S-T-A-R-F-I-S-H",
      type: "tracing",
      prompt: "letter tracing activity page for toddlers, large dotted outline letters spelling STARFISH with a cute cartoon starfish waving at the bottom, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 5,
    animal: "Seahorse",
    coloringPage: {
      prompt: "cute cartoon seahorse floating among seaweed, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Find 3 Differences Between the Seahorses!",
      type: "spot-the-difference",
      prompt: "spot the difference activity page for toddlers, two nearly identical cute cartoon seahorses side by side with three simple differences, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 6,
    animal: "Clownfish",
    coloringPage: {
      prompt: "cute cartoon clownfish hiding in a sea anemone, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Connect the Dots to Reveal the Clownfish!",
      type: "connect-dots",
      prompt: "connect the dots activity page for toddlers, numbered dots 1 through 15 forming the outline of a cute cartoon clownfish with anemone partially drawn, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 7,
    animal: "Sea Turtle",
    coloringPage: {
      prompt: "cute cartoon sea turtle swimming in the ocean, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Color the Sea Turtle by Numbers!",
      type: "color-by-number",
      prompt: "color by number activity page for toddlers, large cute cartoon sea turtle with shell divided into simple sections with numbers 1 through 5 and a color key at the bottom, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 8,
    animal: "Crab",
    coloringPage: {
      prompt: "cute cartoon crab on the beach with pincers raised, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Which Crab is Different?",
      type: "which-is-different",
      prompt: "which is different activity page for toddlers, four cute cartoon crabs in a row where one crab has different sized pincers from the other three, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 9,
    animal: "Jellyfish",
    coloringPage: {
      prompt: "cute cartoon jellyfish with flowing tentacles, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Big Jellyfish and Small Jellyfish!",
      type: "big-vs-small",
      prompt: "big vs small activity page for toddlers, pairs of cute cartoon jellyfish in different sizes asking children to circle the big one in each pair, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 10,
    animal: "Shark",
    coloringPage: {
      prompt: "cute cartoon friendly baby shark swimming, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Complete the Shark Pattern!",
      type: "pattern-completion",
      prompt: "pattern completion activity page for toddlers, repeating pattern of cute cartoon shark then fish then shark then fish with missing items for children to fill in, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 11,
    animal: "Pufferfish",
    coloringPage: {
      prompt: "cute cartoon pufferfish all puffed up and round, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Match the Pufferfish to Its Shadow!",
      type: "shadow-matching",
      prompt: "shadow matching activity page for toddlers, three cute cartoon pufferfish in different puff sizes on top and three pufferfish silhouettes on bottom in different order for matching, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 12,
    animal: "Narwhal",
    coloringPage: {
      prompt: "cute cartoon narwhal with sparkly horn in arctic water, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Find the Hidden Narwhals!",
      type: "find-the-hidden",
      prompt: "hidden objects activity page for toddlers, arctic ocean scene with five cute cartoon narwhals partially hidden behind icebergs and waves for children to find, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 13,
    animal: "Seal",
    coloringPage: {
      prompt: "cute cartoon baby seal pup on an ice floe, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Help the Seal Find Its Fish!",
      type: "maze",
      prompt: "simple maze puzzle for toddlers, cute cartoon seal on one side and a bucket of fish on other side with simple wide icy paths, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 14,
    animal: "Lobster",
    coloringPage: {
      prompt: "cute cartoon lobster with big claws, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Count the Lobster Claws!",
      type: "counting",
      prompt: "counting activity page for toddlers, several cute cartoon lobsters with varying numbers of visible claws for children to count, numbers and empty boxes for writing answers, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 15,
    animal: "Manta Ray",
    coloringPage: {
      prompt: "cute cartoon manta ray gliding through water, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Trace the Letters: M-A-N-T-A R-A-Y",
      type: "tracing",
      prompt: "letter tracing activity page for toddlers, large dotted outline letters spelling MANTA RAY with a cute cartoon manta ray gliding at the bottom, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 16,
    animal: "Otter",
    coloringPage: {
      prompt: "cute cartoon sea otter floating on its back in water, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Find 3 Differences Between the Otters!",
      type: "spot-the-difference",
      prompt: "spot the difference activity page for toddlers, two nearly identical cute cartoon sea otters floating on their backs side by side with three simple differences, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 17,
    animal: "Walrus",
    coloringPage: {
      prompt: "cute cartoon walrus with big tusks sitting on a rock, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Connect the Dots to Reveal the Walrus!",
      type: "connect-dots",
      prompt: "connect the dots activity page for toddlers, numbered dots 1 through 14 forming the outline of a cute cartoon walrus with tusks partially drawn, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 18,
    animal: "Angelfish",
    coloringPage: {
      prompt: "cute cartoon angelfish with beautiful flowing fins, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Match the Angelfish to Their Coral!",
      type: "matching",
      prompt: "matching activity page for toddlers, four cute cartoon angelfish on the left and four different coral shapes on the right with tangled lines connecting them, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 19,
    animal: "Shrimp",
    coloringPage: {
      prompt: "cute cartoon shrimp with curly body, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Color the Shrimp by Numbers!",
      type: "color-by-number",
      prompt: "color by number activity page for toddlers, large cute cartoon shrimp divided into simple sections with numbers 1 through 4 and a color key at the bottom, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 20,
    animal: "Squid",
    coloringPage: {
      prompt: "cute cartoon squid with big round head and tentacles, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Which Squid is Different?",
      type: "which-is-different",
      prompt: "which is different activity page for toddlers, four cute cartoon squids in a row where one squid has a different number of tentacles from the other three, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 21,
    animal: "Pelican",
    coloringPage: {
      prompt: "cute cartoon pelican with big beak pouch, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Big Pelican and Small Pelican!",
      type: "big-vs-small",
      prompt: "big vs small activity page for toddlers, pairs of cute cartoon pelicans in different sizes asking children to circle the bigger pelican in each pair, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 22,
    animal: "Hermit Crab",
    coloringPage: {
      prompt: "cute cartoon hermit crab peeking out of a colorful shell, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Complete the Hermit Crab Pattern!",
      type: "pattern-completion",
      prompt: "pattern completion activity page for toddlers, repeating pattern of cute cartoon hermit crab then shell then hermit crab then shell with missing items for children to fill in, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 23,
    animal: "Manatee",
    coloringPage: {
      prompt: "cute cartoon manatee swimming peacefully underwater, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Match the Manatee to Its Shadow!",
      type: "shadow-matching",
      prompt: "shadow matching activity page for toddlers, three cute cartoon manatees in different poses on top and three manatee silhouettes on bottom in shuffled order for matching, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 24,
    animal: "Swordfish",
    coloringPage: {
      prompt: "cute cartoon swordfish with long pointed nose swimming fast, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Find the Hidden Swordfish!",
      type: "find-the-hidden",
      prompt: "hidden objects activity page for toddlers, deep ocean scene with five cute cartoon swordfish partially hidden behind coral formations and seaweed for children to find, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 25,
    animal: "Coral Reef",
    coloringPage: {
      prompt: "cute cartoon coral reef scene with small fish and bubbles, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes on the fish --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Help the Fish Get Back to the Coral Reef!",
      type: "maze",
      prompt: "simple maze puzzle for toddlers, cute cartoon fish on one side and a beautiful coral reef on other side with simple wide underwater paths, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  }
];

export default function Book2_OceanCreatures() {
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
          <div style={{ textAlign: "center", marginBottom: "2rem", padding: "2rem", background: "linear-gradient(135deg, #B3E5FC, #E0F7FA)", borderRadius: 16 }}>
            <h1 style={{ fontFamily: "'Fredoka', sans-serif", fontSize: "2rem", color: "#01579B", margin: 0 }}>
              {metadata.title}
            </h1>
            <p style={{ color: "#0277BD", margin: "0.5rem 0 0", fontSize: "1.1rem" }}>{metadata.subtitle}</p>
            <div style={{ display: "flex", justifyContent: "center", gap: "2rem", marginTop: "1rem", flexWrap: "wrap" }}>
              {[
                ["Ages", metadata.ages],
                ["Price", metadata.price],
                ["Size", metadata.size],
                ["Pages", metadata.pageCount],
                ["Interior", metadata.interior],
                ["Author", metadata.author]
              ].map(([label, value]) => (
                <span key={label} style={{ fontSize: "0.9rem", color: "#37474F" }}>
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
              <li>Right page = coloring page, Left page = activity page (same creature on both)</li>
              <li>All prompts use <strong>--ar 17:22</strong> for 8.5 x 11 portrait pages</li>
              <li>Generate at Midjourney, upscale to 300 DPI, place in your KDP template</li>
              <li>Activity types rotate through 12 varieties for maximum engagement</li>
            </ul>
          </div>

          {/* Spreads Accordion */}
          <h2 style={{ fontFamily: "'Fredoka', sans-serif", fontSize: "1.5rem", color: "#01579B" }}>All 25 Spreads</h2>
          {spreads.map((spread) => {
            const isOpen = openSpread === spread.spreadNumber;
            return (
              <div key={spread.spreadNumber} style={{ marginBottom: "0.75rem", border: "2px solid #B3E5FC", borderRadius: 12, overflow: "hidden" }}>
                <button
                  onClick={() => setOpenSpread(isOpen ? null : spread.spreadNumber)}
                  style={{
                    width: "100%", padding: "1rem 1.5rem", background: isOpen ? "#B3E5FC" : "#E0F7FA",
                    border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center",
                    fontFamily: "'Nunito', sans-serif", fontSize: "1rem"
                  }}
                >
                  <span style={{ fontWeight: 700, color: "#01579B" }}>
                    Spread {spread.spreadNumber}: {spread.animal}
                  </span>
                  <span style={{ fontSize: "0.85rem", color: "#0277BD", background: "#E1F5FE", padding: "2px 10px", borderRadius: 8 }}>
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
              <p><strong>Description:</strong> Dive into the ocean with 25 adorable sea creatures! Each spread features a big, bold coloring page paired with a fun ocean-themed activity -- mazes, counting, matching, tracing, spot-the-difference, and more. Designed with thick outlines and simple shapes perfect for tiny hands. Great for ages 2-5.</p>
              <p><strong>Keywords:</strong> ocean coloring book toddler, sea creatures activity book, preschool ocean animals, marine life coloring pages, underwater coloring book kids, ocean activity book ages 2-5, sea animal worksheets</p>
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
