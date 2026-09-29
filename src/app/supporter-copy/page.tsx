import Link from "next/link";

const safeLanguage = [
  "Support helps sustain ongoing work.",
  "Support contributes to operational continuity.",
  "Support does not grant authority, influence, approval, or governance power.",
  "Supporters are acknowledged within defined recognition boundaries.",
  "Support does not certify projects, people, or outcomes.",
];

const unsafeLanguage = [
  "Trusted supporter",
  "Certified supporter",
  "Official supporter",
  "Verified project supporter",
  "Priority supporter access",
  "Sponsor-backed approval",
  "Governance participant",
  "Community-vetted supporter",
];

const recognitionBoundaries = [
  {
    title: "Acknowledgment is not endorsement",
    description:
      "Public thanks or supporter acknowledgment should never imply approval, certification, trust status, or governance authority.",
  },
  {
    title: "Support is not influence",
    description:
      "Financial support must not alter review posture, governance handling, escalation outcomes, or project visibility.",
  },
  {
    title: "Support is not ranking",
    description:
      "Supporters should not receive scores, tiers, trust indicators, badges, or public authority framing.",
  },
  {
    title: "Support is not access control",
    description:
      "Support should not become a gatekeeping layer for participation, criticism, review, or governance access.",
  },
];

const escalationPaths = [
  { label: "Recognition Boundaries", href: "/recognition-boundaries" },
  { label: "Funding", href: "/funding" },
  { label: "Donation Gate", href: "/donation-gate" },
  { label: "Donation Launch Review", href: "/donation-launch-review" },
  { label: "Governance", href: "/governance" },
  { label: "Trust", href: "/trust" },
];

export default function SupporterCopyPage() {
  return (
    <main>
      <section className="cb-container cb-section-y">
        <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-[var(--cb-muted)]">
          Support language and recognition boundaries
        </p>

        <h1 className="cb-display mt-4 max-w-4xl text-4xl tracking-tight text-[var(--cb-ink)] sm:text-5xl sm:leading-tight">
          Supporter Copy
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--cb-body)]">
          Supporter copy explains what support does without implying authority,
          endorsement, certification, trust status, influence, or governance
          power.
        </p>

        <section className="mt-10 border-[1.5px] border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
          <h2 className="text-lg font-medium text-[var(--cb-ink)]">
            What supporter copy is for
          </h2>

          <p className="mt-4 text-sm leading-7 text-[var(--cb-body)]">
            Use supporter copy to explain support mechanics clearly while
            preserving governance integrity, review independence, and
            recognition boundaries.
          </p>
        </section>

        <section className="mt-12 grid gap-8 lg:grid-cols-2">
          <article className="border-[1.5px] border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
            <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
              Safe language
            </h2>

            <ul className="mt-6 space-y-4 text-sm leading-7 text-[var(--cb-body)]">
              {safeLanguage.map((item) => (
                <li key={item}>— {item}</li>
              ))}
            </ul>
          </article>

          <article className="border-[1.5px] border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
            <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
              Unsafe language
            </h2>

            <ul className="mt-6 space-y-4 text-sm leading-7 text-[var(--cb-body)]">
              {unsafeLanguage.map((item) => (
                <li key={item}>— {item}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="mt-12 grid gap-6">
          {recognitionBoundaries.map((item) => (
            <article
              key={item.title}
              className="border-[1.5px] border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8"
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
