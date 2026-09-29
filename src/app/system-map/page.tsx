import Link from "next/link";

const primaryPaths = [
  {
    title: "First reader path",
    description:
      "Use this path to understand what The Creative Bridge is, what it refuses, and how to navigate the system.",
    links: [
      { label: "Start", href: "/start" },
      { label: "Standard", href: "/standard" },
      { label: "Limits", href: "/limits" },
      { label: "Docs", href: "/docs" },
    ],
  },
  {
    title: "Reviewer path",
    description:
      "Use this path to inspect the system, submit useful critique, and see how feedback is handled.",
    links: [
      { label: "Review", href: "/review" },
      { label: "Review Intake", href: "/review-intake" },
      { label: "Review Rubric", href: "/review-rubric" },
      { label: "Response Log", href: "/review-response-log" },
    ],
  },
  {
    title: "Governance path",
    description:
      "Use this path to inspect controls, refusal logic, gated capabilities, and failure-mode handling.",
    links: [
      { label: "Governance", href: "/governance" },
      { label: "Abuse Cases", href: "/abuse-cases" },
      { label: "Stress Tests", href: "/stress-tests" },
      { label: "Rejected Patterns", href: "/rejected-patterns" },
    ],
  },
  {
    title: "Rationale path",
    description:
      "Use this path to understand why important boundaries, refusals, and implementation gates exist.",
    links: [
      { label: "Whyfiles", href: "/whyfiles" },
      { label: "Incentive Drift", href: "/incentive-drift" },
      { label: "Trust", href: "/trust" },
      { label: "System Coherence", href: "/system-coherence" },
    ],
  },
  {
    title: "Funding path",
    description:
      "Use this path to understand support, donation, sponsorship, and recognition boundaries.",
    links: [
      { label: "Funding", href: "/funding" },
      { label: "Donation Gate", href: "/donation-gate" },
      { label: "Sponsor Terms", href: "/sponsor-terms" },
      { label: "Recognition Boundaries", href: "/recognition-boundaries" },
    ],
  },
];

const systemLanes = [
  {
    title: "Public orientation",
    description:
      "Pages that help readers understand the project quickly without entering the full archive.",
    examples: "Home, Start, Standard, Limits, Docs, System Map.",
  },
  {
    title: "Review operations",
    description:
      "Pages that invite critique, qualify useful feedback, route submissions, and preserve response traceability.",
    examples:
      "Review, Review Intake, Review Rubric, Reviewer Briefs, Feedback Seeds, Review Response Log.",
  },
  {
    title: "Governance and misuse resistance",
    description:
      "Pages that prevent premature authority, platform drift, endorsement laundering, or unsafe implementation.",
    examples:
      "Governance, Abuse Cases, Stress Tests, Incentive Drift, Rejected Patterns, Whyfiles.",
  },
  {
    title: "Funding and recognition boundaries",
    description:
      "Pages that separate support from influence, approval, priority, public standing, or governance control.",
    examples:
      "Funding, Donation Readiness, Donation Gate, Donation Staging, Sponsor Terms, Recognition Boundaries.",
  },
];

const gatedArchiveRules = [
  "Deep pages may stay public for traceability without becoming primary navigation.",
  "Donation, sponsorship, and support mechanics remain gated until readiness and risk acceptance are explicit.",
  "Rejected patterns should remain visible enough to prevent repeated unsafe proposals.",
  "Release notes and reader passes document how the system changes over time.",
];

const escalationPaths = [
  { label: "Start", href: "/start" },
  { label: "Docs", href: "/docs" },
  { label: "System Coherence", href: "/system-coherence" },
  { label: "Governance", href: "/governance" },
  { label: "Review", href: "/review" },
  { label: "Whyfiles", href: "/whyfiles" },
];

export default function SystemMapPage() {
  return (
    <main>
      <section className="cb-container cb-section-y">
        <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-[var(--cb-muted)]">
          Route and relationship guide
        </p>

        <h1 className="cb-display mt-4 max-w-4xl text-4xl tracking-tight text-[var(--cb-ink)] sm:text-5xl sm:leading-tight">
          System Map
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--cb-body)]">
          The system map shows how the public routes fit together. It is not a
          demand that every reader visit every page. It clarifies which paths
          matter first and where deeper records live.
        </p>

        <section className="mt-10 border-[1.5px] border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
          <h2 className="text-lg font-medium text-[var(--cb-ink)]">
            What this page is for
          </h2>
          <p className="mt-4 text-sm leading-7 text-[var(--cb-body)]">
            Use this page when the system feels large. Start with the path that
            matches your role, then follow only the routes needed for context,
            critique, governance, rationale, or funding questions.
          </p>
        </section>

        <section className="mt-12 grid gap-6">
          {primaryPaths.map((path) => (
            <article
              key={path.title}
              className="border-[1.5px] border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8"
            >
              <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
                {path.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-[var(--cb-body)]">
                {path.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                {path.links.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className=" border-[1.5px] border-[var(--cb-border)] bg-[var(--paper-2)] px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--cb-muted)] underline-offset-4 hover:underline"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </article>
          ))}
        </section>

        <section className="mt-12 grid gap-6 lg:grid-cols-2">
          {systemLanes.map((lane) => (
            <article
              key={lane.title}
              className="border-[1.5px] border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8"
            >
              <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
                {lane.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-[var(--cb-body)]">
                {lane.description}
              </p>
              <p className="mt-4 font-mono text-[12px] uppercase tracking-[0.14em] text-[var(--cb-muted)]">
                {lane.examples}
              </p>
            </article>
          ))}
        </section>

        <section className="mt-12 border-[1.5px] border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
          <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
            Gated and archive areas
          </h2>
          <ul className="mt-6 space-y-4 text-sm leading-7 text-[var(--cb-body)]">
            {gatedArchiveRules.map((item) => (
              <li key={item}>— {item}</li>
            ))}
          </ul>
        </section>

        <section className="mt-12 border-t border-[var(--cb-border)] pt-8">
          <h2 className="font-mono text-[12px] uppercase tracking-[0.2em] text-[var(--cb-muted)]">
            Escalate to
          </h2>

          <div className="mt-5 flex flex-wrap gap-3">
            {escalationPaths.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className=" border-[1.5px] border-[var(--cb-border)] bg-[var(--paper-2)] px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--cb-muted)] underline-offset-4 hover:underline"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
