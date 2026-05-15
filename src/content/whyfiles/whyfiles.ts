export type Whyfile = {
  slug: string;
  title: string;
  claim: string;
  whyItMatters: string;
  whatCouldGoWrong: string;
  boundaryCreated: string;
  related: string[];
  category: "Disclosure" | "Consent" | "Credit" | "Governance" | "Review" | "Platform";
};

export const whyfilesMeta = {
  title: "Whyfiles",
  version: "2.1.0",
  summary:
    "Public rationale records explaining why major Creative Bridge rules, rejections, guardrails, and design choices exist.",
  position:
    "Whyfiles are not release notes or generic documentation. They are reasoning records for the standard.",
} as const;

export const whyfiles: Whyfile[] = [
  {
    slug: "ai-disclosure",
    category: "Disclosure",
    title: "Why AI-assisted work needs disclosure",
    claim:
      "Material AI assistance should be disclosed when it shapes the creative process, pitch, production path, or public claims around the work.",
    whyItMatters:
      "Disclosure lets collaborators, reviewers, audiences, and future partners understand what was human-directed, what was machine-assisted, and where human craft still needs to enter.",
    whatCouldGoWrong:
      "Without disclosure, AI-assisted work can be marketed as fully human-made, collaborators can be misled about the state of the project, and reviewers cannot evaluate credit or process honestly.",
    boundaryCreated:
      "Projects should clearly describe how AI was used when that use materially affects the work.",
    related: ["Trust Layer", "Review Rubric", "Abuse Case Library", "Rejected Patterns Registry"],
  },
  {
    slug: "dream-team-privacy",
    category: "Consent",
    title: "Why dream-team outreach must stay private and opt-in",
    claim:
      "Dream-team references should stay private unless a person has explicitly opted in or agreed to be publicly associated with the project.",
    whyItMatters:
      "Publicly naming desired collaborators can create social pressure, imply attachment, or turn people into marketing assets without consent.",
    whatCouldGoWrong:
      "A creator could use a respected artist, editor, studio, or producer as a public legitimacy signal even when that person has no connection to the project.",
    boundaryCreated:
      "No public collaborator tagging, implied attachment, or dream-team signaling without explicit consent.",
    related: ["Rejected Patterns Registry", "Abuse Case Library", "Collaborator Profile Packet", "Governance Layer"],
  },
  {
    slug: "readiness-is-not-certification",
    category: "Review",
    title: "Why readiness is not certification",
    claim:
      "Readiness checks and review rubrics are self-assessment tools, not certification, verification, endorsement, approval, or safety labels.",
    whyItMatters:
      "The project does not have institutional authority, verified review operations, or enforcement infrastructure. Pretending otherwise would create false trust.",
    whatCouldGoWrong:
      "Creators could market a readiness result as proof that their work is ethical, approved, human-respecting, or safe from abuse.",
    boundaryCreated:
      "Every readiness/rubric layer should remain qualitative, non-certifying, and explicit about what has not been verified.",
    related: ["Review Rubric", "Review Response Log", "Governance Stress Tests", "Rejected Patterns Registry"],
  },
  {
    slug: "marketplace-gating",
    category: "Platform",
    title: "Why marketplace behavior is gated",
    claim:
      "Accounts, messaging, payments, public profiles, matching, rankings, and marketplace behavior require explicit governance review before implementation.",
    whyItMatters:
      "Marketplace mechanics change incentives. They can turn preparation into extraction, rankings into authority, and collaborator interest into transactional pressure.",
    whatCouldGoWrong:
      "The project could become the thing it rejects: a platform that monetizes AI-assisted volume while using human collaboration language as legitimacy cover.",
    boundaryCreated:
      "No marketplace behavior without documented governance review and explicit public rationale.",
    related: ["Governance Layer", "Incentive Drift Map", "Abuse Case Library", "Public Review Operating System Freeze"],
  },
  {
    slug: "static-first",
    category: "Platform",
    title: "Why static-first matters",
    claim:
      "The Creative Bridge should remain static-first until its public standard, review system, and governance boundaries are strong enough to justify more capability.",
    whyItMatters:
      "Static-first keeps the project inspectable, portable, low-power, and less prone to premature platform incentives.",
    whatCouldGoWrong:
      "Adding accounts, submissions, hosted assets, or automated review too early could create moderation, trust, and incentive problems before the standard is ready.",
    boundaryCreated:
      "Prefer public docs, schemas, release notes, QA, and rationale records before platform mechanics.",
    related: ["System Map", "Public Standard Freeze", "Public Review Operating System Freeze", "Governance Layer"],
  },
  {
    slug: "criticism-over-approval",
    category: "Review",
    title: "Why review asks for criticism over approval",
    claim:
      "Public review should ask for focused criticism, not praise, promotion, endorsement, or vague approval.",
    whyItMatters:
      "Approval can hide weaknesses. Criticism exposes loopholes, incentive drift, unclear language, and abuse cases before they become product logic.",
    whatCouldGoWrong:
      "The review process could become launch theater: people skim, approve, share, and move on while the standard remains weak.",
    boundaryCreated:
      "Review materials should guide reviewers toward risk, misuse, drift, and governance critique.",
    related: ["Public Review", "Review Intake Guide", "Reviewer Brief Pack", "Review Response Log"],
  },
  {
    slug: "public-tagging",
    category: "Consent",
    title: "Why public collaborator tagging is rejected",
    claim:
      "People should not be publicly tagged, named, implied, or used as social proof for a project unless they explicitly consent.",
    whyItMatters:
      "Public tagging can create pressure, confusion, reputational risk, and implied endorsement before any real collaboration exists.",
    whatCouldGoWrong:
      "A creator could tag artists, editors, studios, or producers to gain attention, imply legitimacy, or pressure a response.",
    boundaryCreated:
      "Collaborator interest, dream-team references, and outreach should remain private or explicitly opt-in.",
    related: ["Rejected Patterns Registry", "Abuse Case Library", "Collaborator Profile Packet", "Review Intake Guide"],
  },
  {
    slug: "style-impersonation",
    category: "Consent",
    title: "Why style impersonation is rejected",
    claim:
      "A project should not use AI or process language to launder a recognizable living artist's style into a new work without consent.",
    whyItMatters:
      "Style impersonation can extract creative identity while avoiding direct copying language.",
    whatCouldGoWrong:
      "A project could avoid naming an artist directly while still marketing itself around their recognizable visual language.",
    boundaryCreated:
      "Indirect style imitation should be treated as a live risk, not a loophole.",
    related: ["Rejected Patterns Registry", "Abuse Case Library", "Review Rubric", "Trust Layer"],
  },
  {
    slug: "collaborator-credit",
    category: "Credit",
    title: "Why collaborator credit must be specific",
    claim:
      "Human contributors should receive specific credit for specific work instead of vague association or blanket legitimacy.",
    whyItMatters:
      "Specific credit helps prevent minor participation from being inflated into broad endorsement or full creative authorship.",
    whatCouldGoWrong:
      "A project could use one consultation, sketch, edit, or note to imply broader human involvement than actually occurred.",
    boundaryCreated:
      "Credit should describe role, contribution type, scope, and boundaries wherever possible.",
    related: ["Collaborator Profile Packet", "Project Profile Model", "Review Rubric", "Review Response Log"],
  },
  {
    slug: "review-response-traceability",
    category: "Governance",
    title: "Why review responses must be traceable",
    claim:
      "Public review should leave a record of what feedback came in, what changed, what was rejected, and why.",
    whyItMatters:
      "Traceability prevents review from becoming theater and makes governance accountable to actual criticism.",
    whatCouldGoWrong:
      "A project could claim it was reviewed while ignoring hard feedback, accepting only easy praise, or hiding rejected concerns.",
    boundaryCreated:
      "Review feedback should be logged with response state, rationale, and release relationship.",
    related: ["Review Response Log", "Governance Layer", "Public Review", "Review Intake Guide"],
  },
  {
    slug: "platform-capability-gating",
    category: "Platform",
    title: "Why platform capability is gated",
    claim:
      "New platform capabilities should be reviewed before they create visibility, access, ranking, messaging, payment, or hosting power.",
    whyItMatters:
      "Capability changes incentives. Once a system can amplify, rank, host, monetize, or connect people, it can also distort behavior.",
    whatCouldGoWrong:
      "A static standard could gradually become an opaque platform that rewards speed, volume, status, or monetization over consent and craft.",
    boundaryCreated:
      "Accounts, submissions, messaging, payments, ranking, public profiles, marketplace behavior, and AI asset hosting require explicit governance review.",
    related: ["Governance Layer", "Incentive Drift Map", "Governance Stress Tests", "Public Review Operating System Freeze"],
  },
];

