import { donationLaunchReadinessReview } from "@/content/donation-launch-review/donation-launch-review";

export default function DonationLaunchReviewPage() {
  return (
    <main>
      <section className="cb-container cb-section-y">
        <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-[var(--cb-muted)]">
          Version {donationLaunchReadinessReview.version}
        </p>

        <h1 className="cb-display mt-4 max-w-4xl text-4xl tracking-tight text-[var(--cb-ink)] sm:text-5xl sm:leading-tight">
          {donationLaunchReadinessReview.title}
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--cb-body)]">
          {donationLaunchReadinessReview.summary}
        </p>

        <div className="mt-10 grid gap-5 lg:grid-cols-[0.4fr_1fr]">
          <div className="border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
            <h2 className="text-base font-medium text-[var(--cb-ink)]">
              Outcome
            </h2>
            <p className="mt-4 font-mono text-[13px] uppercase tracking-[0.18em] text-[var(--cb-muted)]">
              {donationLaunchReadinessReview.outcome}
            </p>
          </div>

          <div className="border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
            <h2 className="text-base font-medium text-[var(--cb-ink)]">
              Position
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--cb-body)]">
              {donationLaunchReadinessReview.position}
            </p>
          </div>
        </div>

        <section className="mt-12 border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
          <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
            Rationale
          </h2>
          <p className="mt-6 text-sm leading-7 text-[var(--cb-body)]">
            {donationLaunchReadinessReview.rationale}
          </p>
        </section>

        <section className="mt-12">
          <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
            Pass / defer criteria
          </h2>

          <div className="mt-6 grid gap-5">
            {donationLaunchReadinessReview.passCriteria.map((item) => (
              <article
                key={item.title}
                className="border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-lg font-medium text-[var(--cb-ink)]">
                    {item.title}
                  </h3>
                  <span className="rounded-full border border-[var(--cb-border)] bg-white px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--cb-muted)]">
                    {item.status}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-7 text-[var(--cb-body)]">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
            Launch options
          </h2>

          <div className="mt-6 grid gap-5">
            {donationLaunchReadinessReview.launchOptions.map((option) => (
              <article
                key={option.title}
                className="border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--cb-muted)]">
                  {option.recommendation}
                </p>
                <h3 className="mt-3 text-lg font-medium text-[var(--cb-ink)]">
                  {option.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[var(--cb-body)]">
                  {option.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12 border-t border-[var(--cb-border)] pt-8">
          <h2 className="font-mono text-[12px] uppercase tracking-[0.2em] text-[var(--cb-muted)]">
            Final decision
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--cb-body)]">
            {donationLaunchReadinessReview.finalDecision}
          </p>
        </section>
      </section>
    </main>
  );
}
