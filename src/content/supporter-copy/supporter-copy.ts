export const supporterCopyGuardrails = {
  title: "Supporter Copy Guardrails",
  version: "3.2.0",
  summary:
    "A guardrail layer for future donation and supporter language before any payment mechanics are added.",
  position:
    "Supporter copy should invite voluntary support for maintenance and public documentation without implying authority, certification, influence, access, status, or endorsement.",
  safeLanguage: [
    {
      title: "Maintenance support",
      copy:
        "Support public maintenance of The Creative Bridge, including hosting, writing, documentation, and review-response work.",
    },
    {
      title: "Free standard commitment",
      copy:
        "The core standard remains free to read, review, criticize, and reference.",
    },
    {
      title: "No authority purchase",
      copy:
        "Support does not buy certification, endorsement, verification, review priority, public visibility, or governance power.",
    },
    {
      title: "Public-interest framing",
      copy:
        "Contributions help sustain a public standard for more accountable AI-assisted creative work.",
    },
  ],
  unsafeLanguage: [
    {
      title: "Approval implication",
      copy:
        "Do not say or imply that supporters are approved, certified, verified, trusted, or ethically cleared.",
    },
    {
      title: "Priority implication",
      copy:
        "Do not offer priority review, faster responses, stronger consideration, or special governance access.",
    },
    {
      title: "Status implication",
      copy:
        "Do not create supporter badges, rankings, public status markers, or legitimacy signals before recognition governance exists.",
    },
    {
      title: "Access implication",
      copy:
        "Do not imply that support buys collaborator access, marketplace access, public profile boosts, or visibility.",
    },
  ],
  draftBlocks: [
    {
      label: "Donation note",
      body:
        "Optional donations help sustain hosting, writing, public documentation, and review-response work. Donation does not buy certification, endorsement, review priority, visibility, or governance influence.",
    },
    {
      label: "Supporter note",
      body:
        "Supporters help keep The Creative Bridge public and maintained. The standard remains free, and supporter status does not affect review outcomes, governance decisions, or project legitimacy.",
    },
    {
      label: "Footer note",
      body:
        "The Creative Bridge may accept voluntary support, but payment never creates approval, verification, endorsement, certification, ranking, or governance authority.",
    },
  ],
  releaseGate:
    "Future donation or supporter mechanics should not launch until these copy guardrails are preserved in the public funding flow.",
} as const;
