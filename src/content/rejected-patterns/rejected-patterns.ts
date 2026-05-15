export const rejectedPatterns = {
  title: "Rejected Patterns Registry",
  version: "0.7.0",
  summary:
    "A public registry of behaviors The Creative Bridge explicitly does not support, even if they could accelerate growth, engagement, or platform capability.",
  position:
    "The standard should be clearest where it says no. Rejected patterns protect artists, collaborators, creators, and the credibility of the Bridge.",
  patterns: [
    {
      title: "Style impersonation",
      status: "rejected",
      body:
        "Projects should not use AI to copy, invoke, or market work around the identity of a living artist without consent.",
    },
    {
      title: "Hidden AI use",
      status: "rejected",
      body:
        "Material AI-assisted development should not be hidden when it affects the work’s visuals, storyboards, pitch materials, or production path.",
    },
    {
      title: "Public collaborator tagging",
      status: "rejected",
      body:
        "A project should not publicly tag, pressure, or recruit dream collaborators as a growth tactic.",
    },
    {
      title: "Implied attachment",
      status: "rejected",
      body:
        "No person, studio, publisher, artist, editor, producer, or advisor should be presented as attached, interested, or aligned unless they explicitly agree.",
    },
    {
      title: "Fake certification",
      status: "rejected",
      body:
        "Readiness checks are self-assessments. They should not be marketed as certification, verification, endorsement, or approval.",
    },
    {
      title: "Collaborator as legitimacy prop",
      status: "rejected",
      body:
        "A small or vague human contribution should not be used to market an AI-assisted project as substantially human-made.",
    },
    {
      title: "Marketplace drift",
      status: "rejected without governance review",
      body:
        "Payments, public listings, hiring flows, messaging, profiles, or ranking systems should not be added under the language of preparation without explicit governance review.",
    },
    {
      title: "Pressure-based recruitment",
      status: "rejected",
      body:
        "Creators should not use emotional pressure, fandom pressure, public callouts, or urgency tactics to pull collaborators into projects.",
    },
    {
      title: "Vague credit",
      status: "rejected",
      body:
        "Human contributions should be credited specifically enough to show what work was actually done.",
    },
    {
      title: "AI asset dumping",
      status: "rejected",
      body:
        "The Bridge should not become a feed of undifferentiated AI outputs. Direction, disclosure, role clarity, and human-finished pathways matter more than volume.",
    },
  ],
} as const;
