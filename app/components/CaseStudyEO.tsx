import Placeholder from "./Placeholder";
import SectionHeader from "./SectionHeader";

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "90px 1fr", gap: 14, alignItems: "baseline" }}>
      <div className="mono" style={{
        fontSize: 10.5, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--fg-faint)",
      }}>{label}</div>
      <div style={{ fontSize: 14, color: "var(--fg)", lineHeight: 1.45 }}>{value}</div>
    </div>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div style={{
      padding: "16px 14px", border: "1px solid var(--line)",
      background: "rgba(245,241,234,.02)",
    }}>
      <div className="serif" style={{ fontSize: 32, lineHeight: 1, color: "var(--accent)" }}>{n}</div>
      <div className="mono" style={{
        fontSize: 10, letterSpacing: ".14em", textTransform: "uppercase",
        color: "var(--fg-dim)", marginTop: 6,
      }}>{label}</div>
    </div>
  );
}

export default function CaseStudyEO() {
  return (
    <section id="case-eo" style={{
      paddingTop: 120, paddingBottom: 120,
      background: "linear-gradient(180deg, var(--bg) 0%, var(--bg-1) 20%, var(--bg-1) 80%, var(--bg) 100%)",
      position: "relative",
    }}>
      <div className="container">
        <SectionHeader
          index="02"
          title="Case Study — EO Brand Identity"
          subtitle="Concept selected from internal submissions · 2022"
        />

        <div style={{
          display: "grid", gridTemplateColumns: "minmax(0,1fr) 380px", gap: 48,
          marginTop: 56, alignItems: "start",
        }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <Placeholder label="EO IDENTITY · KEY HERO IMAGE" ratio="4/3" tone="warm" />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
              <Placeholder label="Logo system · usage grid" ratio="4/3" tone="warm" />
              <Placeholder label="Storefront signage · in‑situ" ratio="4/3" tone="warm" />
            </div>
            <Placeholder label="Brand collateral · print + digital + OOH" ratio="21/9" tone="warm" />
          </div>

          <aside style={{ position: "sticky", top: 100, display: "flex", flexDirection: "column", gap: 28 }}>
            <Meta label="Client" value="EO‑Executive Optical" />
            <Meta label="Year"   value="2022 — Present" />
            <Meta label="Role"   value="Concept Lead · Brand Designer" />
            <Meta label="Collab" value="Creative Director" />
            <Meta label="Scope"  value="Identity system · Signage · Print · Digital · Broadcast" />

            <div className="hr" style={{ margin: "8px 0" }} />

            <p style={{ margin: 0, fontSize: 16, lineHeight: 1.55, color: "var(--fg)" }}>
              An internal call for a new EO identity. I submitted a concept built around clarity,
              optical precision and a confident editorial tone.
            </p>
            <p style={{ margin: 0, fontSize: 16, lineHeight: 1.55, color: "var(--fg-dim)" }}>
              Selected and refined with the Creative Director, the system has been the active brand
              standard since 2022 — across 380+ branches, all OOH and LED billboards, e‑commerce,
              broadcast and in‑store environments nationwide.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 8 }}>
              <Stat n="380+" label="Branches" />
              <Stat n="4yrs" label="Live" />
              <Stat n="80+"  label="Mall locations" />
              <Stat n="All"  label="National OOH" />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
