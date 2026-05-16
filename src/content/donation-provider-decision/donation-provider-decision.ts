export const donationProviderDecision = {
  title: "Donation Provider Decision Record",
  version: "3.6.0",
  summary:
    "A provisional decision record for the first donation provider path before any payment integration is added.",
  position:
    "The first donation provider should minimize legitimacy drift, supporter status pressure, ranking behavior, and productization while allowing low-friction voluntary support.",
  decision:
    "Use GitHub Sponsors as the preferred first provider if available and properly configured. Keep Ko-fi as the fallback lightweight provider. Do not integrate Stripe, Patreon, Open Collective, or Buy Me a Coffee yet.",
  selectedProvider: {
    name: "GitHub Sponsors",
    status: "Preferred first provider",
    rationale:
      "GitHub Sponsors best matches public maintenance, open documentation, and stewardship framing without requiring a marketplace, content gate, or product checkout structure.",
    conditions: [
      "No supporter badges on The Creative Bridge site.",
      "No donor ranking.",
      "No review priority.",
      "No governance influence.",
      "No certification, verification, approval, or endorsement language.",
      "Support copy must remain aligned with Supporter Copy Guardrails.",
    ],
  },
  fallbackProvider: {
    name: "Ko-fi",
    status: "Fallback lightweight provider",
    rationale:
      "Ko-fi can support simple optional donations if GitHub Sponsors is unavailable or unsuitable, but recognition features must be minimized.",
    conditions: [
      "Disable or avoid public supporter-wall framing where possible.",
      "Use plain donation language.",
      "Avoid membership/status language.",
      "Do not offer special access, recognition, review priority, or governance influence.",
    ],
  },
  deferredProviders: [
    {
      name: "Stripe",
      reason:
        "Too powerful for the current stage. Better reserved for future toolkits, workshops, institutional payments, or mature supporter flows.",
    },
    {
      name: "Open Collective",
      reason:
        "Strong transparency fit, but likely too institutionally heavy before external review and governance maturity.",
    },
    {
      name: "Patreon",
      reason:
        "Membership-tier patterns create access, status, exclusivity, and content-gating pressure.",
    },
    {
      name: "Buy Me a Coffee",
      reason:
        "Simple, but less aligned than GitHub Sponsors or Ko-fi with public-standard stewardship.",
    },
  ],
  integrationBoundary:
    "This decision record does not add payment links. A future release must still add donation implementation only after confirming copy, recognition, and governance boundaries remain intact.",
} as const;
