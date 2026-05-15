export type Whyfile = {
  slug: string;
  title: string;
  claim: string;
  whyItMatters: string;
  whatCouldGoWrong: string;
  boundaryCreated: string;
  related: string[];
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
];

export function getWhyfile(slug: string) {
  return whyfiles.find((whyfile) => whyfile.slug === slug);
}
