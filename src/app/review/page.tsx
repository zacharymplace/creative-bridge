import Link from "next/link";

export default function ReviewPage() {
  const usefulCriticism = [
    "Where could this standard be misused?",
    "What incentives could corrupt it over time?",
    "What language creates false authority, certification, or endorsement risk?",
    "What would make this harder for real creators or collaborators to use?",
    "What is missing around consent, credit, labor, disclosure, privacy, or access?",
    "What would break if this became popular?",
  ];

  const avoid = [
    "General praise without specific critique.",
    "Requests to certify, verify, approve, or endorse projects.",
    "Feature requests that turn the standard into a marketplace before governance is ready.",
    "Claims that referencing the standard makes a project ethical, safe, or legitimate.",
    "Suggestions that increase visibility, ranking, or monetization before misuse resistance.",
  ];

  const responseFlow = [
    "Feedback is logged as a pressure signal, not as a popularity vote.",
    "Accepted changes should be traceable to the issue they address.",
    "Rejected suggestions should include a reason.",
    "Governance concerns should be routed into Whyfiles, limits, stress tests, or response logs.",
  ];

  const nextSteps = [
    { label: "Review intake", href: "/review-intake" },
    { label: "Reviewer briefs", href: "/reviewer-briefs" },
    { label: "Response log", href: "/review-response-log" },
    { label: "Launch copy", href: "/launch-copy" },
  ];

  return (
    <main>
      <section className="cb-container cb-section-y">
        <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-[var(--cb-muted)]">
          Public review
        </p>

        <h1 className="cb-display mt-4 max-w-4xl text-4xl tracking-tight text-[var(--cb-ink)] sm:text-5xl sm:leading-tight">
          Review the standard
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--cb-body)]">
          The Creative Bridge is asking for pressure, not praise. Useful review
          identifies misuse, incentive drift, false authority, missing
          protections, and places where the standard may fail under real use.
        </p>

        <section className="mt-10 border-[1.5px] border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
          <h2 className="text-lg font-medium text-[var(--cb-ink)]">
            What review is for
          </h2>
          <p className="mt-4 text-sm leading-7 text-[var(--cb-body)]">
            Review exists to make the standard harder to misuse, easier to
            understand, and more honest about its limits. It is not an
            endorsement request, launch campaign, certification process, or
            popularity test.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
            Useful criticism
          </h2>

          <div className="mt-6 grid gap-4">
            {usefulCriticism.map((item) => (
              <article
                key={item}
                className="border-[1.5px] border-[var(--cb-border)] bg-[var(--cb-surface)] p-5"
              >
                <p className="text-sm leading-7 text-[var(--cb-body)]">
                  {item}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="border-[1.5px] border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
            <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
              Avoid sending
            </h2>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-[var(--cb-body)]">
              {avoid.map((item) => (
                <li key={item}>— {item}</li>
              ))}
            </ul>
          </div>

          <div className="border-[1.5px] border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
            <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
              How responses are handled
            </h2>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-[var(--cb-body)]">
              {responseFlow.map((item) => (
                <li key={item}>— {item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-12 border-t border-[var(--cb-border)] pt-8">
          <h2 className="font-mono text-[12px] uppercase tracking-[0.2em] text-[var(--cb-muted)]">
            Go next
          </h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {nextSteps.map((item) => (
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
