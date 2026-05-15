import { reviewerBriefPack } from "@/content/reviewer-briefs/reviewer-briefs";

export default function ReviewerBriefsPage() {
  return (
    <main>
      <section className="cb-container cb-section-y">
        <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-[var(--cb-muted)]">
          Version {reviewerBriefPack.version}
        </p>

        <h1 className="cb-display mt-4 max-w-4xl text-4xl tracking-tight text-[var(--cb-ink)] sm:text-5xl sm:leading-tight">
          {reviewerBriefPack.title}
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--cb-body)]">
          {reviewerBriefPack.summary}
        </p>

        <div className="mt-10 border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
          <h2 className="text-base font-medium text-[var(--cb-ink)]">
            Position
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--cb-body)]">
            {reviewerBriefPack.position}
          </p>
        </div>

        <section className="mt-12">
          <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
            Briefs
          </h2>

          <div className="mt-6 grid gap-5">
            {reviewerBriefPack.briefs.map((brief) => (
              <article
                key={brief.audience}
                className="border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--cb-muted)]">
                  Reviewer
                </p>

                <h3 className="mt-3 text-lg font-medium text-[var(--cb-ink)]">
                  {brief.audience}
                </h3>

                <div className="mt-5 grid gap-5 md:grid-cols-2">
                  <div>
                    <h4 className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--cb-muted)]">
                      Focus
                    </h4>
                    <p className="mt-3 text-sm leading-7 text-[var(--cb-body)]">
                      {brief.focus}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--cb-muted)]">
                      Ask
                    </h4>
                    <p className="mt-3 text-sm leading-7 text-[var(--cb-body)]">
                      {brief.ask}
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
