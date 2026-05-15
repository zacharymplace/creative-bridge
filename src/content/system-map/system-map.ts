export const systemMap = {
  title: "System Map",
  version: "0.9.0",
  summary:
    "A public overview of how The Creative Bridge layers fit together as a static trust, governance, and preparation system.",
  position:
    "The system map explains the relationship between the standard, trust layer, governance layer, rejected patterns, review rubric, creator packet, collaborator packet, and project profiles.",
  layers: [
    {
      title: "Standard",
      href: "/standard",
      role:
        "Defines the core commitments: human direction, transparency, consent, clear credit, and collaboration-first AI-assisted development.",
    },
    {
      title: "Trust Layer",
      href: "/trust",
      role:
        "Explains what the project is, what it is not, and how it treats AI use, consent, credit, accessibility, and non-platform discipline.",
    },
    {
      title: "Governance Layer",
      href: "/governance",
      role:
        "Defines how the standard changes over time and what future capabilities require explicit review.",
    },
    {
      title: "Rejected Patterns",
      href: "/rejected-patterns",
      role:
        "Lists behaviors the project explicitly refuses, including style impersonation, public tagging, implied attachment, and fake certification.",
    },
    {
      title: "Review Rubric",
      href: "/review-rubric",
      role:
        "Provides non-certifying review categories for evaluating project profile clarity and risk.",
    },
    {
      title: "Creator Submission Packet",
      href: "/submit",
      role:
        "Helps creators prepare transparent AI-assisted project profiles before outreach.",
    },
    {
      title: "Collaborator Profile Packet",
      href: "/collaborate",
      role:
        "Helps collaborators define role lanes, AI-adjacent comfort, credit needs, and consent boundaries.",
    },
    {
      title: "Project Profiles",
      href: "/projects",
      role:
        "Shows how a project can disclose AI use, current tier, needed roles, dream-team boundaries, and a human-finished pathway.",
    },
  ],
  flow: [
    "A creator prepares a project with the Creator Submission Packet.",
    "The project profile discloses AI use, role needs, boundaries, and human-finished pathway.",
    "The Review Rubric helps evaluate clarity without certification.",
    "The Rejected Patterns Registry catches risk and drift.",
    "The Collaborator Packet protects human contributors before outreach.",
    "The Trust and Governance layers keep the whole system accountable before platform capability.",
  ],
} as const;
