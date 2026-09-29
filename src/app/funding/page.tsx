import Link from "next/link";

export default function FundingPage() {
  const fundingFor = [
    "Maintaining the public standard and documentation.",
    "Supporting review infrastructure, response logs, and governance records.",
    "Keeping the project accessible, static-first, and low-friction.",
    "Funding careful refinement without turning the standard into a pay-to-play system.",
  ];

  const cannotBuy = [
    "Certification, approval, endorsement, verification, or trusted status.",
    "Review priority, response priority, influence over governance, or placement advantages.",
    "Public recognition that implies legitimacy or elevated standing.",
    "Changes to standards, limits, review outcomes, or rationale records.",
    "Access to hidden authority, private scoring, rankings, or marketplace benefits.",
  ];

  const supportModels = [
    "Optional donations with no influence rights.",
    "Supporter subscriptions with no governance privilege.",
    "Institutional sponsorship only under non-interference terms.",
    "Paid workshops or toolkits only if they do not create certification claims.",
    "Future payment mechanics only after the donation implementation gate passes.",
  ];

  const unsafeInterpretations = [
    "Supporter means approved.",
    "Sponsor means endorsed.",
    "Donor means prioritized.",
    "Paid user means certified.",
    "Funding means the standard is commercially neutralized.",
  ];

  const nextSteps = [
    { label: "Sustainability", href: "/sustainability" },
    { label: "Donation Readiness", href: "/donation-readiness" },
    { label: "Sponsor Terms", href: "/sponsor-terms" },
    { label: "Recognition Boundaries", href: "/recognition-boundaries" },
    { label: "Donation Gate", href: "/donation-gate" },
    { label: "Launch Review", href: "/donation-launch-review" },
  ];

  return (
    <main>
      <section className="cb-container cb-section-y">
        <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-[var(--cb-muted)]">
          Sustainability layer
        </p>

        <h1 className="cb-display mt-4 max-w-4xl text-4xl tracking-tight text-[var(--cb-ink)] sm:text-5xl sm:leading-tight">
          Funding
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--cb-body)]">
          Funding can support maintenance, review infrastructure, and long-term
          sustainability. It cannot buy legitimacy, priority, approval,
          certification, endorsement, or influence.
        </p>

        <section className="mt-10 border-[1.5px] border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
          <h2 className="text-lg font-medium text-[var(--cb-ink)]">
            Current status
          </h2>
          <p className="mt-4 text-sm leading-7 text-[var(--cb-body)]">
            Donation and supporter mechanics are not live unless the donation
            implementation gate is satisfied. Funding language is staged before
            payment mechanics so support cannot be mistaken for governance
            influence or public approval.
          </p>
        </section>

        <section className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="border-[1.5px] border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
            <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
              What funding is for
            </h2>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-[var(--cb-body)]">
              {fundingFor.map((item) => (
                <li key={item}>— {item}</li>
              ))}
            </ul>
          </div>

          <div className="border-[1.5px] border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
            <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
              What funding cannot buy
            </h2>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-[var(--cb-body)]">
              {cannotBuy.map((item) => (
                <li key={item}>— {item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="border-[1.5px] border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
            <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
              Allowed support models
            </h2>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-[var(--cb-body)]">
              {supportModels.map((item) => (
                <li key={item}>— {item}</li>
              ))}
            </ul>
          </div>

          <div className="border-[1.5px] border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
            <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
              Unsafe interpretations
            </h2>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-[var(--cb-body)]">
              {unsafeInterpretations.map((item) => (
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
