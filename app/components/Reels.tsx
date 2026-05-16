"use client";

import { useState } from "react";
import { useReducedMotion } from "framer-motion";
import MotionItem from "./MotionItem";
import SectionHeader from "./SectionHeader";

interface Reel {
  platform: "TikTok" | "Facebook" | "LinkedIn";
  role: string;
  views: number | null;
  likes: number | null;
  href: string;
}

const REELS: Reel[] = [
  { platform: "TikTok",   role: "Editor & Cinematographer", views: 82200,  likes: 189,  href: "https://www.tiktok.com/@eoexecutiveoptical/video/7175031628664786181" },
  { platform: "TikTok",   role: "Cinematographer",          views: 3200,   likes: 25,   href: "https://www.tiktok.com/@eoexecutiveoptical/video/7230259633917627654" },
  { platform: "TikTok",   role: "Editor & Cinematographer", views: 1700,   likes: 11,   href: "https://www.tiktok.com/@eoexecutiveoptical/video/7481115496436239637" },
  { platform: "Facebook", role: "Cinematographer",          views: 76000,  likes: 142,  href: "https://www.facebook.com/reel/525029393150624" },
  { platform: "Facebook", role: "Cinematographer",          views: 43000,  likes: 59,   href: "https://www.facebook.com/reel/670988531701194" },
  { platform: "Facebook", role: "Cinematographer",          views: 88000,  likes: 71,   href: "https://www.facebook.com/reel/1172876860776244" },
  { platform: "Facebook", role: "Cinematographer",          views: 111000, likes: 881,  href: "https://www.facebook.com/reel/1225746211970951" },
  { platform: "Facebook", role: "Cinematographer",          views: 16000,  likes: 27,   href: "https://www.facebook.com/reel/1344161733396757" },
  { platform: "Facebook", role: "Cinematographer",          views: 30000,  likes: 124,  href: "https://www.facebook.com/reel/934594822759411" },
  { platform: "Facebook", role: "Cinematographer",          views: 131000, likes: 923,  href: "https://www.facebook.com/reel/2502016663308619" },
  { platform: "LinkedIn", role: "Cinematographer",          views: null,   likes: null, href: "https://www.linkedin.com/posts/executive-optical_eocareers-eyemazingopportunities-loveyoureyes-activity-7424621711729418240-YJlC" },
  { platform: "LinkedIn", role: "Cinematographer",          views: null,   likes: null, href: "https://www.linkedin.com/posts/executive-optical_executive-optical-2025-service-awards-the-activity-7409035048227889152-hjGt" },
  { platform: "LinkedIn", role: "Cinematographer",          views: null,   likes: null, href: "https://www.linkedin.com/posts/executive-optical_executiveoptical-eoloveyoureyes-experteyecare-activity-7389594871877181440-1r9U" },
];

const PLATFORM_BG: Record<Reel["platform"], string> = {
  TikTok:   "#1a0a0a",
  Facebook: "#0a0f1a",
  LinkedIn: "#0a0f18",
};

function fv(n: number | null): string | null {
  if (n === null) return null;
  return `${n / 1000}K`;
}

const sorted = [...REELS].sort((a, b) => (b.views ?? 0) - (a.views ?? 0));
const TIER1 = sorted.slice(0, 3);
const TIER2 = sorted.slice(3);

function FeatureCard({ reel }: { reel: Reel }) {
  const [hovered, setHovered] = useState(false);
  const reduce = useReducedMotion();
  const active = hovered && !reduce;
  const views = fv(reel.views);

  return (
    <a
      href={reel.href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "block",
        position: "relative",
        aspectRatio: "4/3",
        background: PLATFORM_BG[reel.platform],
        transform: active ? "scale(1.02)" : "scale(1)",
        transition: "transform 200ms ease",
        cursor: "pointer",
        overflow: "hidden",
        textDecoration: "none",
        zIndex: active ? 1 : 0,
      }}
    >
      {/* Role (top-left) + Platform (top-right) */}
      <div style={{
        position: "absolute", top: 16, left: 16, right: 16,
        display: "flex", justifyContent: "space-between", gap: 8,
      }}>
        <span className="mono" style={{
          fontSize: 11, color: "rgba(255,255,255,.38)", letterSpacing: ".1em",
          textTransform: "uppercase", lineHeight: 1,
        }}>{reel.role}</span>
        <span className="mono" style={{
          fontSize: 11, color: "rgba(255,255,255,.38)", letterSpacing: ".1em",
          textTransform: "uppercase", lineHeight: 1, flexShrink: 0,
        }}>{reel.platform}</span>
      </div>

      {/* View count — centered, fades out on hover */}
      {views && (
        <div style={{
          position: "absolute", inset: 0,
          display: "flex", alignItems: "center", justifyContent: "center",
          opacity: active ? 0 : 1,
          transition: "opacity 150ms ease",
          pointerEvents: "none",
        }}>
          <span className="mono" style={{
            fontSize: 48, fontWeight: 500, color: "#fff", lineHeight: 1,
          }}>{views}</span>
        </div>
      )}

      {/* Play icon — fades in on hover */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", alignItems: "center", justifyContent: "center",
        opacity: active ? 1 : 0,
        transition: "opacity 150ms ease",
        pointerEvents: "none",
      }}>
        <span style={{ fontSize: 32, color: "rgba(255,255,255,.88)", lineHeight: 1 }}>▶</span>
      </div>

      {/* ↗ bottom-right */}
      <div style={{ position: "absolute", bottom: 14, right: 16 }}>
        <span className="mono" style={{ fontSize: 14, color: "rgba(255,255,255,.28)" }}>↗</span>
      </div>
    </a>
  );
}

