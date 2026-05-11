import Placeholder from "./Placeholder";

function HeroMeta() {
  return (
    <div className="mono" style={{
      display: "flex", gap: 24, flexWrap: "wrap",
      fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase",
      color: "var(--fg-dim)",
    }}>
      <span><span style={{ color: "var(--accent)" }}>●</span> Available · Q3 2026</span>
      <span>Metro Manila, PH · UTC+8</span>
      <span>Open to Remote</span>
    </div>
  );
}

function ScrollHint() {
  return (
    <div className="mono" style={{
      display: "flex", alignItems: "center", gap: 10, marginTop: 32,
      fontSize: 10.5, letterSpacing: ".18em", textTransform: "uppercase",
      color: "var(--fg-faint)",
    }}>
      <span>Scroll</span>
      <span style={{ display: "inline-block", width: 40, height: 1, background: "currentColor" }} />
      <span>Selected Work</span>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" style={{
      position: "relative", paddingTop: 120, paddingBottom: 80,
      minHeight: "100vh", display: "flex", flexDirection: "column",
    }}>
      <div style={{
        position: "absolute", top: "-10%", left: "-10%", right: "-10%", height: "70%",
        background: "radial-gradient(ellipse at 50% 0%, var(--accent-glow), transparent 60%)",
        pointerEvents: "none", zIndex: 0,
      }} />
      <div className="container" style={{
        position: "relative", zIndex: 1, flex: 1,
        display: "flex", flexDirection: "column", gap: 48,
      }}>
        <HeroMeta />

        <div style={{
          display: "grid", gridTemplateColumns: "minmax(0,1fr) auto",
          gap: 40, alignItems: "end",
        }}>
          <h1 className="serif" style={{
            margin: 0, fontSize: "clamp(54px, 8vw, 132px)", lineHeight: ".95",
            letterSpacing: "-.02em", fontWeight: 400,
          }}>
            Full‑pipeline<br />
            Senior Multimedia Artist.<br />
            <span className="italic" style={{ color: "var(--accent)" }}>Brand. Cinematography.</span>{" "}
            <span className="italic">AI‑augmented.</span>
          </h1>
          <div style={{
            display: "flex", flexDirection: "column", gap: 12,
            minWidth: 240, paddingBottom: 12,
          }}>
            <div className="mono" style={{
              fontSize: 10.5, letterSpacing: ".14em", textTransform: "uppercase",
              color: "var(--fg-faint)",
            }}>
              Manifesto
            </div>
            <div className="serif italic" style={{ fontSize: 22, lineHeight: 1.3, color: "var(--fg)", maxWidth: 280 }}>
              &ldquo;Vision is the skill. Everything else is tools.&rdquo;
            </div>
            <div style={{ fontSize: 14, lineHeight: 1.5, color: "var(--fg-dim)", maxWidth: 280, marginTop: 4 }}>
              Senior Multimedia Artist at EO‑Executive Optical, owning brand, video and creative tech
              across 380+ branches. Built for scale.
            </div>
          </div>
        </div>

        <div style={{ marginTop: "auto", position: "relative" }}>
          <Placeholder
            label="01 — Featured Reel · drop showreel.mp4 here"
            kind="video"
            ratio="21/9"
            tone="warm"
          />
          <div style={{
            position: "absolute", left: 24, bottom: 24, right: 24,
            display: "flex", justifyContent: "space-between", alignItems: "flex-end",
            pointerEvents: "none",
          }}>
            <div>
              <div className="mono" style={{
                fontSize: 10.5, letterSpacing: ".14em", textTransform: "uppercase",
                color: "var(--fg-faint)",
              }}>
                Showreel · 2022–2026
              </div>
              <div className="serif italic" style={{ fontSize: 28, marginTop: 4 }}>
                Four years, one national brand.
              </div>
            </div>
            <div className="mono" style={{
              fontSize: 10.5, letterSpacing: ".14em", textTransform: "uppercase",
              color: "var(--fg-faint)",
            }}>
              500K+ Views · 380+ Branches
            </div>
          </div>
        </div>

        <ScrollHint />
      </div>
    </section>
  );
}
