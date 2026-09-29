import Link from "next/link";

const submissionTypes = [
  {
    title: "Critique",
    description:
      "A concrete pressure point about misuse, unclear boundaries, weak disclosure, incentive drift, or unsafe implementation pressure.",
    route:
      "Review Intake, Review Rubric, Feedback Seeds, or Review Response Log.",
  },
  {
    title: "Project profile",
    description:
      "A structured project description that can be inspected for disclosure, collaboration boundaries, rationale, and review readiness.",
    route:
      "Project Profile Model, Project Profile Checklist, or Submission Packet.",
  },
  {
    title: "Rationale question",
    description:
      "A why-question about a refusal, boundary, gated capability, public claim, or governance decision.",
    route:
      "Whyfiles, Governance, Rejected Patterns, or Stress Tests.",
  },
  {
    title: "Abuse case",
    description:
      "A concrete way the system could be misread, cited as authority, gamed, laundered, or used to create false legitimacy.",
    route:
      "Abuse Cases, Limits, Incentive Drift, or Rejected Patterns.",
  },
];

const doNotSubmit = [
  "Requests for certification, verification, approval, badges, rankings, or endorsement.",
  "Praise, testimonials, launch support, or public approval framed as review.",
  "Funding, sponsorship, or recognition requests tied to influence, access, status, or priority.",
  "Private, sensitive, or identifying information that does not need to be public.",
  "Open-ended collaboration requests without a concrete pressure point, role, or reviewable material.",
];

const handlingRules = [
  "A submission does not guarantee acceptance, publication, response, or implementation.",
  "Useful submissions may become feedback seeds, response-log items, page edits, rationale updates, or governance questions.",
  "Unsafe submissions should be rejected, redirected, or converted into an abuse-case pattern when useful.",
  "Submissions should be traceable enough to evaluate without creating false authority or implied endorsement.",
];

const escalationPaths = [
  { label: "Review Intake", href: "/review-intake" },
  { label: "Collaborate", href: "/collaborate" },
  { label: "Review Rubric", href: "/review-rubric" },
  { label: "Abuse Cases", href: "/abuse-cases" },
  { label: "Limits", href: "/limits" },
  { label: "Docs", href: "/docs" },
];

export default function SubmitPage() {
  return (
    <main>
      <section className="cb-container cb-section-y">
        <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-[var(--cb-muted)]">
          Submission boundaries
        </p>

        <h1 className="cb-display mt-4 max-w-4xl text-4xl tracking-tight text-[var(--cb-ink)] sm:text-5xl sm:leading-tight">
          Submit
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--cb-body)]">
          Submitting material to The Creative Bridge creates something that can
          be reviewed, routed, accepted, rejected, or deferred. Submission does
          not imply approval, endorsement, certification, or participation.
        </p>

        <section className="mt-10 border-[1.5px] border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
          <h2 className="text-lg font-medium text-[var(--cb-ink)]">
            What this page is for
          </h2>
          <p className="mt-4 text-sm leading-7 text-[var(--cb-body)]">
            Use this page to understand what kinds of material are useful to
            submit and how those submissions should move through review,
            governance, rationale, or refusal paths.
          </p>
        </section>

        <section className="mt-12 grid gap-6">
          {submissionTypes.map((item) => (
            <article
              key={item.title}
              className="border-[1.5px] border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8"
            >
              <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
                {item.title}
              </h2>

              <div className="mt-6 grid gap-5 lg:grid-cols-2">
                <div>
                  <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--cb-muted)]">
                    Useful when it
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--cb-body)]">
                    {item.description}
                  </p>
                </div>

                <div>
                  <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--cb-muted)]">
                    Route through
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--cb-body)]">
                    {item.route}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="mt-12 grid gap-8 lg:grid-cols-2">
          <article className="border-[1.5px] border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
            <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
              Do not submit
            </h2>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-[var(--cb-body)]">
              {doNotSubmit.map((item) => (
                <li key={item}>— {item}</li>
              ))}
            </ul>
          </article>

          <article className="border-[1.5px] border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
            <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
              Handling rules
            </h2>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-[var(--cb-body)]">
              {handlingRules.map((item) => (
                <li key={item}>— {item}</li>
              ))}
            </ul>
          </article>
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
