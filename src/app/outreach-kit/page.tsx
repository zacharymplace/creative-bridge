import Link from "next/link";

const safeDescriptions = [
  "A public standard for AI-assisted creative work, collaboration, disclosure, and review.",
  "A system for making boundaries, rationale, and critique handling easier to inspect.",
  "A reference project focused on misuse resistance, non-authority, and public review.",
  "A developing governance layer for creative work that uses AI without hiding material influence.",
];

const unsafeClaims = [
  "Do not say The Creative Bridge certifies, verifies, approves, or endorses projects.",
  "Do not imply review equals approval.",
  "Do not imply funding, sponsorship, or recognition buys influence.",
  "Do not describe the project as a marketplace, ranking system, trust badge, or creator validation layer.",
  "Do not frame outreach as a request for praise, launch support, or public endorsement.",
];

const suggestedUses = [
  {
    title: "Invite critique",
    copy:
      "Share the standard with people who can identify misuse, unclear boundaries, weak disclosure, or incentive drift.",
  },
  {
    title: "Explain the system",
    copy:
      "Use the Start, Standard, Limits, Review, and Docs pages as the primary reader path.",
  },
  {
    title: "Reference safely",
    copy:
      "Link to the relevant page without claiming approval, compliance, certification, or endorsement.",
  },
  {
    title: "Route funding questions",
    copy:
      "Send payment, donation, sponsorship, or supporter questions to Funding and Donation Gate before adding mechanics.",
  },
];

const escalationPaths = [
  { label: "Start", href: "/start" },
  { label: "Standard", href: "/standard" },
  { label: "Limits", href: "/limits" },
  { label: "Review", href: "/review" },
  { label: "Funding", href: "/funding" },
  { label: "Docs", href: "/docs" },
];

export default function OutreachKitPage() {
  return (
    <main>
      <section className="cb-container cb-section-y">
        <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-[var(--cb-muted)]">
          Safe sharing guide
        </p>

        <h1 className="cb-display mt-4 max-w-4xl text-4xl tracking-tight text-[var(--cb-ink)] sm:text-5xl sm:leading-tight">
          Outreach Kit
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--cb-body)]">
          The outreach kit helps people share The Creative Bridge without
          turning the project into approval theater, certification language, or
          authority claims.
        </p>

        <section className="mt-10 border-[1.5px] border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
          <h2 className="text-lg font-medium text-[var(--cb-ink)]">
            What this page is for
          </h2>
          <p className="mt-4 text-sm leading-7 text-[var(--cb-body)]">
            Use this page when describing the project publicly, inviting review,
            sending links, or explaining why the system exists. Outreach should
            increase reader understanding and critique quality.
          </p>
        </section>

        <section className="mt-12 grid gap-8 lg:grid-cols-2">
          <article className="border-[1.5px] border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
            <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
              Safe descriptions
            </h2>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-[var(--cb-body)]">
              {safeDescriptions.map((item) => (
                <li key={item}>— {item}</li>
              ))}
            </ul>
          </article>

          <article className="border-[1.5px] border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
            <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
              Unsafe claims to avoid
            </h2>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-[var(--cb-body)]">
              {unsafeClaims.map((item) => (
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
