import Link from "next/link";
import { siteNav } from "@/content/site-copy";

export function MobileNav() {
  return (
    <nav
      aria-label="Section shortcuts"
      className="border-b border-[var(--cb-border)] bg-[var(--cb-surface)] lg:hidden"
    >
      <div className="cb-container flex gap-3 overflow-x-auto py-4">
        {siteNav.sections.map((item) => (
          <Link
            key={item.id}
            href={`#${item.id}`}
            className="shrink-0 border-[1.5px] border-[var(--cb-border)] px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--cb-muted)]"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
