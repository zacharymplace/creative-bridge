export const collaboratorPacket = {
  title: "Collaborator Profile Packet",
  version: "0.4.0",
  summary:
    "A static preparation guide for artists, editors, producers, musicians, designers, developers, and other collaborators who want to express interest in projects without being treated as interchangeable labor.",
  position:
    "This is not a profile system, marketplace, account, hiring board, or messaging layer. It is a preparation packet for clarifying collaborator boundaries, interests, role fit, credit needs, and opt-in discovery preferences before any platform behavior exists.",
  steps: [
    {
      title: "Define your role lanes",
      body: "Describe the kinds of projects, roles, mediums, and contribution types you are open to considering.",
    },
    {
      title: "Set collaboration boundaries",
      body: "Clarify what you will consider, what you will not consider, how you prefer to be contacted, and what should never be implied without your consent.",
    },
    {
      title: "State AI-adjacent comfort levels",
      body: "Make clear what forms of AI-assisted development you are open to reviewing, revising, redrawing, editing, producing, or avoiding.",
    },
    {
      title: "Clarify credit and terms",
      body: "Name your expectations around credit, ownership, compensation, scope, timelines, revisions, and public attribution.",
    },
    {
      title: "Use opt-in discovery only",
      body: "Interest should be expressed intentionally. No public tagging, no implied attachment, no pressure-based recruitment, and no scraping people into project pages.",
    },
  ],
  templateLinks: [
    {
      label: "Collaborator profile template",
      href: "/docs/templates/collaborator-profile-template.md",
    },
    {
      label: "Role interest template",
      href: "/docs/templates/role-interest-template.md",
    },
    {
      label: "Collaboration boundaries template",
      href: "/docs/templates/collaboration-boundaries-template.md",
    },
    {
      label: "Collaborator readiness checklist",
      href: "/docs/collaborator-readiness-checklist.md",
    },
  ],
  nonGoals: [
    "No accounts",
    "No public profiles",
    "No messaging",
    "No marketplace",
    "No hiring board",
    "No public collaborator tagging",
    "No implied attachment to projects",
  ],
} as const;
