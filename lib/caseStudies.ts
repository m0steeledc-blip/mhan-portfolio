export interface BodySection {
  label: string;
  paragraphs: string[];
}

export interface CaseStudy {
  slug: string;
  index: string;
  title: string;
  role: string;
  year: string;
  impactLine: string;
  body: BodySection[];
}

const caseStudies: Record<string, CaseStudy> = {
  "eo-brand-identity": {
    slug: "eo-brand-identity",
    index: "01",
    title: "EO Brand Identity Redesign",
    role: "Art Direction · Brand Identity",
    year: "2022 — Present",
    impactLine: "Active standard across 380+ branches · all OOH · broadcast · digital · in-store nationwide.",
    body: [
      {
        label: "Brief",
        paragraphs: [
          "EO-Executive Optical put out an internal call for a new brand identity. The brief was open-ended: modernise the brand without losing the authority it had built across three decades and 380+ branches.",
          "I submitted a concept built around optical precision — clear geometry, confident editorial type, and a palette that could hold its own on a 12-metre highway billboard and a 4×4cm in-store tag at the same time.",
        ],
      },
      {
        label: "Process",
        paragraphs: [
          "The concept was selected from internal submissions and refined in direct collaboration with the Creative Director over several rounds. Every touchpoint — signage, print, digital, broadcast — was stress-tested against real production constraints before sign-off.",
          "The system is built to be handed off. Clear rules for type hierarchy, colour usage, and logo clear space mean a four-person junior team can execute consistently without calling a design meeting.",
        ],
      },
      {
        label: "Outcome",
        paragraphs: [
          "The identity went live in 2022 and has been the active brand standard since — across 380+ branches, all OOH and LED billboard campaigns, e-commerce, broadcast TVCs, and in-store environments nationwide.",
          "Four years live. Zero major revisions to the core system.",
        ],
      },
    ],
  },

  "eo-led-asset-hub": {
    slug: "eo-led-asset-hub",
    index: "02",
    title: "EO In-Store LED Asset Hub",
    role: "UI Design · Web Build · Systems",
    year: "2024",
    impactLine: "28 resize variants · 380 branches · every campaign ships through it · built solo.",
    body: [
      {
        label: "The Problem",
        paragraphs: [
          "Every campaign launch meant manually packaging 28 LED resize variants — different resolutions for different screen types across hundreds of branches — and coordinating handoff with the MIS and Engineering teams. Error-prone, slow, and dependent on one person knowing the spec.",
          "The process didn't scale. With campaigns running back-to-back and a growing branch network, something had to change.",
        ],
      },
      {
        label: "The Build",
        paragraphs: [
          "I designed and built a web tool that ingests master files and automatically serves the correct resize variant to each branch via Google Drive integration. The UI gives the MIS team a branch picker, a live status view, and a one-click export path.",
          "No creative intervention needed after upload. The system knows which branch gets which resolution and handles distribution end-to-end.",
        ],
      },
      {
        label: "Outcome",
        paragraphs: [
          "Adopted as the internal standard for nationwide LED deployment. Every campaign now ships through it. Deployment time dropped significantly and revision cycles caused by wrong-format assets were eliminated.",
          "Built solo. No engineering team. Running in production.",
        ],
      },
    ],
  },

  "eo-corporate-film": {
    slug: "eo-corporate-film",
    index: "03",
    title: "EO Corporate Film",
    role: "Full Production Pipeline",
    year: "2024 — Present",
    impactLine: "Concept to post — sole production unit for recruitment and corporate film across the 380-branch network.",
    body: [
      {
        label: "Context",
        paragraphs: [
          "EO needed a recruitment and corporate film series for internal comms and external talent acquisition. No external agency. No dedicated video team. One in-house multimedia artist.",
          "The brief covered everything: concept, scripting, pre-production, casting coordination, shoot, edit, color, and delivery.",
        ],
      },
      {
        label: "Production",
        paragraphs: [
          "I ran the full pipeline solo — from initial concept and treatment through to final delivery. Shot on Canon R7 with the EF 24-70 f/2.8L II, stabilised on DJI RS3, monitored live on Feelworld.",
          "Edit in Premiere. Color in DaVinci Resolve. Audio finishing in Audition. Timeline from greenlight to first delivery: approximately one year for the full series.",
        ],
      },
      {
        label: "Outcome",
        paragraphs: [
          "The recruitment film is now the primary asset for talent acquisition across EO's 380-branch network. Corporate film deliverables are used in internal comms, onboarding, and executive presentations.",
          "Ongoing engagement — new briefs come in as campaigns require.",
        ],
      },
    ],
  },
};

export function getCaseStudy(slug: string): CaseStudy | null {
  return caseStudies[slug] ?? null;
}

export function getAllSlugs(): string[] {
  return Object.keys(caseStudies);
}
