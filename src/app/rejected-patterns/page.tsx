import { rejectedPatterns } from "@/content/rejected-patterns/rejected-patterns";

export default function RejectedPatternsPage() {
  return (
    <main>
      <section className="cb-container cb-section-y">
        <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-[var(--cb-muted)]">
          Version {rejectedPatterns.version}
        </p>

        <h1 className="cb-display mt-4 max-w-4xl text-4xl tracking-tight text-[var(--cb-ink)] sm:text-5xl sm:leading-tight">
          {rejectedPatterns.title}
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--cb-body)]">
          {rejectedPatterns.summary}
        </p>

        <div className="mt-10 border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
          <h2 className="text-base font-medium text-[var(--cb-ink)]">
            Position
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--cb-body)]">
            {rejectedPatterns.position}
          </p>
        </div>

        <section className="mt-12">
          <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
            Explicitly rejected
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {rejectedPatterns.patterns.map((pattern) => (
              <article
                key={pattern.title}
                className="border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--cb-muted)]">
                  {pattern.status}
                </p>
                <h3 className="mt-3 text-lg font-medium text-[var(--cb-ink)]">
                  {pattern.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[var(--cb-body)]">
                  {pattern.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        <div className="mt-12 border-t border-[var(--cb-border)] pt-8">
          <p className="max-w-3xl text-sm leading-7 text-[var(--cb-muted)]">
            This registry should expand whenever a tempting shortcut would make
            the project less transparent, less consent-aware, or less respectful
            of human craft.
          </p>
        </div>
      </section>
    </main>
  );
}
