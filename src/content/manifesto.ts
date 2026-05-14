/**
 * Structured manifesto content (sections + statements).
 * Display layer may render a subset on the landing page and link to full text.
 */

export type ManifestoSection = {
  id: string;
  title: string;
  statements: string[];
};

export const manifestoMeta = {
  title: "The Creative Bridge Manifesto",
  version: "0.2.1",
  lastReviewed: "2026-05-14",
} as const;

export const manifestoPreamble =
  "We believe creative tools should increase the number of meaningful human collaborations—not replace the people who make culture possible.";

export const manifestoSections: ManifestoSection[] = [
  {
    id: "dignity",
    title: "Dignity of authorship",
    statements: [
      "Authorship is a relationship: to material, to audience, and to other makers.",
      "When software obscures who decided what, it damages trust—not only between people, but between people and their own practice.",
    ],
  },
  {
    id: "access",
    title: "Access without extraction",
    statements: [
      "Lowering barriers to entry is good when it brings new voices into rooms where work is reviewed, taught, and credited.",
      "Lowering barriers is harmful when it trains the public to expect infinite novelty at zero cost to themselves.",
    ],
  },
  {
    id: "bounded-automation",
    title: "Bounded automation",
    statements: [
      "Machines may assist, but humans remain accountable for what ships.",
      "Assistance should be labeled where it affects judgment, consent, or compensation.",
    ],
  },
  {
    id: "collaboration",
    title: "Collaboration as the goal",
    statements: [
      "If a workflow eliminates collaborators by default, it is misaligned with the Bridge.",
      "Time saved by tools should be reinvested in critique, mentorship, and shared decision-making.",
    ],
  },
];

export const manifestoClosing = {
  title: "What we build next",
  body: "v0.2.1 hardens the public repository—README, contributing guide, changelog, and a decisions log—while keeping the site static, small, and accountable to humans.",
} as const;
