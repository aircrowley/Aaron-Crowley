import { useState, useEffect } from "react";
import { metadata as meta1, spreads as spreads1 } from "./books/Book1_BigBoldAnimals";
import { metadata as meta2, spreads as spreads2 } from "./books/Book2_OceanCreatures";
import { metadata as meta3, spreads as spreads3 } from "./books/Book3_FarmFriends";
import { metadata as meta4, spreads as spreads4 } from "./books/Book4_DinosaurAdventures";
import { metadata as meta5, spreads as spreads5 } from "./books/Book5_BugsBirdsButterflies";

const books = [
  { meta: meta1, spreads: spreads1, color: "#FF6B6B" },
  { meta: meta2, spreads: spreads2, color: "#3B82F6" },
  { meta: meta3, spreads: spreads3, color: "#22C55E" },
  { meta: meta4, spreads: spreads4, color: "#F59E0B" },
  { meta: meta5, spreads: spreads5, color: "#EC4899" },
];

const STORAGE_KEY = "colorkind-progress";

function loadProgress() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return JSON.parse(saved);
  } catch {}
  return {};
}

function saveProgress(progress) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

export default function PromptRunner() {
  const [activeBook, setActiveBook] = useState(0);
  const [progress, setProgress] = useState(loadProgress);
  const [copied, setCopied] = useState(null);
  const [view, setView] = useState("dashboard"); // dashboard | runner

  useEffect(() => {
    saveProgress(progress);
  }, [progress]);

  const getKey = (bookIdx, spreadIdx, side) => `${bookIdx}-${spreadIdx}-${side}`;

  const markDone = (bookIdx, spreadIdx, side) => {
    const key = getKey(bookIdx, spreadIdx, side);
    setProgress(prev => ({ ...prev, [key]: true }));
  };

  const markUndone = (bookIdx, spreadIdx, side) => {
    const key = getKey(bookIdx, spreadIdx, side);
    setProgress(prev => {
      const next = { ...prev };
      delete next[key];
      return next;
    });
  };

  const isDone = (bookIdx, spreadIdx, side) => !!progress[getKey(bookIdx, spreadIdx, side)];

  const copyPrompt = (text, id) => {
    navigator.clipboard.writeText("/imagine prompt: " + text);
    setCopied(id);
    setTimeout(() => setCopied(null), 1500);
  };

  const getBookProgress = (bookIdx) => {
    const total = books[bookIdx].spreads.length * 2;
    let done = 0;
    books[bookIdx].spreads.forEach((_, sIdx) => {
      if (isDone(bookIdx, sIdx, "color")) done++;
      if (isDone(bookIdx, sIdx, "activity")) done++;
    });
    return { done, total, pct: Math.round((done / total) * 100) };
  };

  const getTotalProgress = () => {
    let done = 0, total = 0;
    books.forEach((_, bIdx) => {
      const bp = getBookProgress(bIdx);
      done += bp.done;
      total += bp.total;
    });
    return { done, total, pct: total ? Math.round((done / total) * 100) : 0 };
  };

  const getNextPrompt = (bookIdx) => {
    const book = books[bookIdx];
    for (let s = 0; s < book.spreads.length; s++) {
      if (!isDone(bookIdx, s, "color")) return { spreadIdx: s, side: "color" };
      if (!isDone(bookIdx, s, "activity")) return { spreadIdx: s, side: "activity" };
    }
    return null;
  };

  // DASHBOARD VIEW
  if (view === "dashboard") {
    const tp = getTotalProgress();
    return (
      <div style={{ minHeight: "100vh", background: "#FFFBF7", fontFamily: "'Nunito', sans-serif", padding: "24px 16px" }}>
        <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Nunito:wght@400;600;700&display=swap" rel="stylesheet" />
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h1 style={{ fontFamily: "'Fredoka'", fontSize: 24, fontWeight: 700, color: "#1E293B", textAlign: "center", margin: "0 0 4px" }}>
            ColorKind Press — Prompt Runner
          </h1>
          <p style={{ textAlign: "center", color: "#94A3B8", fontSize: 13, margin: "0 0 20px" }}>
            Copy prompts into Midjourney, mark done, track progress
          </p>

          {/* Overall progress */}
          <div style={{ background: "white", borderRadius: 14, padding: 20, border: "1px solid #E2E8F0", marginBottom: 20 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
              <span style={{ fontWeight: 700, fontSize: 14, color: "#1E293B" }}>Total Progress</span>
              <span style={{ fontWeight: 700, fontSize: 14, color: "#1E293B" }}>{tp.done} / {tp.total} prompts</span>
            </div>
            <div style={{ background: "#F1F5F9", borderRadius: 10, height: 12, overflow: "hidden" }}>
              <div style={{ background: "linear-gradient(90deg, #FF6B6B, #FFA45B)", height: "100%", width: `${tp.pct}%`, borderRadius: 10, transition: "width 0.3s" }} />
            </div>
            <p style={{ fontSize: 12, color: "#94A3B8", margin: "6px 0 0", textAlign: "right" }}>{tp.pct}% complete</p>
          </div>

          {/* Book cards */}
          {books.map((book, bIdx) => {
            const bp = getBookProgress(bIdx);
            const next = getNextPrompt(bIdx);
            return (
              <div key={bIdx} style={{
                background: "white", borderRadius: 14, padding: 16, border: `2px solid ${bp.pct === 100 ? "#22C55E" : book.color}`,
                marginBottom: 12, cursor: next ? "pointer" : "default",
                opacity: bp.pct === 100 ? 0.7 : 1,
              }}
                onClick={() => { if (next) { setActiveBook(bIdx); setView("runner"); } }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <h2 style={{ fontSize: 15, fontWeight: 700, color: "#1E293B", margin: 0 }}>
                      Book {bIdx + 1}: {book.meta.title.replace(" Coloring & Activity Book", "")}
                    </h2>
                    <p style={{ fontSize: 12, color: "#94A3B8", margin: "2px 0 0" }}>
                      {book.spreads.length} spreads · {book.spreads.length * 2} prompts
                    </p>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    {bp.pct === 100 ? (
                      <span style={{ color: "#22C55E", fontWeight: 700, fontSize: 14 }}>DONE</span>
                    ) : (
                      <span style={{ color: book.color, fontWeight: 700, fontSize: 14 }}>{bp.done}/{bp.total}</span>
                    )}
                  </div>
                </div>
                <div style={{ background: "#F1F5F9", borderRadius: 8, height: 8, marginTop: 10, overflow: "hidden" }}>
                  <div style={{ background: bp.pct === 100 ? "#22C55E" : book.color, height: "100%", width: `${bp.pct}%`, borderRadius: 8, transition: "width 0.3s" }} />
                </div>
                {next && (
                  <p style={{ fontSize: 12, color: book.color, margin: "8px 0 0", fontWeight: 600 }}>
                    Next: {book.spreads[next.spreadIdx].animal} ({next.side === "color" ? "Coloring" : "Activity"}) →
                  </p>
                )}
              </div>
            );
          })}

          {/* Quick tips */}
          <div style={{ background: "#FFF7ED", border: "1px solid #FDBA74", borderRadius: 12, padding: 14, marginTop: 8 }}>
            <p style={{ fontWeight: 700, fontSize: 13, color: "#9A3412", margin: "0 0 6px" }}>Workflow:</p>
            <p style={{ fontSize: 12, color: "#78350F", margin: "3px 0", lineHeight: 1.5 }}>1. Click a book to start</p>
            <p style={{ fontSize: 12, color: "#78350F", margin: "3px 0", lineHeight: 1.5 }}>2. Hit "Copy" to copy the prompt</p>
            <p style={{ fontSize: 12, color: "#78350F", margin: "3px 0", lineHeight: 1.5 }}>3. Paste in Midjourney, pick best result, upscale</p>
            <p style={{ fontSize: 12, color: "#78350F", margin: "3px 0", lineHeight: 1.5 }}>4. Hit "Done" to mark it and move to next</p>
            <p style={{ fontSize: 12, color: "#78350F", margin: "3px 0", lineHeight: 1.5 }}>5. Progress saves automatically in your browser</p>
          </div>
        </div>
      </div>
    );
  }

  // RUNNER VIEW
  const book = books[activeBook];
  const bp = getBookProgress(activeBook);

  return (
    <div style={{ minHeight: "100vh", background: "#FFFBF7", fontFamily: "'Nunito', sans-serif", padding: "24px 16px" }}>
      <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Nunito:wght@400;600;700&display=swap" rel="stylesheet" />
      <div style={{ maxWidth: 640, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
          <button onClick={() => setView("dashboard")} style={{
            background: "none", border: "1px solid #E2E8F0", borderRadius: 8, padding: "6px 14px",
            fontSize: 13, cursor: "pointer", color: "#64748B", fontWeight: 600,
          }}>← Back</button>
          <div style={{ flex: 1 }}>
            <h1 style={{ fontFamily: "'Fredoka'", fontSize: 18, fontWeight: 700, color: "#1E293B", margin: 0 }}>
              Book {activeBook + 1}: {book.meta.title.replace(" Coloring & Activity Book", "")}
            </h1>
            <p style={{ fontSize: 12, color: "#94A3B8", margin: "2px 0 0" }}>{bp.done}/{bp.total} prompts done</p>
          </div>
        </div>

        {/* Progress bar */}
        <div style={{ background: "#F1F5F9", borderRadius: 10, height: 10, marginBottom: 20, overflow: "hidden" }}>
          <div style={{ background: book.color, height: "100%", width: `${bp.pct}%`, borderRadius: 10, transition: "width 0.3s" }} />
        </div>

        {/* All spreads */}
        {book.spreads.map((spread, sIdx) => {
          const colorDone = isDone(activeBook, sIdx, "color");
          const actDone = isDone(activeBook, sIdx, "activity");
          const bothDone = colorDone && actDone;

          return (
            <div key={sIdx} style={{
              background: bothDone ? "#F0FDF4" : "white",
              borderRadius: 14, marginBottom: 12,
              border: `1px solid ${bothDone ? "#BBF7D0" : "#E2E8F0"}`,
              overflow: "hidden",
            }}>
              {/* Spread header */}
              <div style={{ padding: "12px 16px", borderBottom: "1px solid #F1F5F9", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontWeight: 700, fontSize: 14, color: bothDone ? "#166534" : "#1E293B" }}>
                  {sIdx + 1}. {spread.animal} {bothDone ? "✓" : ""}
                </span>
                <span style={{ fontSize: 11, color: "#94A3B8" }}>
                  {colorDone && actDone ? "2/2" : colorDone || actDone ? "1/2" : "0/2"}
                </span>
              </div>

              {/* Coloring page prompt */}
              <div style={{ padding: "10px 16px", borderBottom: "1px solid #F1F5F9", background: colorDone ? "#F0FDF4" : "#FAFBFC" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
                  <span style={{ fontSize: 12, fontWeight: 700, color: book.color }}>
                    RIGHT PAGE — Coloring
                  </span>
                  <div style={{ display: "flex", gap: 6 }}>
                    <button
                      onClick={() => copyPrompt(spread.coloringPage.prompt, `c-${activeBook}-${sIdx}`)}
                      style={{
                        background: copied === `c-${activeBook}-${sIdx}` ? "#10B981" : book.color,
                        color: "white", border: "none", borderRadius: 6, padding: "4px 10px",
                        fontSize: 11, fontWeight: 600, cursor: "pointer",
                      }}
                    >
                      {copied === `c-${activeBook}-${sIdx}` ? "Copied!" : "Copy"}
                    </button>
                    {colorDone ? (
                      <button onClick={() => markUndone(activeBook, sIdx, "color")} style={{
                        background: "#22C55E", color: "white", border: "none", borderRadius: 6,
                        padding: "4px 10px", fontSize: 11, fontWeight: 600, cursor: "pointer",
                      }}>Done ✓</button>
                    ) : (
                      <button onClick={() => markDone(activeBook, sIdx, "color")} style={{
                        background: "white", color: "#64748B", border: "1px solid #E2E8F0", borderRadius: 6,
                        padding: "4px 10px", fontSize: 11, fontWeight: 600, cursor: "pointer",
                      }}>Mark Done</button>
                    )}
                  </div>
                </div>
                <p style={{ fontSize: 11, color: "#64748B", margin: 0, lineHeight: 1.6, fontFamily: "monospace", wordBreak: "break-word" }}>
                  /imagine prompt: {spread.coloringPage.prompt}
                </p>
              </div>

              {/* Activity page prompt */}
              <div style={{ padding: "10px 16px", background: actDone ? "#F0FDF4" : "#FAFBFC" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
                  <span style={{ fontSize: 12, fontWeight: 700, color: "#F59E0B" }}>
                    LEFT PAGE — {spread.activityPage.title}
                  </span>
                  <div style={{ display: "flex", gap: 6 }}>
                    <button
                      onClick={() => copyPrompt(spread.activityPage.prompt, `a-${activeBook}-${sIdx}`)}
                      style={{
                        background: copied === `a-${activeBook}-${sIdx}` ? "#10B981" : "#F59E0B",
                        color: "white", border: "none", borderRadius: 6, padding: "4px 10px",
                        fontSize: 11, fontWeight: 600, cursor: "pointer",
                      }}
                    >
                      {copied === `a-${activeBook}-${sIdx}` ? "Copied!" : "Copy"}
                    </button>
                    {actDone ? (
                      <button onClick={() => markUndone(activeBook, sIdx, "activity")} style={{
                        background: "#22C55E", color: "white", border: "none", borderRadius: 6,
                        padding: "4px 10px", fontSize: 11, fontWeight: 600, cursor: "pointer",
                      }}>Done ✓</button>
                    ) : (
                      <button onClick={() => markDone(activeBook, sIdx, "activity")} style={{
                        background: "white", color: "#64748B", border: "1px solid #E2E8F0", borderRadius: 6,
                        padding: "4px 10px", fontSize: 11, fontWeight: 600, cursor: "pointer",
                      }}>Mark Done</button>
                    )}
                  </div>
                </div>
                <p style={{ fontSize: 11, color: "#64748B", margin: 0, lineHeight: 1.6, fontFamily: "monospace", wordBreak: "break-word" }}>
                  /imagine prompt: {spread.activityPage.prompt}
                </p>
                <span style={{
                  display: "inline-block", marginTop: 6, fontSize: 10, padding: "2px 8px",
                  borderRadius: 10, background: "#FEF3C7", color: "#92400E", fontWeight: 600,
                }}>
                  {spread.activityPage.type}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
