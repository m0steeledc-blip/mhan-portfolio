"use client";

import { motion, useReducedMotion } from "framer-motion";
import SectionHeader from "./SectionHeader";

interface Reel {
  platform: "TikTok" | "Facebook" | "LinkedIn";
  role: string;
  views: string | null;
  likes: number | null;
  href: string;
}

const REELS: Reel[] = [
  { platform: "TikTok",   role: "Editor & Cinematographer", views: "82.2K", likes: 189,  href: "https://www.tiktok.com/@eoexecutiveoptical/video/7175031628664786181" },
  { platform: "TikTok",   role: "Cinematographer",          views: "3.2K",  likes: 25,   href: "https://www.tiktok.com/@eoexecutiveoptical/video/7230259633917627654" },
  { platform: "TikTok",   role: "Editor & Cinematographer", views: "1.7K",  likes: 11,   href: "https://www.tiktok.com/@eoexecutiveoptical/video/7481115496436239637" },
  { platform: "Facebook", role: "Cinematographer",          views: "76K",   likes: 142,  href: "https://www.facebook.com/reel/525029393150624" },
  { platform: "Facebook", role: "Cinematographer",          views: "43K",   likes: 59,   href: "https://www.facebook.com/reel/670988531701194" },
  { platform: "Facebook", role: "Cinematographer",          views: "88K",   likes: 71,   href: "https://www.facebook.com/reel/1172876860776244" },
  { platform: "Facebook", role: "Cinematographer",          views: "111K",  likes: 881,  href: "https://www.facebook.com/reel/1225746211970951" },
  { platform: "Facebook", role: "Cinematographer",          views: "16K",   likes: 27,   href: "https://www.facebook.com/reel/1344161733396757" },
  { platform: "Facebook", role: "Cinematographer",          views: "30K",   likes: 124,  href: "https://www.facebook.com/reel/934594822759411" },
  { platform: "Facebook", role: "Cinematographer",          views: "131K",  likes: 923,  href: "https://www.facebook.com/reel/2502016663308619" },
  { platform: "LinkedIn", role: "Cinematographer",          views: null,    likes: null, href: "https://www.linkedin.com/posts/executive-optical_eocareers-eyemazingopportunities-loveyoureyes-activity-7424621711729418240-YJlC" },
  { platform: "LinkedIn", role: "Cinematographer",          views: null,    likes: null, href: "https://www.linkedin.com/posts/executive-optical_executive-optical-2025-service-awards-the-activity-7409035048227889152-hjGt" },
  { platform: "LinkedIn", role: "Cinematographer",          views: null,    likes: null, href: "https://www.linkedin.com/posts/executive-optical_executiveoptical-eoloveyoureyes-experteyecare-activity-7389594871877181440-1r9U" },
];

function ReelCard({ reel, index }: { reel: Reel; index: number }) {
  return (
    <a
      href={reel.href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "flex",
        flexDirection: "column",
        flexShrink: 0,
        width: 200,
        minHeight: 188,
        background: "#1a1a1a",
        border: "1px solid #2a2a2a",
        padding: "18px 16px 14px",
        textDecoration: "none",
        scrollSnapAlign: "start",
        transition: "border-color .2s",
      }}
      onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--accent)"; }}
      onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "#2a2a2a"; }}
    >
      {/* Platform + index */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
        <span className="mono" style={{
          fontSize: 9, letterSpacing: ".2em", textTransform: "uppercase",
          color: "var(--fg-faint)",
        }}>{reel.platform}</span>
        <span className="mono" style={{
          fontSize: 9, letterSpacing: ".1em",
          color: "var(--fg-ghost)",
        }}>{String(index + 1).padStart(2, "0")}</span>
      </div>

      {/* Role */}
      <div className="mono" style={{
        fontSize: 10, letterSpacing: ".1em", textTransform: "uppercase",
        color: "var(--accent-text)", lineHeight: 1.55,
      }}>{reel.role}</div>

      {/* Stats — push to bottom */}
      <div style={{ marginTop: "auto", paddingTop: 12, display: "flex", flexDirection: "column", gap: 5 }}>
        {reel.views !== null && (
          <span className="mono" style={{
            fontSize: 15, letterSpacing: ".02em",
            color: "var(--accent)",
          }}>{reel.views}</span>
        )}
        {reel.likes !== null && (
          <span className="mono" style={{
            fontSize: 10, letterSpacing: ".1em",
            color: "var(--fg-ghost)",
          }}>{reel.likes.toLocaleString()} likes</span>
        )}
      </div>

      {/* Footer */}
      <div className="mono" style={{
        marginTop: 14,
        paddingTop: 10,
        borderTop: "1px solid #2a2a2a",
        fontSize: 9, letterSpacing: ".18em", textTransform: "uppercase",
        color: "var(--fg-ghost)",
      }}>↗ View</div>
    </a>
  );
}

export default function Reels() {
  const reduce = useReducedMotion();

  const fadeUp = (delay = 0) => ({
    initial: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: reduce ? 0 : 0.5, ease: "easeOut" as const, delay: reduce ? 0 : delay },
  });

  return (
    <section id="reels" style={{ paddingTop: "var(--pad-section)", paddingBottom: "var(--pad-section)" }}>
      <div className="container">
        <motion.div {...fadeUp(0)}>
          <SectionHeader index="04" title="Reels & Films" subtitle="500K+ combined organic views" />
        </motion.div>

        <motion.div {...fadeUp(0.15)} style={{ marginTop: 48 }}>
          <div
            className="reels-strip"
            style={{
              display: "flex",
              gap: 1,
              overflowX: "auto",
              scrollSnapType: "x mandatory",
              touchAction: "pan-x",
            }}
          >
            {REELS.map((reel, i) => (
              <ReelCard key={i} reel={reel} index={i} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
