import Link from "next/link";
import { ethicsCommitments } from "@/content/ethics-standard";
import { standardTeaserCopy } from "@/content/site-copy";
import { Section } from "./Section";

export function StandardSection() {
  return (
    <Section
      id={standardTeaserCopy.id}
      eyebrow={standardTeaserCopy.eyebrow}
      title={standardTeaserCopy.title}
    >
      <p>{standardTeaserCopy.intro}</p>
      <div className="mt-10 space-y-8">
        {ethicsCommitments.map((c) => (
          <div
            key={c.id}
            className="border border-[var(--cb-border)] bg-[var(--cb-canvas)] p-6 sm:p-7"
          >
            <h3 className="text-base font-medium text-[var(--cb-ink)]">{c.title}</h3>
            <p className="mt-3 text-base leading-relaxed text-[var(--cb-body)]">{c.requirement}</p>
            <p className="mt-4 text-sm leading-relaxed text-[var(--cb-muted)]">{c.rationale}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 flex flex-col gap-4 border-t border-[var(--cb-border)] pt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-8 sm:gap-y-3">
        <Link
          href={standardTeaserCopy.siteLink.href}
          className="inline-flex w-fit items-center border-b border-[var(--cb-ink)] pb-0.5 text-sm font-medium text-[var(--cb-ink)]"
        >
          {standardTeaserCopy.siteLink.label}
        </Link>
        <Link
          href={standardTeaserCopy.markdownLink.href}
          className="inline-flex w-fit text-sm text-[var(--cb-body)] underline-offset-4 hover:underline"
        >
          {standardTeaserCopy.markdownLink.label}
        </Link>
        <p className="max-w-md text-sm text-[var(--cb-muted)] sm:ml-auto sm:text-right">{standardTeaserCopy.note}</p>
      </div>
    </Section>
  );
}
