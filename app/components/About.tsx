import Placeholder from "./Placeholder";
import SectionHeader from "./SectionHeader";

function ToolChip({ name, sub }: { name: string; sub: string }) {
  return (
    <div style={{
      padding: "12px 14px", border: "1px solid var(--line)",
      background: "rgba(245,241,234,.015)",
    }}>
      <div style={{ fontSize: 14, color: "var(--fg)" }}>{name}</div>
      <div className="mono" style={{
        fontSize: 10, letterSpacing: ".1em", color: "var(--fg-faint)", marginTop: 4,
      }}>{sub}</div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" style={{ paddingTop: 120, paddingBottom: 120 }}>
      <div className="container">
        <SectionHeader index="05" title="About + Process" subtitle="How I work" />

        <div style={{
          display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.1fr)", gap: 64,
          marginTop: 56, alignItems: "start",
        }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <Placeholder label="PORTRAIT · drop headshot.jpg" ratio="4/5" tone="warm" />
            <div className="mono" style={{ fontSize: 11, letterSpacing: ".14em", color: "var(--fg-dim)" }}>
              MHAN CAYABYAB · METRO MANILA, PH
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            <p className="serif" style={{
              fontSize: "clamp(26px, 2.4vw, 34px)", lineHeight: 1.3, margin: 0, fontWeight: 400,
            }}>
              I&rsquo;m a multimedia generalist with a{" "}
              <span className="italic" style={{ color: "var(--accent)" }}>cinematographer&rsquo;s eye</span>{" "}
              and a{" "}
              <span className="italic" style={{ color: "var(--accent)" }}>creative technologist&rsquo;s stack</span>.
            </p>

            <p style={{ margin: 0, fontSize: 16, lineHeight: 1.65, color: "var(--fg-dim)" }}>
              Four years at EO‑Executive Optical — one of the Philippines&rsquo; largest optical retail chains
              with 380+ branches nationwide. I started as Multimedia Artist in 2022, won the company&rsquo;s
              brand identity redesign, ran the full video pipeline as director and DP, and got promoted to
              Senior in three years. Today I lead a four‑person junior creative team.
            </p>

            <p style={{ margin: 0, fontSize: 16, lineHeight: 1.65, color: "var(--fg-dim)" }}>
              I&rsquo;m equally at home calling a shot list at 6am on location, color‑grading in Resolve at
              midnight, building a brand system in Illustrator, or wiring up an internal tool in HTML when
              no one else will.
            </p>

            <div style={{
              marginTop: 8, padding: 28, border: "1px solid var(--line)",
              background: "rgba(245,241,234,.02)",
            }}>
              <div className="mono" style={{
                fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase",
                color: "var(--accent)", display: "flex", alignItems: "center", gap: 10,
              }}>
                <span style={{
                  display: "inline-block", width: 6, height: 6,
                  background: "var(--accent)", borderRadius: 999,
                }} />
                AI‑Augmented Practice
              </div>
              <p className="serif" style={{ margin: "14px 0 0", fontSize: 22, lineHeight: 1.35 }}>
                I bring AI into ideation, scripting and production to move faster without dropping the
                brand standard.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14, marginTop: 22 }}>
                <ToolChip name="Adobe Firefly" sub="Gen Fill · Expand" />
                <ToolChip name="ChatGPT"       sub="Scripting · ideation" />
                <ToolChip name="Claude"        sub="Long‑form · craft" />
                <ToolChip name="Gemini"        sub="Visual reference" />
                <ToolChip name="NotebookLM"    sub="Brief synthesis" />
                <ToolChip name="Perplexity"    sub="Trend research" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
