import Link from "next/link";

const seedTypes = [
  {
    type: "Misuse seed",
    useful:
      "Names a concrete way the standard could be overclaimed, laundered, misread, or cited as authority.",
    next:
      "Route to Abuse Cases, Limits, Rejected Patterns, or Review Response Log.",
  },
  {
    type: "Boundary seed",
    useful:
      "Identifies a line, page, phrase, or interaction where the standard’s authority boundary is unclear.",
    next:
      "Route to Limits, Standard, Docs, or a page reader pass.",
  },
  {
    type: "Incentive seed",
    useful:
      "Shows how review, funding, recognition, visibility, or platform design could reward the wrong behavior.",
    next:
      "Route to Incentive Drift, Funding, Governance, or Stress Tests.",
  },
  {
    type: "Comprehension seed",
    useful:
      "Shows where a first-time reader gets lost, misunderstands priority, or cannot tell where to start.",
    next:
      "Route to Start, Docs, System Coherence, or homepage hierarchy work.",
  },
  {
    type: "Implementation seed",
    useful:
      "Identifies a capability that should remain gated until controls, rationale, or review are stronger.",
    next:
      "Route to Governance, Donation Gate, Platform Capability Gating, or Rejected Patterns.",
  },
];

const handlingRules = [
  "Do not treat every seed as a required change.",
  "Preserve the pressure point even when the proposed fix is rejected.",
  "Convert useful seeds into response-log items, page edits, rationale updates, or governance questions.",
  "Discard or redirect praise, endorsement, vague preference, or sponsor-influence requests.",
];

const escalationPaths = [
  { label: "Review Intake", href: "/review-intake" },
  { label: "Review Rubric", href: "/review-rubric" },
  { label: "Response Log", href: "/review-response-log" },
  { label: "Abuse Cases", href: "/abuse-cases" },
  { label: "Incentive Drift", href: "/incentive-drift" },
  { label: "Governance", href: "/governance" },
];

export default function FeedbackSeedsPage() {
  return (
    <main>
      <section className="cb-container cb-section-y">
        <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-[var(--cb-muted)]">
          Early critique tracking
        </p>

        <h1 className="cb-display mt-4 max-w-4xl text-4xl tracking-tight text-[var(--cb-ink)] sm:text-5xl sm:leading-tight">
          Feedback Seeds
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--cb-body)]">
          Feedback seeds are early pressure points that may become review-log
          entries, page edits, rationale updates, governance questions, or
          rejected suggestions.
        </p>

        <section className="mt-10 border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
          <h2 className="text-lg font-medium text-[var(--cb-ink)]">
            What this page is for
          </h2>
          <p className="mt-4 text-sm leading-7 text-[var(--cb-body)]">
            Use this page to preserve critique before it becomes vague memory.
            A seed does not need to be complete. It needs to point at a real
            pressure point worth evaluating.
          </p>
        </section>

        <section className="mt-12 grid gap-6">
          {seedTypes.map((item) => (
            <article
              key={item.type}
              className="border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8"
            >
              <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
                {item.type}
              </h2>

              <div className="mt-6 grid gap-5 lg:grid-cols-2">
                <div>
                  <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--cb-muted)]">
                    Useful when it
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--cb-body)]">
                    {item.useful}
                  </p>
                </div>

                <div>
                  <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--cb-muted)]">
                    Next route
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--cb-body)]">
                    {item.next}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="mt-12 border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
          <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
            Handling rules
          </h2>
          <ul className="mt-6 space-y-4 text-sm leading-7 text-[var(--cb-body)]">
            {handlingRules.map((item) => (
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
