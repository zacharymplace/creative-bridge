import Link from "next/link";

const decisionDoesNotMean = [
  "A provider decision does not mean donation links are live.",
  "A provider decision does not mean support mechanics are publicly launched.",
  "A provider decision does not override Donation Gate or Donation Readiness.",
  "A provider decision does not grant supporters influence, priority, status, or governance power.",
  "A provider decision does not make the selected provider permanent.",
];

const decisionFactors = [
  {
    title: "Boundary fit",
    description:
      "The provider must support language that separates donations from approval, certification, endorsement, review priority, or influence.",
  },
  {
    title: "Operational simplicity",
    description:
      "The provider should keep the donation path understandable, low-maintenance, and easy to pause or remove.",
  },
  {
    title: "Traceable records",
    description:
      "The provider should support clear records for transactions, fees, refunds, acknowledgments, and future review.",
  },
  {
    title: "Public copy compatibility",
    description:
      "The provider flow should allow support language to remain conservative, clear, and resistant to overclaiming.",
  },
  {
    title: "Reversal path",
    description:
      "The decision should preserve the ability to change providers if incentives, operations, fees, or trust risks shift.",
  },
];

const requiredSafeguards = [
  "Donation readiness must remain separate from provider selection.",
  "Donation launch must pass the Donation Gate before public activation.",
  "Recognition boundaries must be documented before supporter acknowledgments expand.",
  "Sponsor and supporter language must not imply influence or status.",
  "Provider decisions should remain revisitable through release notes and decision records.",
];

const escalationPaths = [
  { label: "Payment Provider Evaluation", href: "/payment-provider-evaluation" },
  { label: "Donation Readiness", href: "/donation-readiness" },
  { label: "Donation Gate", href: "/donation-gate" },
  { label: "Funding", href: "/funding" },
  { label: "Recognition Boundaries", href: "/recognition-boundaries" },
  { label: "Supporter Copy", href: "/supporter-copy" },
];

export default function DonationProviderDecisionPage() {
  return (
    <main>
      <section className="cb-container cb-section-y">
        <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-[var(--cb-muted)]">
          Provider decision and traceability
        </p>

        <h1 className="cb-display mt-4 max-w-4xl text-4xl tracking-tight text-[var(--cb-ink)] sm:text-5xl sm:leading-tight">
          Donation Provider Decision
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--cb-body)]">
          This page records how a donation provider decision should be
          understood. Provider selection supports readiness work, but it does
          not activate donation links or authorize public launch.
        </p>

        <section className="mt-10 border-[1.5px] border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
          <h2 className="text-lg font-medium text-[var(--cb-ink)]">
            What this page is for
          </h2>
          <p className="mt-4 text-sm leading-7 text-[var(--cb-body)]">
            Use this page to understand why a provider path was selected, what
            risks still need control, and which gates must remain separate
            before donation mechanics become public.
          </p>
        </section>

        <section className="mt-12 grid gap-8 lg:grid-cols-2">
          <article className="border-[1.5px] border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
            <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
              Decision does not mean
            </h2>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-[var(--cb-body)]">
              {decisionDoesNotMean.map((item) => (
                <li key={item}>— {item}</li>
              ))}
            </ul>
          </article>

          <article className="border-[1.5px] border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
            <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
              Required safeguards
            </h2>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-[var(--cb-body)]">
              {requiredSafeguards.map((item) => (
                <li key={item}>— {item}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="mt-12 grid gap-6">
          {decisionFactors.map((item) => (
            <article
              key={item.title}
              className="border-[1.5px] border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8"
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
