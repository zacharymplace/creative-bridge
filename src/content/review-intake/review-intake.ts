export const reviewIntakeGuide = {
  title: "Review Intake Guide",
  version: "1.6.0",
  summary:
    "A guide for giving useful criticism of The Creative Bridge without turning review into feature requests, hype, platform expansion, or vague approval.",
  position:
    "Good review should make the standard harder to misuse. The most useful feedback identifies unclear language, weak boundaries, abuse cases, incentive drift, and governance gaps.",
  usefulReview: [
    {
      title: "Name the exact area",
      body:
        "Point to the specific page, section, commitment, rejected pattern, rubric category, or governance rule being reviewed.",
    },
    {
      title: "Identify the risk",
      body:
        "Describe how the language could be misused, misunderstood, weakened, or routed around.",
    },
    {
      title: "Separate clarity from preference",
      body:
        "A review should distinguish between unclear standards and personal disagreement with the project direction.",
    },
    {
      title: "Suggest a bounded change",
      body:
        "Offer specific wording, structure, examples, or guardrails that improve the standard without expanding platform capability.",
    },
    {
      title: "Check against core commitments",
      body:
        "Explain whether the change preserves human direction, disclosure, credit clarity, consent boundaries, and non-platform discipline.",
    },
  ],
  avoid: [
    "feature requests",
    "marketplace ideas",
    "growth tactics",
    "creator monetization requests",
    "AI asset hosting requests",
    "certification requests",
    "vague approval",
    "general AI debate detached from the standard",
  ],
  prompts: [
    "Where could this standard be abused?",
    "Where does the language create loopholes?",
    "Where might a creator overstate human involvement?",
    "Where might a collaborator be pressured or implied?",
    "Where could review become fake certification?",
    "Where could monetization distort the standard?",
    "Where does the project need a clearer no?",
  ],
  links: [
    { label: "Public Review", href: "/review" },
    { label: "Abuse Case Library", href: "/abuse-cases" },
    { label: "Incentive Drift Map", href: "/incentive-drift" },
    { label: "Stress Tests", href: "/stress-tests" },
    { label: "Review Rubric", href: "/review-rubric" },
    { label: "Rejected Patterns", href: "/rejected-patterns" },
    { label: "Change Proposal Template", href: "/docs/review/change-proposal-template.md" },
  ],
} as const;
