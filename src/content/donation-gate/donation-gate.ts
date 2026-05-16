export const donationImplementationGate = {
  title: "Donation Implementation Gate",
  version: "3.7.0",
  summary:
    "A final pre-integration checklist that must pass before any real donation link, supporter link, payment button, or funding call-to-action is added.",
  position:
    "Donation implementation is not only a technical step. It is a governance-sensitive change that can create legitimacy drift, recognition pressure, supporter capture, and perceived endorsement if added without constraints.",
  requiredPasses: [
    {
      title: "Sustainability Freeze remains intact",
      body:
        "The public standard, review operating system, rationale layer, limits statement, and funding principles remain free and visible.",
    },
    {
      title: "Donation Readiness remains satisfied",
      body:
        "Donation support remains optional, non-authoritative, non-ranking, non-visibility-based, and non-governance-conferring.",
    },
    {
      title: "Supporter Copy Guardrails are used",
      body:
        "All donation/supporter copy must avoid certification, approval, verification, endorsement, priority, visibility, access, or influence language.",
    },
    {
      title: "Recognition Boundaries are preserved",
      body:
        "No donor badges, leaderboards, supporter walls, public tiers, rankings, or status markers are introduced.",
    },
    {
      title: "Sponsor Non-Interference Terms remain separate",
      body:
        "Donation flow must not create institutional sponsor claims or sponsor influence over review, governance, rejected patterns, or public claims.",
    },
    {
      title: "Provider Decision Record is followed",
      body:
        "GitHub Sponsors is the preferred first provider if available. Ko-fi is fallback. Stripe, Patreon, Open Collective, and Buy Me a Coffee remain deferred.",
    },
    {
      title: "Limits statement is linked nearby",
      body:
        "Any donation page or funding CTA must make it easy to reach the Limits & Non-Authority Statement.",
    },
    {
      title: "Decision is logged",
      body:
        "The release that adds payment mechanics must explicitly document why the donation gate passed.",
    },
  ],
  blockedPatterns: [
    "Donate to get reviewed",
    "Donate to be featured",
    "Donate to become verified",
    "Donate to influence the roadmap",
    "Donate to appear as a trusted supporter",
    "Donate to unlock the standard",
    "Donate to receive certification",
    "Donate to be listed as approved",
  ],
  implementationChecklist: [
    "Provider selected according to Donation Provider Decision Record.",
    "Donation copy matches Supporter Copy Guardrails.",
    "No public recognition mechanics are added.",
    "No payment wall is added.",
    "No review priority is added.",
    "No governance access is added.",
    "Limits statement is linked.",
    "Funding principles are linked.",
    "Sustainability freeze is linked.",
    "Release note states that donation does not buy legitimacy.",
  ],
  releaseDecision:
    "No donation link should be added until all required passes are satisfied and the implementation checklist can be truthfully marked complete.",
} as const;
