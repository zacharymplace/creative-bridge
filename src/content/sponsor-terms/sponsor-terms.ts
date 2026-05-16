export const sponsorNonInterferenceTerms = {
  title: "Sponsor Non-Interference Terms",
  version: "3.3.0",
  summary:
    "Public boundaries for future institutional sponsorship before any sponsor language, sponsor recognition, or payment flow is added.",
  position:
    "Institutional support may help sustain The Creative Bridge only if it cannot influence the standard, governance, review outcomes, rejected patterns, public claims, or project legitimacy.",
  sponsorMay: [
    "Support public maintenance, hosting, writing, documentation, and review-response work.",
    "Support implementation guides, workshops, or educational materials.",
    "Be acknowledged only within boundaries defined by public recognition rules.",
    "Fund public-interest work without receiving governance authority.",
  ],
  sponsorMayNot: [
    "Influence rejected patterns.",
    "Influence governance decisions.",
    "Influence review outcomes.",
    "Influence rubric language.",
    "Influence project approval, certification, verification, ranking, or endorsement.",
    "Receive priority treatment for their projects or partners.",
    "Use sponsorship to imply ethical clearance or Creative Bridge approval.",
    "Require removal, softening, or rewriting of criticism-relevant language.",
  ],
  requiredTerms: [
    {
      title: "Non-interference",
      body:
        "Sponsor support does not grant editorial, governance, review, roadmap, rubric, or rejected-pattern control.",
    },
    {
      title: "No endorsement",
      body:
        "Sponsorship does not imply that The Creative Bridge endorses the sponsor, its tools, projects, products, datasets, policies, or AI practices.",
    },
    {
      title: "No certification",
      body:
        "Sponsorship does not certify, verify, approve, or ethically clear the sponsor or any sponsor-affiliated project.",
    },
    {
      title: "Public separation",
      body:
        "Sponsor recognition, if added later, must be clearly separated from standards, review outcomes, project profiles, and governance decisions.",
    },
    {
      title: "Withdrawal protection",
      body:
        "The standard must remain free to criticize sponsor-relevant risks, patterns, or incentives even if funding is withdrawn.",
    },
  ],
  recognitionBoundary:
    "Future sponsor recognition should be plain, non-promotional, and structurally separated from project approval, review outcomes, rankings, certification, or governance authority.",
  releaseGate:
    "No sponsor language or institutional payment flow should launch until these non-interference terms are preserved in the public funding system.",
} as const;
