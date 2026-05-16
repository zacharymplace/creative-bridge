import Link from "next/link";

import { donationLinkStagingCopy } from "@/content/donation-staging/donation-staging";

export default function DonationStagingPage() {
  return (
    <main>
      <section className="cb-container cb-section-y">
        <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-[var(--cb-muted)]">
          Version {donationLinkStagingCopy.version}
        </p>

        <h1 className="cb-display mt-4 max-w-4xl text-4xl tracking-tight text-[var(--cb-ink)] sm:text-5xl sm:leading-tight">
          {donationLinkStagingCopy.title}
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--cb-body)]">
          {donationLinkStagingCopy.summary}
        </p>

        <div className="mt-10 border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
          <h2 className="text-base font-medium text-[var(--cb-ink)]">
            Position
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--cb-body)]">
            {donationLinkStagingCopy.position}
          </p>
        </div>

        <section className="mt-12">
          <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
            Staged copy
          </h2>

          <div className="mt-6 grid gap-5">
            {donationLinkStagingCopy.stagedCopy.map((copy) => (
              <article
                key={copy.label}
                className="border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8"
              >
                <h3 className="text-lg font-medium text-[var(--cb-ink)]">
                  {copy.label}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[var(--cb-body)]">
                  {copy.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
            <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
              Allowed placements
            </h2>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-[var(--cb-body)]">
              {donationLinkStagingCopy.allowedPlacements.map((item) => (
                <li key={item}>— {item}</li>
              ))}
            </ul>
          </div>

          <div className="border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
            <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
              Disallowed placements
            </h2>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-[var(--cb-body)]">
              {donationLinkStagingCopy.disallowedPlacements.map((item) => (
                <li key={item}>— {item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-12 border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
          <h2 className="cb-display text-3xl text-[var(--cb-ink)]">
            Required nearby links
          </h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {donationLinkStagingCopy.requiredNearbyLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border border-[var(--cb-border)] bg-white px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--cb-muted)] underline-offset-4 hover:underline"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-12 border-t border-[var(--cb-border)] pt-8">
          <h2 className="font-mono text-[12px] uppercase tracking-[0.2em] text-[var(--cb-muted)]">
            Status
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--cb-body)]">
            {donationLinkStagingCopy.status}
          </p>
        </section>
      </section>
    </main>
  );
}
