import { abuseCaseLibrary } from "@/content/abuse-cases/abuse-cases";

export default function AbuseCasesPage() {
  return (
    <main>
      <section className="cb-container cb-section-y">
        <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-[var(--cb-muted)]">
          Version {abuseCaseLibrary.version}
        </p>

        <h1 className="cb-display mt-4 max-w-4xl text-4xl tracking-tight text-[var(--cb-ink)] sm:text-5xl sm:leading-tight">
          {abuseCaseLibrary.title}
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--cb-body)]">
          {abuseCaseLibrary.summary}
        </p>

        <div className="mt-10 border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
          <h2 className="text-base font-medium text-[var(--cb-ink)]">
            Position
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--cb-body)]">
            {abuseCaseLibrary.position}
          </p>
        </div>

        <section className="mt-12">
          <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
            Abuse cases
          </h2>

          <div className="mt-6 grid gap-5">
            {abuseCaseLibrary.cases.map((item, index) => (
              <article
                key={item.title}
                className="border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--cb-muted)]">
                  Case {String(index + 1).padStart(2, "0")}
                </p>

                <h3 className="mt-3 text-lg font-medium text-[var(--cb-ink)]">
                  {item.title}
                </h3>

                <div className="mt-5 grid gap-5 md:grid-cols-2">
                  <div>
                    <h4 className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--cb-muted)]">
                      Risk
                    </h4>
                    <p className="mt-3 text-sm leading-7 text-[var(--cb-body)]">
                      {item.risk}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--cb-muted)]">
                      Guardrail
                    </h4>
                    <p className="mt-3 text-sm leading-7 text-[var(--cb-body)]">
                      {item.guardrail}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
