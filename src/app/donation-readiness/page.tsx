import Link from "next/link";

const readinessDoesNotMean = [
  "Readiness does not mean donation links are live.",
  "Readiness does not mean public activation has been approved.",
  "Readiness does not mean the selected provider is permanent.",
  "Readiness does not allow supporters to buy influence, priority, endorsement, certification, or governance standing.",
  "Readiness does not override the Donation Gate.",
];

const readinessConditions = [
  {
    title: "Provider decision recorded",
    description:
      "The selected provider path is documented with reasoning, tradeoffs, risks, and a reversal path.",
  },
  {
    title: "Public copy constrained",
    description:
      "Donation language explains what support can and cannot buy without implying approval, influence, priority, or status.",
  },
  {
    title: "Recognition boundaries clear",
    description:
      "Supporter acknowledgment rules are documented before names, logos, public thanks, or sponsor-like language expands.",
  },
  {
    title: "Operational handling defined",
    description:
      "Transactions, fees, refunds, receipts, records, and pause procedures can be handled without ambiguity.",
  },
  {
    title: "Governance escalation available",
    description:
      "There is a clear route for pausing or changing donation mechanics if incentives, claims, or public interpretation drift.",
  },
];

const failureSignals = [
  "Support language implies approval, trust, endorsement, or certification.",
  "Supporters appear to receive priority, influence, access, ranking, or governance power.",
  "Provider setup cannot be paused cleanly.",
  "Records, refunds, fees, or acknowledgments are not traceable.",
  "Donation copy is being used to compensate for unclear project value or public trust.",
];

const escalationPaths = [
  { label: "Donation Gate", href: "/donation-gate" },
  { label: "Donation Provider Decision", href: "/donation-provider-decision" },
  { label: "Payment Provider Evaluation", href: "/payment-provider-evaluation" },
  { label: "Funding", href: "/funding" },
  { label: "Recognition Boundaries", href: "/recognition-boundaries" },
  { label: "Supporter Copy", href: "/supporter-copy" },
];

export default function DonationReadinessPage() {
  return (
    <main>
      <section className="cb-container cb-section-y">
        <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-[var(--cb-muted)]">
          Readiness checklist and boundary guide
        </p>

        <h1 className="cb-display mt-4 max-w-4xl text-4xl tracking-tight text-[var(--cb-ink)] sm:text-5xl sm:leading-tight">
          Donation Readiness
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--cb-body)]">
          Donation readiness checks whether support mechanics can be handled
          safely before anything is publicly activated. It is a preparation
          state, not a launch approval.
        </p>

        <section className="mt-10 border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
          <h2 className="text-lg font-medium text-[var(--cb-ink)]">
            What this page is for
          </h2>
          <p className="mt-4 text-sm leading-7 text-[var(--cb-body)]">
            Use this page to verify that provider choice, public copy,
            recognition rules, records, refunds, and escalation paths are ready
            before donation links are exposed.
          </p>
        </section>

        <section className="mt-12 grid gap-8 lg:grid-cols-2">
          <article className="border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
            <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
              Readiness does not mean
            </h2>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-[var(--cb-body)]">
              {readinessDoesNotMean.map((item) => (
                <li key={item}>— {item}</li>
              ))}
            </ul>
          </article>

          <article className="border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
            <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
              Failure signals
            </h2>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-[var(--cb-body)]">
              {failureSignals.map((item) => (
                <li key={item}>— {item}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="mt-12 grid gap-6">
          {readinessConditions.map((item) => (
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
