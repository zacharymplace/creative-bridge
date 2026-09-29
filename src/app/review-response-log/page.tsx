import Link from "next/link";

const responseStates = [
  {
    state: "Received",
    meaning:
      "The critique has been captured but has not yet been evaluated.",
    record:
      "Record the source context, affected page or system area, and the core pressure point.",
  },
  {
    state: "Clarified",
    meaning:
      "The critique was useful but needed sharper framing before action.",
    record:
      "Record the clarified issue, what was ambiguous, and what interpretation is being evaluated.",
  },
  {
    state: "Accepted",
    meaning:
      "The critique identified a real weakness and changed the system.",
    record:
      "Record the change made, the affected route or document, and the reason it improved misuse resistance.",
  },
  {
    state: "Partially accepted",
    meaning:
      "The critique identified a real issue, but the proposed fix was incomplete, unsafe, or too broad.",
    record:
      "Record what was accepted, what was rejected, and what constraint shaped the final decision.",
  },
  {
    state: "Rejected",
    meaning:
      "The suggestion was not adopted because it conflicted with system limits, governance, or misuse resistance.",
    record:
      "Record the refusal reason and route to Rejected Patterns or the relevant rationale page when useful.",
  },
  {
    state: "Deferred",
    meaning:
      "The critique may be valid, but implementation depends on future review, governance, funding, or capability gates.",
    record:
      "Record the dependency, trigger condition, and the page or gate that must change first.",
  },
];

const logFields = [
  "Critique summary",
  "Affected page, route, or policy area",
  "Response state",
  "Decision rationale",
  "Change made or reason rejected",
  "Related Whyfile, governance item, abuse case, or stress test",
];

const escalationPaths = [
  { label: "Review", href: "/review" },
  { label: "Review Intake", href: "/review-intake" },
  { label: "Review Rubric", href: "/review-rubric" },
  { label: "Feedback Seeds", href: "/feedback-seeds" },
  { label: "Rejected Patterns", href: "/rejected-patterns" },
  { label: "Governance", href: "/governance" },
];

export default function ReviewResponseLogPage() {
  return (
    <main>
      <section className="cb-container cb-section-y">
        <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-[var(--cb-muted)]">
          Critique traceability
        </p>

        <h1 className="cb-display mt-4 max-w-4xl text-4xl tracking-tight text-[var(--cb-ink)] sm:text-5xl sm:leading-tight">
          Review Response Log
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--cb-body)]">
          The review response log shows how critique is handled after intake.
          It should preserve traceability without implying that every suggestion
          becomes a required change.
        </p>

        <section className="mt-10 border-[1.5px] border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
          <h2 className="text-lg font-medium text-[var(--cb-ink)]">
            What this page is for
          </h2>
          <p className="mt-4 text-sm leading-7 text-[var(--cb-body)]">
            Use this page to understand how feedback moves from critique to
            decision. A good response log makes accepted, rejected, partial, and
            deferred decisions legible.
          </p>
        </section>

        <section className="mt-12 grid gap-6">
          {responseStates.map((item) => (
            <article
              key={item.state}
              className="border-[1.5px] border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8"
            >
              <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
                {item.state}
              </h2>

              <div className="mt-6 grid gap-5 lg:grid-cols-2">
                <div>
                  <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--cb-muted)]">
                    Meaning
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--cb-body)]">
                    {item.meaning}
                  </p>
                </div>

                <div>
                  <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--cb-muted)]">
                    Record
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--cb-body)]">
                    {item.record}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="mt-12 border-[1.5px] border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
          <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
            Minimum log fields
          </h2>
          <ul className="mt-6 space-y-4 text-sm leading-7 text-[var(--cb-body)]">
            {logFields.map((item) => (
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
