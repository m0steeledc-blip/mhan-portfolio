import SectionHeader from "./SectionHeader";

const CAPABILITIES = [
  {
    head: "Video & Film",
    items: ["Direction", "Cinematography", "Storyboarding", "Editing (Premiere)", "Color (DaVinci Resolve)", "Audio (Audition)"],
  },
  {
    head: "Brand & Print",
    items: ["Brand Identity", "Visual Concepts", "OOH · Billboard · LED", "In‑Store POP", "Print Collateral", "Campaign Systems"],
  },
  {
    head: "Motion & Post",
    items: ["After Effects", "Kinetic Type", "LED Loops", "Intros/Outros", "VFX Compositing", "Generative Fill"],
  },
  {
    head: "Creative Tech",
    items: ["UI/UX (web tools)", "HTML · CSS · JS", "Asset pipelines", "Drive automations", "Interactive content", "Internal tooling"],
  },
  {
    head: "Leadership",
    items: ["Team mentorship (4)", "Brief interpretation", "Sprint workflows", "Cross‑functional coordination", "Quality review", "Project management"],
  },
  {
    head: "AI Workflow",
    items: ["Adobe Firefly", "ChatGPT · Claude · Gemini", "NotebookLM · Perplexity", "Google AI Studio", "Concept ideation", "Script + brief synthesis"],
  },
];

export default function Capabilities() {
  return (
    <section id="process" style={{
      paddingTop: 120, paddingBottom: 120, background: "var(--bg-1)",
      borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)",
    }}>
      <div className="container">
        <SectionHeader index="06" title="Capabilities" subtitle="Full‑stack creative" />

        <div style={{
          display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1,
          marginTop: 56, background: "var(--line)",
          border: "1px solid var(--line)",
        }}>
          {CAPABILITIES.map((c, i) => (
            <div key={c.head} style={{
              padding: "36px 32px", background: "var(--bg-1)",
              display: "flex", flexDirection: "column", gap: 16,
              minHeight: 280,
            }}>
              <div className="mono" style={{ fontSize: 11, letterSpacing: ".18em", color: "var(--accent)" }}>
                0{i + 1}
              </div>
              <h3 className="serif" style={{ margin: 0, fontSize: 26, lineHeight: 1.1, fontWeight: 400 }}>
                {c.head}
              </h3>
              <ul style={{
                margin: "auto 0 0", padding: 0, listStyle: "none",
                display: "flex", flexDirection: "column", gap: 6,
              }}>
                {c.items.map(it => (
                  <li key={it} style={{
                    fontSize: 14.5, color: "var(--fg-dim)", lineHeight: 1.5,
                    display: "flex", gap: 10, alignItems: "baseline",
                  }}>
                    <span style={{ color: "var(--fg-faint)", fontSize: 10 }}>—</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
