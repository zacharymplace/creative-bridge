export const fundingPrinciples = {
  title: "Funding & Pricing Principles",
  version: "2.9.0",
  summary:
    "A public funding model for supporting The Creative Bridge without turning the standard into paywalled authority, certification, marketplace access, or influence buying.",
  position:
    "Funding should sustain the work without corrupting the standard. Payment must not buy ethical status, visibility, review priority, certification, endorsement, or governance power.",
  nonNegotiables: [
    "The core public standard remains free to read.",
    "Payment does not buy certification, approval, verification, or endorsement.",
    "Payment does not buy favorable review outcomes.",
    "Payment does not buy public collaborator access.",
    "Payment does not buy ranking or placement.",
    "Funding must remain visibly separate from governance decisions.",
  ],
  phases: [
    {
      title: "Phase 0 — Public review era",
      timing: "Current",
      model:
        "No required payment. Optional donations may support hosting, writing, maintenance, and review operations.",
      allowed:
        "Donation links, transparent support notes, public roadmap, and non-paywalled docs.",
      notAllowed:
        "Paid certification, paid review outcomes, paid project approval, or paid visibility.",
    },
    {
      title: "Phase 1 — Supporter era",
      timing: "After meaningful external review",
      model:
        "Optional supporter memberships for people who want to sustain the public standard.",
      allowed:
        "Supporter updates, changelog notes, behind-the-scenes essays, and early drafts.",
      notAllowed:
        "Governance control, review priority, certification, endorsement, or creator ranking.",
    },
    {
      title: "Phase 2 — Toolkit era",
      timing: "After the standard proves useful",
      model:
        "Paid templates, implementation packs, workshops, and advisory materials can exist around the free standard.",
      allowed:
        "Downloadable templates, implementation guides, paid workshops, and organization-facing support.",
      notAllowed:
        "Locking the standard itself, selling approval, or creating pay-to-legitimize workflows.",
    },
    {
      title: "Phase 3 — Institutional era",
      timing: "Only after governance hardening",
      model:
        "Organizations may fund implementation, training, or stewardship without controlling the standard.",
      allowed:
        "Institutional sponsorship, implementation support, training, and public-interest grants.",
      notAllowed:
        "Sponsor influence over rejected patterns, governance decisions, review outcomes, or public claims.",
    },
  ],
  pricingLadders: [
    {
      name: "Donation",
      price: "$5–$25 one-time or monthly",
      purpose:
        "Support public maintenance without receiving authority, access, or review advantage.",
    },
    {
      name: "Supporter",
      price: "$5–$15/month",
      purpose:
        "Sustain ongoing writing, review response work, and public documentation.",
    },
    {
      name: "Builder Toolkit",
      price: "$29–$99 one-time",
      purpose:
        "Templates and implementation materials for creators or teams applying the standard.",
    },
    {
      name: "Workshop",
      price: "$250–$1,500/session",
      purpose:
        "Guided application for teams, studios, classrooms, or creative organizations.",
    },
    {
      name: "Institutional Support",
      price: "Custom",
      purpose:
        "Sponsorship or implementation support with public non-interference boundaries.",
    },
  ],
  driftRisks: [
    {
      risk: "Supporter capture",
      guardrail:
        "Supporters may fund the work, but they do not control the standard.",
    },
    {
      risk: "Pay-to-legitimize",
      guardrail:
        "No payment tier can imply approval, certification, verification, or endorsement.",
    },
    {
      risk: "Platform monetization drift",
      guardrail:
        "Payments cannot create rankings, marketplace placement, public profile boosts, or collaborator access.",
    },
    {
      risk: "Governance influence",
      guardrail:
        "Sponsors and paid users cannot override rejected patterns or governance constraints.",
    },
  ],
} as const;
