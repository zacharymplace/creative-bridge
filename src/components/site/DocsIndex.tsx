import Link from "next/link";
import { canonicalDocuments, docsIndexMeta } from "@/content/docs-index";

const extraLinks = [
  { label: "Standard (readable on site)", href: "/standard" },
  { label: "Manifesto", href: "/manifesto" },
  { label: "Example project payload", href: "/docs/examples/project.example.json" },
  { label: "Example collaborator payload", href: "/docs/examples/collaborator.example.json" },
] as const;

export function DocsIndex() {
  return (
    <main className="border-b border-[var(--cb-border)] bg-[var(--cb-canvas)]">
      <div className="cb-container cb-section-y">
        <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-[var(--cb-muted)]">Canonical</p>
        <h1 className="cb-display mt-4 max-w-2xl text-3xl tracking-tight text-[var(--cb-ink)] sm:text-4xl">
          {docsIndexMeta.title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--cb-body)]">{docsIndexMeta.description}</p>

        <ul className="mt-14 space-y-10">
          {canonicalDocuments.map((doc) => (
            <li key={doc.id} className="border-b border-[var(--cb-border)] pb-10 last:border-b-0 last:pb-0">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-2xl">
                  <h2 className="cb-display text-2xl text-[var(--cb-ink)]">{doc.title}</h2>
                  <p className="mt-3 text-base leading-relaxed text-[var(--cb-body)]">{doc.summary}</p>
                </div>
                <div className="flex shrink-0 flex-col gap-3 lg:items-end lg:text-right">
                  <Link
                    href={doc.markdownHref}
                    className="inline-flex w-fit border-b border-[var(--cb-ink)] pb-0.5 text-sm font-medium text-[var(--cb-ink)]"
                  >
                    {doc.markdownHref.replace(/^\//, "")}
                  </Link>
                  {doc.siteHref ? (
                    <Link
                      href={doc.siteHref}
                      className="text-sm text-[var(--cb-body)] underline-offset-4 hover:underline"
                    >
                      {doc.siteHref === "/standard" ? "Readable Standard page" : "Open on site"}
                    </Link>
                  ) : null}
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-16 border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
          <h2 className="text-base font-medium text-[var(--cb-ink)]">Also useful</h2>
          <ul className="mt-6 space-y-3">
            {extraLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-[var(--cb-body)] underline-offset-4 hover:underline"
                >
                  {item.label} — <span className="font-mono text-[12px] text-[var(--cb-muted)]">{item.href}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
