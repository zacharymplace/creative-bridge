import Link from "next/link";

const collaborationPaths = [
  {
    title: "Submit critique",
    description:
      "Identify unclear boundaries, misuse cases, incentive drift, weak controls, or unsafe implementation pressure.",
    route:
      "Review Intake, Review Rubric, Feedback Seeds, or Review Response Log.",
  },
  {
    title: "Pressure-test a page",
    description:
      "Inspect a public route as a first-time reader and name where comprehension, authority boundaries, or routing break down.",
    route:
      "Start, Docs, System Coherence, Standard, Limits, or Review.",
  },
  {
    title: "Contribute a rationale question",
    description:
      "Raise a why-question where the system needs clearer reasoning, refusal logic, or implementation gating.",
    route:
      "Whyfiles, Governance, Rejected Patterns, or Stress Tests.",
  },
  {
    title: "Flag funding or recognition risk",
    description:
      "Find places where support, sponsorship, donations, recognition, or visibility could imply influence or status.",
    route:
      "Funding, Sponsor Terms, Recognition Boundaries, Donation Gate, or Incentive Drift.",
  },
];

const doesNotMean = [
  "Collaboration does not mean endorsement by The Creative Bridge.",
  "Collaboration does not create verified, approved, certified, or preferred status.",
  "Collaboration does not guarantee adoption of a suggestion.",
  "Collaboration does not create governance influence, review priority, or public standing.",
  "Collaboration does not authorize use of the standard as a badge or trust claim.",
];

const participationBoundaries = [
  "Public contributions should avoid private, sensitive, or personally identifying information unless explicitly appropriate.",
  "Critique should focus on system risks, not personal attacks.",
  "Useful rejected suggestions may still be documented when they clarify system boundaries.",
  "Funding, sponsorship, or recognition requests must remain separate from review influence.",
];

const escalationPaths = [
  { label: "Review Intake", href: "/review-intake" },
  { label: "Review Rubric", href: "/review-rubric" },
  { label: "Feedback Seeds", href: "/feedback-seeds" },
  { label: "Governance", href: "/governance" },
  { label: "Limits", href: "/limits" },
  { label: "Funding", href: "/funding" },
];

export default function CollaboratePage() {
  return (
    <main>
      <section className="cb-container cb-section-y">
        <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-[var(--cb-muted)]">
          Collaboration boundaries
        </p>

        <h1 className="cb-display mt-4 max-w-4xl text-4xl tracking-tight text-[var(--cb-ink)] sm:text-5xl sm:leading-tight">
          Collaborate
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--cb-body)]">
          Collaboration means helping The Creative Bridge become clearer, safer,
          and more resistant to misuse. It does not create endorsement,
          certification, authority, status, or governance influence.
        </p>

        <section className="mt-10 border-[1.5px] border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
          <h2 className="text-lg font-medium text-[var(--cb-ink)]">
            What this page is for
          </h2>
          <p className="mt-4 text-sm leading-7 text-[var(--cb-body)]">
            Use this page to understand how to contribute useful pressure,
            critique, and system questions without turning participation into a
            badge, endorsement, or approval signal.
          </p>
        </section>

        <section className="mt-12 grid gap-6">
          {collaborationPaths.map((item) => (
            <article
              key={item.title}
              className="border-[1.5px] border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8"
            >
              <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
                {item.title}
              </h2>

              <div className="mt-6 grid gap-5 lg:grid-cols-2">
                <div>
                  <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--cb-muted)]">
                    Useful when it
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--cb-body)]">
                    {item.description}
                  </p>
                </div>

                <div>
                  <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--cb-muted)]">
                    Route through
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--cb-body)]">
                    {item.route}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="mt-12 grid gap-8 lg:grid-cols-2">
          <article className="border-[1.5px] border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
            <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
              Collaboration does not mean
            </h2>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-[var(--cb-body)]">
              {doesNotMean.map((item) => (
                <li key={item}>— {item}</li>
              ))}
            </ul>
          </article>

          <article className="border-[1.5px] border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
            <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
              Participation boundaries
            </h2>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-[var(--cb-body)]">
              {participationBoundaries.map((item) => (
                <li key={item}>— {item}</li>
              ))}
            </ul>
          </article>
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
