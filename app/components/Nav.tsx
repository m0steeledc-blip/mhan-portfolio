"use client";

import { useState, useEffect } from "react";

const links = [
  { href: "#work",    label: "Work" },
  { href: "#reels",   label: "Reels" },
  { href: "#process", label: "Process" },
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
      transition: "background .25s, backdrop-filter .25s, border-color .25s",
      background: scrolled ? "rgba(10,9,7,.72)" : "transparent",
      backdropFilter: scrolled ? "blur(18px) saturate(140%)" : "none",
      WebkitBackdropFilter: scrolled ? "blur(18px) saturate(140%)" : "none",
      borderBottom: scrolled ? "1px solid var(--line)" : "1px solid transparent",
    }}>
      <div className="container" style={{
        display: "flex", alignItems: "center", justifyContent: "space-between", height: 72,
      }}>
        <a href="#top" style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ display: "inline-block", width: 24, height: 24, position: "relative" }}>
            <span style={{
              position: "absolute", inset: 0, border: "1px solid var(--fg)",
              borderRadius: 4, transform: "rotate(45deg)",
            }} />
            <span style={{
              position: "absolute", left: "50%", top: "50%",
              width: 8, height: 8, background: "var(--accent)",
              transform: "translate(-50%,-50%)", borderRadius: 2,
            }} />
          </span>
          <span className="serif" style={{ fontSize: 22, letterSpacing: "-.01em" }}>
            Edmar <span style={{ color: "var(--fg-dim)" }}>Cayabyab</span>
          </span>
        </a>

        <div className="nav-links" style={{ display: "flex", alignItems: "center", gap: 28 }}>
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="mono"
              style={{
                fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase",
                color: "var(--fg-dim)", transition: "color .2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--fg)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--fg-dim)")}
            >{l.label}</a>
          ))}
          <a
            href="#contact"
            className="mono"
            style={{
              fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase",
              padding: "10px 16px", border: "1px solid var(--line-strong)",
              borderRadius: 999, transition: "all .2s",
              background: "rgba(245,241,234,.02)",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = "var(--accent)";
              e.currentTarget.style.color = "var(--accent)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = "var(--line-strong)";
              e.currentTarget.style.color = "var(--fg)";
            }}
          >Hire Me</a>
        </div>
      </div>
    </nav>
  );
}
