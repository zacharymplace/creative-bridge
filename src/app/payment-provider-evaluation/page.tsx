import { paymentProviderEvaluation } from "@/content/payment-provider-evaluation/payment-provider-evaluation";

export default function PaymentProviderEvaluationPage() {
  return (
    <main>
      <section className="cb-container cb-section-y">
        <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-[var(--cb-muted)]">
          Version {paymentProviderEvaluation.version}
        </p>

        <h1 className="cb-display mt-4 max-w-4xl text-4xl tracking-tight text-[var(--cb-ink)] sm:text-5xl sm:leading-tight">
          {paymentProviderEvaluation.title}
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--cb-body)]">
          {paymentProviderEvaluation.summary}
        </p>

        <div className="mt-10 border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
          <h2 className="text-base font-medium text-[var(--cb-ink)]">
            Position
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--cb-body)]">
            {paymentProviderEvaluation.position}
          </p>
        </div>

        <section className="mt-12 border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
          <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
            Evaluation criteria
          </h2>
          <ul className="mt-6 space-y-4 text-sm leading-7 text-[var(--cb-body)]">
            {paymentProviderEvaluation.evaluationCriteria.map((item) => (
              <li key={item}>— {item}</li>
            ))}
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
            Provider evaluation
          </h2>

          <div className="mt-6 grid gap-5">
            {paymentProviderEvaluation.providers.map((provider) => (
              <article
                key={provider.name}
                className="border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--cb-muted)]">
                  {provider.fit}
                </p>
                <h3 className="mt-3 text-lg font-medium text-[var(--cb-ink)]">
                  {provider.name}
                </h3>

                <div className="mt-5 grid gap-5 md:grid-cols-2">
                  <div>
                    <h4 className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--cb-muted)]">
                      Strengths
                    </h4>
                    <p className="mt-3 text-sm leading-7 text-[var(--cb-body)]">
                      {provider.strengths}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--cb-muted)]">
                      Risks
                    </h4>
                    <p className="mt-3 text-sm leading-7 text-[var(--cb-body)]">
                      {provider.risks}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--cb-muted)]">
                      Best use
                    </h4>
                    <p className="mt-3 text-sm leading-7 text-[var(--cb-body)]">
                      {provider.bestUse}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--cb-muted)]">
                      Current recommendation
                    </h4>
                    <p className="mt-3 text-sm leading-7 text-[var(--cb-body)]">
                      {provider.currentRecommendation}
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
              Current decision
            </h2>
            <p className="mt-6 text-sm leading-7 text-[var(--cb-body)]">
              {paymentProviderEvaluation.currentDecision}
            </p>
          </div>

          <div className="border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
            <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
              Provisional ranking
            </h2>
            <ol className="mt-6 space-y-4 text-sm leading-7 text-[var(--cb-body)]">
              {paymentProviderEvaluation.provisionalRanking.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </div>
        </section>
      </section>
    </main>
  );
}
