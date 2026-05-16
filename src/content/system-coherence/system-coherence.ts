export const systemCoherence = {
  title: "Navigation & System Coherence Pass",
  version: "3.10.0",
  summary:
    "A coherence layer that groups The Creative Bridge into clearer reader paths before additional major-version expansion.",
  position:
    "The system has enough pages. The next risk is sprawl. Navigation should clarify the operating model instead of exposing every artifact as equal-weight.",
  lanes: [
    {
      title: "Start",
      purpose:
        "Give new readers the shortest path into the system.",
      routes: [
        { label: "Start Here", href: "/start" },
        { label: "Standard", href: "/standard" },
        { label: "Limits", href: "/limits" },
      ],
    },
    {
      title: "Review",
      purpose:
        "Invite external critique and record what happens with it.",
      routes: [
        { label: "Public Review", href: "/review" },
        { label: "Review Intake", href: "/review-intake" },
        { label: "Reviewer Briefs", href: "/reviewer-briefs" },
        { label: "Response Log", href: "/review-response-log" },
        { label: "Feedback Seeds", href: "/feedback-seeds" },
      ],
    },
    {
      title: "Governance",
      purpose:
        "Show how the standard resists misuse, drift, and authority creep.",
      routes: [
        { label: "Governance", href: "/governance" },
        { label: "Abuse Cases", href: "/abuse-cases" },
        { label: "Incentive Drift", href: "/incentive-drift" },
        { label: "Stress Tests", href: "/stress-tests" },
        { label: "Review OS", href: "/review-os" },
      ],
    },
    {
      title: "Rationale",
      purpose:
        "Explain why the rules exist.",
      routes: [
        { label: "Whyfiles", href: "/whyfiles" },
        { label: "Rejected Patterns", href: "/rejected-patterns" },
        { label: "Trust Layer", href: "/trust" },
        { label: "System Map", href: "/system-map" },
      ],
    },
    {
      title: "Funding",
      purpose:
        "Prepare sustainability without turning support into legitimacy.",
      routes: [
        { label: "Funding", href: "/funding" },
        { label: "Sustainability", href: "/sustainability" },
        { label: "Donation Readiness", href: "/donation-readiness" },
        { label: "Supporter Copy", href: "/supporter-copy" },
        { label: "Sponsor Terms", href: "/sponsor-terms" },
        { label: "Recognition", href: "/recognition-boundaries" },
        { label: "Payment Providers", href: "/payment-provider-evaluation" },
        { label: "Provider Decision", href: "/donation-provider-decision" },
        { label: "Donation Gate", href: "/donation-gate" },
        { label: "Donation Staging", href: "/donation-staging" },
        { label: "Launch Review", href: "/donation-launch-review" },
      ],
    },
  ],
  compressionRules: [
    "Start pages should be prioritized over artifact pages.",
    "Funding pages should be grouped together instead of promoted individually.",
    "Review pages should lead toward critique and response logging.",
    "Governance pages should explain risk control, not product capability.",
    "Whyfiles should act as rationale records, not the primary front door.",
    "No new major-version work should proceed until navigation sprawl is reduced.",
  ],
  nextDecision:
    "The next major push should simplify visible navigation and make /start the primary public entry point while preserving deep routes for traceability.",
} as const;
