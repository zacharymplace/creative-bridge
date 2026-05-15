export const trustLayer = {
  title: "Public Trust Layer",
  version: "0.5.0",
  summary:
    "A single public reference for what The Creative Bridge is, what it is not, and how it treats AI-assisted creative development, collaborators, consent, credit, and human craft.",
  position:
    "The Creative Bridge is not a defense of replacing artists. It is a standard for making AI-assisted prototypes more transparent, more credit-aware, and more likely to move toward human collaboration.",
  sections: [
    {
      title: "Anti-replacement stance",
      body:
        "AI-assisted development should not be used to erase artists, hide process, impersonate living creators, or market machine output as human-made craft.",
    },
    {
      title: "Disclosure model",
      body:
        "Projects should state their current tier, intended next tier, AI-use disclosure, human roles involved, roles needed, and human-finished pathway.",
    },
    {
      title: "Consent boundaries",
      body:
        "No collaborator should be publicly tagged, named as attached, implied as interested, or used as part of a dream team without explicit consent.",
    },
    {
      title: "Credit boundaries",
      body:
        "Human work should be credited specifically. A project should not use vague human involvement to make an AI-assisted work appear more human-made than it is.",
    },
    {
      title: "Accessibility without evasion",
      body:
        "AI can be an accessibility and prototyping tool, but accessibility does not erase obligations around credit, consent, disclosure, and respect for craft.",
    },
    {
      title: "Non-platform discipline",
      body:
        "The current project is static. It does not include accounts, messaging, payments, marketplace behavior, public profiles, certification, verification, endorsement, or AI asset hosting.",
    },
  ],
  artifactLinks: [
    {
      label: "Creative Bridge Standard",
      href: "/standard",
    },
    {
      label: "Manifesto",
      href: "/manifesto",
    },
    {
      label: "Docs index",
      href: "/docs",
    },
    {
      label: "Creator Submission Packet",
      href: "/submit",
    },
    {
      label: "Collaborator Profile Packet",
      href: "/collaborate",
    },
    {
      label: "Example Project Profile",
      href: "/projects/neighborhood-chorus",
    },
    {
      label: "v0.4.0 Release Note",
      href: "/docs/releases/v0.4.0.md",
    },
  ],
  nonGoals: [
    "No artist replacement claim",
    "No hidden AI-use posture",
    "No style impersonation lane",
    "No public collaborator tagging",
    "No implied attachment",
    "No accounts",
    "No messaging",
    "No marketplace",
    "No payments",
    "No certification",
    "No verification",
    "No endorsement",
    "No AI asset hosting",
  ],
} as const;
