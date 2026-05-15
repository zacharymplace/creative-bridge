export const incentiveDriftMap = {
  title: "Incentive Drift Map",
  version: "1.4.0",
  summary:
    "A public map of incentives that could gradually pull The Creative Bridge away from its stated purpose if future platform behavior is added without restraint.",
  position:
    "The project is most at risk when harmful behavior becomes convenient, profitable, measurable, or socially rewarded. Drift should be named before it becomes product logic.",
  drifts: [
    {
      title: "Engagement pressure",
      risk:
        "The project starts rewarding provocative AI outputs, controversy, public callouts, or creator drama because they drive attention.",
      counterpressure:
        "Prioritize review quality, disclosure clarity, consent boundaries, and rejected-pattern avoidance over engagement metrics.",
    },
    {
      title: "Marketplace pressure",
      risk:
        "Preparation tools slowly become public listings, paid placement, ranking, matching, or hiring flows.",
      counterpressure:
        "Keep marketplace behavior behind explicit governance review and separate preparation from transactions.",
    },
    {
      title: "Creator monetization pressure",
      risk:
        "Creators are pushed to package rough AI-assisted prototypes as sellable products before human craft, rights, credit, and consent are resolved.",
      counterpressure:
        "Require clear tiering, AI-use disclosure, role needs, and human-finished pathways before commercial framing.",
    },
    {
      title: "Collaborator scarcity pressure",
      risk:
        "Limited access to artists, editors, producers, or advisors becomes a reason to pressure people publicly or normalize speculative unpaid labor.",
      counterpressure:
        "Keep collaborator interest opt-in, private by default, scope-specific, and clear about compensation or non-compensation.",
    },
    {
      title: "Ranking pressure",
      risk:
        "Rubrics or readiness checks become scores, leaderboards, badges, or pseudo-certification.",
      counterpressure:
        "Keep review language qualitative, non-certifying, non-ranking, and explicit about what has not been verified.",
    },
    {
      title: "Platform lock-in pressure",
      risk:
        "The standard becomes dependent on proprietary accounts, hosted assets, private workflows, or opaque moderation decisions.",
      counterpressure:
        "Keep canonical standards, docs, schemas, and release notes portable, static, and publicly inspectable.",
    },
    {
      title: "Growth-team pressure",
      risk:
        "The project reframes boundaries as friction and starts optimizing for signups, retention, or creator throughput.",
      counterpressure:
        "Treat boundaries as core product value, not onboarding friction.",
    },
    {
      title: "Aesthetic novelty pressure",
      risk:
        "The project rewards visually striking AI output even when disclosure, consent, attribution, or human-finished pathways are weak.",
      counterpressure:
        "Do not let polish outrank process integrity.",
    },
    {
      title: "Institutional authority pressure",
      risk:
        "The standard starts presenting itself as an authority that certifies safe, ethical, or legitimate AI-assisted work.",
      counterpressure:
        "Keep the project framed as a public standard and review system, not a certification body.",
    },
    {
      title: "Convenience pressure",
      risk:
        "Automated defaults slowly replace explicit human judgment because they make review, matching, scoring, or publishing faster.",
      counterpressure:
        "Require governance review before adding automation that changes visibility, access, ranking, moderation, or claims.",
    },
  ],
} as const;
