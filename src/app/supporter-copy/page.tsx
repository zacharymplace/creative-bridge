import { supporterCopyGuardrails } from "@/content/supporter-copy/supporter-copy";

export default function SupporterCopyPage() {
  return (
    <main>
      <section className="cb-container cb-section-y">
        <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-[var(--cb-muted)]">
          Version {supporterCopyGuardrails.version}
        </p>

        <h1 className="cb-display mt-4 max-w-4xl text-4xl tracking-tight text-[var(--cb-ink)] sm:text-5xl sm:leading-tight">
          {supporterCopyGuardrails.title}
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--cb-body)]">
          {supporterCopyGuardrails.summary}
        </p>

        <div className="mt-10 border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
          <h2 className="text-base font-medium text-[var(--cb-ink)]">
            Position
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--cb-body)]">
            {supporterCopyGuardrails.position}
          </p>
        </div>

        <section className="mt-12 grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
              Safe language
            </h2>
            <div className="mt-6 grid gap-5">
              {supporterCopyGuardrails.safeLanguage.map((item) => (
                <article
                  key={item.title}
                  className="border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6"
                >
                  <h3 className="text-lg font-medium text-[var(--cb-ink)]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[var(--cb-body)]">
                    {item.copy}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div>
            <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
              Unsafe language
            </h2>
            <div className="mt-6 grid gap-5">
              {supporterCopyGuardrails.unsafeLanguage.map((item) => (
                <article
                  key={item.title}
                  className="border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6"
                >
                  <h3 className="text-lg font-medium text-[var(--cb-ink)]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[var(--cb-body)]">
                    {item.copy}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
            Draft copy blocks
          </h2>

          <div className="mt-6 grid gap-5">
            {supporterCopyGuardrails.draftBlocks.map((block) => (
              <article
                key={block.label}
                className="border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8"
              >
                <h3 className="text-lg font-medium text-[var(--cb-ink)]">
                  {block.label}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[var(--cb-body)]">
                  {block.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12 border-t border-[var(--cb-border)] pt-8">
          <h2 className="font-mono text-[12px] uppercase tracking-[0.2em] text-[var(--cb-muted)]">
            Release gate
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--cb-body)]">
            {supporterCopyGuardrails.releaseGate}
          </p>
        </section>
      </section>
    </main>
  );
}
