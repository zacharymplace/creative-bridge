/**
 * Canonical documentation index (v0.1.1+).
 * Used by /docs and cross-linked from the landing transparency block.
 */

export const docsIndexMeta = {
  title: "Documentation",
  description:
    "A small index of canonical documents—plain language, plain files—plus entry points to the readable Standard and manifesto.",
} as const;

export type CanonicalDocument = {
  id: string;
  title: string;
  summary: string;
  siteHref?: string;
  markdownHref: string;
  markdownLabel: string;
};

export const canonicalDocuments: CanonicalDocument[] = [
  {
    id: "standard",
    title: "Creative Bridge Standard",
    summary:
      "Versioned ethics commitments: transparency, human checkpoints, consent, credit, and a non-substitution default.",
    siteHref: "/standard",
    markdownHref: "/docs/creative-bridge-standard.md",
    markdownLabel: "Markdown",
  },
  {
    id: "architecture",
    title: "Product architecture",
    summary:
      "How the language layer, Standard, tiers, schemas, and presentation fit together—without implying a platform.",
    markdownHref: "/docs/product-architecture.md",
    markdownLabel: "Markdown",
  },
  {
    id: "roadmap",
    title: "Roadmap",
    summary: "What ships next, what stays out of scope, and what is explicitly not planned yet.",
    markdownHref: "/docs/roadmap.md",
    markdownLabel: "Markdown",
  },
  {
    id: "decisions",
    title: "Decisions log",
    summary: "Durable architecture and content decisions—why the repo is shaped the way it is.",
    markdownHref: "/docs/DECISIONS.md",
    markdownLabel: "Markdown",
  },
  {
    id: "project-profile-checklist",
    title: "Project profile checklist",
    summary:
      "A lightweight self-assessment for transparent, collaboration-ready project profiles.",
    markdownHref: "/docs/project-profile-checklist.md",
    markdownLabel: "Checklist",
    siteHref: "/projects/neighborhood-chorus",
  },
  {
    id: "project-profile",
    title: "Project profile model",
    summary:
      "What belongs on a static public project profile—tiers, intent, roles, disclosures, and what explicitly stays out of scope.",
    siteHref: "/projects",
    markdownHref: "/docs/project-profile-model.md",
    markdownLabel: "Markdown",
  },
];
