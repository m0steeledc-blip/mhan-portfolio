"use client";
import { useEffect, useRef, useState } from "react";

function pad(n: number, len = 2) {
  return String(n).padStart(len, "0");
}

function Timecode({ running }: { running: boolean }) {
  const [tc, setTc] = useState("00:00:00:00");
  const frame = useRef(0);
  const start = useRef<number | null>(null);

  useEffect(() => {
    if (!running) return;
    let raf: number;
    const tick = (now: number) => {
      if (!start.current) start.current = now;
      const elapsed = now - start.current;
      const totalFrames = Math.floor((elapsed / 1000) * 24);
      const f  = totalFrames % 24;
      const s  = Math.floor(totalFrames / 24) % 60;
      const m  = Math.floor(totalFrames / (24 * 60)) % 60;
      const h  = Math.floor(totalFrames / (24 * 3600));
      frame.current = totalFrames;
      setTc(`${pad(h)}:${pad(m)}:${pad(s)}:${pad(f)}`);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [running]);

  return <span className="tc">{tc}</span>;
}

function SlateDivider({ index, label }: { index: string; label: string }) {
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: 16,
      borderTop: "1px solid var(--line)",
      paddingTop: 10, paddingBottom: 10,
      marginBottom: 0,
    }}>
      <span className="mono" style={{
        fontSize: 10, letterSpacing: ".18em", textTransform: "uppercase",
        color: "var(--accent-text)", minWidth: 28,
      }}>{index}</span>
      <span style={{
        flex: 1, height: 1, background: "var(--line)",
      }} />
      <span className="mono" style={{
        fontSize: 10, letterSpacing: ".18em", textTransform: "uppercase",
        color: "var(--fg-faint)",
      }}>{label}</span>
    </div>
  );
}

