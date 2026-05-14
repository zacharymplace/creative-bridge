import Link from "next/link";

import { submissionPacket } from "@/content/submission/submission-packet";

export default function SubmitPage() {
  return (
    <main>
      <section className="cb-container cb-section-y">
        <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-[var(--cb-muted)]">
          Preparation packet
        </p>

        <h1 className="cb-display mt-4 max-w-3xl text-4xl tracking-tight text-[var(--cb-ink)] sm:text-5xl sm:leading-tight">
          {submissionPacket.title}
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--cb-body)]">
          {submissionPacket.summary}
        </p>

        <div className="mt-10 border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
          <h2 className="text-base font-medium text-[var(--cb-ink)]">
            What this is
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--cb-body)]">
            {submissionPacket.position}
          </p>
        </div>

        <section className="mt-12">
          <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
            Preparation steps
          </h2>

          <div className="mt-6 grid gap-5">
            {submissionPacket.steps.map((step, index) => (
              <article
                key={step.title}
                className="border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--cb-muted)]">
                  Step {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-lg font-medium text-[var(--cb-ink)]">
                  {step.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-[var(--cb-body)]">
                  {step.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
            <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
              Templates
            </h2>
            <div className="mt-6 grid gap-3">
              {submissionPacket.templateLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="border border-[var(--cb-border)] bg-white p-4 text-sm text-[var(--cb-body)] underline-offset-4 hover:underline"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
            <h2 className="text-base font-medium text-[var(--cb-ink)]">
              Still not a platform
            </h2>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-[var(--cb-body)]">
              {submissionPacket.nonGoals.map((item) => (
                <li key={item}>— {item}</li>
              ))}
            </ul>
          </div>
        </section>

        <p className="mt-10 text-sm text-[var(--cb-muted)]">
          Start with the example project:{" "}
          <Link
            href="/projects/neighborhood-chorus"
            className="text-[var(--cb-ink)] underline-offset-4 hover:underline"
          >
            Neighborhood Chorus
          </Link>
          .
        </p>
      </section>
    </main>
  );
}
