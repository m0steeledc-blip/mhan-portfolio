import Placeholder from "./Placeholder";
import SectionHeader from "./SectionHeader";

const STEPS = [
  {
    n: "01",
    t: "The bottleneck",
    d: "Every campaign launch meant manually uploading 28 LED resize variants per branch — a slow, error‑prone handoff between Creative and MIS.",
  },
  {
    n: "02",
    t: "The system",
    d: "I designed and built a web tool that ingests masters and serves the right resize variant to each branch via Google Drive integration.",
  },
  {
    n: "03",
    t: "Adoption",
    d: "Now the internal standard for nationwide LED deployment across 380+ EO branches. Cut deployment time and revision cycles significantly.",
  },
];

export default function CaseStudyLED() {
  return (
    <section id="case-led" style={{
      paddingTop: 120, paddingBottom: 120,
      background: "var(--bg-1)",
      borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)",
    }}>
      <div className="container">
        <SectionHeader index="04" title="Case Study — LED Asset Hub" subtitle="Internal tool · creative tech" />

        <div style={{
          display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: 64,
          marginTop: 56, alignItems: "start",
        }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <Placeholder label="LED ASSET HUB · UI Screenshot" ratio="16/10" tone="warm" />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
              <Placeholder label="Branch picker UI" ratio="4/3" tone="warm" />
              <Placeholder label="Variant grid" ratio="4/3" tone="warm" />
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            <p className="serif" style={{ fontSize: 28, lineHeight: 1.25, margin: 0 }}>
              Most multimedia artists don&rsquo;t ship internal software.{" "}
              <span className="italic" style={{ color: "var(--accent)" }}>
                I built the system my team needed to scale a national rollout.
              </span>
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 24, marginTop: 8 }}>
              {STEPS.map(s => (
                <div key={s.n} style={{
                  display: "grid", gridTemplateColumns: "auto 1fr", gap: 20,
                  paddingBottom: 24, borderBottom: "1px solid var(--line)",
                }}>
                  <div className="mono" style={{ fontSize: 11, letterSpacing: ".18em", color: "var(--accent)" }}>
                    {s.n}
                  </div>
                  <div>
                    <div className="serif" style={{ fontSize: 22, lineHeight: 1.2 }}>{s.t}</div>
                    <p style={{ margin: "8px 0 0", color: "var(--fg-dim)", fontSize: 15, lineHeight: 1.55 }}>{s.d}</p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{
              padding: 24, border: "1px solid var(--line-strong)",
              background: "rgba(232,167,106,.04)",
            }}>
              <div className="mono" style={{
                fontSize: 10.5, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--accent)",
              }}>
                Outcome
              </div>
              <p className="serif" style={{ margin: "10px 0 0", fontSize: 22, lineHeight: 1.3 }}>
                Adopted as the active internal standard. Every campaign now ships through it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
