import SectionHeader from "./SectionHeader";

const KIT = [
  "Canon R7",
  "Canon 90D",
  "DJI RS3",
  "Canon EF 24‑70 f/2.8L II",
  "Samyang 35 T1.5 Cine",
  "Feelworld monitor",
];

const AI_STACK = [
  { name: "Claude",        sub: "Long-form · craft · code" },
  { name: "Adobe Firefly", sub: "Gen Fill · Expand"        },
  { name: "ChatGPT",       sub: "Scripting · ideation"     },
  { name: "Gemini",        sub: "Visual reference"         },
  { name: "NotebookLM",    sub: "Brief synthesis"          },
  { name: "Perplexity",    sub: "Trend research"           },
];

const POST_STACK = [
  "Adobe Premiere Pro",
  "DaVinci Resolve",
  "After Effects",
  "Adobe Audition",
  "Illustrator · Photoshop",
];

export default function About() {
  return (
    <section id="about" style={{ paddingTop: "var(--pad-section)", paddingBottom: "var(--pad-section)" }}>
      <div className="container">
        <SectionHeader index="05" title="About" subtitle="Metro Manila · UTC+8" />

        {/* Bio — single column, editorial */}
        <div style={{ maxWidth: 680, marginTop: 48 }}>
          <p className="serif" style={{
            margin: 0, fontSize: "clamp(20px,1.8vw,26px)", lineHeight: 1.45,
            fontWeight: 400, color: "var(--fg)",
          }}>
            Four years at EO‑Executive Optical — one of the Philippines&rsquo; largest optical retail chains
            with 380+ branches nationwide.
          </p>
          <p style={{
            margin: "20px 0 0", fontSize: 16, lineHeight: 1.7,
            color: "var(--fg-dim)", fontWeight: 300,
          }}>
            Started as Multimedia Artist in 2022. Won the company&rsquo;s brand identity redesign that same year.
            Ran the full video pipeline as director and DP. Promoted to Senior in three years.
            Today I lead a four‑person junior creative team.
          </p>
          <p style={{
            margin: "16px 0 0", fontSize: 16, lineHeight: 1.7,
            color: "var(--fg-dim)", fontWeight: 300,
          }}>
            Equally at home calling a shot list at 6am, color‑grading at midnight, building a brand system
            in Illustrator, or wiring up an internal tool in HTML when no one else will.
          </p>
        </div>

        {/* Three-column kit + stack section */}
        <div
          className="flex flex-col md:flex-row"
          style={{
            marginTop: 64, gap: 0,
            border: "1px solid var(--line)",
          }}
        >

          {/* Camera kit */}
          <div style={{
            flex: 1, padding: "32px 28px",
            borderBottom: "1px solid var(--line)",
          }}
            className="md:border-b-0 md:border-r"
          >
            <div className="mono" style={{
              fontSize: 10, letterSpacing: ".2em", textTransform: "uppercase",
              color: "var(--fg-faint)", marginBottom: 20,
            }}>Camera Kit</div>
            <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              {KIT.map(item => (
                <li key={item} style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
                  <span className="mono" style={{ fontSize: 10, color: "var(--accent-text)", flexShrink: 0 }}>—</span>
                  <span className="mono" style={{
                    fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase",
                    color: "var(--fg-dim)",
                  }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Post stack */}
          <div style={{
            flex: 1, padding: "32px 28px",
            borderBottom: "1px solid var(--line)",
          }}
            className="md:border-b-0 md:border-r"
          >
            <div className="mono" style={{
              fontSize: 10, letterSpacing: ".2em", textTransform: "uppercase",
              color: "var(--fg-faint)", marginBottom: 20,
            }}>Post Stack</div>
            <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              {POST_STACK.map(item => (
                <li key={item} style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
                  <span className="mono" style={{ fontSize: 10, color: "var(--accent-text)", flexShrink: 0 }}>—</span>
                  <span className="mono" style={{
                    fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase",
                    color: "var(--fg-dim)",
                  }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* AI stack */}
          <div style={{ flex: 1, padding: "32px 28px" }}>
            <div className="mono" style={{
              fontSize: 10, letterSpacing: ".2em", textTransform: "uppercase",
              color: "var(--fg-faint)", marginBottom: 20,
            }}>AI Stack</div>
            <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              {AI_STACK.map(item => (
                <li key={item.name} style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
                  <span className="mono" style={{ fontSize: 10, color: "var(--accent-text)", flexShrink: 0 }}>—</span>
                  <div>
                    <span className="mono" style={{
                      fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase",
                      color: "var(--fg-dim)",
                    }}>{item.name}</span>
                    <span className="mono" style={{
                      fontSize: 10, letterSpacing: ".06em", textTransform: "uppercase",
                      color: "var(--fg-faint)", marginLeft: 8,
                    }}>{item.sub}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
