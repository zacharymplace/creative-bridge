export const publicReview = {
  title: "Public Review",
  version: "1.2.0",
  summary:
    "A focused entry point for reviewing The Creative Bridge standard before any platform behavior expands.",
  position:
    "The goal is not praise, launch hype, or feature requests. The goal is criticism that makes the standard harder to misuse.",
  reviewAreas: [
    "Does the standard clearly reject artist replacement?",
    "Are AI-use disclosure expectations specific enough?",
    "Are collaborator consent boundaries strong enough?",
    "Are credit expectations clear enough?",
    "Are rejected patterns complete?",
    "Does the rubric avoid certification, verification, and endorsement claims?",
    "Are future platform capabilities properly gated by governance?",
  ],
  links: [
    { label: "Public Standard Freeze", href: "/v1" },
    { label: "Trust Layer", href: "/trust" },
    { label: "Governance Layer", href: "/governance" },
    { label: "Rejected Patterns", href: "/rejected-patterns" },
    { label: "Review Rubric", href: "/review-rubric" },
    { label: "System Map", href: "/system-map" },
    { label: "Public Review Packet", href: "/docs/review/public-review-packet.md" },
    { label: "Change Proposal Template", href: "/docs/review/change-proposal-template.md" },
  ],
  nonGoals: [
    "No project submissions",
    "No collaborator matching",
    "No marketplace requests",
    "No certification requests",
    "No AI asset uploads",
    "No public tagging",
  ],
} as const;
