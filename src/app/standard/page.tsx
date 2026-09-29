import Link from "next/link";

export default function StandardPage() {
  const expectations = [
    "Disclose material AI assistance when it shapes creative process, production path, or public claims.",
    "Preserve human authorship, judgment, consent, credit, and accountability.",
    "Use AI as a coordination and acceleration layer, not a substitute for creative responsibility.",
    "Make collaboration boundaries explicit before asking others to participate.",
    "Invite critique and record meaningful responses instead of seeking vague approval.",
    "Avoid certification, ranking, verification, endorsement, or legitimacy claims.",
  ];

  const nextSteps = [
    { label: "Review the standard", href: "/review" },
    { label: "Read the limits", href: "/limits" },
    { label: "Use the start router", href: "/start" },
    { label: "Explore whyfiles", href: "/whyfiles" },
  ];

  return (
    <main>
      <section className="cb-container cb-section-y">
        <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-[var(--cb-muted)]">
          The Creative Bridge
        </p>

        <h1 className="cb-display mt-4 max-w-4xl text-4xl tracking-tight text-[var(--cb-ink)] sm:text-5xl sm:leading-tight">
          Standard
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--cb-body)]">
          A public standard for AI-assisted creative work focused on collaboration,
          traceability, critique, and misuse resistance.
        </p>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <section className="border-[1.5px] border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
            <h2 className="text-lg font-medium text-[var(--cb-ink)]">
              What this is
            </h2>
            <p className="mt-4 text-sm leading-7 text-[var(--cb-body)]">
              A reader-friendly operating standard for creators, collaborators,
              reviewers, and system stewards working around AI-assisted creative
              projects.
            </p>
          </section>

          <section className="border-[1.5px] border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
            <h2 className="text-lg font-medium text-[var(--cb-ink)]">
              What this is not
            </h2>
            <p className="mt-4 text-sm leading-7 text-[var(--cb-body)]">
              Not certification, endorsement, verification, legal review, ethical
              approval, creator ranking, or proof that a project is legitimate.
            </p>
          </section>
        </div>

        <section className="mt-12">
          <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
            Core expectations
          </h2>

          <div className="mt-6 grid gap-4">
            {expectations.map((item) => (
              <article
                key={item}
                className="border-[1.5px] border-[var(--cb-border)] bg-[var(--cb-surface)] p-5"
              >
                <p className="text-sm leading-7 text-[var(--cb-body)]">
                  {item}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12 border-[1.5px] border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
          <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
            How to use it
          </h2>
          <p className="mt-6 max-w-3xl text-sm leading-7 text-[var(--cb-body)]">
            Use this standard as a shared reference before pitching,
            collaborating, publishing, reviewing, or funding AI-assisted creative
            work. It is most useful when it clarifies expectations early and
            gives reviewers a concrete surface to critique.
          </p>
        </section>

        <section className="mt-12 border-t border-[var(--cb-border)] pt-8">
          <h2 className="font-mono text-[12px] uppercase tracking-[0.2em] text-[var(--cb-muted)]">
            Go next
          </h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {nextSteps.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className=" border-[1.5px] border-[var(--cb-border)] bg-[var(--paper-2)] px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--cb-muted)] underline-offset-4 hover:underline"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
