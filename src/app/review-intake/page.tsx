import Link from "next/link";

const usefulCritique = [
  "A page, sentence, route, claim, or interaction that could be misread.",
  "A misuse pattern the system does not yet name clearly.",
  "A boundary that feels too vague, too broad, or too easy to overclaim.",
  "A funding, recognition, review, or platform incentive that could drift.",
  "A place where the system blocks unsafe behavior but also blocks legitimate participation.",
  "A missing escalation path, rationale record, or implementation gate.",
];

const weakCritique = [
  "General praise without a concrete pressure point.",
  "Approval, endorsement, testimonials, or launch support.",
  "Preference feedback that does not identify a risk.",
  "Requests for badges, rankings, verification, creator status, or faster review.",
  "Funding offers tied to influence, visibility, priority, or standing.",
];

const handling = [
  "Useful critique may become a feedback seed, response-log item, page edit, rationale update, or governance question.",
  "Not every suggestion will be accepted.",
  "Rejected suggestions should still be traceable when they reveal a meaningful pressure point.",
  "Critique that creates false authority, harassment, private disclosure risk, or sponsor influence should be redirected.",
];

const escalationPaths = [
  { label: "Review", href: "/review" },
  { label: "Review Rubric", href: "/review-rubric" },
  { label: "Response Log", href: "/review-response-log" },
  { label: "Feedback Seeds", href: "/feedback-seeds" },
  { label: "Abuse Cases", href: "/abuse-cases" },
  { label: "Governance", href: "/governance" },
];

export default function ReviewIntakePage() {
  return (
    <main>
      <section className="cb-container cb-section-y">
        <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-[var(--cb-muted)]">
          Critique submission
        </p>

        <h1 className="cb-display mt-4 max-w-4xl text-4xl tracking-tight text-[var(--cb-ink)] sm:text-5xl sm:leading-tight">
          Review Intake
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--cb-body)]">
          Review intake is for pressure-testing The Creative Bridge. The goal is
          not to collect approval. The goal is to find unclear boundaries,
          unsafe incentives, misuse cases, and weak controls.
        </p>

        <section className="mt-10 border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
          <h2 className="text-lg font-medium text-[var(--cb-ink)]">
            What this page is for
          </h2>
          <p className="mt-4 text-sm leading-7 text-[var(--cb-body)]">
            Use this page to decide what kind of feedback is worth submitting.
            Strong critique gives the system something concrete to inspect,
            revise, reject, or route into governance.
          </p>
        </section>

        <section className="mt-12 grid gap-8 lg:grid-cols-2">
          <article className="border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
            <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
              Useful critique includes
            </h2>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-[var(--cb-body)]">
              {usefulCritique.map((item) => (
                <li key={item}>— {item}</li>
              ))}
            </ul>
          </article>

          <article className="border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
            <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
              Do not submit as review
            </h2>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-[var(--cb-body)]">
              {weakCritique.map((item) => (
                <li key={item}>— {item}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="mt-12 border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
          <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
            How critique is handled
          </h2>
          <ul className="mt-6 space-y-4 text-sm leading-7 text-[var(--cb-body)]">
            {handling.map((item) => (
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
