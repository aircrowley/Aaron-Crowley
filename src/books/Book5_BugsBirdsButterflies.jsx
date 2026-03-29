import { useState } from "react";

export const metadata = {
  bookNumber: 5,
  title: "Bugs, Birds & Butterflies Coloring & Activity Book",
  subtitle: "25 Matched Spreads with Coloring Pages and Activities for Toddlers",
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
    animal: "Butterfly",
    coloringPage: {
      prompt: "cute cartoon butterfly with large decorative wings and antennae, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Help the Butterfly Find the Flower!",
      type: "maze",
      prompt: "simple maze puzzle for toddlers, cute cartoon butterfly on one side and a big beautiful flower on other side with simple wide garden paths, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 2,
    animal: "Ladybug",
    coloringPage: {
      prompt: "cute cartoon ladybug with spots sitting on a leaf, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Count the Ladybug Spots!",
      type: "counting",
      prompt: "counting activity page for toddlers, several cute cartoon ladybugs each with a different number of spots for children to count, numbers 1 through 6 with empty boxes, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 3,
    animal: "Bumblebee",
    coloringPage: {
      prompt: "cute cartoon bumblebee with stripes buzzing near a flower, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Match the Bees to Their Hives!",
      type: "matching",
      prompt: "matching activity page for toddlers, three cute cartoon bumblebees on the left and three beehives on the right with tangled lines connecting them, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 4,
    animal: "Caterpillar",
    coloringPage: {
      prompt: "cute cartoon caterpillar with round body segments on a leaf, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Trace the Letters: B-U-G",
      type: "tracing",
      prompt: "letter tracing activity page for toddlers, large dotted outline letters spelling BUG with a cute cartoon caterpillar crawling along the bottom, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 5,
    animal: "Dragonfly",
    coloringPage: {
      prompt: "cute cartoon dragonfly with sparkly transparent wings hovering over a pond, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Find 3 Differences Between the Dragonflies!",
      type: "spot-the-difference",
      prompt: "spot the difference activity page for toddlers, two nearly identical cute cartoon dragonflies hovering side by side with three simple differences in their wings, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 6,
    animal: "Robin",
    coloringPage: {
      prompt: "cute cartoon robin bird with red breast sitting on a branch, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Connect the Dots to Reveal the Robin!",
      type: "connect-dots",
      prompt: "connect the dots activity page for toddlers, numbered dots 1 through 12 forming the outline of a cute cartoon robin on a branch with leaves partially drawn, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 7,
    animal: "Parrot",
    coloringPage: {
      prompt: "cute cartoon parrot with colorful feathers perched on a tropical branch, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Color the Parrot by Numbers!",
      type: "color-by-number",
      prompt: "color by number activity page for toddlers, large cute cartoon parrot with feathers divided into simple sections with numbers 1 through 6 and a color key at the bottom, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 8,
    animal: "Owl",
    coloringPage: {
      prompt: "cute cartoon owl with big round eyes perched on a tree branch at night, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Which Owl is Different?",
      type: "which-is-different",
      prompt: "which is different activity page for toddlers, four cute cartoon owls in a row where one owl has different ear tufts from the other three, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 9,
    animal: "Flamingo",
    coloringPage: {
      prompt: "cute cartoon flamingo standing on one leg in water, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Big Flamingo and Small Flamingo!",
      type: "big-vs-small",
      prompt: "big vs small activity page for toddlers, pairs of cute cartoon flamingos in different sizes asking children to circle the bigger flamingo in each pair, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 10,
    animal: "Peacock",
    coloringPage: {
      prompt: "cute cartoon peacock with big fanned tail feathers displayed, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Complete the Peacock Pattern!",
      type: "pattern-completion",
      prompt: "pattern completion activity page for toddlers, repeating pattern of cute cartoon peacock feather then eye spot then peacock feather then eye spot with missing items for children to fill in, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 11,
    animal: "Snail",
    coloringPage: {
      prompt: "cute cartoon snail with spiral shell crawling on a leaf, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Match the Snail to Its Shell!",
      type: "shadow-matching",
      prompt: "shadow matching activity page for toddlers, three cute cartoon snails with different shell patterns on top and three shell silhouettes on bottom in different order for matching, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 12,
    animal: "Spider",
    coloringPage: {
      prompt: "cute cartoon friendly spider sitting in a web, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Find the Hidden Spiders!",
      type: "find-the-hidden",
      prompt: "hidden objects activity page for toddlers, garden scene with five cute cartoon spiders partially hidden behind flowers leaves and webs for children to find, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 13,
    animal: "Ant",
    coloringPage: {
      prompt: "cute cartoon ant carrying a big crumb, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Help the Ant Find the Picnic!",
      type: "maze",
      prompt: "simple maze puzzle for toddlers, cute cartoon ant on one side and a picnic blanket with food on other side with simple wide paths through grass, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 14,
    animal: "Grasshopper",
    coloringPage: {
      prompt: "cute cartoon grasshopper sitting on a blade of grass, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Count the Grasshoppers!",
      type: "counting",
      prompt: "counting activity page for toddlers, cute cartoon grasshoppers hopping on different blades of grass for children to count, numbers 1 through 7 with empty boxes, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 15,
    animal: "Hummingbird",
    coloringPage: {
      prompt: "cute cartoon hummingbird hovering near a flower sipping nectar, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Match the Hummingbirds to Their Flowers!",
      type: "matching",
      prompt: "matching activity page for toddlers, three cute cartoon hummingbirds on the left and three different flowers on the right with tangled lines connecting them, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 16,
    animal: "Toucan",
    coloringPage: {
      prompt: "cute cartoon toucan with big colorful beak on a tropical branch, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Trace the Letters: B-I-R-D",
      type: "tracing",
      prompt: "letter tracing activity page for toddlers, large dotted outline letters spelling BIRD with a cute cartoon toucan perched at the top, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 17,
    animal: "Eagle",
    coloringPage: {
      prompt: "cute cartoon baby eagle with spread wings, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Find 3 Differences Between the Eagles!",
      type: "spot-the-difference",
      prompt: "spot the difference activity page for toddlers, two nearly identical cute cartoon eagles with spread wings side by side with three simple differences, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 18,
    animal: "Penguin",
    coloringPage: {
      prompt: "cute cartoon penguin waddling on ice with a scarf, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Connect the Dots to Reveal the Penguin!",
      type: "connect-dots",
      prompt: "connect the dots activity page for toddlers, numbered dots 1 through 14 forming the outline of a cute cartoon penguin with scarf partially drawn, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 19,
    animal: "Firefly",
    coloringPage: {
      prompt: "cute cartoon firefly glowing brightly at night, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Color the Firefly by Numbers!",
      type: "color-by-number",
      prompt: "color by number activity page for toddlers, large cute cartoon firefly with body and wings divided into simple sections with numbers 1 through 5 and a color key at the bottom, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 20,
    animal: "Cricket",
    coloringPage: {
      prompt: "cute cartoon cricket playing music with its legs, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Which Cricket is Different?",
      type: "which-is-different",
      prompt: "which is different activity page for toddlers, four cute cartoon crickets in a row where one cricket holds a different instrument from the other three, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 21,
    animal: "Blue Jay",
    coloringPage: {
      prompt: "cute cartoon blue jay with distinctive crest on a branch, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Big Blue Jay and Small Blue Jay!",
      type: "big-vs-small",
      prompt: "big vs small activity page for toddlers, pairs of cute cartoon blue jays in different sizes asking children to circle the bigger blue jay in each pair, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 22,
    animal: "Cardinal",
    coloringPage: {
      prompt: "cute cartoon cardinal bird with pointed crest on a snowy branch, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Complete the Cardinal Pattern!",
      type: "pattern-completion",
      prompt: "pattern completion activity page for toddlers, repeating pattern of cute cartoon cardinal then berry then cardinal then berry with missing items for children to fill in, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 23,
    animal: "Beetle",
    coloringPage: {
      prompt: "cute cartoon beetle with shiny round shell, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Match the Beetle to Its Shadow!",
      type: "shadow-matching",
      prompt: "shadow matching activity page for toddlers, four cute cartoon beetles with different shell patterns on top and four beetle silhouettes on bottom in shuffled order for matching, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 24,
    animal: "Worm",
    coloringPage: {
      prompt: "cute cartoon worm peeking out of an apple, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Find the Hidden Worms!",
      type: "find-the-hidden",
      prompt: "hidden objects activity page for toddlers, garden scene with six cute cartoon worms partially hidden in apples soil leaves and flowers for children to find, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  },
  {
    spreadNumber: 25,
    animal: "Garden Scene",
    coloringPage: {
      prompt: "cute cartoon garden scene with flowers butterflies and bees, coloring book page for toddlers, bold thick black outlines, simple shapes, no shading, no color, no gray fill, white background, full page illustration, kawaii style, big friendly eyes on all creatures --ar 17:22 --style raw --v 6.1"
    },
    activityPage: {
      title: "Help the Bee Get to the Garden!",
      type: "maze",
      prompt: "simple maze puzzle for toddlers, cute cartoon bumblebee on one side and a beautiful garden full of flowers on other side with simple wide garden paths, bold thick black outlines, no shading, no color, white background, coloring book style --ar 17:22 --style raw --v 6.1"
    }
  }
];

export default function Book5_BugsBirdsButterflies() {
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
          <div style={{ textAlign: "center", marginBottom: "2rem", padding: "2rem", background: "linear-gradient(135deg, #F8BBD0, #FCE4EC)", borderRadius: 16 }}>
            <h1 style={{ fontFamily: "'Fredoka', sans-serif", fontSize: "2rem", color: "#880E4F", margin: 0 }}>
              {metadata.title}
            </h1>
            <p style={{ color: "#AD1457", margin: "0.5rem 0 0", fontSize: "1.1rem" }}>{metadata.subtitle}</p>
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
              <li>Right page = coloring page, Left page = activity page (same creature on both)</li>
              <li>All prompts use <strong>--ar 17:22</strong> for 8.5 x 11 portrait pages</li>
              <li>Generate at Midjourney, upscale to 300 DPI, place in your KDP template</li>
              <li>Activity types rotate through 12 varieties for maximum engagement</li>
            </ul>
          </div>

          {/* Spreads Accordion */}
          <h2 style={{ fontFamily: "'Fredoka', sans-serif", fontSize: "1.5rem", color: "#880E4F" }}>All 25 Spreads</h2>
          {spreads.map((spread) => {
            const isOpen = openSpread === spread.spreadNumber;
            return (
              <div key={spread.spreadNumber} style={{ marginBottom: "0.75rem", border: "2px solid #F8BBD0", borderRadius: 12, overflow: "hidden" }}>
                <button
                  onClick={() => setOpenSpread(isOpen ? null : spread.spreadNumber)}
                  style={{
                    width: "100%", padding: "1rem 1.5rem", background: isOpen ? "#F8BBD0" : "#FCE4EC",
                    border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center",
                    fontFamily: "'Nunito', sans-serif", fontSize: "1rem"
                  }}
                >
                  <span style={{ fontWeight: 700, color: "#880E4F" }}>
                    Spread {spread.spreadNumber}: {spread.animal}
                  </span>
                  <span style={{ fontSize: "0.85rem", color: "#AD1457", background: "#FFF0F5", padding: "2px 10px", borderRadius: 8 }}>
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
              <p><strong>Description:</strong> Flutter, buzz, and soar with 25 adorable bugs, birds, and butterflies! Each spread features a big, bold coloring page paired with a nature-themed activity -- mazes, counting, matching, tracing, spot-the-difference, and more. Designed with thick outlines and simple shapes perfect for tiny hands. Great for ages 2-5.</p>
              <p><strong>Keywords:</strong> bugs coloring book toddler, birds activity book, butterfly coloring pages kids, insect coloring book preschool, nature activity book ages 2-5, bugs and birds worksheets, garden creatures coloring</p>
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
