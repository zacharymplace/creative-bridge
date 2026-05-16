import Link from "next/link";

const abuseCases = [
  {
    title: "Certification laundering",
    pattern:
      "A project references The Creative Bridge as if it has been certified, approved, verified, or endorsed.",
    warning:
      "Language like “Creative Bridge approved,” “certified,” “compliant,” “verified,” or “trusted.”",
    mitigation:
      "Route to Limits. Replace authority language with safe-reference language.",
  },
  {
    title: "Disclosure theater",
    pattern:
      "AI use is technically disclosed but too vague to help collaborators, reviewers, or audiences understand material influence.",
    warning:
      "Disclosure says “AI-assisted” but does not explain where AI shaped process, output, claims, or labor.",
    mitigation:
      "Route to Standard and Whyfiles. Ask for material-use specificity.",
  },
  {
    title: "Review capture",
    pattern:
      "Review becomes praise collection, marketing validation, or public endorsement instead of criticism.",
    warning:
      "Feedback requests ask for support, approval, testimonials, or launch amplification.",
    mitigation:
      "Route to Review. Reframe around pressure, misuse, missing protections, and incentive drift.",
  },
  {
    title: "Funding capture",
    pattern:
      "Support, sponsorship, or donations are treated as influence, priority, public standing, or legitimacy.",
    warning:
      "Supporter or sponsor copy implies special access, governance influence, review priority, or trust status.",
    mitigation:
      "Route to Funding, Sponsor Terms, Recognition Boundaries, and Donation Gate.",
  },
  {
    title: "Collaborator absorption",
    pattern:
      "Collaborators, reviewers, or referenced people are folded into a project narrative without consent or clear credit.",
    warning:
      "Public pages imply association, endorsement, contribution, or approval from people who only gave casual feedback.",
    mitigation:
      "Route to consent, credit, and public-tagging rationale records.",
  },
  {
    title: "Marketplace drift",
    pattern:
      "The standard becomes a ranking, matching, discovery, verification, or marketplace layer before governance can support it.",
    warning:
      "Requests for badges, profiles, scores, leaderboards, featured creators, or verified projects.",
    mitigation:
      "Route to Governance, Platform Capability Gating, and Rejected Patterns.",
  },
];

const escalationPaths = [
  { label: "Limits", href: "/limits" },
  { label: "Governance", href: "/governance" },
  { label: "Whyfiles", href: "/whyfiles" },
  { label: "Review", href: "/review" },
  { label: "Funding", href: "/funding" },
  { label: "Rejected Patterns", href: "/rejected-patterns" },
];

export default function AbuseCasesPage() {
  return (
    <main>
      <section className="cb-container cb-section-y">
        <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-[var(--cb-muted)]">
          Failure-mode library
        </p>

        <h1 className="cb-display mt-4 max-w-4xl text-4xl tracking-tight text-[var(--cb-ink)] sm:text-5xl sm:leading-tight">
          Abuse Cases
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--cb-body)]">
          Abuse cases make misuse concrete. They show how a public standard can
          be bent into authority, approval, marketing, funding influence, or
          platform drift if boundaries are not explicit.
        </p>

        <section className="mt-10 border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
          <h2 className="text-lg font-medium text-[var(--cb-ink)]">
            What this page is for
          </h2>
          <p className="mt-4 text-sm leading-7 text-[var(--cb-body)]">
            This page turns abstract risks into recognizable patterns. Use it
            when reviewing language, funding mechanics, public claims, platform
            features, or collaboration practices.
          </p>
        </section>

        <section className="mt-12 grid gap-6">
          {abuseCases.map((item) => (
            <article
              key={item.title}
              className="border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8"
            >
              <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
                {item.title}
              </h2>

              <div className="mt-6 grid gap-5 lg:grid-cols-3">
                <div>
                  <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--cb-muted)]">
                    Pattern
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--cb-body)]">
                    {item.pattern}
                  </p>
                </div>

                <div>
                  <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--cb-muted)]">
                    Warning sign
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--cb-body)]">
                    {item.warning}
                  </p>
                </div>

                <div>
                  <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--cb-muted)]">
                    Mitigation
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--cb-body)]">
                    {item.mitigation}
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
