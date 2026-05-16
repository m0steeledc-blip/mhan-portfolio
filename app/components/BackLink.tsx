"use client";

import { useState } from "react";

interface BackLinkProps {
  href: string;
  label: string;
}

export default function BackLink({ href, label }: BackLinkProps) {
  const [hover, setHover] = useState(false);
  return (
    <a
      href={href}
      className="mono"
      style={{
        display: "inline-flex", alignItems: "center", gap: 10,
        fontSize: 11, letterSpacing: ".16em", textTransform: "uppercase",
        color: hover ? "var(--fg)" : "var(--fg-dim)",
        transition: "color .2s",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {label}
    </a>
  );
}
