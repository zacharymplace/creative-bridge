import Link from "next/link";

export default function GovernancePage() {
  const protectsAgainst = [
    "False authority, certification, approval, endorsement, or verification claims.",
    "Marketplace drift before governance boundaries are stable.",
    "Review turning into praise, promotion, or legitimacy theater.",
    "Funding creating influence, priority, public standing, or sponsor capture.",
    "AI disclosure becoming vague, hidden, performative, or optional when material.",
    "Collaborators, reviewers, or referenced people being used without consent or clear credit.",
  ];

  const controls = [
    "Limits page defines non-authority boundaries.",
    "Whyfiles preserve reasoning behind decisions.",
    "Review page asks for criticism instead of approval.",
    "Response logs keep accepted and rejected feedback traceable.",
    "Funding pages separate sustainability from influence.",
    "Static-first structure prevents premature platform behavior.",
  ];

  const escalation = [
    "Misuse concern → Abuse Cases or Limits.",
    "Incentive concern → Incentive Drift or Governance.",
    "Rationale concern → Whyfiles.",
    "Review concern → Review Intake or Response Log.",
    "Funding concern → Donation Gate or Sponsor Terms.",
    "Navigation concern → System Coherence or Docs.",
  ];

  const gated = [
    "Payment mechanics and donation buttons.",
    "Supporter or sponsor recognition surfaces.",
    "Public profiles, matching, rankings, or marketplace behavior.",
    "Creator verification, certification, badges, or trusted status.",
    "Review priority, paid placement, or sponsor influence.",
  ];

  const nextSteps = [
    { label: "Limits", href: "/limits" },
    { label: "Whyfiles", href: "/whyfiles" },
    { label: "Abuse Cases", href: "/abuse-cases" },
    { label: "Incentive Drift", href: "/incentive-drift" },
    { label: "Review", href: "/review" },
    { label: "System", href: "/system-coherence" },
  ];

  return (
    <main>
      <section className="cb-container cb-section-y">
        <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-[var(--cb-muted)]">
          Misuse resistance
        </p>

        <h1 className="cb-display mt-4 max-w-4xl text-4xl tracking-tight text-[var(--cb-ink)] sm:text-5xl sm:leading-tight">
          Governance
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--cb-body)]">
          Governance defines how The Creative Bridge resists false authority,
          incentive drift, funding capture, premature marketplace behavior, and
          claims the standard is not designed to make.
        </p>

        <section className="mt-10 border-[1.5px] border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
          <h2 className="text-lg font-medium text-[var(--cb-ink)]">
            What governance is for
          </h2>
          <p className="mt-4 text-sm leading-7 text-[var(--cb-body)]">
            Governance keeps the standard from becoming a legitimacy machine.
            It protects the system before adding more capability, visibility,
            monetization, or public authority signals.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
            What the system protects against
          </h2>

          <div className="mt-6 grid gap-4">
            {protectsAgainst.map((item) => (
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

        <section className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="border-[1.5px] border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
            <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
              Operating controls
            </h2>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-[var(--cb-body)]">
              {controls.map((item) => (
                <li key={item}>— {item}</li>
              ))}
            </ul>
          </div>

          <div className="border-[1.5px] border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
            <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
              Escalation paths
            </h2>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-[var(--cb-body)]">
              {escalation.map((item) => (
                <li key={item}>— {item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-12 border-[1.5px] border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
          <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
            What remains gated
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--cb-body)]">
            These capabilities remain gated until the system can support them
            without creating false authority, pay-to-play legitimacy, or
            marketplace drift.
          </p>
          <ul className="mt-6 space-y-4 text-sm leading-7 text-[var(--cb-body)]">
            {gated.map((item) => (
              <li key={item}>— {item}</li>
            ))}
          </ul>
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
