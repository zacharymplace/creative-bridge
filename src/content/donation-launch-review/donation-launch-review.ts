export const donationLaunchReadinessReview = {
  title: "Donation Launch Readiness Review",
  version: "3.9.0",
  summary:
    "A launch-readiness review that evaluates whether The Creative Bridge is ready to add a real donation link.",
  position:
    "The system has enough funding governance to consider donation mechanics, but launch should still be evaluated against explicit pass/defer criteria.",
  outcome: "Defer",
  rationale:
    "The governance layers are strong enough to stage donation mechanics, but a real donation link should wait until the first external review feedback is logged or the project owner intentionally accepts the risk of launching support before external critique.",
  passCriteria: [
    {
      title: "Funding governance exists",
      status: "Pass",
      body:
        "Funding principles, sustainability freeze, donation readiness, supporter copy guardrails, sponsor terms, recognition boundaries, provider evaluation, provider decision, donation gate, and staging copy exist.",
    },
    {
      title: "No payment mechanics currently exist",
      status: "Pass",
      body:
        "The site has not added live payment links, checkout URLs, donation buttons, subscriptions, or supporter payment flows.",
    },
    {
      title: "Donation copy is constrained",
      status: "Pass",
      body:
        "Donation copy has been staged around maintenance, hosting, writing, documentation, and review-response work while rejecting certification, endorsement, review priority, visibility, governance influence, and project legitimacy.",
    },
    {
      title: "Provider path is decided",
      status: "Pass",
      body:
        "GitHub Sponsors is the preferred first provider if available, with Ko-fi as fallback. Other providers remain deferred.",
    },
    {
      title: "External review has been received",
      status: "Defer",
      body:
        "The feedback seed log exists, but real external critique has not yet been recorded in the public response loop.",
    },
    {
      title: "Launch risk is accepted",
      status: "Defer",
      body:
        "If donation support launches before external review, the release should explicitly state that this is a conscious risk decision.",
    },
  ],
  launchOptions: [
    {
      title: "Option A — Wait for first external review",
      recommendation: "Preferred",
      body:
        "Record at least one serious external critique in the Feedback Seed Log and Review Response Log before adding a live donation link.",
    },
    {
      title: "Option B — Soft launch donation link",
      recommendation: "Acceptable with disclosure",
      body:
        "Add a plain donation link only on funding-related pages, with no footer-wide CTA, no recognition mechanics, and explicit no-legitimacy language.",
    },
    {
      title: "Option C — Full supporter launch",
      recommendation: "Not ready",
      body:
        "Recurring support tiers, supporter pages, recognition, badges, or public supporter status should remain blocked.",
    },
  ],
  finalDecision:
    "Do not add a real donation link in v3.9.0. Use this release to freeze the readiness review. The next release may either log external feedback or make an explicit soft-launch decision.",
} as const;
