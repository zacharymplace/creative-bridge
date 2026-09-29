import Link from "next/link";

const safeLanguage = [
  "The Creative Bridge is open for public review.",
  "This is a developing public standard for AI-assisted creative work, disclosure, collaboration, and review.",
  "The current release focuses on boundaries, rationale, critique handling, and misuse resistance.",
  "Review is invited, especially around overclaims, incentive drift, unclear authority boundaries, and unsafe implementation pressure.",
  "The project does not certify, verify, approve, or endorse creative work.",
];

const unsafeLanguage = [
  "Do not say The Creative Bridge has launched as a certification body.",
  "Do not imply reviewed projects are approved, verified, endorsed, or trusted.",
  "Do not frame public review as praise collection, testimonials, or launch support.",
  "Do not describe the system as a marketplace, ranking layer, badge, or trust score.",
  "Do not attach funding, sponsorship, or recognition language to approval or influence.",
];

const suggestedUses = [
  {
    title: "Public announcement",
    copy:
      "Use launch copy to explain that the project is ready for scrutiny, not that it is complete or authoritative.",
  },
  {
    title: "Reviewer invitation",
    copy:
      "Use launch copy to route reviewers toward concrete pressure points: misuse, boundaries, incentives, disclosure, and governance.",
  },
  {
    title: "Project explanation",
    copy:
      "Use launch copy to summarize the system without compressing away its non-authority limits.",
  },
  {
    title: "Funding restraint",
    copy:
      "Use launch copy to keep donation, supporter, and sponsor language separate from approval or review influence.",
  },
];

const escalationPaths = [
  { label: "Outreach Kit", href: "/outreach-kit" },
  { label: "Review", href: "/review" },
  { label: "Limits", href: "/limits" },
  { label: "Funding", href: "/funding" },
  { label: "Sponsor Terms", href: "/sponsor-terms" },
  { label: "Docs", href: "/docs" },
];

export default function LaunchCopyPage() {
  return (
    <main>
      <section className="cb-container cb-section-y">
        <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-[var(--cb-muted)]">
          Safe launch language
        </p>

        <h1 className="cb-display mt-4 max-w-4xl text-4xl tracking-tight text-[var(--cb-ink)] sm:text-5xl sm:leading-tight">
          Launch Copy
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--cb-body)]">
          Launch copy should help people understand and review The Creative
          Bridge without turning public attention into endorsement, approval,
          certification, or hype.
        </p>

        <section className="mt-10 border-[1.5px] border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
          <h2 className="text-lg font-medium text-[var(--cb-ink)]">
            What this page is for
          </h2>
          <p className="mt-4 text-sm leading-7 text-[var(--cb-body)]">
            Use this page when announcing, sharing, or describing the project.
            The safest launch language invites scrutiny and routes readers into
            the standard, limits, review, and documentation paths.
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
          {suggestedUses.map((item) => (
            <article
              key={item.title}
              className="border-[1.5px] border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8"
            >
              <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
                {item.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-[var(--cb-body)]">
                {item.copy}
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
