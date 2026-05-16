import Link from "next/link";

const listingBoundaries = [
  "Neighborhood Chorus is an example project profile, not a certified, verified, approved, or endorsed project.",
  "The page demonstrates how project context can be made reviewable.",
  "The example should not be treated as a model of compliance or preferred creative direction.",
  "The listing does not create status for creators, collaborators, reviewers, funders, or supporters.",
];

const projectContext = [
  {
    title: "Purpose",
    description:
      "A sample creative project used to show how a project can explain its purpose, audience, process, and review needs.",
  },
  {
    title: "Disclosure posture",
    description:
      "The page should make material process details visible enough for readers to understand what shaped the work.",
  },
  {
    title: "Collaboration posture",
    description:
      "Any named or implied collaborators should be represented carefully, with no implied endorsement or association beyond what is actually documented.",
  },
  {
    title: "Review posture",
    description:
      "The project should invite critique of clarity, disclosure, consent, audience risk, claims, and incentive drift.",
  },
];

const reviewQuestions = [
  "Is the project purpose understandable without overclaiming impact?",
  "Is AI use described materially rather than vaguely?",
  "Are collaborator, audience, and consent boundaries clear?",
  "Could the project be mistaken for approved, certified, verified, or endorsed?",
  "What misuse, incentive, or trust risks should be routed into review?",
];

const escalationPaths = [
  { label: "Projects", href: "/projects" },
  { label: "Standard", href: "/standard" },
  { label: "Limits", href: "/limits" },
  { label: "Review", href: "/review" },
  { label: "Submit", href: "/submit" },
  { label: "Governance", href: "/governance" },
];

export default function NeighborhoodChorusPage() {
  return (
    <main>
      <section className="cb-container cb-section-y">
        <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-[var(--cb-muted)]">
          Example project context
        </p>

        <h1 className="cb-display mt-4 max-w-4xl text-4xl tracking-tight text-[var(--cb-ink)] sm:text-5xl sm:leading-tight">
          Neighborhood Chorus
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--cb-body)]">
          Neighborhood Chorus is an example project profile. It shows how a
          project can be presented for context and critique without becoming an
          approval signal, certification claim, endorsement, ranking, or model
          project.
        </p>

        <section className="mt-10 border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
          <h2 className="text-lg font-medium text-[var(--cb-ink)]">
            What this example is for
          </h2>
          <p className="mt-4 text-sm leading-7 text-[var(--cb-body)]">
            Use this page to inspect what a reviewable project profile can
            include: purpose, process context, disclosure posture, collaboration
            boundaries, review questions, and escalation routes.
          </p>
        </section>

        <section className="mt-12 grid gap-8 lg:grid-cols-2">
          <article className="border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
            <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
              Listing does not mean
            </h2>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-[var(--cb-body)]">
              {listingBoundaries.map((item) => (
                <li key={item}>— {item}</li>
              ))}
            </ul>
          </article>

          <article className="border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
            <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
              Review questions
            </h2>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-[var(--cb-body)]">
              {reviewQuestions.map((item) => (
                <li key={item}>— {item}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="mt-12 grid gap-6">
          {projectContext.map((item) => (
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
