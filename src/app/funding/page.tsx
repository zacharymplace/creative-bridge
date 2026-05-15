import { fundingPrinciples } from "@/content/funding/funding-principles";

export default function FundingPage() {
  return (
    <main>
      <section className="cb-container cb-section-y">
        <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-[var(--cb-muted)]">
          Version {fundingPrinciples.version}
        </p>

        <h1 className="cb-display mt-4 max-w-4xl text-4xl tracking-tight text-[var(--cb-ink)] sm:text-5xl sm:leading-tight">
          {fundingPrinciples.title}
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--cb-body)]">
          {fundingPrinciples.summary}
        </p>

        <div className="mt-10 border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
          <h2 className="text-base font-medium text-[var(--cb-ink)]">
            Position
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--cb-body)]">
            {fundingPrinciples.position}
          </p>
        </div>

        <section className="mt-12 border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
          <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
            Non-negotiables
          </h2>
          <ul className="mt-6 space-y-4 text-sm leading-7 text-[var(--cb-body)]">
            {fundingPrinciples.nonNegotiables.map((item) => (
              <li key={item}>— {item}</li>
            ))}
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
            Funding phases
          </h2>

          <div className="mt-6 grid gap-5">
            {fundingPrinciples.phases.map((phase) => (
              <article
                key={phase.title}
                className="border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--cb-muted)]">
                  {phase.timing}
                </p>
                <h3 className="mt-3 text-lg font-medium text-[var(--cb-ink)]">
                  {phase.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[var(--cb-body)]">
                  {phase.model}
                </p>

                <div className="mt-5 grid gap-5 md:grid-cols-2">
                  <div>
                    <h4 className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--cb-muted)]">
                      Allowed
                    </h4>
                    <p className="mt-3 text-sm leading-7 text-[var(--cb-body)]">
                      {phase.allowed}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--cb-muted)]">
                      Not allowed
                    </h4>
                    <p className="mt-3 text-sm leading-7 text-[var(--cb-body)]">
                      {phase.notAllowed}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
            Pricing ladders
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {fundingPrinciples.pricingLadders.map((tier) => (
              <article
                key={tier.name}
                className="border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6"
              >
                <h3 className="text-lg font-medium text-[var(--cb-ink)]">
                  {tier.name}
                </h3>
                <p className="mt-3 font-mono text-[12px] uppercase tracking-[0.14em] text-[var(--cb-muted)]">
                  {tier.price}
                </p>
                <p className="mt-4 text-sm leading-7 text-[var(--cb-body)]">
                  {tier.purpose}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12 border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
          <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
            Drift risks
          </h2>
          <div className="mt-6 grid gap-5">
            {fundingPrinciples.driftRisks.map((item) => (
              <div key={item.risk}>
                <h3 className="text-base font-medium text-[var(--cb-ink)]">
                  {item.risk}
                </h3>
                <p className="mt-2 text-sm leading-7 text-[var(--cb-body)]">
                  {item.guardrail}
                </p>
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
