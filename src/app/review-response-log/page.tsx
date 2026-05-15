import { reviewResponseLog } from "@/content/review-response-log/review-response-log";

export default function ReviewResponseLogPage() {
  return (
    <main>
      <section className="cb-container cb-section-y">
        <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-[var(--cb-muted)]">
          Version {reviewResponseLog.version}
        </p>

        <h1 className="cb-display mt-4 max-w-4xl text-4xl tracking-tight text-[var(--cb-ink)] sm:text-5xl sm:leading-tight">
          {reviewResponseLog.title}
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--cb-body)]">
          {reviewResponseLog.summary}
        </p>

        <div className="mt-10 border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
          <h2 className="text-base font-medium text-[var(--cb-ink)]">
            Position
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--cb-body)]">
            {reviewResponseLog.position}
          </p>
        </div>

        <section className="mt-12">
          <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
            Response states
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {reviewResponseLog.states.map((state) => (
              <article
                key={state.label}
                className="border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8"
              >
                <h3 className="text-lg font-medium text-[var(--cb-ink)]">
                  {state.label}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[var(--cb-body)]">
                  {state.meaning}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
            Example log entries
          </h2>

          <div className="mt-6 grid gap-5">
            {reviewResponseLog.entries.map((entry) => (
              <article
                key={entry.id}
                className="border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-lg font-medium text-[var(--cb-ink)]">
                    {entry.area}
                  </h3>
                  <span className="rounded-full border border-[var(--cb-border)] bg-white px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--cb-muted)]">
                    {entry.status} · {entry.release}
                  </span>
                </div>

                <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--cb-muted)]">
                  Feedback
                </p>
                <p className="mt-3 text-sm leading-7 text-[var(--cb-body)]">
                  {entry.feedback}
                </p>

                <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--cb-muted)]">
                  Response
                </p>
                <p className="mt-3 text-sm leading-7 text-[var(--cb-body)]">
                  {entry.response}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12 border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
          <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
            Response principles
          </h2>
          <ul className="mt-6 space-y-4 text-sm leading-7 text-[var(--cb-body)]">
            {reviewResponseLog.principles.map((item) => (
              <li key={item}>— {item}</li>
            ))}
          </ul>
        </section>
      </section>
    </main>
  );
}
