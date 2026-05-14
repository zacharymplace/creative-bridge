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
];
