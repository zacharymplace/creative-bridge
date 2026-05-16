export const startHere = {
  title: "Start Here",
  version: "3.14.0",
  summary:
    "A guided router for understanding The Creative Bridge without reading the whole archive.",
  thesis:
    "The Creative Bridge is a public standard for AI-assisted creative work focused on collaboration, traceability, critique, and misuse resistance.",
  paths: [
    {
      title: "I am new",
      href: "/standard",
      body:
        "Read the core standard first. It explains the public expectations without requiring the full governance archive.",
      next: "Then read Limits & Non-Authority.",
      nextHref: "/limits",
    },
    {
      title: "I want to critique it",
      href: "/review",
      body:
        "Start with the public review page, then use the intake guide or reviewer briefs to make criticism specific.",
      next: "Then check the Review Response Log.",
      nextHref: "/review-response-log",
    },
    {
      title: "I want to understand the system",
      href: "/system-coherence",
      body:
        "Use the system coherence map to see how Start, Review, Governance, Rationale, and Funding fit together.",
      next: "Then explore Whyfiles.",
      nextHref: "/whyfiles",
    },
    {
      title: "I want the governance layer",
      href: "/governance",
      body:
        "Read governance, abuse cases, incentive drift, stress tests, and rejected patterns.",
      next: "Then read the Review OS freeze.",
      nextHref: "/review-os",
    },
    {
      title: "I want the funding logic",
      href: "/funding",
      body:
        "Start with funding principles. Donation mechanics remain gated and non-live unless readiness criteria pass.",
      next: "Then read Donation Launch Review.",
      nextHref: "/donation-launch-review",
    },
  ],
  firstRead: [
    { label: "Standard", href: "/standard" },
    { label: "Limits", href: "/limits" },
    { label: "Review", href: "/review" },
    { label: "System", href: "/system-coherence" },
  ],
  notRequired:
    "You do not need to read every artifact. Most pages exist for traceability, governance pressure-testing, or future implementation discipline.",
} as const;
