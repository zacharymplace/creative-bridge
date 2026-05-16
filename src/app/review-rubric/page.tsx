import Link from "next/link";

const dimensions = [
  {
    title: "Misuse detection",
    strong:
      "Names a concrete way the standard could be misused, misread, laundered, or overclaimed.",
    weak:
      "Says the system seems good, responsible, thoughtful, or ethical without identifying a failure mode.",
    use:
      "Route strong misuse signals into Abuse Cases, Limits, Governance, or Rejected Patterns.",
  },
  {
    title: "Boundary clarity",
    strong:
      "Identifies a sentence, page, or flow where the reader may mistake the standard for approval, certification, authority, or endorsement.",
    weak:
      "Mentions general confusion without locating the unclear boundary.",
    use:
      "Route boundary issues into Limits, Standard, Whyfiles, or safe-reference language.",
  },
  {
    title: "Incentive pressure",
    strong:
      "Shows how funding, recognition, review, rankings, or visibility could reward the wrong behavior over time.",
    weak:
      "Assumes good intent will prevent drift.",
    use:
      "Route incentive pressure into Incentive Drift, Funding, Sponsor Terms, or Recognition Boundaries.",
  },
  {
    title: "Review usefulness",
    strong:
      "Gives criticism that can change copy, routing, governance, disclosure, or implementation gates.",
    weak:
      "Gives praise, preference, or vague positioning feedback without an actionable risk.",
    use:
      "Route useful criticism into Review Response Log or Feedback Seeds.",
  },
  {
    title: "Reader comprehension",
    strong:
      "Explains where a first-time reader would get lost, misunderstand priority, or miss a key constraint.",
    weak:
      "Suggests adding more pages without improving reader order.",
    use:
      "Route comprehension issues into Start, Docs, System Coherence, or page reader passes.",
  },
  {
    title: "Implementation caution",
    strong:
      "Identifies a feature that should remain gated until review, rationale, governance, or funding constraints are stronger.",
    weak:
      "Pushes for capability because it would be useful or polished.",
    use:
      "Route implementation concerns into Donation Gate, Platform Capability Gating, Stress Tests, or Rejected Patterns.",
  },
];

const escalationPaths = [
  { label: "Review", href: "/review" },
  { label: "Review Intake", href: "/review-intake" },
  { label: "Response Log", href: "/review-response-log" },
  { label: "Feedback Seeds", href: "/feedback-seeds" },
  { label: "Governance", href: "/governance" },
  { label: "Stress Tests", href: "/stress-tests" },
];

export default function ReviewRubricPage() {
  return (
    <main>
      <section className="cb-container cb-section-y">
        <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-[var(--cb-muted)]">
          Critique evaluation
        </p>

        <h1 className="cb-display mt-4 max-w-4xl text-4xl tracking-tight text-[var(--cb-ink)] sm:text-5xl sm:leading-tight">
          Review Rubric
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--cb-body)]">
          The review rubric helps sort useful criticism from approval, praise,
          preference, and performative alignment. Strong review identifies
          risks the system can act on.
        </p>

        <section className="mt-10 border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
          <h2 className="text-lg font-medium text-[var(--cb-ink)]">
            What this page is for
          </h2>
          <p className="mt-4 text-sm leading-7 text-[var(--cb-body)]">
            Use this rubric to evaluate external feedback. The highest-value
            review does not flatter the standard. It finds ambiguity, misuse,
            incentive drift, weak controls, and unsafe implementation pressure.
          </p>
        </section>

        <section className="mt-12 grid gap-6">
          {dimensions.map((item) => (
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
                    Strong signal
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--cb-body)]">
                    {item.strong}
                  </p>
                </div>

                <div>
                  <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--cb-muted)]">
                    Weak signal
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--cb-body)]">
                    {item.weak}
                  </p>
                </div>

                <div>
                  <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--cb-muted)]">
                    Use
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--cb-body)]">
                    {item.use}
                  </p>
                </div>
              </div>
            </article>
          ))}
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
