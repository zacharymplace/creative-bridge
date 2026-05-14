import Link from "next/link";
import { siteMeta, siteNav, heroCopy } from "@/content/site-copy";

export function HeroSection() {
  return (
    <header className="border-b border-[var(--cb-border)] bg-[var(--cb-canvas)]">
      <div className="cb-container flex flex-col gap-16 pb-20 pt-16 sm:pb-28 sm:pt-20">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-[var(--cb-muted)]">
            {siteMeta.versionLabel}
          </p>
          <nav aria-label="On this page" className="hidden gap-6 lg:flex">
            {siteNav.sections.map((item) => (
              <Link
                key={item.id}
                href={`#${item.id}`}
                className="font-mono text-[12px] uppercase tracking-[0.16em] text-[var(--cb-muted)] transition-colors hover:text-[var(--cb-ink)]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="max-w-3xl">
          <p className="cb-eyebrow font-mono text-[13px] uppercase tracking-[0.18em] text-[var(--cb-muted)]">
            {heroCopy.kicker}
          </p>
          <h1 className="cb-display mt-6 text-4xl leading-[1.05] tracking-tight text-[var(--cb-ink)] sm:text-5xl sm:leading-[1.02]">
            {heroCopy.title}
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[var(--cb-body)] sm:text-xl">
            {heroCopy.lede}
          </p>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href={heroCopy.primaryCta.href}
              className="inline-flex h-12 items-center justify-center border border-[var(--cb-ink)] bg-[var(--cb-ink)] px-8 text-sm font-medium tracking-wide text-[var(--cb-canvas)] transition-opacity hover:opacity-90"
            >
              {heroCopy.primaryCta.label}
            </Link>
            <Link
              href={heroCopy.secondaryCta.href}
              className="inline-flex h-12 items-center justify-center border border-[var(--cb-border-strong)] px-8 text-sm font-medium tracking-wide text-[var(--cb-ink)] transition-colors hover:border-[var(--cb-ink)]"
            >
              {heroCopy.secondaryCta.label}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
