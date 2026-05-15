import { reviewRubric } from "@/content/review-rubric/review-rubric";

export default function ReviewRubricPage() {
  return (
    <main>
      <section className="cb-container cb-section-y">
        <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-[var(--cb-muted)]">
          Version {reviewRubric.version}
        </p>

        <h1 className="cb-display mt-4 max-w-4xl text-4xl tracking-tight text-[var(--cb-ink)] sm:text-5xl sm:leading-tight">
          {reviewRubric.title}
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--cb-body)]">
          {reviewRubric.summary}
        </p>

        <div className="mt-10 border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
          <h2 className="text-base font-medium text-[var(--cb-ink)]">
            Position
          </h2>

          <p className="mt-4 text-base leading-relaxed text-[var(--cb-body)]">
            {reviewRubric.position}
          </p>
        </div>

        <section className="mt-12">
          <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
            Review categories
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {reviewRubric.categories.map((category) => (
              <article
                key={category.title}
                className="border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8"
              >
                <h3 className="text-lg font-medium text-[var(--cb-ink)]">
                  {category.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[var(--cb-body)]">
                  {category.focus}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
            <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
              Rubric scale
            </h2>

            <div className="mt-6 grid gap-4">
              {reviewRubric.scale.map((item) => (
                <article
                  key={item.label}
                  className="border border-[var(--cb-border)] bg-white p-5"
                >
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--cb-muted)]">
                    {item.label}
                  </p>

                  <p className="mt-3 text-sm leading-7 text-[var(--cb-body)]">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
            <h2 className="text-base font-medium text-[var(--cb-ink)]">
              Explicit non-goals
            </h2>

            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-[var(--cb-body)]">
              {reviewRubric.nonGoals.map((item) => (
                <li key={item}>— {item}</li>
              ))}
            </ul>
          </div>
        </section>

        <div className="mt-12 border-t border-[var(--cb-border)] pt-8">
          <p className="max-w-3xl text-sm leading-7 text-[var(--cb-muted)]">
            The rubric should make projects easier to evaluate without creating
            artificial authority, opaque scoring, or approval theater.
          </p>
        </div>
      </section>
    </main>
  );
}
