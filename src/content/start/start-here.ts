export const startHere = {
  title: "Start Here",
  version: "2.5.0",
  summary:
    "A simple entry route for people encountering The Creative Bridge for the first time.",
  position:
    "The system is now large enough that visitors need a clear starting path before they enter the deeper standard, review, rationale, and governance layers.",
  paths: [
    {
      title: "I want to understand the standard",
      href: "/standard",
      body:
        "Start with the core standard, then read the trust layer, rejected patterns, and limits statement.",
      next: ["/trust", "/rejected-patterns", "/limits"],
    },
    {
      title: "I want to review or criticize it",
      href: "/review",
      body:
        "Start with the public review page, then use the review intake guide, reviewer briefs, and response log.",
      next: ["/review-intake", "/reviewer-briefs", "/review-response-log"],
    },
    {
      title: "I want to understand why these rules exist",
      href: "/whyfiles",
      body:
        "Start with Whyfiles, then inspect abuse cases, incentive drift, and governance stress tests.",
      next: ["/abuse-cases", "/incentive-drift", "/stress-tests"],
    },
    {
      title: "I want to see the whole system",
      href: "/system-map",
      body:
        "Start with the system map, then inspect the public review operating system freeze.",
      next: ["/review-os", "/governance", "/docs"],
    },
  ],
} as const;
