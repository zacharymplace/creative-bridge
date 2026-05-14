/**
 * Project tiers: public labels for how much automation is in play.
 * Intended for package.json / project metadata and human-readable README badges.
 */

export type ProjectTier = {
  id: string;
  label: string;
  summary: string;
  machineRole: string;
  humanExpectations: string[];
  order: number;
};

export const projectTiersMeta = {
  version: "0.1.0",
  usage:
    "Teams pick the highest tier that applies to any material stage of the work. If stages differ, disclose per stage in the project README.",
} as const;

export const projectTiers: ProjectTier[] = [
  {
    id: "tier-0",
    label: "Tier 0 — Human-led",
    summary: "No generative automation in the production path.",
    machineRole:
      "Conventional software only (editing, capture, typography, version control).",
    humanExpectations: [
      "All creative judgments are human-owned.",
      "No generative models in drafting or asset creation.",
    ],
    order: 0,
  },
  {
    id: "tier-1",
    label: "Tier 1 — Assisted research",
    summary: "AI may summarize or retrieve information; it does not author primary creative artifacts.",
    machineRole:
      "Retrieval, summarization, transcription, translation with human verification of facts and tone.",
    humanExpectations: [
      "Humans write the brief, outline, and final creative text or story decisions.",
      "Citations and fact-checking remain human responsibility.",
    ],
    order: 1,
  },
  {
    id: "tier-2",
    label: "Tier 2 — Assisted drafting",
    summary: "AI may propose drafts or variations; humans curate, rewrite, and approve.",
    machineRole:
      "Generation of alternatives, rough cuts, mood explorations, or code sketches under explicit prompts.",
    humanExpectations: [
      "A named editor approves what ships.",
      "Machine contributions are treated as starting material, not finished work.",
    ],
    order: 2,
  },
  {
    id: "tier-3",
    label: "Tier 3 — Hybrid production",
    summary: "AI is embedded in production; disclosure and checkpoints are mandatory.",
    machineRole:
      "Generative models may produce substantial assets (audio, imagery, language) that remain in the final artifact.",
    humanExpectations: [
      "Disclose tier and major assist steps in project metadata.",
      "Apply the Creative Bridge Standard in full, including consent and likeness rules.",
    ],
    order: 3,
  },
];
