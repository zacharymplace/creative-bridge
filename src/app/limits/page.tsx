import { limitsStatement } from "@/content/limits/limits";

export default function LimitsPage() {
  return (
    <main>
      <section className="cb-container cb-section-y">
        <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-[var(--cb-muted)]">
          Version {limitsStatement.version}
        </p>

        <h1 className="cb-display mt-4 max-w-4xl text-4xl tracking-tight text-[var(--cb-ink)] sm:text-5xl sm:leading-tight">
          {limitsStatement.title}
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--cb-body)]">
          {limitsStatement.summary}
        </p>

        <div className="mt-10 border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
          <h2 className="text-base font-medium text-[var(--cb-ink)]">
            Position
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--cb-body)]">
            {limitsStatement.position}
          </p>
        </div>

        <section className="mt-12">
          <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
            What this does not do
          </h2>

          <div className="mt-6 grid gap-5">
            {limitsStatement.doesNot.map((item) => (
              <article
                key={item.title}
                className="border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8"
              >
                <h3 className="text-lg font-medium text-[var(--cb-ink)]">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[var(--cb-body)]">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
            <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
              Use properly
            </h2>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-[var(--cb-body)]">
              {limitsStatement.useProperly.map((item) => (
                <li key={item}>— {item}</li>
              ))}
            </ul>
          </div>

          <div className="border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
            <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
              Misuse warning
            </h2>
            <p className="mt-6 text-sm leading-7 text-[var(--cb-body)]">
              {limitsStatement.misuseWarning}
            </p>
          </div>
        </section>
      </section>
    </main>
  );
}
