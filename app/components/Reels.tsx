"use client";

import { useState } from "react";
import Placeholder from "./Placeholder";
import SectionHeader from "./SectionHeader";

const REELS = [
  { id: 1, platform: "Facebook", views: "131K",  role: "Cinematographer",          title: "Featured Reel · Campaign 01",   videoUrl: "" },
  { id: 2, platform: "Facebook", views: "111K",  role: "Cinematographer",          title: "Featured Reel · Campaign 02",   videoUrl: "" },
  { id: 3, platform: "TikTok",   views: "82.2K", role: "Editor · Cinematographer", title: "TikTok · Top Performer",        videoUrl: "" },
  { id: 4, platform: "Facebook", views: "76K",   role: "Cinematographer",          title: "Reel · In‑store Launch",        videoUrl: "" },
  { id: 5, platform: "Facebook", views: "43K",   role: "Cinematographer",          title: "Reel · Lifestyle Campaign",     videoUrl: "" },
  { id: 6, platform: "LinkedIn", views: "—",     role: "Director · Editor",        title: "Corporate · Recruitment Film",  videoUrl: "" },
];

interface Reel {
  id: number;
  platform: string;
  views: string;
  role: string;
  title: string;
  videoUrl: string;
}

function ReelCard({ reel, colSpan, ratio }: { reel: Reel; colSpan: number; ratio: string }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      style={{ gridColumn: `span ${colSpan}`, position: "relative" }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div style={{
        position: "relative", overflow: "hidden", border: "1px solid var(--line)",
        transition: "border-color .35s",
        borderColor: hover ? "var(--accent)" : "var(--line)",
      }}>
        <Placeholder label={`${reel.platform.toUpperCase()} · ${reel.views} VIEWS`} kind="video" ratio={ratio} tone="warm" />

        <div style={{
          position: "absolute", inset: 0,
          display: "flex", alignItems: "center", justifyContent: "center",
          pointerEvents: "none",
        }}>
          <div style={{
            width: 56, height: 56, borderRadius: "50%",
            border: "1px solid var(--fg)", background: "rgba(10,9,7,.4)",
            display: "flex", alignItems: "center", justifyContent: "center",
            transition: "all .25s",
            transform: hover ? "scale(1.1)" : "scale(1)",
            backdropFilter: "blur(4px)",
          }}>
            <svg width="14" height="16" viewBox="0 0 14 16" fill="var(--fg)"><path d="M0 0 L14 8 L0 16 Z" /></svg>
          </div>
        </div>

        <div style={{ position: "absolute", left: 12, top: 12 }}>
          <span className="mono" style={{
            fontSize: 10, letterSpacing: ".12em", textTransform: "uppercase",
            padding: "4px 10px", background: "rgba(10,9,7,.7)",
            border: "1px solid var(--line-strong)", backdropFilter: "blur(8px)",
          }}>{reel.platform}</span>
        </div>

        <div style={{
          position: "absolute", left: 12, right: 12, bottom: 12,
          display: "flex", justifyContent: "space-between", alignItems: "flex-end",
          pointerEvents: "none",
        }}>
          <div className="serif" style={{ fontSize: 22, lineHeight: 1, color: "var(--fg)" }}>
            {reel.views}{" "}
            <span className="mono" style={{ fontSize: 10, letterSpacing: ".12em", color: "var(--fg-dim)", marginLeft: 6 }}>VIEWS</span>
          </div>
        </div>
      </div>

      <div style={{ marginTop: 14, display: "flex", justifyContent: "space-between", gap: 12 }}>
        <div className="mono" style={{ fontSize: 11, letterSpacing: ".1em", color: "var(--fg-dim)" }}>
          {reel.role}
        </div>
        <div className="mono" style={{ fontSize: 11, letterSpacing: ".1em", color: "var(--fg-faint)" }}>
          0{reel.id}
        </div>
      </div>
    </div>
  );
}

export default function Reels() {
  return (
    <section id="reels" style={{ paddingTop: 120, paddingBottom: 120 }}>
      <div className="container">
        <SectionHeader index="03" title="Reels & Films" subtitle="500K+ combined organic views" />

        <div style={{
          display: "grid", gap: 18, marginTop: 56,
          gridTemplateColumns: "repeat(6, 1fr)",
        }}>
          {REELS.map((r, i) => {
            const span = i === 0 ? 4 : i === 1 ? 2 : i === 2 ? 2 : i === 3 ? 2 : i === 4 ? 2 : 4;
            const ratio = span === 4 ? "16/9" : "9/12";
            return <ReelCard key={r.id} reel={r} colSpan={span} ratio={ratio} />;
          })}
        </div>

        <div style={{
          marginTop: 64, padding: "32px 36px",
          border: "1px solid var(--line)",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          gap: 32, flexWrap: "wrap",
          background: "rgba(245,241,234,.02)",
        }}>
          <div>
            <div className="mono" style={{
              fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--fg-faint)",
            }}>
              Kit
            </div>
            <div className="serif" style={{ fontSize: 24, marginTop: 6, lineHeight: 1.3 }}>
              Canon R7 + 90D · DJI RS3 · Canon EF 24‑70 f/2.8L II · Samyang 35 T1.5 Cine · Feelworld monitor
            </div>
          </div>
          <div className="mono" style={{
            fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--fg-dim)",
          }}>
            Premiere · After Effects · DaVinci Resolve · Audition
          </div>
        </div>
      </div>
    </section>
  );
}
