import { notFound } from "next/navigation";
import { getCaseStudy, getAllSlugs } from "@/lib/caseStudies";
import SMPTEBars from "@/app/components/SMPTEBars";
import BackLink from "@/app/components/BackLink";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

interface Props {
  params: { slug: string };
}

export default function CaseStudyPage({ params }: Props) {
  const study = getCaseStudy(params.slug);
  if (!study) notFound();

  return (
    <main style={{ background: "var(--bg)", color: "var(--fg)", minHeight: "100vh" }}>

      {/* ── Ident bar ── */}
      <div style={{
        borderBottom: "1px solid var(--line)",
        padding: "0",
      }}>
        <div className="container" style={{
          display: "flex", alignItems: "center", gap: 16,
          height: 56,
        }}>
          <span className="mono" style={{
            fontSize: 10, letterSpacing: ".22em", textTransform: "uppercase",
            color: "var(--accent-text)",
          }}>/ {study.index}</span>
          <span style={{ flex: 1, height: 1, background: "var(--line)" }} />
          <span className="mono" style={{
            fontSize: 10, letterSpacing: ".14em", textTransform: "uppercase",
            color: "var(--fg-faint)",
          }}>{study.title.toUpperCase()}</span>
        </div>
      </div>

      {/* ── Role + year ── */}
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-center" style={{
          gap: 24, padding: "32px 0",
          borderBottom: "1px solid var(--line)",
        }}>
          <div className="mono" style={{
            fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase",
            color: "var(--fg-dim)", flex: 1,
          }}>{study.role}</div>
          <div className="mono" style={{
            fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase",
            color: "var(--fg-faint)",
          }}>{study.year}</div>
        </div>
      </div>

      {/* ── Full-bleed SMPTE placeholder ── */}
      <div style={{
        width: "100%",
        marginLeft: "calc(-50vw + 50%)",
        marginRight: "calc(-50vw + 50%)",
        maxWidth: "100vw",
        overflow: "hidden",
      }}>
        <SMPTEBars
          label={`${study.slug.toUpperCase()} · ${study.year}`}
          sublabel="00:00:00:00"
        />
      </div>

      {/* ── Editorial body ── */}
      <div className="container" style={{ paddingTop: 80, paddingBottom: 40 }}>
        <div style={{ maxWidth: 640 }}>
          {study.body.map((section) => (
            <div key={section.label} style={{ marginBottom: 56 }}>
              <div className="mono" style={{
                fontSize: 10, letterSpacing: ".2em", textTransform: "uppercase",
                color: "var(--fg-faint)", marginBottom: 20,
                display: "flex", alignItems: "center", gap: 12,
              }}>
                <span style={{ color: "var(--accent-text)" }}>—</span>
                {section.label.toUpperCase()}
              </div>
              {section.paragraphs.map((p, i) => (
                <p key={i} className="serif" style={{
                  margin: 0, marginBottom: i < section.paragraphs.length - 1 ? 20 : 0,
                  fontSize: "clamp(17px,1.4vw,20px)", lineHeight: 1.65,
                  color: i === 0 ? "var(--fg)" : "var(--fg-dim)",
                  fontWeight: 300,
                }}>{p}</p>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── Amber impact line ── */}
      <div style={{
        borderTop: "1px solid var(--line)",
        borderBottom: "1px solid var(--line)",
        padding: "32px 0",
        margin: "0",
      }}>
        <div className="container">
          <p className="mono" style={{
            margin: 0,
            fontSize: "clamp(12px,1.1vw,14px)", letterSpacing: ".12em", textTransform: "uppercase",
            color: "var(--accent-text)", lineHeight: 1.7,
          }}>{study.impactLine}</p>
        </div>
      </div>

      {/* ── Back to Work ── */}
      <div className="container" style={{ paddingTop: 48, paddingBottom: 80 }}>
        <BackLink href="/#work" label="← BACK TO WORK" />
      </div>

    </main>
  );
}
