import Link from "next/link";
import { siteNav } from "@/content/site-copy";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/docs", label: "Docs" },
  { href: "/projects", label: "Projects" },
  { href: "/standard", label: "Standard" },
  { href: "/manifesto", label: "Manifesto" },
] as const;

export function PublicNav() {
  return (
    <header className="border-b border-[var(--cb-border)] bg-[var(--cb-surface)]">
      <div className="cb-container flex flex-wrap items-center justify-between gap-4 py-5">
        <Link
          href="/"
          className="font-mono text-[12px] uppercase tracking-[0.2em] text-[var(--cb-muted)] transition-colors hover:text-[var(--cb-ink)]"
        >
          {siteNav.brand}
        </Link>
        <nav aria-label="Site" className="flex flex-wrap gap-x-6 gap-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-mono text-[12px] uppercase tracking-[0.16em] text-[var(--cb-muted)] transition-colors hover:text-[var(--cb-ink)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
