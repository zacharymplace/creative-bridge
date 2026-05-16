/**
 * Primary marketing copy for The Creative Bridge landing page.
 * Editorial tone: minimal, calm, non-hype.
 */

export const siteThemeColor = "#f7f7f5";

export const siteMeta = {
  title: "The Creative Bridge",
  description:
    "AI-assisted creation should help more people reach human collaboration, not replace artists.",
  versionLabel: "v0.2.1",
} as const;

export const siteNav = {
  skipToContent: "Skip to content",
  brand: "The Creative Bridge",
  sections: [
    { id: "position", label: "Position" },
    { id: "problem", label: "Problem" },
    { id: "how", label: "How it works" },
    { id: "tiers", label: "Tiers" },
    { id: "creators", label: "Creators" },
    { id: "collaborators", label: "Collaborators" },
    { id: "transparency", label: "Transparency" },
    { id: "standard", label: "Standard" },
    { id: "manifesto", label: "Manifesto" },
  ],
} as const;

export const heroCopy = {
  kicker: "A human-first standard for creative work",
  title: "Reach collaboration, not replacement.",
  lede:
    "The Creative Bridge is a disciplined way to use AI in creative projects: it should widen access to craft, clarify intent, and help more people arrive at real collaboration with artists and makers.",
  primaryCta: { label: "Read the manifesto", href: "/manifesto" },
  secondaryCta: { label: "The Standard", href: "/standard" },
} as const;

export const positionCopy = {
  id: "position",
  title: "The position",
  eyebrow: "Principle",
  paragraphs: [
    "Tools change. The point of creative work does not. The Bridge exists because the best outcomes still come from people who can listen, decide, and take responsibility together.",
    "AI can lower friction, sharpen drafts, and speed exploration. It cannot carry the full weight of authorship, consent, and care. When software pretends otherwise, it hollows out the field it claims to serve.",
    "We treat AI as scaffolding: useful when bounded, dangerous when it substitutes for relationship, credit, and craft.",
  ],
} as const;

export const problemCopy = {
  id: "problem",
  title: "The problem",
  eyebrow: "Why this matters",
  bullets: [
    {
      title: "Displacement disguised as progress",
      body: "When “creation” collapses into generation, collaborators disappear—and so does the social fabric that sustains art.",
    },
    {
      title: "Ambiguous authorship",
      body: "Without clear roles and credit, trust erodes. People stop sharing work-in-progress. Projects become brittle.",
    },
    {
      title: "Speed without direction",
      body: "Fast output is not the same as good judgment. Unchecked acceleration produces noise, not culture.",
    },
  ],
} as const;

export const howCopy = {
  id: "how",
  title: "How the Bridge works",
  eyebrow: "Mechanism",
  intro:
    "The Bridge is not a single app. It is a lightweight contract between creators, collaborators, and the tools they choose to use.",
  steps: [
    {
      title: "Name the human intent",
      body: "Start with a brief a person wrote—not a prompt that bypasses thinking. Intent is owned, not inferred.",
    },
    {
      title: "Bound the machine role",
      body: "Decide what AI is allowed to do: research, variants, transcription, rough assembly—never silent substitution.",
    },
    {
      title: "Publish a visible tier",
      body: "Use a tier label so collaborators know what to expect: where automation ends and human judgment begins.",
    },
    {
      title: "Route to collaboration",
      body: "If the work matters, schedule a human checkpoint: critique, consent, and credit before release.",
    },
  ],
} as const;

export const creatorsCopy = {
  id: "creators",
  title: "For creators",
  eyebrow: "If you lead the work",
  paragraphs: [
    "You keep authorship. You decide what is public, what is shared, and what is machine-assisted. The Bridge gives language for those decisions so you do not have to negotiate them from scratch on every project.",
    "If AI saves you time, reinvest it in collaboration: another pair of eyes, another skill set, another conscience in the room.",
  ],
} as const;

export const collaboratorsCopy = {
  id: "collaborators",
  title: "For collaborators",
  eyebrow: "If you join the work",
  paragraphs: [
    "You deserve clarity: what was generated, what was edited, and where your contribution sits in the chain of care.",
    "The Bridge asks projects to be legible—without turning creativity into bureaucracy. The goal is mutual respect, not compliance theater.",
  ],
} as const;

export const standardTeaserCopy = {
  id: "standard",
  title: "The Creative Bridge Standard",
  eyebrow: "Ethics & practice",
  intro:
    "The Standard is a short, versioned set of commitments: transparency, consent, fair credit, and human checkpoints for work that ships under someone else’s name or livelihood.",
  siteLink: { label: "Open the Standard (site)", href: "/standard" },
  markdownLink: {
    label: "Download Markdown",
    href: "/docs/creative-bridge-standard.md",
  },
  note: "Canonical prose lives in docs/; build sync mirrors Markdown, JSON Schemas, and examples under /public/docs for static hosting.",
} as const;

