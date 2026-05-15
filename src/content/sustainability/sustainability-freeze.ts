export const sustainabilityFreeze = {
  title: "Sustainability Freeze",
  version: "3.0.0",
  summary:
    "A freeze of the public standard, review operating system, rationale layer, limits statement, and funding principles before any payment links, subscription mechanics, donation buttons, or institutional sponsorship flows are added.",
  position:
    "The Creative Bridge can consider funding only after the rules for funding have been made public. This freeze marks the boundary between public-standard development and future sustainability experiments.",
  frozenLayers: [
    {
      title: "Public standard",
      body:
        "The core public standard, trust layer, rejected patterns, review rubric, governance layer, system map, and limits statement remain free to read.",
    },
    {
      title: "Review operating system",
      body:
        "Public review, review intake, reviewer briefs, launch copy, feedback seeds, response logs, abuse cases, incentive drift, and stress tests are established before monetization.",
    },
    {
      title: "Rationale layer",
      body:
        "Whyfiles explain the reasoning behind rules, rejections, guardrails, and platform constraints.",
    },
    {
      title: "Funding principles",
      body:
        "Donation, supporter, toolkit, workshop, and institutional paths are defined with guardrails against certification, approval, ranking, review priority, and governance capture.",
    },
  ],
  paymentBoundary: [
    "No payment links yet.",
    "No donation buttons yet.",
    "No subscriptions yet.",
    "No paid review priority.",
    "No paid certification.",
    "No paid endorsement.",
    "No paid visibility.",
    "No sponsor influence over rejected patterns or governance decisions.",
  ],
  futureRequirements: [
    "Any payment experiment must cite the Funding & Pricing Principles.",
    "Any donation flow must preserve free access to the core standard.",
    "Any supporter tier must avoid governance influence or review priority.",
    "Any paid toolkit must remain separate from certification or endorsement.",
    "Any institutional support must include public non-interference boundaries.",
    "Any future monetization change must be logged as a governance-relevant decision.",
  ],
  nextPhase:
    "Future v3.x work may introduce donation readiness, supporter copy, implementation toolkit outlines, or sponsorship guardrails, but actual payment mechanics should remain gated until the public review loop receives real external feedback.",
} as const;
