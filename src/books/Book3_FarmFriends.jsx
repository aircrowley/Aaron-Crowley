import { useState } from "react";

export const metadata = {
  bookNumber: 3,
  title: "Farm Friends Coloring & Activity Book",
  subtitle: "25 Matched Farm Animal Spreads with Coloring Pages and Activities for Toddlers",
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
    animal: "Cow",
    coloringPage: {
      prompt: "cute cartoon cow with spots standing in a field, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Help the Cow Find the Barn!",
      type: "maze",
      prompt: "simple maze puzzle for toddlers, cute cartoon cow on one side and a red barn on other side with simple wide paths through a farm field, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 2,
    animal: "Pig",
    coloringPage: {
      prompt: "cute cartoon pig playing in mud, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Count the Piglets!",
      type: "counting",
      prompt: "counting activity page for toddlers, cute cartoon piglets in different playful poses with numbers 1 through 6 next to empty boxes for counting, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 3,
    animal: "Chicken",
    coloringPage: {
      prompt: "cute cartoon chicken with fluffy feathers, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Match the Chickens to Their Eggs!",
      type: "matching",
      prompt: "matching activity page for toddlers, three cute cartoon chickens on the left and three nests with eggs on the right with tangled lines connecting them, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 4,
    animal: "Horse",
    coloringPage: {
      prompt: "cute cartoon horse with flowing mane in a pasture, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Trace the Letters: H-O-R-S-E",
      type: "tracing",
      prompt: "letter tracing activity page for toddlers, large dotted outline letters spelling HORSE with a cute cartoon horse galloping at the bottom, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 5,
    animal: "Sheep",
    coloringPage: {
      prompt: "cute cartoon fluffy sheep with woolly coat, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Find 3 Differences Between the Sheep!",
      type: "spot-the-difference",
      prompt: "spot the difference activity page for toddlers, two nearly identical cute cartoon fluffy sheep side by side with three simple differences, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 6,
    animal: "Goat",
    coloringPage: {
      prompt: "cute cartoon goat with little horns and a bell, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Connect the Dots to Reveal the Goat!",
      type: "connect-dots",
      prompt: "connect the dots activity page for toddlers, numbered dots 1 through 12 forming the outline of a cute cartoon goat with horns and bell partially drawn, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 7,
    animal: "Donkey",
    coloringPage: {
      prompt: "cute cartoon donkey with big floppy ears, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Color the Donkey by Numbers!",
      type: "color-by-number",
      prompt: "color by number activity page for toddlers, large cute cartoon donkey divided into simple sections with numbers 1 through 5 and a color key at the bottom, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 8,
    animal: "Rooster",
    coloringPage: {
      prompt: "cute cartoon rooster crowing with colorful tail feathers, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Which Rooster is Different?",
      type: "which-is-different",
      prompt: "which is different activity page for toddlers, four cute cartoon roosters in a row where one rooster has a different tail from the other three, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 9,
    animal: "Duck",
    coloringPage: {
      prompt: "cute cartoon farm duck waddling near a pond, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Big Duck and Small Duck!",
      type: "big-vs-small",
      prompt: "big vs small activity page for toddlers, pairs of cute cartoon ducks in different sizes asking children to circle the bigger duck in each pair, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 10,
    animal: "Turkey",
    coloringPage: {
      prompt: "cute cartoon turkey with big fanned tail feathers, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Complete the Turkey Pattern!",
      type: "pattern-completion",
      prompt: "pattern completion activity page for toddlers, repeating pattern of cute cartoon turkey then feather then turkey then feather with missing items for children to fill in, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 11,
    animal: "Barn Cat",
    coloringPage: {
      prompt: "cute cartoon barn cat sitting on a hay bale, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Match the Barn Cat to Its Shadow!",
      type: "shadow-matching",
      prompt: "shadow matching activity page for toddlers, three cute cartoon barn cats in different poses on top and three cat silhouettes on bottom in shuffled order for matching, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 12,
    animal: "Farm Dog",
    coloringPage: {
      prompt: "cute cartoon farm dog with a bandana around its neck, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Find the Hidden Farm Dogs!",
      type: "find-the-hidden",
      prompt: "hidden objects activity page for toddlers, farm scene with five cute cartoon farm dogs partially hidden behind hay bales barrels and fences for children to find, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 13,
    animal: "Rabbit",
    coloringPage: {
      prompt: "cute cartoon farm rabbit nibbling on a carrot, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Help the Rabbit Find Its Burrow!",
      type: "maze",
      prompt: "simple maze puzzle for toddlers, cute cartoon rabbit on one side and a cozy burrow on other side with simple wide paths through a garden, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 14,
    animal: "Chick",
    coloringPage: {
      prompt: "cute cartoon baby chick just hatched from egg, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Count the Baby Chicks!",
      type: "counting",
      prompt: "counting activity page for toddlers, cute cartoon baby chicks in different poses some hatching from eggs with numbers 1 through 8 for counting, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 15,
    animal: "Llama",
    coloringPage: {
      prompt: "cute cartoon llama with fluffy wool, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Trace the Letters: L-L-A-M-A",
      type: "tracing",
      prompt: "letter tracing activity page for toddlers, large dotted outline letters spelling LLAMA with a cute cartoon llama wearing a blanket at the bottom, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 16,
    animal: "Barn Owl",
    coloringPage: {
      prompt: "cute cartoon barn owl perched on a barn rafter, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Find 3 Differences Between the Barn Owls!",
      type: "spot-the-difference",
      prompt: "spot the difference activity page for toddlers, two nearly identical cute cartoon barn owls perched on rafters side by side with three simple differences, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 17,
    animal: "Mouse",
    coloringPage: {
      prompt: "cute cartoon farm mouse nibbling on cheese, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Connect the Dots to Reveal the Mouse!",
      type: "connect-dots",
      prompt: "connect the dots activity page for toddlers, numbered dots 1 through 10 forming the outline of a cute cartoon mouse with cheese partially drawn, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 18,
    animal: "Goose",
    coloringPage: {
      prompt: "cute cartoon goose walking on the farm, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Match the Geese to Their Nests!",
      type: "matching",
      prompt: "matching activity page for toddlers, three cute cartoon geese on the left and three nests with goslings on the right with tangled lines connecting them, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 19,
    animal: "Ram",
    coloringPage: {
      prompt: "cute cartoon ram with big curly horns, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Color the Ram by Numbers!",
      type: "color-by-number",
      prompt: "color by number activity page for toddlers, large cute cartoon ram with curly horns divided into simple sections with numbers 1 through 5 and a color key at the bottom, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 20,
    animal: "Pony",
    coloringPage: {
      prompt: "cute cartoon pony with ribbons in its mane, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Which Pony is Different?",
      type: "which-is-different",
      prompt: "which is different activity page for toddlers, four cute cartoon ponies in a row where one pony has a different mane style from the other three, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 21,
    animal: "Piglet",
    coloringPage: {
      prompt: "cute cartoon tiny piglet with a curly tail, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Big Piglet and Small Piglet!",
      type: "big-vs-small",
      prompt: "big vs small activity page for toddlers, pairs of cute cartoon piglets in different sizes asking children to circle the bigger piglet in each pair, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 22,
    animal: "Lamb",
    coloringPage: {
      prompt: "cute cartoon baby lamb with fluffy wool jumping, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Complete the Lamb Pattern!",
      type: "pattern-completion",
      prompt: "pattern completion activity page for toddlers, repeating pattern of cute cartoon lamb then flower then lamb then flower with missing items for children to fill in, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 23,
    animal: "Calf",
    coloringPage: {
      prompt: "cute cartoon baby calf with spots drinking from a bucket, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Match the Calf to Its Shadow!",
      type: "shadow-matching",
      prompt: "shadow matching activity page for toddlers, three cute cartoon calves in different poses on top and three calf silhouettes on bottom in shuffled order for matching, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 24,
    animal: "Hen",
    coloringPage: {
      prompt: "cute cartoon hen sitting on a nest of eggs, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Find the Hidden Eggs!",
      type: "find-the-hidden",
      prompt: "hidden objects activity page for toddlers, farm scene with a cute cartoon hen and six eggs partially hidden behind hay bales bushes and farm tools for children to find, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 25,
    animal: "Tractor Scene",
    coloringPage: {
      prompt: "cute cartoon farm tractor with a friendly face driving through a field, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Help the Tractor Get to the Farm!",
      type: "maze",
      prompt: "simple maze puzzle for toddlers, cute cartoon tractor on one side and a friendly farm with barn and animals on other side with simple wide dirt road paths, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  }
];

export default function Book3_FarmFriends() {
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
          <div style={{ textAlign: "center", marginBottom: "2rem", padding: "2rem", background: "linear-gradient(135deg, #C8E6C9, #E8F5E9)", borderRadius: 16 }}>
            <h1 style={{ fontFamily: "'Fredoka', sans-serif", fontSize: "2rem", color: "#2E7D32", margin: 0 }}>
              {metadata.title}
            </h1>
            <p style={{ color: "#388E3C", margin: "0.5rem 0 0", fontSize: "1.1rem" }}>{metadata.subtitle}</p>
            <div style={{ display: "flex", justifyContent: "center", gap: "2rem", marginTop: "1rem", flexWrap: "wrap" }}>
              {[
                ["Ages", metadata.ages],
                ["Price", metadata.price],
                ["Size", metadata.size],
                ["Pages", metadata.pageCount],
                ["Interior", metadata.interior],
                ["Author", metadata.author]
              ].map(([label, value]) => (
                <span key={label} style={{ fontSize: "0.9rem", color: "#33691E" }}>
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
          <h2 style={{ fontFamily: "'Fredoka', sans-serif", fontSize: "1.5rem", color: "#2E7D32" }}>All 25 Spreads</h2>
          {spreads.map((spread) => {
            const isOpen = openSpread === spread.spreadNumber;
            return (
              <div key={spread.spreadNumber} style={{ marginBottom: "0.75rem", border: "2px solid #C8E6C9", borderRadius: 12, overflow: "hidden" }}>
                <button
                  onClick={() => setOpenSpread(isOpen ? null : spread.spreadNumber)}
                  style={{
                    width: "100%", padding: "1rem 1.5rem", background: isOpen ? "#C8E6C9" : "#E8F5E9",
                    border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center",
                    fontFamily: "'Nunito', sans-serif", fontSize: "1rem"
                  }}
                >
                  <span style={{ fontWeight: 700, color: "#2E7D32" }}>
                    Spread {spread.spreadNumber}: {spread.animal}
                  </span>
                  <span style={{ fontSize: "0.85rem", color: "#388E3C", background: "#F1F8E9", padding: "2px 10px", borderRadius: 8 }}>
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
              <p><strong>Description:</strong> Welcome to the farm! Your little one will love meeting 25 adorable farm animals in this jumbo coloring and activity book. Each spread features a big, bold coloring page paired with a farm-themed activity -- mazes, counting, matching, tracing, spot-the-difference, and more. Thick outlines and simple shapes are perfect for tiny hands. Great for ages 2-5.</p>
              <p><strong>Keywords:</strong> farm coloring book toddler, farm animal activity book, preschool farm animals, barnyard coloring pages, farm activity book ages 2-5, kids farm worksheets, toddler farm book</p>
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
