import Link from "next/link";

const recognitionMustNotBecome = [
  "Endorsement, approval, certification, or verification.",
  "A public trust badge, status marker, score, ranking, or tier.",
  "Evidence of governance authority, review priority, or platform influence.",
  "A sponsor-like claim unless sponsor terms explicitly govern it.",
  "A substitute for consent, contribution records, or public-tagging boundaries.",
];

const safePatterns = [
  {
    title: "Plain acknowledgment",
    description:
      "Thank someone for support, feedback, contribution, or review without implying endorsement or authority.",
  },
  {
    title: "Specific contribution context",
    description:
      "Describe the actual contribution narrowly: feedback, review, funding support, template testing, or documentation input.",
  },
  {
    title: "Non-authority language",
    description:
      "Make clear that recognition does not create certification, approval, governance power, review priority, or trust status.",
  },
  {
    title: "Consent-aware naming",
    description:
      "Only name people, organizations, or projects when permission and context are clear.",
  },
];

const unsafePatterns = [
  "Trusted supporter",
  "Certified contributor",
  "Approved collaborator",
  "Verified reviewer",
  "Official partner",
  "Priority supporter",
  "Governance sponsor",
  "Creative Bridge endorsed",
];

const escalationPaths = [
  { label: "Supporter Copy", href: "/supporter-copy" },
  { label: "Sponsor Terms", href: "/sponsor-terms" },
  { label: "Funding", href: "/funding" },
  { label: "Trust", href: "/trust" },
  { label: "Governance", href: "/governance" },
  { label: "Limits", href: "/limits" },
];

export default function RecognitionBoundariesPage() {
  return (
    <main>
      <section className="cb-container cb-section-y">
        <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-[var(--cb-muted)]">
          Acknowledgment safety and public recognition
        </p>

        <h1 className="cb-display mt-4 max-w-4xl text-4xl tracking-tight text-[var(--cb-ink)] sm:text-5xl sm:leading-tight">
          Recognition Boundaries
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--cb-body)]">
          Recognition can thank people, supporters, reviewers, and contributors
          without turning acknowledgment into status, endorsement, priority, or
          governance power.
        </p>

        <section className="mt-10 border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
          <h2 className="text-lg font-medium text-[var(--cb-ink)]">
            What recognition is for
          </h2>

          <p className="mt-4 text-sm leading-7 text-[var(--cb-body)]">
            Use recognition to make participation legible while keeping public
            meaning narrow. Recognition should clarify contribution context, not
            manufacture authority.
          </p>
        </section>

        <section className="mt-12 grid gap-8 lg:grid-cols-2">
          <article className="border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
            <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
              Recognition must not become
            </h2>

            <ul className="mt-6 space-y-4 text-sm leading-7 text-[var(--cb-body)]">
              {recognitionMustNotBecome.map((item) => (
                <li key={item}>— {item}</li>
              ))}
            </ul>
          </article>

          <article className="border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
            <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
              Unsafe recognition language
            </h2>

            <ul className="mt-6 space-y-4 text-sm leading-7 text-[var(--cb-body)]">
              {unsafePatterns.map((item) => (
                <li key={item}>— {item}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="mt-12 grid gap-6">
          {safePatterns.map((item) => (
            <article
              key={item.title}
              className="border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8"
            >
              <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
                {item.title}
              </h2>

              <p className="mt-4 text-sm leading-7 text-[var(--cb-body)]">
                {item.description}
              </p>
            </article>
          ))}
        </section>

        <section className="mt-12 border-t border-[var(--cb-border)] pt-8">
          <h2 className="font-mono text-[12px] uppercase tracking-[0.2em] text-[var(--cb-muted)]">
            Escalate to
          </h2>

          <div className="mt-5 flex flex-wrap gap-3">
            {escalationPaths.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full border border-[var(--cb-border)] bg-white px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--cb-muted)] underline-offset-4 hover:underline"
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
