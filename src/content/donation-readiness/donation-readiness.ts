export const donationReadiness = {
  title: "Donation Readiness",
  version: "3.1.0",
  summary:
    "A pre-payment readiness layer for evaluating whether The Creative Bridge is ready to add donation links without creating legitimacy, influence, or governance drift.",
  position:
    "Donation mechanics should not be added just because the project can accept money. The project should first define what donation support means, what it does not buy, and what must be true before donation links go live.",
  readinessCriteria: [
    {
      title: "Public standard remains free",
      body:
        "Donation support must not restrict access to the standard, trust layer, governance materials, Whyfiles, review materials, or limits statement.",
    },
    {
      title: "Donation does not buy authority",
      body:
        "Donors must not receive certification, approval, verification, endorsement, review priority, ranking, visibility, or governance power.",
    },
    {
      title: "Donation language is plain",
      body:
        "Donation copy should describe support for maintenance, writing, hosting, review operations, and public documentation.",
    },
    {
      title: "Donation flow is optional",
      body:
        "The site should remain fully usable without donating. Donation links should not block reading, review, critique, or access to templates.",
    },
    {
      title: "Donation status is not social proof",
      body:
        "Donor names, badges, supporter walls, or public recognition should be avoided until governance can define recognition boundaries.",
    },
    {
      title: "Donation governance is logged",
      body:
        "Adding donation mechanics should be treated as a governance-relevant change and recorded in the decision/release trail.",
    },
  ],
  allowedCopy: [
    "Support public maintenance of The Creative Bridge.",
    "Help sustain writing, hosting, review response work, and public documentation.",
    "Donation does not buy certification, endorsement, review priority, visibility, or governance power.",
    "The core standard remains free to read and use.",
  ],
  notReadyIf: [
    "Donation copy implies moral approval.",
    "Donation creates visibility, ranking, or public supporter status.",
    "Donation links appear before the limits/non-authority statement is easy to find.",
    "Donation creates review priority or private influence.",
    "Donation changes the public standard into a paywalled product.",
  ],
  futureDecision:
    "A future release may add donation links only if this readiness layer remains satisfied and the donation flow preserves the Sustainability Freeze.",
} as const;
