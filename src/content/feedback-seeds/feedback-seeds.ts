export const feedbackSeedLog = {
  title: "Feedback Seed Log",
  version: "2.8.0",
  summary:
    "A lightweight public structure for tracking the first external reviewers, what kind of critique was requested, and whether a response has been logged.",
  position:
    "After launch copy exists, the system needs a receiving surface for real external pressure. This is not a testimonial wall. It is a review-tracking scaffold.",
  states: [
    "Identified",
    "Asked",
    "Received",
    "Logged",
    "Deferred",
  ],
  seeds: [
    {
      reviewerType: "Artist",
      requestedCritique:
        "Artist replacement risk, style impersonation, consent boundaries, and credit clarity.",
      status: "Identified",
    },
    {
      reviewerType: "Writer",
      requestedCritique:
        "Language clarity, loopholes, overclaims, and weak boundaries.",
      status: "Identified",
    },
    {
      reviewerType: "Designer",
      requestedCritique:
        "Navigation clarity, hierarchy, seriousness, and review path friction.",
      status: "Identified",
    },
    {
      reviewerType: "Developer",
      requestedCritique:
        "Static architecture, route growth, docs mirroring, QA fragility, and deployment durability.",
      status: "Identified",
    },
    {
      reviewerType: "Skeptic",
      requestedCritique:
        "AI laundering, review theater, platform capture, fake legitimacy, and incentive drift.",
      status: "Identified",
    },
  ],
} as const;
