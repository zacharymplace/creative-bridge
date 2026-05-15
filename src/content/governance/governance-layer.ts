export const governanceLayer = {
  title: "Governance Layer",
  version: "0.6.0",
  summary:
    "A static governance model for how The Creative Bridge standard changes over time without drifting into AI hype, artist replacement, hidden process, or platform behavior before trust is earned.",
  position:
    "Governance exists so the standard can evolve without losing its core commitments: human direction, transparent process, clear credit, consent boundaries, collaboration-first design, and non-platform discipline.",
  sections: [
    {
      title: "Versioning",
      body:
        "Material changes should be versioned. Release notes should explain what changed, why it changed, and what risks or boundaries were clarified.",
    },
    {
      title: "Change proposals",
      body:
        "Proposed changes should identify the affected principle, the practical problem, the proposed wording or artifact change, and the risk if the change is accepted.",
    },
    {
      title: "Review principles",
      body:
        "Changes should preserve artist respect, collaborator consent, disclosure clarity, role clarity, and the bridge from AI-assisted prototype toward human craft.",
    },
    {
      title: "Rejected patterns",
      body:
        "The standard should reject public collaborator tagging, implied attachment, style impersonation, vague credit, hidden AI use, fake certification, and marketplace behavior disguised as preparation.",
    },
    {
      title: "Decision log",
      body:
        "Decisions should remain documented in Markdown so the project can explain why important boundaries exist and how prior tradeoffs were handled.",
    },
    {
      title: "Escalation rules",
      body:
        "Any feature that introduces profiles, submissions, messaging, payments, public listings, scoring, certification, or verification should require an explicit governance review before implementation.",
    },
  ],
  artifacts: [
    { label: "Decisions log", href: "/docs/DECISIONS.md" },
    { label: "Roadmap", href: "/docs/roadmap.md" },
    { label: "Trust Layer", href: "/trust" },
    { label: "Creative Bridge Standard", href: "/standard" },
    { label: "Contributing guide", href: "/docs/contributing.md" },
  ],
  escalationTriggers: [
    "accounts",
    "submissions",
    "public profiles",
    "messaging",
    "payments",
    "marketplace behavior",
    "public collaborator discovery",
    "public collaborator tagging",
    "scoring algorithms",
    "certification",
    "verification",
    "endorsement",
    "AI asset hosting",
  ],
} as const;
