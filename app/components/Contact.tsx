"use client";

import { useState } from "react";

function ContactBlock({ label, value, href, download }: { label: string; value: string; href: string; download?: boolean }) {
  const [hover, setHover] = useState(false);
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      download={download || undefined}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        padding: "32px 24px", display: "flex", flexDirection: "column", gap: 14,
        transition: "background .25s",
        backgroundColor: hover ? "var(--bg-1)" : "var(--bg)",
      }}
    >
      <div className="mono" style={{
        fontSize: 10.5, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--fg-faint)",
      }}>
        {label}
      </div>
      <div className="serif" style={{
        fontSize: 22, lineHeight: 1.2, fontWeight: 400,
        color: hover ? "var(--accent)" : "var(--fg)", transition: "color .25s",
      }}>{value}</div>
      <div className="mono" style={{
        fontSize: 10.5, letterSpacing: ".14em", textTransform: "uppercase",
        color: hover ? "var(--accent)" : "var(--fg-dim)",
        marginTop: 4, transition: "color .25s",
      }}>{hover ? "→ Open" : "—"}</div>
    </a>
  );
}

export default function Contact() {
  return (
    <section id="contact" style={{ paddingTop: 140, paddingBottom: 80, position: "relative" }}>
      <div style={{
        position: "absolute", left: "-10%", right: "-10%", top: "10%", height: "70%",
        background: "radial-gradient(ellipse at 50% 50%, var(--accent-glow), transparent 60%)",
        pointerEvents: "none",
      }} />
      <div className="container" style={{ position: "relative" }}>
        <div className="mono" style={{
          fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase",
          color: "var(--accent)", textAlign: "center", marginBottom: 24,
        }}>
          Available · Q3 2026
        </div>
        <h2 className="serif" style={{
          margin: 0, fontSize: "clamp(54px, 8vw, 132px)", lineHeight: ".95",
          letterSpacing: "-.02em", fontWeight: 400, textAlign: "center",
        }}>
          Let&rsquo;s make<br />
          <span className="italic" style={{ color: "var(--accent)" }}>something cinematic.</span>
        </h2>

        <div style={{
          marginTop: 56,
          maxWidth: 720, marginInline: "auto",
        }}>
          <ContactBlock
            label="LinkedIn — fastest reply"
            value="edmar‑cayabyab"
            href="https://www.linkedin.com/in/edmar-cayabyab-1428bb192/"
          />
          <ContactBlock
            label="Download CV"
            value="Edmar_Cayabyab_CV.docx"
            href="/cv/Edmar_Cayabyab_CV.docx"
            download
          />
        </div>

        <div className="mono" style={{
          marginTop: 32, textAlign: "center",
          fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase",
          color: "var(--fg-faint)",
        }}>
          Metro Manila · Open to in‑house brand teams &amp; creative studios
        </div>

        <div style={{
          marginTop: 96, paddingTop: 32, borderTop: "1px solid var(--line)",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          flexWrap: "wrap", gap: 16,
        }}>
          <div className="mono" style={{
            fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--fg-faint)",
          }}>
            © Edmar Cayabyab · 2026
          </div>
          <div className="mono" style={{
            fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--fg-faint)",
          }}>
            Designed + Built by Edmar
          </div>
          <a href="#top" className="mono" style={{
            fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--fg-dim)",
          }}>↑ Back to Top</a>
        </div>
      </div>
    </section>
  );
}
