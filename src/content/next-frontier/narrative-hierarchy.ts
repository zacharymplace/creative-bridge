export const narrativeHierarchy = {
  title: "Next Frontier",
  version: "3.12.0",
  thesis:
    "A public standard for AI-assisted creative work focused on collaboration, traceability, critique, and misuse resistance.",
  whatThisIs: [
    "A public operating system for more accountable AI-assisted creative work.",
    "A reviewable standard, not a certification program.",
    "A collaboration bridge, not a replacement engine.",
    "A governance-first archive of decisions, limits, risks, and rationale.",
  ],
  whatThisIsNot: [
    "Not an approval label.",
    "Not a marketplace ranking system.",
    "Not a verified creator program.",
    "Not a shortcut around consent, credit, labor, or disclosure.",
    "Not a claim that a project is ethical because it references this standard.",
  ],
  entryPaths: [
    {
      title: "Start",
      href: "/start",
      body: "Use this if you are new and need the shortest path through the system.",
    },
    {
      title: "Review",
      href: "/review",
      body: "Use this if you want to critique the standard, pressure-test it, or identify failure modes.",
    },
    {
      title: "Standard",
      href: "/standard",
      body: "Use this if you want the current public principles and operating expectations.",
    },
  ],
  systemLanes: [
    {
      title: "Review",
      href: "/review",
      body: "Public critique, intake, reviewer briefs, response logs, and feedback seeds.",
    },
    {
      title: "Governance",
      href: "/governance",
      body: "Misuse resistance, incentive drift, stress tests, abuse cases, and operating-system boundaries.",
    },
    {
      title: "Rationale",
      href: "/whyfiles",
      body: "Whyfiles, rejected patterns, trust-layer reasoning, and traceable decision logic.",
    },
    {
      title: "Funding",
      href: "/funding",
      body: "Donation readiness, supporter copy, sponsor terms, recognition boundaries, and launch gates.",
    },
  ],
} as const;
