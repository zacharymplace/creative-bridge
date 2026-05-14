export const submissionPacket = {
  title: "Creator Submission Packet",
  version: "0.3.0",
  summary:
    "A static preparation guide for creators who want to describe an AI-assisted project clearly before seeking collaborators.",
  position:
    "This is not a form, marketplace, application, or approval system. It is a preparation packet for making a project understandable, transparent, and collaboration-ready.",
  steps: [
    {
      title: "Define the project",
      body: "State the premise, intent, current tier, intended next tier, and why the project should exist.",
    },
    {
      title: "Disclose the process",
      body: "Explain what AI helped with, what humans decided, and what still needs human craft.",
    },
    {
      title: "Map the roles",
      body: "Separate roles already involved from roles needed. Mark collaboration type clearly: paid, speculative, advisory, community interest, or future dream-team target.",
    },
    {
      title: "Set boundaries",
      body: "Document consent, attribution, no-public-tagging expectations, outreach limits, and what the project will not claim.",
    },
    {
      title: "Run the readiness pass",
      body: "Use the project profile checklist before sharing the project publicly or approaching collaborators.",
    },
  ],
  templateLinks: [
    {
      label: "Project profile template",
      href: "/docs/templates/project-profile-template.md",
    },
    {
      label: "AI-use disclosure template",
      href: "/docs/templates/ai-use-disclosure-template.md",
    },
    {
      label: "Role request template",
      href: "/docs/templates/role-request-template.md",
    },
    {
      label: "Project profile checklist",
      href: "/docs/project-profile-checklist.md",
    },
  ],
  nonGoals: [
    "No forms",
    "No accounts",
    "No messaging",
    "No marketplace",
    "No certification",
    "No public collaborator tagging",
  ],
} as const;
