"use client";

import { useState } from "react";
import Placeholder from "./Placeholder";
import SectionHeader from "./SectionHeader";

const WORK_ITEMS = [
  {
    id: "eo-brand",
    title: "EO Brand Identity Redesign",
    role: "Concept Lead · Brand Designer",
    year: "2022 — Present",
    summary: "Winning concept from internal submissions. Refined with the Creative Director. Now the active standard across 380+ branches, OOH, signage, broadcast and digital.",
    tags: ["Brand Identity", "National Rollout", "Print + OOH + Digital"],
    metric: "380+ branches",
    href: "#case-eo",
    ratio: "5/4",
  },
  {
    id: "recruitment-film",
    title: "Recruitment & Corporate Film",
    role: "Director · Cinematographer · Editor",
    year: "2024 — Present",
    summary: "Directed, shot and cut the in‑house recruitment and corporate film series — sole production unit for internal comms across the 380‑branch network.",
    tags: ["Directing", "Cinematography", "Editorial Cut"],
    metric: "Sole in‑house unit",
    href: "#case-film",
    ratio: "16/9",
  },
  {
    id: "led-hub",
    title: "In‑Store LED Asset Hub",
    role: "Designer · Builder",
    year: "2024",
    summary: "Web tool for the MIS/Engineering team. Distributes 28 LED resize variants to branches via Drive. Now the internal standard for nationwide deployment.",
    tags: ["Creative Tech", "UI/UX", "Internal Tool"],
    metric: "28 variants × 380 branches",
    href: "#case-led",
    ratio: "16/10",
  },
  {
    id: "ooh",
    title: "OOH + In‑Store LED",
    role: "Designer · Motion",
    year: "2022 — Present",
    summary: "Billboard artwork and animated LED content for 80+ mall branches (SM, Robinsons, Ayala) and national highway sites.",
    tags: ["Billboards", "Motion Graphics", "LED"],
    metric: "80+ mall branches",
    href: "#reels",
    ratio: "5/4",
  },
];

interface WorkItem {
  id: string;
  title: string;
  role: string;
  year: string;
  summary: string;
  tags: string[];
  metric: string;
  href: string;
  ratio: string;
}

function WorkCard({ item, colSpan, priority }: { item: WorkItem; colSpan: number; priority: boolean }) {
  const [hover, setHover] = useState(false);
  return (
    <a
      href={item.href}
      className="work-card"
      style={{
        gridColumn: `span ${colSpan}`,
        display: "flex", flexDirection: "column", gap: 18,
        position: "relative",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div style={{
        position: "relative", overflow: "hidden",
        border: "1px solid var(--line)",
        transition: "border-color .35s, transform .5s",
        transform: hover ? "translateY(-4px)" : "translateY(0)",
        borderColor: hover ? "var(--line-strong)" : "var(--line)",
      }}>
        <Placeholder label={`${item.title.toUpperCase()} · cover image`} ratio={item.ratio} tone="warm" />
        <div style={{ position: "absolute", left: 16, top: 16, display: "flex", gap: 8, alignItems: "center" }}>
          <span className="mono" style={{
            fontSize: 10, letterSpacing: ".14em", textTransform: "uppercase",
            padding: "5px 10px", background: "rgba(10,9,7,.62)",
            backdropFilter: "blur(6px)", color: "var(--fg)",
            border: "1px solid var(--line-strong)",
          }}>{item.year}</span>
          {priority && (
            <span className="mono" style={{
              fontSize: 10, letterSpacing: ".14em", textTransform: "uppercase",
              padding: "5px 10px", background: "var(--accent)", color: "var(--bg)",
            }}>Featured</span>
          )}
        </div>
        <div style={{
          position: "absolute", right: 16, bottom: 16,
          padding: "8px 12px",
          background: "rgba(10,9,7,.7)", backdropFilter: "blur(8px)",
          border: "1px solid var(--line-strong)",
          opacity: hover ? 1 : 0, transition: "opacity .25s",
        }}>
          <span className="mono" style={{ fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase" }}>
            View case →
          </span>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 24 }}>
        <div style={{ flex: 1 }}>
          <h3 className="serif" style={{
            margin: 0, fontSize: "clamp(26px, 2.4vw, 36px)", lineHeight: 1.05,
            letterSpacing: "-.01em", fontWeight: 400,
          }}>
            {item.title}
          </h3>
          <div className="mono" style={{
            marginTop: 8, fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase",
            color: "var(--fg-dim)",
          }}>
            {item.role}
          </div>
          <p style={{ marginTop: 14, color: "var(--fg-dim)", fontSize: 15, lineHeight: 1.55, maxWidth: 520 }}>
            {item.summary}
          </p>
          <div style={{ display: "flex", gap: 8, marginTop: 14, flexWrap: "wrap" }}>
            {item.tags.map(t => (
              <span key={t} className="mono" style={{
                fontSize: 10, letterSpacing: ".1em", textTransform: "uppercase",
                padding: "4px 10px", border: "1px solid var(--line)", color: "var(--fg-dim)",
              }}>{t}</span>
            ))}
          </div>
        </div>
        <div style={{ textAlign: "right", flexShrink: 0 }}>
          <div className="serif italic" style={{ fontSize: 28, lineHeight: 1, color: "var(--accent)" }}>
            {item.metric}
          </div>
        </div>
      </div>
    </a>
  );
}

export default function SelectedWork() {
  return (
    <section id="work" style={{ paddingTop: 120, paddingBottom: 120, position: "relative" }}>
      <div className="container">
        <SectionHeader index="01" title="Selected Work" subtitle="Four campaigns. One brand at national scale." />
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 24, marginTop: 56,
        }}>
          {WORK_ITEMS.map((w, i) => {
            const span = i % 4 === 0 || i % 4 === 3 ? 7 : 5;
            return <WorkCard key={w.id} item={w} colSpan={span} priority={i === 0} />;
          })}
        </div>
      </div>
    </section>
  );
}
