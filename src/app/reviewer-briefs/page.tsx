import Link from "next/link";

const reviewerRoles = [
  {
    title: "Boundary reviewer",
    inspect:
      "Look for places where the project could be mistaken for approval, certification, verification, endorsement, or authority.",
    avoid:
      "Do not simply confirm that the intent seems responsible.",
    route:
      "Route findings to Limits, Standard, Review Response Log, or Rejected Patterns.",
  },
  {
    title: "Misuse reviewer",
    inspect:
      "Look for ways the standard, language, pages, or future features could be abused, laundered, or misrepresented.",
    avoid:
      "Do not assume good-faith users are the only users.",
    route:
      "Route findings to Abuse Cases, Stress Tests, Governance, or Whyfiles.",
  },
  {
    title: "Incentive reviewer",
    inspect:
      "Look for places where funding, recognition, review, visibility, or platform mechanics could reward the wrong behavior.",
    avoid:
      "Do not treat incentive drift as a future-only problem.",
    route:
      "Route findings to Incentive Drift, Funding, Sponsor Terms, Recognition Boundaries, or Donation Gate.",
  },
  {
    title: "Reader comprehension reviewer",
    inspect:
      "Look for places where a first-time reader may not know where to start, what matters most, or what the system refuses.",
    avoid:
      "Do not solve confusion by adding more pages without improving order.",
    route:
      "Route findings to Start, Docs, System Coherence, or page reader passes.",
  },
  {
    title: "Implementation reviewer",
    inspect:
      "Look for features that should remain gated until review, governance, rationale, funding, or abuse-case controls improve.",
    avoid:
      "Do not recommend capability just because it seems useful.",
    route:
      "Route findings to Governance, Stress Tests, Platform Capability Gating, or Rejected Patterns.",
  },
];

const reviewAntiPatterns = [
  "Praise without a pressure point.",
  "Approval, endorsement, or launch support framed as review.",
  "Preference feedback that does not identify risk.",
  "Requests for badges, rankings, certification, or verified status.",
  "Funding, sponsorship, or recognition suggestions that imply influence.",
];

const escalationPaths = [
  { label: "Review", href: "/review" },
  { label: "Review Intake", href: "/review-intake" },
  { label: "Review Rubric", href: "/review-rubric" },
  { label: "Response Log", href: "/review-response-log" },
  { label: "Abuse Cases", href: "/abuse-cases" },
  { label: "Governance", href: "/governance" },
];

export default function ReviewerBriefsPage() {
  return (
    <main>
      <section className="cb-container cb-section-y">
        <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-[var(--cb-muted)]">
          Reviewer orientation
        </p>

        <h1 className="cb-display mt-4 max-w-4xl text-4xl tracking-tight text-[var(--cb-ink)] sm:text-5xl sm:leading-tight">
          Reviewer Briefs
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--cb-body)]">
          Reviewer briefs help external readers inspect The Creative Bridge for
          misuse, unclear boundaries, incentive drift, weak controls, and unsafe
          implementation pressure.
        </p>

        <section className="mt-10 border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
          <h2 className="text-lg font-medium text-[var(--cb-ink)]">
            What this page is for
          </h2>
          <p className="mt-4 text-sm leading-7 text-[var(--cb-body)]">
            Use this page before reviewing the system. Pick a reviewer role,
            inspect for concrete pressure points, and route useful findings into
            the review workflow.
          </p>
        </section>

        <section className="mt-12 grid gap-6">
          {reviewerRoles.map((item) => (
            <article
              key={item.title}
              className="border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8"
            >
              <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
                {item.title}
              </h2>

              <div className="mt-6 grid gap-5 lg:grid-cols-3">
                <div>
                  <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--cb-muted)]">
                    Inspect
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--cb-body)]">
                    {item.inspect}
                  </p>
                </div>

                <div>
                  <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--cb-muted)]">
                    Avoid
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--cb-body)]">
                    {item.avoid}
                  </p>
                </div>

                <div>
                  <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--cb-muted)]">
                    Route
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--cb-body)]">
                    {item.route}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="mt-12 border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
          <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
            Review anti-patterns
          </h2>
          <ul className="mt-6 space-y-4 text-sm leading-7 text-[var(--cb-body)]">
            {reviewAntiPatterns.map((item) => (
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
                className="rounded-full border border-[var(--cb-border)] bg-white px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--cb-muted)] underline-offset-4 hover:underline"
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
