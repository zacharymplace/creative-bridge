import { feedbackSeedLog } from "@/content/feedback-seeds/feedback-seeds";

export default function FeedbackSeedsPage() {
  return (
    <main>
      <section className="cb-container cb-section-y">
        <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-[var(--cb-muted)]">
          Version {feedbackSeedLog.version}
        </p>

        <h1 className="cb-display mt-4 max-w-4xl text-4xl tracking-tight text-[var(--cb-ink)] sm:text-5xl sm:leading-tight">
          {feedbackSeedLog.title}
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--cb-body)]">
          {feedbackSeedLog.summary}
        </p>

        <div className="mt-10 border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
          <h2 className="text-base font-medium text-[var(--cb-ink)]">
            Position
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--cb-body)]">
            {feedbackSeedLog.position}
          </p>
        </div>

        <section className="mt-12 grid gap-5">
          {feedbackSeedLog.seeds.map((seed) => (
            <article
              key={seed.reviewerType}
              className="border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="text-lg font-medium text-[var(--cb-ink)]">
                  {seed.reviewerType}
                </h2>
                <span className="rounded-full border border-[var(--cb-border)] bg-white px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--cb-muted)]">
                  {seed.status}
                </span>
              </div>

              <p className="mt-4 text-sm leading-7 text-[var(--cb-body)]">
                {seed.requestedCritique}
              </p>
            </article>
          ))}
        </section>

        <section className="mt-12 border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
          <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
            States
          </h2>
          <ul className="mt-6 space-y-3 text-sm leading-7 text-[var(--cb-body)]">
            {feedbackSeedLog.states.map((state) => (
              <li key={state}>— {state}</li>
            ))}
          </ul>
        </section>
      </section>
    </main>
  );
}
