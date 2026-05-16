import Link from "next/link";

const listingBoundaries = [
  "A listed project is not certified, verified, approved, endorsed, ranked, or trusted by The Creative Bridge.",
  "A listing does not mean the project is complete, safe, compliant, or exemplary.",
  "A listing does not create public status for the creator, collaborators, reviewers, funders, or supporters.",
  "A listing does not imply review has produced approval.",
  "A listing exists to provide reviewable context and traceable boundaries.",
];

const projectContextFields = [
  {
    title: "Project purpose",
    description:
      "What the project is trying to do, who it serves, and what kind of creative or operational work it represents.",
  },
  {
    title: "AI-use disclosure",
    description:
      "Where AI materially shaped process, output, claims, structure, labor, or decision-making.",
  },
  {
    title: "Collaboration boundaries",
    description:
      "Who is involved, what role they played, what consent exists, and what association should not be implied.",
  },
  {
    title: "Review needs",
    description:
      "What kind of critique would be useful: misuse risk, audience clarity, claims, incentives, governance, or disclosure.",
  },
];

const reviewPosture = [
  "Use project pages to ask better questions, not to assign legitimacy.",
  "Look for unclear claims, hidden labor, consent gaps, incentive drift, and overreach.",
  "Treat praise as less useful than specific critique.",
  "Route concerns into review, abuse cases, stress tests, or governance when needed.",
];

const sampleProjects = [
  {
    title: "Neighborhood Chorus",
    href: "/projects/neighborhood-chorus",
    description:
      "A sample project profile used to show how context, disclosure, and review boundaries can be presented.",
  },
];

const escalationPaths = [
  { label: "Submit", href: "/submit" },
  { label: "Review", href: "/review" },
  { label: "Standard", href: "/standard" },
  { label: "Limits", href: "/limits" },
  { label: "Collaborate", href: "/collaborate" },
  { label: "Docs", href: "/docs" },
];

export default function ProjectsPage() {
  return (
    <main>
      <section className="cb-container cb-section-y">
        <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-[var(--cb-muted)]">
          Project context
        </p>

        <h1 className="cb-display mt-4 max-w-4xl text-4xl tracking-tight text-[var(--cb-ink)] sm:text-5xl sm:leading-tight">
          Projects
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--cb-body)]">
          Project pages provide context for review. They do not create approval,
          endorsement, certification, ranking, marketplace status, or public
          legitimacy.
        </p>

        <section className="mt-10 border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
          <h2 className="text-lg font-medium text-[var(--cb-ink)]">
            What this page is for
          </h2>
          <p className="mt-4 text-sm leading-7 text-[var(--cb-body)]">
            Use this page to understand how projects should be presented for
            context, critique, disclosure, and boundary review without turning
            listing into status.
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
              Review posture
            </h2>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-[var(--cb-body)]">
              {reviewPosture.map((item) => (
                <li key={item}>— {item}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="mt-12 grid gap-6">
          {projectContextFields.map((item) => (
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

        <section className="mt-12 border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
          <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
            Current project examples
          </h2>

          <div className="mt-6 grid gap-4">
            {sampleProjects.map((project) => (
              <Link
                key={project.href}
                href={project.href}
                className="block border border-[var(--cb-border)] bg-white p-5 underline-offset-4 hover:underline"
              >
                <span className="cb-display block text-2xl text-[var(--cb-ink)]">
                  {project.title}
                </span>
                <span className="mt-3 block text-sm leading-7 text-[var(--cb-body)]">
                  {project.description}
                </span>
              </Link>
            ))}
          </div>
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
