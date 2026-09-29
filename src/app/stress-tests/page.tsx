import Link from "next/link";

const stressTests = [
  {
    title: "Certification pressure",
    scenario:
      "A creator wants to cite the standard as proof that their project is approved, ethical, safe, or verified.",
    failure:
      "The system offers a badge, endorsement phrase, approval language, or trust signal.",
    pass:
      "The system routes to Limits and safe-reference language without granting status.",
  },
  {
    title: "Sponsor pressure",
    scenario:
      "A sponsor offers funding in exchange for visibility, influence, priority, wording, or public standing.",
    failure:
      "The system changes recognition, review handling, governance language, or page placement because of funding.",
    pass:
      "The system routes to Sponsor Terms, Recognition Boundaries, Funding, and Donation Gate.",
  },
  {
    title: "Review praise pressure",
    scenario:
      "External review turns into a request for approval, launch support, testimonials, or positive pull quotes.",
    failure:
      "The review layer starts collecting validation instead of criticism.",
    pass:
      "The system asks for misuse cases, unclear boundaries, incentive drift, and missing protections.",
  },
  {
    title: "Marketplace pressure",
    scenario:
      "Users ask for creator profiles, project rankings, featured submissions, matching, verification, or discovery.",
    failure:
      "The system adds marketplace behavior before governance can constrain false authority.",
    pass:
      "The system keeps marketplace mechanics gated and routes to Governance and Rejected Patterns.",
  },
  {
    title: "Disclosure minimalism pressure",
    scenario:
      "A project wants to disclose AI use with the least possible specificity.",
    failure:
      "The standard accepts vague disclosure that does not explain material influence.",
    pass:
      "The system requires material-use clarity: where AI shaped process, claims, labor, or output.",
  },
  {
    title: "Scale pressure",
    scenario:
      "The project gets attention and there is pressure to add payments, badges, rankings, or public recognition quickly.",
    failure:
      "Growth pressure outruns limits, rationale, review traceability, and implementation gates.",
    pass:
      "The system slows down, documents the gate, and refuses capability until misuse resistance is stronger.",
  },
];

const escalationPaths = [
  { label: "Governance", href: "/governance" },
  { label: "Abuse Cases", href: "/abuse-cases" },
  { label: "Incentive Drift", href: "/incentive-drift" },
  { label: "Rejected Patterns", href: "/rejected-patterns" },
  { label: "Review", href: "/review" },
  { label: "Funding", href: "/funding" },
];

export default function StressTestsPage() {
  return (
    <main>
      <section className="cb-container cb-section-y">
        <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-[var(--cb-muted)]">
          Pressure-test library
        </p>

        <h1 className="cb-display mt-4 max-w-4xl text-4xl tracking-tight text-[var(--cb-ink)] sm:text-5xl sm:leading-tight">
          Stress Tests
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--cb-body)]">
          Stress tests expose where the system might fail under approval
          pressure, funding pressure, platform pressure, growth pressure, or
          unclear disclosure incentives.
        </p>

        <section className="mt-10 border-[1.5px] border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
          <h2 className="text-lg font-medium text-[var(--cb-ink)]">
            What this page is for
          </h2>
          <p className="mt-4 text-sm leading-7 text-[var(--cb-body)]">
            A stress test is not a guarantee. It is a deliberate pressure
            scenario that helps reveal whether the system protects its limits
            before adding more capability, visibility, or monetization.
          </p>
        </section>

        <section className="mt-12 grid gap-6">
          {stressTests.map((item) => (
            <article
              key={item.title}
              className="border-[1.5px] border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8"
            >
              <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
                {item.title}
              </h2>

              <div className="mt-6 grid gap-5 lg:grid-cols-3">
                <div>
                  <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--cb-muted)]">
                    Scenario
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--cb-body)]">
                    {item.scenario}
                  </p>
                </div>

                <div>
                  <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--cb-muted)]">
                    Failure signal
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--cb-body)]">
                    {item.failure}
                  </p>
                </div>

                <div>
                  <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--cb-muted)]">
                    Passing behavior
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--cb-body)]">
                    {item.pass}
                  </p>
                </div>
              </div>
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
