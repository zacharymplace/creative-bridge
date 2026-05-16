export const paymentProviderEvaluation = {
  title: "Payment Provider Evaluation",
  version: "3.5.0",
  summary:
    "A governance-first evaluation of possible donation and supporter payment providers before selecting or integrating any payment mechanics.",
  position:
    "The Creative Bridge should not choose a payment provider based only on convenience. Any provider must fit the Sustainability Freeze, Donation Readiness, Supporter Copy Guardrails, Sponsor Non-Interference Terms, and Recognition Boundaries.",
  evaluationCriteria: [
    "Supports optional giving without implying certification, endorsement, approval, or access.",
    "Allows plain supporter language without social-pressure mechanics.",
    "Does not require public leaderboards, rankings, badges, or status displays.",
    "Can keep the core standard free and accessible.",
    "Supports clear separation between funding and governance.",
    "Does not force marketplace behavior.",
    "Can be removed or changed without damaging the public standard.",
    "Can support transparent accounting notes later if needed.",
  ],
  providers: [
    {
      name: "Stripe",
      fit: "Strong infrastructure fit",
      strengths:
        "Flexible checkout, subscriptions, donation-style flows, and future product/toolkit support.",
      risks:
        "Can make it easy to overbuild payments too early or drift toward productization before public review matures.",
      bestUse:
        "Later-stage direct donations, supporter subscriptions, toolkits, workshops, or institutional payments.",
      currentRecommendation:
        "Evaluate, but do not integrate yet.",
    },
    {
      name: "GitHub Sponsors",
      fit: "Strong public-work fit",
      strengths:
        "Aligns with open/public maintenance and can frame support around sustaining the project.",
      risks:
        "May imply software-maintainer framing more than creative-standard stewardship.",
      bestUse:
        "Optional support for public documentation, maintenance, and open governance artifacts.",
      currentRecommendation:
        "Good early candidate if available and if copy avoids influence or legitimacy claims.",
    },
    {
      name: "Ko-fi",
      fit: "Strong lightweight donation fit",
      strengths:
        "Simple voluntary support flow with low setup friction.",
      risks:
        "Creator-support framing can drift into fan/supporter recognition patterns if not constrained.",
      bestUse:
        "Small optional donations during early public review.",
      currentRecommendation:
        "Possible early candidate if recognition features are minimized.",
    },
    {
      name: "Open Collective",
      fit: "Strong transparency fit",
      strengths:
        "Designed for collectives, transparent funding, and public-interest support.",
      risks:
        "May be heavier than needed at the current stage and could imply organization maturity before it exists.",
      bestUse:
        "Later public-interest funding, grants, or collective stewardship if governance matures.",
      currentRecommendation:
        "Strong future candidate, likely premature now.",
    },
    {
      name: "Patreon",
      fit: "Moderate supporter fit",
      strengths:
        "Familiar membership model and recurring support.",
      risks:
        "Membership tiers can create access, status, exclusivity, and content-gating pressure.",
      bestUse:
        "Only if supporter tiers remain non-authority, non-governance, and non-access-based.",
      currentRecommendation:
        "Avoid for now unless tiers are extremely constrained.",
    },
    {
      name: "Buy Me a Coffee",
      fit: "Moderate lightweight fit",
      strengths:
        "Simple donation-like support and familiar creator-support framing.",
      risks:
        "Can overemphasize personality-driven support rather than public-standard sustainability.",
      bestUse:
        "Small optional support if copy remains plain and non-promotional.",
      currentRecommendation:
        "Possible, but Ko-fi or GitHub Sponsors may fit better.",
    },
  ],
  currentDecision:
    "Do not integrate payment mechanics yet. The preferred next step is to keep provider evaluation public, gather review feedback, and only then choose an initial low-friction donation provider.",
  provisionalRanking: [
    "GitHub Sponsors",
    "Ko-fi",
    "Stripe",
    "Open Collective",
    "Buy Me a Coffee",
    "Patreon",
  ],
} as const;