export function getWhyfile(slug: string) {
  return whyfiles.find((whyfile) => whyfile.slug === slug);
}


export const whyfileCategories = [
  {
    title: "Disclosure",
    description:
      "Why process transparency matters when AI materially shapes creative work.",
    items: whyfiles.filter((whyfile) => whyfile.category === "Disclosure"),
  },
  {
    title: "Consent",
    description:
      "Why people, styles, names, and social proximity cannot be treated as available materials.",
    items: whyfiles.filter((whyfile) => whyfile.category === "Consent"),
  },
  {
    title: "Credit",
    description:
      "Why human contribution needs specific attribution instead of vague legitimacy signals.",
    items: whyfiles.filter((whyfile) => whyfile.category === "Credit"),
  },
  {
    title: "Governance",
    description:
      "Why review, dissent, decisions, and response logs need public traceability.",
    items: whyfiles.filter((whyfile) => whyfile.category === "Governance"),
  },
  {
    title: "Review",
    description:
      "Why criticism, readiness, and rubric language must avoid approval theater.",
    items: whyfiles.filter((whyfile) => whyfile.category === "Review"),
  },
  {
    title: "Platform",
    description:
      "Why capability, marketplace behavior, automation, and hosted systems remain gated.",
    items: whyfiles.filter((whyfile) => whyfile.category === "Platform"),
  },
] as const;
