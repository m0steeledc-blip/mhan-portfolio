interface SMPTEBarsProps {
  label?: string;
  sublabel?: string;
}

const BARS = [
  "#c0c0c0",
  "#c0b800",
  "#00b8c0",
  "#00b800",
  "#b800b8",
  "#b80000",
  "#0000b8",
];

export default function SMPTEBars({ label, sublabel }: SMPTEBarsProps) {
  return (
    <div style={{
      position: "relative",
      width: "100%",
      height: "56vh",
      minHeight: 280,
      background: "var(--bg-2)",
      overflow: "hidden",
    }}>
      {/* Flat SMPTE color bars — top 75% */}
      <div style={{
        position: "absolute",
        top: 0, left: 0, right: 0,
        height: "75%",
        display: "flex",
      }}>
        {BARS.map((color, i) => (
          <div
            key={i}
            style={{ flex: 1, background: color, opacity: 0.13 }}
          />
        ))}
      </div>

      {/* PLUGE strip — bottom 25% */}
      <div style={{
        position: "absolute",
        bottom: 0, left: 0, right: 0,
        height: "25%",
        display: "flex",
      }}>
        {["#000000", "#ffffff", "#000000", "#131313", "#000000", "#1a1a1a", "#000000"].map((color, i) => (
          <div
            key={i}
            style={{ flex: 1, background: color, opacity: 0.18 }}
          />
        ))}
      </div>

      {/* Center overlay — label + NO SIGNAL */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        gap: 12,
      }}>
        {label && (
          <span className="mono" style={{
            fontSize: 10, letterSpacing: ".2em", textTransform: "uppercase",
            color: "var(--fg-ghost)",
          }}>{label}</span>
        )}
        <span className="mono" style={{
          fontSize: "clamp(28px,4vw,48px)", fontWeight: 700,
          color: "var(--line-mid)", letterSpacing: "-.03em", lineHeight: 1,
        }}>NO SIGNAL</span>
        {sublabel && (
          <span className="tc" style={{ marginTop: 4 }}>{sublabel}</span>
        )}
      </div>

      {/* Bottom metadata strip */}
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
        }}>MHAN · EDMAR CAYABYAB</span>
        <span className="mono" style={{
          fontSize: 10, letterSpacing: ".14em", textTransform: "uppercase",
          color: "var(--fg-faint)",
        }}>2022–2026</span>
      </div>
    </div>
  );
}
