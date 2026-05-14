export type BridgeReadinessRating = "strong" | "acceptable" | "needs work";

export type BridgeReadinessScore = {
  category: string;
  rating: BridgeReadinessRating;
  rationale: string;
};

export const neighborhoodChorusScorecard = {
  title: "Bridge Readiness",
  note:
    "A lightweight self-assessment against the Creative Bridge standard. This is not certification, verification, or endorsement.",
  scores: [
    {
      category: "Transparency",
      rating: "strong",
      rationale:
        "The profile states its current tier, intended next tier, AI-use disclosure, and human-finished pathway.",
    },
    {
      category: "Collaboration readiness",
      rating: "strong",
      rationale:
        "Needed roles are separated by collaboration type, with no messaging, forms, or implied attachment.",
    },
    {
      category: "Artist respect",
      rating: "strong",
      rationale:
        "The profile frames human contributors as craft partners, not cleanup labor or replacement targets.",
    },
    {
      category: "Scope clarity",
      rating: "acceptable",
      rationale:
        "The next milestone is clear, but future versions should add more explicit timeline and deliverable boundaries.",
    },
    {
      category: "Human-finished pathway",
      rating: "strong",
      rationale:
        "The profile describes how AI-assisted scaffolding can become human-edited, human-finished work.",
    },
    {
      category: "Boundary safety",
      rating: "strong",
      rationale:
        "Dream-team language is private/opt-in, avoids public tagging, and does not imply collaborators are attached.",
    },
  ] satisfies BridgeReadinessScore[],
} as const;
