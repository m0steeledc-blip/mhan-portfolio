interface SectionHeaderProps {
  index: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeader({ index, title, subtitle }: SectionHeaderProps) {
  return (
    <div style={{
      display: "grid", gridTemplateColumns: "auto 1fr auto", alignItems: "end",
      gap: 32, paddingBottom: 24, borderBottom: "1px solid var(--line)",
    }}>
      <div className="mono" style={{
        fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--fg-faint)",
      }}>
        / {index}
      </div>
      <h2 className="serif" style={{
        margin: 0, fontSize: "clamp(34px, 4vw, 56px)", lineHeight: 1,
        letterSpacing: "-.01em", fontWeight: 400,
      }}>
        {title}
      </h2>
      {subtitle && (
        <div className="mono" style={{
          fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase",
          color: "var(--fg-dim)", textAlign: "right", maxWidth: 280,
        }}>{subtitle}</div>
      )}
    </div>
  );
}
