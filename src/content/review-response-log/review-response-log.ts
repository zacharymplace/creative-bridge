export const reviewResponseLog = {
  title: "Review Response Log",
  version: "1.9.0",
  summary:
    "A public structure for recording what review feedback came in, what changed, what was rejected, and why.",
  position:
    "Public review is only meaningful if responses are traceable. The log should show how criticism affected the standard without pretending every suggestion should be accepted.",
  states: [
    {
      label: "Received",
      meaning:
        "Feedback has been captured, but no decision has been made yet.",
    },
    {
      label: "Accepted",
      meaning:
        "Feedback produced a change to language, structure, docs, schemas, governance, or review materials.",
    },
    {
      label: "Partially accepted",
      meaning:
        "The concern was valid, but the final change was narrower than proposed.",
    },
    {
      label: "Rejected",
      meaning:
        "The suggestion was not adopted because it weakened the standard, expanded scope too early, or conflicted with core commitments.",
    },
    {
      label: "Deferred",
      meaning:
        "The issue may matter later, but it depends on future platform behavior or additional review.",
    },
  ],
  entries: [
    {
      id: "example-001",
      source: "Example reviewer",
      area: "Rejected Patterns Registry",
      feedback:
        "The standard should clarify that indirect style impersonation can still be harmful even if a living artist is not named directly.",
      response:
        "Accepted as a useful abuse case. Added style impersonation laundering to the Abuse Case Library.",
      status: "Accepted",
      release: "v1.3.0",
    },
    {
      id: "example-002",
      source: "Example reviewer",
      area: "Review Rubric",
      feedback:
        "Readiness language could be mistaken for certification if displayed too prominently.",
      response:
        "Accepted as a guardrail. Repeated that readiness and rubric language are non-certifying and not verification, endorsement, or approval.",
      status: "Accepted",
      release: "v1.0.0",
    },
    {
      id: "example-003",
      source: "Example reviewer",
      area: "Product Scope",
      feedback:
        "Add creator accounts and let people submit projects directly.",
      response:
        "Rejected for now. Submissions, accounts, messaging, and platform behavior require governance review and are outside the static standard phase.",
      status: "Rejected",
      release: "v1.1.0",
    },
  ],
  principles: [
    "Do not accept feedback just because it sounds useful.",
    "Do not reject feedback just because it is uncomfortable.",
    "Prefer narrower changes that preserve the standard.",
    "Separate review response from feature intake.",
    "Document rejected suggestions when they clarify boundaries.",
    "Treat dissent as useful when it exposes risk.",
  ],
} as const;
