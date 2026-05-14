import Link from "next/link";
import { manifestoClosing, manifestoPreamble, manifestoSections } from "@/content/manifesto";
import { manifestoCtaCopy } from "@/content/site-copy";

export function ManifestoSection() {
  return (
    <section
      id={manifestoCtaCopy.id}
      className="border-t border-[var(--cb-border)] bg-[var(--cb-ink)] text-[var(--cb-canvas)]"
    >
      <div className="cb-container cb-section-y">
        <p className="cb-eyebrow font-mono text-[13px] uppercase tracking-[0.18em] text-[var(--cb-canvas-muted)]">
          {manifestoCtaCopy.eyebrow}
        </p>
        <h2 className="cb-display mt-4 max-w-2xl text-3xl tracking-tight sm:text-4xl">
          {manifestoCtaCopy.title}
        </h2>
        <blockquote className="cb-display mt-12 max-w-3xl text-2xl leading-snug sm:text-3xl sm:leading-snug">
          {manifestoCtaCopy.pullQuote}
        </blockquote>
        <p className="mt-6">
          <Link
            href={manifestoCtaCopy.fullPageLink.href}
            className="inline-flex border-b border-white/40 pb-0.5 text-sm font-medium text-[var(--cb-canvas)] transition-colors hover:border-white/70"
          >
            {manifestoCtaCopy.fullPageLink.label}
          </Link>
        </p>
        <p className="mt-12 max-w-2xl text-lg leading-relaxed text-[var(--cb-canvas-muted)]">
          {manifestoPreamble}
        </p>
        <div className="mt-16 grid gap-12 border-t border-white/15 pt-16 lg:grid-cols-2">
          {manifestoSections.map((s) => (
            <div key={s.id}>
              <h3 className="text-base font-medium text-[var(--cb-canvas)]">{s.title}</h3>
              <ul className="mt-4 space-y-4 text-base leading-relaxed text-[var(--cb-canvas-muted)]">
                {s.statements.map((line) => (
                  <li key={line} className="pl-1">
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 border-t border-white/15 pt-12">
          <h3 className="text-base font-medium">{manifestoClosing.title}</h3>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--cb-canvas-muted)]">
            {manifestoClosing.body}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
            <Link
              href={manifestoCtaCopy.cta.href}
              className="inline-flex h-12 items-center justify-center border border-white/40 bg-[var(--cb-canvas)] px-8 text-sm font-medium tracking-wide text-[var(--cb-ink)] transition-opacity hover:opacity-90"
            >
              {manifestoCtaCopy.cta.label}
            </Link>
            <p className="max-w-md text-sm text-[var(--cb-canvas-muted)]">
              {manifestoCtaCopy.cta.supporting}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
