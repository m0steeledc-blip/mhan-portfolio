"use client";

import { useState } from "react";
import SectionHeader from "./SectionHeader";

const REELS = [
  { id: 1, platform: "Facebook", views: "131K",  role: "Cinematographer",          label: "CAMPAIGN 01"        },
  { id: 2, platform: "Facebook", views: "111K",  role: "Cinematographer",          label: "CAMPAIGN 02"        },
  { id: 3, platform: "TikTok",   views: "82.2K", role: "Editor · Cinematographer", label: "TIKTOK TOP PERFORM" },
  { id: 4, platform: "Facebook", views: "76K",   role: "Cinematographer",          label: "IN-STORE LAUNCH"    },
  { id: 5, platform: "Facebook", views: "43K",   role: "Cinematographer",          label: "LIFESTYLE CAMPAIGN" },
  { id: 6, platform: "LinkedIn", views: "—",     role: "Director · Editor",        label: "CORPORATE FILM"     },
];

function ReelTile({ reel, wide }: { reel: typeof REELS[0]; wide: boolean }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={wide ? "md:col-span-4" : "md:col-span-2"}
      style={{
        border: `1px solid ${hover ? "var(--accent)" : "var(--line)"}`,
        transition: "border-color .25s",
        position: "relative",
        cursor: "default",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* SMPTE bars tile */}
      <div className="placeholder-bars" style={{
        width: "100%",
        aspectRatio: wide ? "16/9" : "9/12",
      }}>
        <div className="bars-label">
          <span>{reel.platform.toUpperCase()} · {reel.views} VIEWS</span>
          <span>NO SIGNAL</span>
        </div>
      </div>

      {/* Play icon overlay */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", alignItems: "center", justifyContent: "center",
        pointerEvents: "none",
      }}>
        <div style={{
          width: 44, height: 44, borderRadius: "50%",
          border: "1px solid var(--line-strong)",
          background: "rgba(8,8,6,.5)",
          display: "flex", alignItems: "center", justifyContent: "center",
          transform: hover ? "scale(1.12)" : "scale(1)",
          transition: "transform .25s",
        }}>
          <svg width="12" height="14" viewBox="0 0 12 14" fill="var(--fg)">
            <path d="M0 0 L12 7 L0 14 Z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function Reels() {
  return (
    <section id="reels" style={{ paddingTop: "var(--pad-section)", paddingBottom: "var(--pad-section)" }}>
      <div className="container">
        <SectionHeader index="04" title="Reels & Films" subtitle="500K+ combined organic views" />

        {/* 6-tile footage-bin grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-6"
          style={{ gap: 1, background: "var(--line)", border: "1px solid var(--line)", marginTop: 48 }}
        >
          {REELS.map((r, i) => {
            const wide = i === 0 || i === 5;
            return (
              <div
                key={r.id}
                className={wide ? "md:col-span-4" : "md:col-span-2"}
                style={{ background: "var(--bg)" }}
              >
                <ReelTile reel={r} wide={wide} />
              </div>
            );
          })}
        </div>

        {/* Mono labels below grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-6"
          style={{ gap: 1, marginTop: 1, background: "var(--line)", border: "1px solid var(--line)" }}
        >
          {REELS.map((r, i) => {
            const wide = i === 0 || i === 5;
            return (
              <div
                key={r.id}
                className={wide ? "md:col-span-4" : "md:col-span-2"}
                style={{
                  background: "var(--bg-1)",
                  padding: "10px 14px",
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                  gap: 8,
                }}
              >
                <span className="mono" style={{
                  fontSize: 10, letterSpacing: ".1em", textTransform: "uppercase",
                  color: "var(--fg-dim)",
                }}>{r.role}</span>
                <span className="mono" style={{
                  fontSize: 10, letterSpacing: ".1em",
                  color: "var(--fg-ghost)",
                }}>0{r.id}</span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