function FilmstripCard({ reel }: { reel: Reel }) {
  const [hovered, setHovered] = useState(false);
  const reduce = useReducedMotion();
  const active = hovered && !reduce;
  const views = fv(reel.views);

  return (
    <a
      href={reel.href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "block",
        flexShrink: 0,
        position: "relative",
        width: 120,
        height: 180,
        background: PLATFORM_BG[reel.platform],
        scrollSnapAlign: "start",
        transform: active ? "scale(1.02)" : "scale(1)",
        transition: "transform 200ms ease",
        cursor: "pointer",
        overflow: "hidden",
        textDecoration: "none",
        zIndex: active ? 1 : 0,
      }}
    >
      {/* Platform label top-left */}
      <div style={{ position: "absolute", top: 10, left: 10 }}>
        <span className="mono" style={{
          fontSize: 9, color: "rgba(255,255,255,.36)", letterSpacing: ".14em",
          textTransform: "uppercase", lineHeight: 1,
        }}>{reel.platform}</span>
      </div>

      {/* View count centered — fades out on hover */}
      {views && (
        <div style={{
          position: "absolute", inset: 0,
          display: "flex", alignItems: "center", justifyContent: "center",
          opacity: active ? 0 : 1,
          transition: "opacity 150ms ease",
          pointerEvents: "none",
        }}>
          <span className="mono" style={{ fontSize: 18, color: "#fff", lineHeight: 1 }}>{views}</span>
        </div>
      )}

      {/* Play icon — fades in on hover */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", alignItems: "center", justifyContent: "center",
        opacity: active ? 1 : 0,
        transition: "opacity 150ms ease",
        pointerEvents: "none",
      }}>
        <span style={{ fontSize: 20, color: "rgba(255,255,255,.88)", lineHeight: 1 }}>▶</span>
      </div>

      {/* ↗ bottom-right */}
      <div style={{ position: "absolute", bottom: 10, right: 10 }}>
        <span className="mono" style={{ fontSize: 11, color: "rgba(255,255,255,.26)" }}>↗</span>
      </div>
    </a>
  );
}

export default function Reels() {
  return (
    <section id="reels" style={{ paddingTop: "var(--pad-section)", paddingBottom: "var(--pad-section)" }}>
      <div className="container">

        <MotionItem>
          <SectionHeader index="04" title="Reels & Films" subtitle="500K+ combined organic views" />
        </MotionItem>

        {/* Tier 1 — Feature row: top 3 by views */}
        <MotionItem delay={0.1} style={{ marginTop: 48 }}>
          <div
            className="grid grid-cols-1 md:grid-cols-3"
            style={{ gap: "1px", background: "var(--line)" }}
          >
            {TIER1.map((reel, i) => <FeatureCard key={i} reel={reel} />)}
          </div>
        </MotionItem>

        {/* Tier 2 — Compact filmstrip: remaining 10 */}
        <MotionItem delay={0.15} style={{ marginTop: "1px" }}>
          <div
            className="reels-strip"
            style={{
              display: "flex",
              gap: "1px",
              background: "var(--line)",
              overflowX: "auto",
              scrollSnapType: "x mandatory",
              touchAction: "pan-x",
            }}
          >
            {TIER2.map((reel, i) => <FilmstripCard key={i} reel={reel} />)}
          </div>
        </MotionItem>

      </div>
    </section>
  );
}
