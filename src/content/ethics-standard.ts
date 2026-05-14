/**
 * Machine-readable ethics standard (Creative Bridge Standard).
 * Mirrors the human-readable doc in docs/creative-bridge-standard.md.
 */

export type EthicsCommitment = {
  id: string;
  title: string;
  requirement: string;
  rationale: string;
};

export const ethicsStandardMeta = {
  name: "The Creative Bridge Standard",
  version: "0.1.0",
  status: "draft" as const,
  /** Public-facing label for the Standard line in trust/transparency UI. */
  publicLabel: "v0.1.0 draft",
  scope:
    "Creative and cultural work where AI may assist research, drafting, or production—but humans remain accountable for release.",
} as const;

export const ethicsPublicDisclosure =
  "This page is generated from typed Standard content for readability. Canonical interchange for review and archive remains the Markdown document; JSON Schemas describe machine-readable project and collaborator envelopes.";

export const ethicsCommitments: EthicsCommitment[] = [
  {
    id: "transparency",
    title: "Transparency",
    requirement:
      "Publish the project tier and disclose material machine assistance that affects authorship, likeness, or provenance.",
    rationale: "Collaborators and audiences cannot consent to what they cannot see.",
  },
  {
    id: "human-checkpoint",
    title: "Human checkpoint",
    requirement:
      "Before public release or commercial use, a named human approves the work for accuracy, rights, and alignment with stated intent.",
    rationale: "Automation must not silently become accountability.",
  },
  {
    id: "consent",
    title: "Consent",
    requirement:
      "Obtain informed consent when a person’s voice, likeness, private data, or unreleased work is involved.",
    rationale: "Creative velocity is not a license to bypass care.",
  },
  {
    id: "credit",
    title: "Credit",
    requirement:
      "Credit humans for human judgment; label machine assistance where it materially shaped outcomes.",
    rationale: "Fair credit protects livelihoods and clarifies responsibility.",
  },
  {
    id: "non-substitution",
    title: "Non-substitution default",
    requirement:
      "Do not present machine output as a finished human work without revision, review, and explicit disclosure.",
    rationale: "Substitution erodes craft, trust, and the conditions for collaboration.",
  },
];

export const ethicsDefinitions = {
  humanCheckpoint:
    "A documented moment where a responsible person reviews the work for release—distinct from automated checks.",
  materialAssistance:
    "Assistance that would change a reasonable person’s understanding of who authored the work or how it was made.",
} as const;
