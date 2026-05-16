import Link from "next/link";

const evaluationDoesNotMean = [
  "Evaluation does not mean donation links are ready to publish.",
  "Evaluation does not mean a provider is approved for production use.",
  "Evaluation does not mean funding, sponsorship, or support mechanics are active.",
  "Evaluation does not override Donation Gate, Donation Readiness, or Funding boundaries.",
  "Evaluation does not permit supporter influence, priority, recognition status, or governance control.",
];

const evaluationDimensions = [
  {
    title: "Operational fit",
    description:
      "Can the provider support simple, understandable payment flows without forcing premature platform complexity?",
  },
  {
    title: "Boundary clarity",
    description:
      "Can payment language clearly separate support from approval, influence, priority, status, or endorsement?",
  },
  {
    title: "Recordkeeping",
    description:
      "Can transactions, acknowledgments, fees, refunds, and provider decisions be documented cleanly?",
  },
  {
    title: "Misuse resistance",
    description:
      "Does the provider setup reduce the chance that support is mistaken for certification, trust, review priority, or governance standing?",
  },
  {
    title: "Exit path",
    description:
      "Can the system pause, change, or remove the provider without breaking public trust or historical traceability?",
  },
];

const riskChecks = [
  "Does public copy make clear what support can and cannot buy?",
  "Are recognition boundaries documented before money is accepted?",
  "Is there a clear pause path if wording, incentives, or provider behavior creates drift?",
  "Are fees, provider risks, refunds, and support records understandable?",
  "Does the provider choice preserve static-first simplicity where possible?",
];

const escalationPaths = [
  { label: "Funding", href: "/funding" },
  { label: "Donation Readiness", href: "/donation-readiness" },
  { label: "Donation Gate", href: "/donation-gate" },
  { label: "Donation Provider Decision", href: "/donation-provider-decision" },
  { label: "Recognition Boundaries", href: "/recognition-boundaries" },
  { label: "Sponsor Terms", href: "/sponsor-terms" },
];

export default function PaymentProviderEvaluationPage() {
  return (
    <main>
      <section className="cb-container cb-section-y">
        <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-[var(--cb-muted)]">
          Provider selection and risk review
        </p>

        <h1 className="cb-display mt-4 max-w-4xl text-4xl tracking-tight text-[var(--cb-ink)] sm:text-5xl sm:leading-tight">
          Payment Provider Evaluation
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--cb-body)]">
          Provider evaluation helps compare payment options before support
          mechanics go live. It does not activate donations, approve funding,
          or authorize public payment links.
        </p>

        <section className="mt-10 border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
          <h2 className="text-lg font-medium text-[var(--cb-ink)]">
            What this page is for
          </h2>
          <p className="mt-4 text-sm leading-7 text-[var(--cb-body)]">
            Use this page to evaluate whether a payment provider can support
            clear records, clean boundaries, low operational overhead, and
            misuse-resistant funding language.
          </p>
        </section>

        <section className="mt-12 grid gap-8 lg:grid-cols-2">
          <article className="border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
            <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
              Evaluation does not mean
            </h2>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-[var(--cb-body)]">
              {evaluationDoesNotMean.map((item) => (
                <li key={item}>— {item}</li>
              ))}
            </ul>
          </article>

          <article className="border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
            <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
              Risk checks
            </h2>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-[var(--cb-body)]">
              {riskChecks.map((item) => (
                <li key={item}>— {item}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="mt-12 grid gap-6">
          {evaluationDimensions.map((item) => (
            <article
              key={item.title}
              className="border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8"
            >
              <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
                {item.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-[var(--cb-body)]">
                {item.description}
              </p>
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
