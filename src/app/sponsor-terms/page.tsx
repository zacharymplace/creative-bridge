import Link from "next/link";

const cannotBuy = [
  "Endorsement, approval, certification, verification, or public trust status.",
  "Review priority, favorable review treatment, or critique suppression.",
  "Governance authority, escalation control, or change approval power.",
  "Placement, ranking, promotion, badges, or featured status.",
  "Control over language, public standards, contributor recognition, or project listings.",
];

const requiredBoundaries = [
  {
    title: "Non-interference",
    description:
      "Sponsors cannot direct review outcomes, governance decisions, escalation paths, or public standard language.",
  },
  {
    title: "Clear public framing",
    description:
      "Sponsor language must explain support without implying endorsement, certification, authority, or preferred standing.",
  },
  {
    title: "Separated recognition",
    description:
      "Sponsor acknowledgment must remain distinct from contributor credit, reviewer status, trust claims, and project legitimacy.",
  },
  {
    title: "Revocable placement",
    description:
      "Sponsor references must be removable if they create confusion, pressure, conflict, or unsafe interpretation.",
  },
];

const unsafeSignals = [
  "Sponsor copy implies approval, trust, certification, or official partnership.",
  "Sponsor support is tied to review timing, page placement, or visibility.",
  "Sponsor asks to shape governance, standards, critique handling, or public language.",
  "Sponsor recognition starts looking like a badge, ranking, status tier, or endorsement.",
  "Sponsor presence makes reviewers, contributors, or project owners feel constrained.",
];

const escalationPaths = [
  { label: "Funding", href: "/funding" },
  { label: "Recognition Boundaries", href: "/recognition-boundaries" },
  { label: "Supporter Copy", href: "/supporter-copy" },
  { label: "Governance", href: "/governance" },
  { label: "Trust", href: "/trust" },
  { label: "Rejected Patterns", href: "/rejected-patterns" },
];

export default function SponsorTermsPage() {
  return (
    <main>
      <section className="cb-container cb-section-y">
        <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-[var(--cb-muted)]">
          Sponsor boundaries and non-interference
        </p>

        <h1 className="cb-display mt-4 max-w-4xl text-4xl tracking-tight text-[var(--cb-ink)] sm:text-5xl sm:leading-tight">
          Sponsor Terms
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--cb-body)]">
          Sponsorship can support operations, but it cannot buy endorsement,
          review outcomes, governance influence, public trust status, or
          authority over the standard.
        </p>

        <section className="mt-10 border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
          <h2 className="text-lg font-medium text-[var(--cb-ink)]">
            What sponsorship is for
          </h2>
          <p className="mt-4 text-sm leading-7 text-[var(--cb-body)]">
            Sponsor terms define how support can be acknowledged while keeping
            governance, review, recognition, and public trust boundaries intact.
          </p>
        </section>

        <section className="mt-12 grid gap-8 lg:grid-cols-2">
          <article className="border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
            <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
              Sponsorship cannot buy
            </h2>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-[var(--cb-body)]">
              {cannotBuy.map((item) => (
                <li key={item}>— {item}</li>
              ))}
            </ul>
          </article>

          <article className="border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
            <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
              Unsafe sponsor signals
            </h2>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-[var(--cb-body)]">
              {unsafeSignals.map((item) => (
                <li key={item}>— {item}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="mt-12 grid gap-6">
          {requiredBoundaries.map((item) => (
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
