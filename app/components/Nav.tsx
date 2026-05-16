"use client";

import { useState, useEffect } from "react";

const links = [
  { href: "#work",    label: "Work" },
  { href: "#reels",   label: "Reels" },
  { href: "#about",   label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      transition: "background .25s, border-color .25s",
      background: scrolled ? "rgba(8,8,6,.92)" : "transparent",
      backdropFilter: scrolled ? "blur(16px) saturate(130%)" : "none",
      WebkitBackdropFilter: scrolled ? "blur(16px) saturate(130%)" : "none",
      borderBottom: scrolled ? "1px solid var(--line)" : "1px solid transparent",
    }}>
      <div className="container" style={{
        display: "flex", alignItems: "center", justifyContent: "space-between", height: 64,
      }}>

        {/* Logo — amber diamond mark + mono ident */}
        <a href="#top" style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{
            display: "inline-block", width: 9, height: 9,
            background: "var(--accent)", transform: "rotate(45deg)", flexShrink: 0,
          }} />
          <span className="mono" style={{
            fontSize: 12, letterSpacing: ".2em", textTransform: "uppercase", color: "var(--fg)",
          }}>MHAN</span>
        </a>

        {/* Links + availability indicator — hidden < 640px via .nav-links rule in globals.css */}
        <div className="nav-links" style={{ display: "flex", alignItems: "center", gap: 28 }}>
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="mono"
              style={{
                fontSize: 10.5, letterSpacing: ".16em", textTransform: "uppercase",
                color: "var(--fg-dim)", transition: "color .2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--fg)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--fg-dim)")}
            >
              <span style={{ color: "var(--fg-ghost)", marginRight: 5 }}>/</span>
              {l.label.toUpperCase()}
            </a>
          ))}

          {/* Availability — amber pulse dot + label */}
          <div className="mono" style={{
            display: "flex", alignItems: "center", gap: 8,
            paddingLeft: 24, borderLeft: "1px solid var(--line)",
            fontSize: 10.5, letterSpacing: ".14em", textTransform: "uppercase",
            color: "var(--accent-text)",
          }}>
            <span style={{
              width: 6, height: 6, borderRadius: "50%",
              background: "var(--accent)", display: "inline-block", flexShrink: 0,
            }} />
            AVAIL · Q3 2026
          </div>
        </div>

      </div>
    </nav>
  );
}
