import { outreachKit } from "@/content/outreach-kit/outreach-kit";

export default function OutreachKitPage() {
  return (
    <main>
      <section className="cb-container cb-section-y">
        <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-[var(--cb-muted)]">
          Version {outreachKit.version}
        </p>

        <h1 className="cb-display mt-4 max-w-4xl text-4xl tracking-tight text-[var(--cb-ink)] sm:text-5xl sm:leading-tight">
          {outreachKit.title}
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--cb-body)]">
          {outreachKit.summary}
        </p>

        <div className="mt-10 border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
          <h2 className="text-base font-medium text-[var(--cb-ink)]">
            Position
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--cb-body)]">
            {outreachKit.position}
          </p>
        </div>

        <section className="mt-12 border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
          <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
            General public post
          </h2>
          <p className="mt-5 whitespace-pre-line text-sm leading-7 text-[var(--cb-body)]">
            {outreachKit.generalPost}
          </p>
        </section>

        <section className="mt-12">
          <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
            Reviewer messages
          </h2>

          <div className="mt-6 grid gap-5">
            {outreachKit.messages.map((message) => (
              <article
                key={message.audience}
                className="border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--cb-muted)]">
                  {message.audience}
                </p>

                <h3 className="mt-3 text-lg font-medium text-[var(--cb-ink)]">
                  {message.subject}
                </h3>

                <p className="mt-5 whitespace-pre-line text-sm leading-7 text-[var(--cb-body)]">
                  {message.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12 grid gap-5 md:grid-cols-2">
          <a
            href={outreachKit.reviewUrl}
            className="border border-[var(--cb-border)] bg-[var(--cb-surface)] p-5 text-sm text-[var(--cb-body)] underline-offset-4 hover:underline"
          >
            Review entry
          </a>
          <a
            href={outreachKit.briefsUrl}
            className="border border-[var(--cb-border)] bg-[var(--cb-surface)] p-5 text-sm text-[var(--cb-body)] underline-offset-4 hover:underline"
          >
            Reviewer briefs
          </a>
        </section>
      </section>
    </main>
  );
}
