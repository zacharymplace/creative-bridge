import { sponsorNonInterferenceTerms } from "@/content/sponsor-terms/sponsor-terms";

export default function SponsorTermsPage() {
  return (
    <main>
      <section className="cb-container cb-section-y">
        <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-[var(--cb-muted)]">
          Version {sponsorNonInterferenceTerms.version}
        </p>

        <h1 className="cb-display mt-4 max-w-4xl text-4xl tracking-tight text-[var(--cb-ink)] sm:text-5xl sm:leading-tight">
          {sponsorNonInterferenceTerms.title}
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--cb-body)]">
          {sponsorNonInterferenceTerms.summary}
        </p>

        <div className="mt-10 border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
          <h2 className="text-base font-medium text-[var(--cb-ink)]">
            Position
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--cb-body)]">
            {sponsorNonInterferenceTerms.position}
          </p>
        </div>

        <section className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
            <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
              Sponsor may
            </h2>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-[var(--cb-body)]">
              {sponsorNonInterferenceTerms.sponsorMay.map((item) => (
                <li key={item}>— {item}</li>
              ))}
            </ul>
          </div>

          <div className="border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
            <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
              Sponsor may not
            </h2>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-[var(--cb-body)]">
              {sponsorNonInterferenceTerms.sponsorMayNot.map((item) => (
                <li key={item}>— {item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
            Required terms
          </h2>

          <div className="mt-6 grid gap-5">
            {sponsorNonInterferenceTerms.requiredTerms.map((term) => (
              <article
                key={term.title}
                className="border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8"
              >
                <h3 className="text-lg font-medium text-[var(--cb-ink)]">
                  {term.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[var(--cb-body)]">
                  {term.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
            <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
              Recognition boundary
            </h2>
            <p className="mt-6 text-sm leading-7 text-[var(--cb-body)]">
              {sponsorNonInterferenceTerms.recognitionBoundary}
            </p>
          </div>

          <div className="border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
            <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
              Release gate
            </h2>
            <p className="mt-6 text-sm leading-7 text-[var(--cb-body)]">
              {sponsorNonInterferenceTerms.releaseGate}
            </p>
          </div>
        </section>
      </section>
    </main>
  );
}
