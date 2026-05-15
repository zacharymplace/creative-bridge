export const reviewRubric = {
  title: "Review Rubric Layer",
  version: "0.8.0",
  summary:
    "A public rubric for evaluating Creative Bridge project profiles without treating the process as certification, endorsement, or verification.",
  position:
    "The rubric exists to improve clarity and accountability. It is not a scoring algorithm, approval system, or authority claim.",
  categories: [
    {
      title: "Transparency",
      focus:
        "Does the project clearly describe its current tier, intended next tier, AI-use disclosure, and production state?",
    },
    {
      title: "Consent boundaries",
      focus:
        "Does the project avoid public tagging, implied attachment, pressure-based recruitment, or unclear outreach behavior?",
    },
    {
      title: "Role clarity",
      focus:
        "Are collaborator roles, collaboration types, scope, and expectations understandable?",
    },
    {
      title: "Credit specificity",
      focus:
        "Does the project clearly distinguish human contributions from AI-assisted scaffolding?",
    },
    {
      title: "AI-use disclosure",
      focus:
        "Is AI involvement visible enough to understand how the project was developed?",
    },
    {
      title: "Human-finished pathway",
      focus:
        "Does the project describe how it could move toward stronger human craft involvement over time?",
    },
    {
      title: "Rejected-pattern risk",
      focus:
        "Does the project avoid behaviors listed in the Rejected Patterns Registry?",
    },
  ],
  scale: [
    {
      label: "strong",
      description:
        "The project demonstrates clear alignment with the Bridge standard.",
    },
    {
      label: "acceptable",
      description:
        "The project is generally aligned but could improve clarity or boundaries.",
    },
    {
      label: "needs work",
      description:
        "The project lacks clarity, disclosure, consent boundaries, or role definition in important areas.",
    },
  ],
  nonGoals: [
    "No certification",
    "No endorsement",
    "No verification",
    "No ranking system",
    "No algorithmic authority",
    "No marketplace scoring",
    "No hidden moderation layer",
  ],
} as const;
