import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0907",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ width: 60, height: 3, background: "#e8a76a", marginBottom: 32 }} />
        <div
          style={{
            fontFamily: "Georgia, serif",
            fontSize: 80,
            color: "#f5f1ea",
            letterSpacing: "-2px",
            fontWeight: 400,
            lineHeight: 1,
          }}
        >
          Edmar Cayabyab
        </div>
        <div
          style={{
            fontSize: 24,
            color: "rgba(245,241,234,0.62)",
            marginTop: 20,
            fontWeight: 300,
            fontFamily: "system-ui, sans-serif",
          }}
        >
          Senior Multimedia Artist · Brand · Cinematography · AI-augmented
        </div>
      </div>
    ),
    { ...size }
  );
}
