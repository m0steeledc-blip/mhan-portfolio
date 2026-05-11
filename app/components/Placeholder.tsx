import type { CSSProperties } from "react";

interface PlaceholderProps {
  label: string;
  kind?: "image" | "video";
  ratio?: string;
  style?: CSSProperties;
  tone?: "warm" | "cool" | "neutral";
  className?: string;
}

export default function Placeholder({
  label,
  kind = "image",
  ratio = "16/9",
  style = {},
  tone = "warm",
  className = "",
}: PlaceholderProps) {
  const tones = {
    warm:    { a: "rgba(232,167,106,.07)", b: "rgba(232,167,106,.14)", border: "rgba(245,241,234,.10)" },
    cool:    { a: "rgba(140,170,210,.06)", b: "rgba(140,170,210,.12)", border: "rgba(245,241,234,.10)" },
    neutral: { a: "rgba(245,241,234,.04)", b: "rgba(245,241,234,.09)", border: "rgba(245,241,234,.10)" },
  };
  const t = tones[tone] ?? tones.warm;
  return (
    <div
      className={className}
      style={{
        position: "relative",
        aspectRatio: ratio,
        width: "100%",
        background: `repeating-linear-gradient(135deg, ${t.a} 0 14px, ${t.b} 14px 28px)`,
        border: `1px solid ${t.border}`,
        overflow: "hidden",
        ...style,
      }}
    >
      <div style={{
        position: "absolute", inset: 0, display: "flex",
        alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 8,
        textAlign: "center", padding: 20,
      }}>
        {kind === "video" && (
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" style={{ opacity: .55 }}>
            <circle cx="11" cy="11" r="10" stroke="currentColor" strokeWidth="1" />
            <path d="M8.5 7.5L15 11L8.5 14.5V7.5Z" fill="currentColor" />
          </svg>
        )}
        <div className="mono" style={{
          fontSize: 10.5, letterSpacing: ".14em", textTransform: "uppercase",
          color: "rgba(245,241,234,.55)",
        }}>{label}</div>
      </div>
    </div>
  );
}
