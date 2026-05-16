"use client";

import { useState } from "react";
import Link from "next/link";

interface WorkItem {
  index: string;
  slug: string;
  title: string;
  role: string;
  impact: string;
  label: string;
}

const WORK: WorkItem[] = [
  {
    index: "01",
    slug: "eo-brand-identity",
    title: "EO Brand Identity Redesign",
    role: "Art Direction · Brand Identity",
    impact: "Active standard, 380+ branches since 2022",
    label: "EO BRAND · 2022–PRESENT",
  },
  {
    index: "02",
    slug: "eo-led-asset-hub",
    title: "EO In‑Store LED Asset Hub",
    role: "UI Design · Web Build · Systems",
    impact: "28 variants · 380 branches · solo build",
    label: "LED ASSET HUB · 2024",
  },
  {
    index: "03",
    slug: "eo-corporate-film",
    title: "EO Corporate Film",
    role: "Full Production Pipeline",
    impact: "Concept → pre‑pro → shoot → post · ~1 year",
    label: "CORPORATE FILM · 2024–PRESENT",
  },
];

function SMPTEBlock({ label }: { label: string }) {
  return (
    <div className="placeholder-bars" style={{ width: "100%", aspectRatio: "16/9" }}>
      <div className="bars-label">
        <span>{label}</span>
        <span>NO SIGNAL</span>
      </div>
    </div>
  );
}

function WorkRow({ item }: { item: WorkItem }) {
  const [hover, setHover] = useState(false);

  return (
    <Link
      href={`/work/${item.slug}`}
      style={{
        display: "block",
        borderBottom: "1px solid var(--line)",
        background: hover ? "rgba(240,236,226,.018)" : "transparent",
        transition: "background .25s",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="flex flex-col md:flex-row">

        {/* Slate strip — top bar on mobile, narrow left column on desktop */}
        <div
          className="flex flex-row items-center justify-between py-4 border-b md:flex-col md:items-center md:justify-center md:border-b-0 md:border-r md:w-16 md:py-0"
          style={{ borderColor: "var(--line)", flexShrink: 0 }}
        >
          <span className="mono" style={{
            fontSize: 10, letterSpacing: ".22em", textTransform: "uppercase",
            color: hover ? "var(--accent)" : "var(--accent-text)",
            transition: "color .25s",
          }}>/ {item.index}</span>
          {/* Label visible on mobile only — collapses on desktop */}
          <span className="mono md:hidden" style={{
            fontSize: 10, letterSpacing: ".12em", textTransform: "uppercase",
            color: "var(--fg-faint)",
          }}>{item.label}</span>
        </div>

        {/* SMPTE placeholder + text info */}
        <div className="flex flex-col md:flex-row flex-1">

          {/* SMPTE — 3/5 width on desktop, full width on mobile */}
          <div className="w-full md:w-3/5">
            <SMPTEBlock label={item.label} />
          </div>

          {/* Text — 2/5 width on desktop, full width on mobile */}
          <div
            className="flex flex-col justify-center w-full md:w-2/5"
            style={{ padding: "clamp(24px,3vw,48px) clamp(20px,3vw,48px)" }}
          >
            <h3 className="serif" style={{
              margin: 0,
              fontSize: "clamp(22px,2.2vw,32px)",
              lineHeight: 1.1,
              fontWeight: 400,
              letterSpacing: "-.01em",
              color: hover ? "var(--accent-text)" : "var(--fg)",
              transition: "color .25s",
            }}>{item.title}</h3>

            <div className="mono" style={{
              marginTop: 16, fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase",
              color: "var(--fg-dim)",
            }}>{item.role}</div>

            <div className="mono" style={{
              marginTop: 10, fontSize: 10.5, letterSpacing: ".1em", textTransform: "uppercase",
              color: "var(--fg-faint)",
            }}>{item.impact}</div>
          </div>

        </div>
      </div>
    </Link>
  );
}

export default function SelectedWork() {
  return (
    <section id="work" style={{ paddingTop: "var(--pad-section)", paddingBottom: "var(--pad-section)" }}>
      <div className="container">

        {/* Section ident — slate divider */}
        <div style={{
          display: "flex", alignItems: "center", gap: 16,
          paddingBottom: 20, borderBottom: "1px solid var(--line-mid)",
        }}>
          <span className="mono" style={{
            fontSize: 10, letterSpacing: ".22em", textTransform: "uppercase",
            color: "var(--accent-text)",
          }}>/ 01</span>
          <span style={{ flex: 1, height: 1, background: "var(--line)", display: "inline-block" }} />
          <span className="mono" style={{
            fontSize: 10, letterSpacing: ".16em", textTransform: "uppercase",
            color: "var(--fg-faint)",
          }}>SELECTED WORK</span>
        </div>

        {WORK.map(w => <WorkRow key={w.index} item={w} />)}

      </div>
    </section>
  );
}
