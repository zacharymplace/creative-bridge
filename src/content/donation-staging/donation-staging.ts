export const donationLinkStagingCopy = {
  title: "Donation Link Staging Copy",
  version: "3.8.0",
  summary:
    "A staged, non-live donation copy layer that defines where donation language may appear once the Donation Implementation Gate passes.",
  position:
    "Donation copy should be prepared before donation links are added. This layer stages copy and placement rules without introducing payment mechanics.",
  stagedCopy: [
    {
      label: "Primary donation note",
      body:
        "Optional donations help sustain hosting, writing, public documentation, and review-response work. Donation does not buy certification, endorsement, review priority, visibility, governance influence, or project legitimacy.",
    },
    {
      label: "Compact footer note",
      body:
        "Voluntary support may help maintain this public standard. Payment never creates approval, verification, certification, ranking, or governance authority.",
    },
    {
      label: "Donation page note",
      body:
        "The Creative Bridge remains free to read, review, criticize, and reference. Support is optional and does not affect review outcomes, governance decisions, public claims, or access to the standard.",
    },
    {
      label: "Provider note",
      body:
        "The preferred first provider is GitHub Sponsors if available and properly configured. Ko-fi remains the fallback lightweight provider.",
    },
  ],
  allowedPlacements: [
    "Funding page",
    "Donation readiness page",
    "Donation implementation gate page",
    "Future donation page",
    "Site footer only after gate pass",
  ],
  disallowedPlacements: [
    "Project profile pages",
    "Review result pages",
    "Reviewer brief pages",
    "Governance decision sections",
    "Rubric score sections",
    "Any place that could imply payment affects legitimacy",
  ],
  requiredNearbyLinks: [
    { label: "Limits & Non-Authority", href: "/limits" },
    { label: "Funding & Pricing Principles", href: "/funding" },
    { label: "Donation Readiness", href: "/donation-readiness" },
    { label: "Donation Implementation Gate", href: "/donation-gate" },
    { label: "Recognition Boundaries", href: "/recognition-boundaries" },
  ],
  status:
    "Staged only. No live donation link, payment provider URL, checkout URL, sponsor link, or supporter subscription link is included in this release.",
} as const;
