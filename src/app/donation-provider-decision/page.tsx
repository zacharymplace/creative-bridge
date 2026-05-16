import { donationProviderDecision } from "@/content/donation-provider-decision/donation-provider-decision";

export default function DonationProviderDecisionPage() {
  return (
    <main>
      <section className="cb-container cb-section-y">
        <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-[var(--cb-muted)]">
          Version {donationProviderDecision.version}
        </p>

        <h1 className="cb-display mt-4 max-w-4xl text-4xl tracking-tight text-[var(--cb-ink)] sm:text-5xl sm:leading-tight">
          {donationProviderDecision.title}
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--cb-body)]">
          {donationProviderDecision.summary}
        </p>

        <div className="mt-10 border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
          <h2 className="text-base font-medium text-[var(--cb-ink)]">
            Position
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--cb-body)]">
            {donationProviderDecision.position}
          </p>
        </div>

        <section className="mt-12 border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
          <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
            Decision
          </h2>
          <p className="mt-6 text-sm leading-7 text-[var(--cb-body)]">
            {donationProviderDecision.decision}
          </p>
        </section>

        <section className="mt-12 grid gap-8 lg:grid-cols-2">
          <article className="border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--cb-muted)]">
              {donationProviderDecision.selectedProvider.status}
            </p>
            <h2 className="mt-3 text-2xl font-medium text-[var(--cb-ink)]">
              {donationProviderDecision.selectedProvider.name}
            </h2>
            <p className="mt-4 text-sm leading-7 text-[var(--cb-body)]">
              {donationProviderDecision.selectedProvider.rationale}
            </p>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-[var(--cb-body)]">
              {donationProviderDecision.selectedProvider.conditions.map((item) => (
                <li key={item}>— {item}</li>
              ))}
            </ul>
          </article>

          <article className="border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--cb-muted)]">
              {donationProviderDecision.fallbackProvider.status}
            </p>
            <h2 className="mt-3 text-2xl font-medium text-[var(--cb-ink)]">
              {donationProviderDecision.fallbackProvider.name}
            </h2>
            <p className="mt-4 text-sm leading-7 text-[var(--cb-body)]">
              {donationProviderDecision.fallbackProvider.rationale}
            </p>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-[var(--cb-body)]">
              {donationProviderDecision.fallbackProvider.conditions.map((item) => (
                <li key={item}>— {item}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="mt-12">
          <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
            Deferred providers
          </h2>

          <div className="mt-6 grid gap-5">
            {donationProviderDecision.deferredProviders.map((provider) => (
              <article
                key={provider.name}
                className="border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6"
              >
                <h3 className="text-lg font-medium text-[var(--cb-ink)]">
                  {provider.name}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[var(--cb-body)]">
                  {provider.reason}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12 border-t border-[var(--cb-border)] pt-8">
          <h2 className="font-mono text-[12px] uppercase tracking-[0.2em] text-[var(--cb-muted)]">
            Integration boundary
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--cb-body)]">
            {donationProviderDecision.integrationBoundary}
          </p>
        </section>
      </section>
    </main>
  );
}
