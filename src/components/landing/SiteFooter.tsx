import Link from "next/link";
import { footerCopy, siteNav } from "@/content/site-copy";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--cb-border)] bg-[var(--cb-surface)]">
      <div className="cb-container flex flex-col gap-12 py-16 sm:py-20">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-md">
            <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-[var(--cb-muted)]">
              {siteNav.brand}
            </p>
            <p className="cb-display mt-4 text-xl text-[var(--cb-ink)]">{footerCopy.tagline}</p>
          </div>
          <div className="flex flex-col gap-8 lg:items-end">
            <nav aria-label="Site" className="flex flex-wrap gap-x-5 gap-y-2">
              {footerCopy.navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="font-mono text-[12px] uppercase tracking-[0.14em] text-[var(--cb-muted)] underline-offset-4 hover:text-[var(--cb-ink)] hover:underline"
                >
                  {l.label}
                </Link>
              ))}
              <span
                className="font-mono text-[12px] uppercase tracking-[0.14em] text-[var(--cb-muted)] opacity-50 cursor-not-allowed"
                title={footerCopy.githubPlaceholder.title}
                aria-disabled
              >
                {footerCopy.githubPlaceholder.label}
              </span>
            </nav>
            <nav aria-label="Canonical Markdown" className="flex flex-col gap-3 lg:items-end">
              {footerCopy.links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-sm text-[var(--cb-body)] underline-offset-4 hover:underline"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
        <p className="max-w-2xl text-sm leading-relaxed text-[var(--cb-muted)]">{footerCopy.colophon}</p>
      </div>
    </footer>
  );
}