function SMPTEPlaceholder() {
  return (
    <div style={{
      position: "relative",
      width: "100%",
      aspectRatio: "21/9",
      background: "var(--bg-2)",
      overflow: "hidden",
      border: "1px solid var(--line)",
    }}>
      {/* SMPTE bars — faint, intentional */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex",
      }}>
        {[
          ["#c0c0c0", 0.75], ["#c0b800", 0.75], ["#00b8c0", 0.75],
          ["#00b800", 0.75], ["#b800b8", 0.75], ["#b80000", 0.75],
          ["#0000b8", 0.75],
        ].map(([color, h], i) => (
          <div key={i} style={{
            flex: 1, height: `${Number(h) * 100}%`,
            background: color as string,
            opacity: 0.07,
          }} />
        ))}
      </div>

      {/* Center info */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        gap: 8,
      }}>
        <span className="mono" style={{
          fontSize: 10, letterSpacing: ".2em", textTransform: "uppercase",
          color: "var(--fg-ghost)",
        }}>SHOWREEL · 2022–2026</span>
        <span className="mono" style={{
          fontSize: 32, fontWeight: 700, color: "var(--line-mid)",
          letterSpacing: "-.02em",
        }}>NO SIGNAL</span>
        <span className="tc" style={{ marginTop: 4 }}>00:00:00:00</span>
      </div>

      {/* Bottom bar */}
      <div style={{
        position: "absolute", left: 0, right: 0, bottom: 0,
        borderTop: "1px solid var(--line)",
        background: "var(--bg-1)",
        padding: "10px 20px",
        display: "flex", justifyContent: "space-between", alignItems: "center",
      }}>
        <span className="mono" style={{
          fontSize: 10, letterSpacing: ".14em", textTransform: "uppercase",
          color: "var(--fg-faint)",
        }}>SHOWREEL · MHAN · 2022–2026</span>
        <span className="mono" style={{
          fontSize: 10, letterSpacing: ".14em", textTransform: "uppercase",
          color: "var(--fg-faint)",
        }}>500K+ VIEWS · 380+ BRANCHES</span>
      </div>
    </div>
  );
}

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section id="top" style={{
      position: "relative",
      paddingTop: 0,
      minHeight: "100svh",
      display: "flex",
      flexDirection: "column",
    }}>

      {/* ── Timecode HUD — top right corner ── */}
      <div style={{
        position: "fixed", top: 16, right: "var(--pad-x)",
        zIndex: 50, display: "flex", alignItems: "center", gap: 10,
        pointerEvents: "none",
      }}>
        <span className="mono" style={{
          fontSize: 10, letterSpacing: ".16em", textTransform: "uppercase",
          color: "var(--fg-ghost)",
        }}>TC</span>
        <Timecode running={mounted} />
      </div>

      <div className="container" style={{
        flex: 1, display: "flex", flexDirection: "column",
        paddingTop: 120, paddingBottom: 80, gap: 0,
      }}>

        {/* ── Slate header ── */}
        <SlateDivider index="/ 00" label="IDENT · EDMAR CAYABYAB" />

        {/* ── Status line ── */}
        <div className="mono" style={{
          display: "flex", gap: 32, flexWrap: "wrap",
          fontSize: 10, letterSpacing: ".14em", textTransform: "uppercase",
          color: "var(--fg-faint)",
          padding: "14px 0",
          borderBottom: "1px solid var(--line)",
        }}>
          <span>
            <span style={{
              display: "inline-block", width: 6, height: 6,
              borderRadius: "50%", background: "var(--accent)",
              marginRight: 8, verticalAlign: "middle",
            }} />
            Available · Q3 2026
          </span>
          <span>Metro Manila, PH · UTC+8</span>
          <span>Open to Remote</span>
        </div>

        {/* ── Hero headline ── */}
        <div style={{
          flex: 1, display: "flex", flexDirection: "column",
          justifyContent: "center",
          padding: "clamp(40px, 6vh, 80px) 0",
          gap: 24,
        }}>

          <h1 className="serif" style={{
            margin: 0,
            fontSize: "clamp(52px, 7.5vw, 128px)",
            lineHeight: ".92",
            letterSpacing: "-.025em",
            fontWeight: 400,
            maxWidth: "14ch",
          }}>
            Full‑pipeline<br />
            Senior<br />
            Multimedia<br />
            <span className="italic" style={{ color: "var(--accent-text)" }}>Artist.</span>
          </h1>

          {/* ── Sub-row: descriptor + manifesto ── */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 40,
            paddingTop: 24,
            borderTop: "1px solid var(--line)",
            maxWidth: 900,
          }}>
            <div style={{
              fontSize: "clamp(14px, 1.2vw, 16px)",
              lineHeight: 1.6,
              color: "var(--fg-dim)",
              fontWeight: 300,
            }}>
              Brand. Cinematography. AI‑augmented.<br />
              Senior Multimedia Artist at EO‑Executive Optical —
              owning brand, video and creative tech across 380+ branches.
              Built for scale.
            </div>
            <div style={{
              borderLeft: "1px solid var(--line)",
              paddingLeft: 32,
              display: "flex", flexDirection: "column", gap: 6,
            }}>
              <span className="mono" style={{
                fontSize: 10, letterSpacing: ".16em", textTransform: "uppercase",
                color: "var(--fg-ghost)",
              }}>Manifesto</span>
              <span className="serif italic" style={{
                fontSize: "clamp(16px, 1.5vw, 20px)",
                lineHeight: 1.35,
                color: "var(--fg)",
              }}>
                &ldquo;Vision is the skill.<br />Everything else is tools.&rdquo;
              </span>
            </div>
          </div>
        </div>

        {/* ── Showreel slate ── */}
        <SlateDivider index="/ 01" label="FEATURED REEL · SHOWREEL 2022–2026" />
        <div style={{ marginTop: 2 }}>
          <SMPTEPlaceholder />
        </div>

        {/* ── Scroll cue ── */}
        <div className="mono" style={{
          display: "flex", alignItems: "center", gap: 12,
          marginTop: 24,
          fontSize: 10, letterSpacing: ".18em", textTransform: "uppercase",
          color: "var(--fg-ghost)",
        }}>
          <span>Scroll</span>
          <span style={{ flex: 1, maxWidth: 48, height: 1, background: "var(--line-mid)" }} />
          <span>Selected Work</span>
        </div>

      </div>
    </section>
  );
}
