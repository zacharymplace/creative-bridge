import { recognitionBoundaries } from "@/content/recognition-boundaries/recognition-boundaries";

export default function RecognitionBoundariesPage() {
  return (
    <main>
      <section className="cb-container cb-section-y">
        <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-[var(--cb-muted)]">
          Version {recognitionBoundaries.version}
        </p>

        <h1 className="cb-display mt-4 max-w-4xl text-4xl tracking-tight text-[var(--cb-ink)] sm:text-5xl sm:leading-tight">
          {recognitionBoundaries.title}
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--cb-body)]">
          {recognitionBoundaries.summary}
        </p>

        <div className="mt-10 border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
          <h2 className="text-base font-medium text-[var(--cb-ink)]">
            Position
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--cb-body)]">
            {recognitionBoundaries.position}
          </p>
        </div>

        <section className="mt-12">
          <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
            Recognition types
          </h2>

          <div className="mt-6 grid gap-5">
            {recognitionBoundaries.recognitionTypes.map((item) => (
              <article
                key={item.title}
                className="border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--cb-muted)]">
                  {item.defaultState}
                </p>
                <h3 className="mt-3 text-lg font-medium text-[var(--cb-ink)]">
                  {item.title}
                </h3>

                <div className="mt-5 grid gap-5 md:grid-cols-2">
                  <div>
                    <h4 className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--cb-muted)]">
                      Allowed
                    </h4>
                    <p className="mt-3 text-sm leading-7 text-[var(--cb-body)]">
                      {item.allowed}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--cb-muted)]">
                      Not allowed
                    </h4>
                    <p className="mt-3 text-sm leading-7 text-[var(--cb-body)]">
                      {item.notAllowed}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
            <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
              Public recognition rules
            </h2>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-[var(--cb-body)]">
              {recognitionBoundaries.publicRecognitionRules.map((item) => (
                <li key={item}>— {item}</li>
              ))}
            </ul>
          </div>

          <div className="border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
            <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
              Prohibited patterns
            </h2>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-[var(--cb-body)]">
              {recognitionBoundaries.prohibitedPatterns.map((item) => (
                <li key={item}>— {item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-12 border-t border-[var(--cb-border)] pt-8">
          <h2 className="font-mono text-[12px] uppercase tracking-[0.2em] text-[var(--cb-muted)]">
            Release gate
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--cb-body)]">
            {recognitionBoundaries.releaseGate}
          </p>
        </section>
      </section>
    </main>
  );
}
