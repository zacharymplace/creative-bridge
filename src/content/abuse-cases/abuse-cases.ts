export const abuseCaseLibrary = {
  title: "Abuse Case Library",
  version: "1.3.0",
  summary:
    "A public library of ways The Creative Bridge could be misused, weakened, or distorted if future platform behavior is added without strong governance.",
  position:
    "The standard should name foreseeable abuse before it happens. Abuse cases make the project harder to misuse and easier to govern.",
  cases: [
    {
      title: "Dream-team pressure loop",
      risk:
        "A creator publicly names ideal collaborators to generate attention, creating pressure on those people to respond.",
      guardrail:
        "Dream-team references must stay private, opt-in, and non-public unless a collaborator explicitly agrees.",
    },
    {
      title: "Fake human legitimacy",
      risk:
        "A project uses a minor human contribution to imply the work is substantially human-made.",
      guardrail:
        "Human contributions should be credited specifically, with clear separation from AI-assisted scaffolding.",
    },
    {
      title: "Hidden AI production pipeline",
      risk:
        "AI materially shapes visuals, storyboards, pitch materials, or production assets while public copy implies manual authorship.",
      guardrail:
        "Material AI use should be disclosed where it affects creative development or production claims.",
    },
    {
      title: "Style impersonation laundering",
      risk:
        "A project avoids naming a living artist directly but still markets itself around a recognizable copied style.",
      guardrail:
        "The rejected patterns registry should treat indirect style impersonation as a live risk, not a loophole.",
    },
    {
      title: "Marketplace drift",
      risk:
        "Preparation templates slowly become public listings, ranking, hiring flows, or pay-to-access collaboration surfaces.",
      guardrail:
        "Any marketplace, payment, ranking, messaging, or public profile behavior requires explicit governance review.",
    },
    {
      title: "Readiness as certification",
      risk:
        "A self-assessment score gets marketed as approval, verification, endorsement, or safety certification.",
      guardrail:
        "Readiness language must remain non-certifying and should clearly state what has not been verified.",
    },
    {
      title: "Pressure-based recruitment",
      risk:
        "Creators use urgency, social pressure, fandom, public callouts, or emotional framing to recruit collaborators.",
      guardrail:
        "Outreach should be consent-aware, non-public by default, and free of pressure mechanics.",
    },
    {
      title: "Collaborator bait-and-switch",
      risk:
        "A project asks for advisory help, then expands the expected labor without pay, scope clarity, or credit agreement.",
      guardrail:
        "Role requests must define collaboration type, scope, deliverables, credit, compensation, and boundaries.",
    },
    {
      title: "Review theater",
      risk:
        "Public review exists in name only while decisions continue to prioritize speed, growth, or optics.",
      guardrail:
        "Governance decisions should remain documented, versioned, and tied to specific risks or rejected patterns.",
    },
    {
      title: "AI asset dumping",
      risk:
        "The project becomes a volume feed of AI outputs instead of a bridge toward human collaboration.",
      guardrail:
        "Project profiles should require intent, role clarity, disclosure, boundaries, and a human-finished pathway.",
    },
  ],
} as const;
