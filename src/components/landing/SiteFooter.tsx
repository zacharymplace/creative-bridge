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
          <nav aria-label="Documentation" className="flex flex-col gap-3">
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
        <p className="max-w-2xl text-sm leading-relaxed text-[var(--cb-muted)]">{footerCopy.colophon}</p>
      </div>
    </footer>
  );
}
