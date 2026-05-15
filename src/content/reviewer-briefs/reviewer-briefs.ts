export const reviewerBriefPack = {
  title: "Reviewer Brief Pack",
  version: "1.7.0",
  summary:
    "Short, role-specific briefs that help reviewers give targeted criticism of The Creative Bridge without drifting into vague approval, general AI debate, or feature requests.",
  position:
    "Different reviewers see different risks. The goal is to ask each person for the kind of critique they are best positioned to give.",
  briefs: [
    {
      audience: "Artists",
      focus:
        "Review whether the standard protects artistic labor, avoids style impersonation loopholes, and gives enough weight to credit, consent, and human craft.",
      ask:
        "Where could this still allow artist replacement, vague credit, style laundering, or AI-assisted work being passed off as human-made?",
    },
    {
      audience: "Writers",
      focus:
        "Review whether the language is clear, principled, specific, and hard to misuse.",
      ask:
        "Where does the wording create loopholes, overclaim authority, soften a boundary, or fail to explain the actual standard?",
    },
    {
      audience: "Designers",
      focus:
        "Review whether the site structure, navigation, and hierarchy make the standard easy to understand without turning it into SaaS gloss.",
      ask:
        "Where does the interface hide important boundaries, over-polish the seriousness, or make the review path harder than it should be?",
    },
    {
      audience: "Developers",
      focus:
        "Review the static architecture, docs mirroring, schemas, QA script, release structure, and deployment path.",
      ask:
        "Where is the repo fragile, overcomplicated, under-tested, or likely to break as more standards/docs/routes are added?",
    },
    {
      audience: "Skeptics",
      focus:
        "Review whether the project actually resists the harms it names or merely presents a cleaner wrapper around the same incentives.",
      ask:
        "Where does this still become AI laundering, marketplace drift, fake legitimacy, review theater, or platform capture?",
    },
    {
      audience: "Collaborators",
      focus:
        "Review whether contributor boundaries, role requests, credit expectations, and opt-in discovery rules are strong enough.",
      ask:
        "Where could a collaborator be pressured, under-credited, implied as attached, or pulled into unclear scope?",
    },
    {
      audience: "Creators",
      focus:
        "Review whether the standard gives creators a realistic path from AI-assisted prototype toward better human collaboration.",
      ask:
        "Where does the process feel useful, where does it feel too heavy, and where could it unintentionally reward shortcuts?",
    },
  ],
} as const;