export const manifestoCtaCopy = {
  id: "manifesto",
  title: "Manifesto",
  eyebrow: "Closing word",
  pullQuote:
    "Technology should widen the doorway to collaboration—not lock artists out of their own field.",
  fullPageLink: { label: "Read on its own page", href: "/manifesto" },
  cta: {
    label: "Start at v0.2.1",
    href: "#how",
    supporting:
      "Documentation, schemas, and examples are mirrored on the static site so you can verify what you ship—without signing in to anything.",
  },
} as const;

export const footerCopy = {
  tagline: "Human collaboration over machine substitution.",
  colophon: "© The Creative Bridge contributors. Content and schemas are versioned in-repo.",
  navLinks: [
    { label: "Home", href: "/start" },
    { label: "Docs", href: "/docs" },
    { label: "Projects", href: "/projects" },
  { label: "Submit", href: "/submit" },
  { label: "Collaborate", href: "/collaborate" },
  { label: "Trust", href: "/trust" },
  { label: "Governance", href: "/governance" },
  { label: "Rejected Patterns", href: "/rejected-patterns" },
  { label: "Review Rubric", href: "/review-rubric" },
  { label: "System Map", href: "/system-map" },
  { label: "v1 Freeze", href: "/v1" },
  { label: "Review", href: "/review" },
  { label: "Abuse Cases", href: "/abuse-cases" },
  { label: "Incentive Drift", href: "/incentive-drift" },
  { label: "Stress Tests", href: "/stress-tests" },
  { label: "Review Intake", href: "/review-intake" },
  { label: "Reviewer Briefs", href: "/reviewer-briefs" },
  { label: "Outreach Kit", href: "/outreach-kit" },
  { label: "Response Log", href: "/review-response-log" },
  { label: "Review OS", href: "/review-os" },
  { label: "Whyfiles", href: "/whyfiles" },
  { label: "Limits", href: "/limits" },
  { label: "Launch Copy", href: "/launch-copy" },
  { label: "Feedback Seeds", href: "/feedback-seeds" },
  { label: "Funding", href: "/funding" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Donation Readiness", href: "/donation-readiness" },
  { label: "Supporter Copy", href: "/supporter-copy" },
  { label: "Sponsor Terms", href: "/sponsor-terms" },
  { label: "Recognition", href: "/recognition-boundaries" },
  { label: "Payment Providers", href: "/payment-provider-evaluation" },
  { label: "Submit", href: "/submit" },
  { label: "Collaborate", href: "/collaborate" },
  { label: "Trust", href: "/trust" },
  { label: "Governance", href: "/governance" },
  { label: "Rejected Patterns", href: "/rejected-patterns" },
  { label: "Review Rubric", href: "/review-rubric" },
  { label: "System Map", href: "/system-map" },
  { label: "v1 Freeze", href: "/v1" },
  { label: "Review", href: "/review" },
  { label: "Abuse Cases", href: "/abuse-cases" },
  { label: "Incentive Drift", href: "/incentive-drift" },
  { label: "Stress Tests", href: "/stress-tests" },
  { label: "Review Intake", href: "/review-intake" },
  { label: "Reviewer Briefs", href: "/reviewer-briefs" },
  { label: "Outreach Kit", href: "/outreach-kit" },
  { label: "Response Log", href: "/review-response-log" },
  { label: "Review OS", href: "/review-os" },
  { label: "Whyfiles", href: "/whyfiles" },
  { label: "Limits", href: "/limits" },
  { label: "Launch Copy", href: "/launch-copy" },
  { label: "Feedback Seeds", href: "/feedback-seeds" },
  { label: "Funding", href: "/funding" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Donation Readiness", href: "/donation-readiness" },
  { label: "Supporter Copy", href: "/supporter-copy" },
  { label: "Sponsor Terms", href: "/sponsor-terms" },
  { label: "Recognition", href: "/recognition-boundaries" },
  { label: "Payment Providers", href: "/payment-provider-evaluation" },
    { label: "Start", href: "/start" },
  { label: "Standard", href: "/standard" },
    { label: "Manifesto", href: "/manifesto" },
  ] as const,
  githubPlaceholder: {
    label: "GitHub",
    title: "Public repository URL not set—replace in footer when available.",
  } as const,
  links: [
    { label: "Creative Bridge Standard (Markdown)", href: "/docs/creative-bridge-standard.md" },
    { label: "Product architecture (Markdown)", href: "/docs/product-architecture.md" },
    { label: "Roadmap (Markdown)", href: "/docs/roadmap.md" },
    { label: "Decisions log (Markdown)", href: "/docs/DECISIONS.md" },
    { label: "Project profile model (Markdown)", href: "/docs/project-profile-model.md" },
  ],
} as const;

export const transparencyCopy = {
  id: "transparency",
  eyebrow: "Practical trust",
  title: "Version & transparency",
  intro:
    "Public-facing copy is supported by typed content, Markdown docs, JSON Schemas, and example payloads.",
  standardVersionLabel: "Standard version",
  siteLastUpdatedLabel: "Last updated",
  siteLastUpdatedPlaceholder: "Placeholder text—set at publish time.",
  referencesHeading: "References",
} as const;
