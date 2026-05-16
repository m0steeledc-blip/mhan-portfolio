"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import SectionHeader from "./SectionHeader";

interface ContactLink {
  label: string;
  value: string;
  href: string;
  download?: boolean;
}

const LINKS: ContactLink[] = [
  {
    label: "LinkedIn — fastest reply",
    value: "edmar-cayabyab",
    href: "https://www.linkedin.com/in/edmar-cayabyab-1428bb192/",
  },
  {
    label: "Email",
    value: "caymhan.edc@gmail.com",
    href: "mailto:caymhan.edc@gmail.com",
  },
  {
    label: "Download CV",
    value: "Edmar_Cayabyab_CV.pdf",
    href: "/cv/Edmar_Cayabyab_CV.pdf",
    download: true,
  },
];

function ContactRow({ link }: { link: ContactLink }) {
  const [hover, setHover] = useState(false);
  return (
    <a
      href={link.href}
      target={link.href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      download={link.download || undefined}
      style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "28px 0", borderBottom: "1px solid var(--line)",
        gap: 24, textDecoration: "none",
        transition: "background .2s",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <span className="mono" style={{
          fontSize: 10, letterSpacing: ".18em", textTransform: "uppercase",
          color: "var(--fg-ghost)",
        }}>{link.label}</span>
        <span className="serif" style={{
          fontSize: "clamp(18px,1.6vw,24px)", fontWeight: 400, lineHeight: 1.2,
          color: hover ? "var(--accent-text)" : "var(--fg)",
          transition: "color .2s",
        }}>{link.value}</span>
      </div>
      <span className="mono" style={{
        fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase",
        color: hover ? "var(--accent)" : "var(--fg-faint)",
        transition: "color .2s", flexShrink: 0,
      }}>
        {hover ? "→ Open" : "—"}
      </span>
    </a>
  );
}

export default function Contact() {
  const reduce = useReducedMotion();
  const fadeUp = (delay = 0) => ({
    initial: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: reduce ? 0 : 0.5, ease: "easeOut" as const, delay: reduce ? 0 : delay },
  });

  return (
    <section id="contact" style={{ paddingTop: "var(--pad-section)", paddingBottom: 80 }}>
      <div className="container">
        <SectionHeader index="06" title="Contact" subtitle="Available · Q3 2026" />

        {/* Contact links */}
        <div style={{ maxWidth: 720, marginTop: 48 }}>
          {LINKS.map((l, i) => (
            <motion.div key={l.href} {...fadeUp(i * 0.1)}>
              <ContactRow link={l} />
            </motion.div>
          ))}
        </div>

        <div className="mono" style={{
          marginTop: 32, fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase",
          color: "var(--fg-faint)",
        }}>
          Metro Manila · Open to in-house brand teams &amp; creative studios
        </div>

        {/* Footer */}
        <div style={{
          marginTop: 96, paddingTop: 32, borderTop: "1px solid var(--line)",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          flexWrap: "wrap", gap: 16,
        }}>
          <span className="mono" style={{
            fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase",
            color: "var(--fg-faint)",
          }}>© Edmar Cayabyab · 2026</span>
          <span className="mono" style={{
            fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase",
            color: "var(--fg-faint)",
          }}>Designed + Built by Edmar</span>
          <a href="#top" className="mono" style={{
            fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase",
            color: "var(--fg-dim)",
          }}>↑ Back to Top</a>
        </div>
      </div>
    </section>
  );
}
