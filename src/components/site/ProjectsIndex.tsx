import Link from "next/link";
import { projectsCatalog } from "@/content/projects";

export function ProjectsIndex() {
  return (
    <main className="border-b border-[var(--cb-border)] bg-[var(--cb-canvas)]">
      <div className="cb-container cb-section-y">
        <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-[var(--cb-muted)]">Examples</p>
        <h1 className="cb-display mt-4 max-w-2xl text-3xl tracking-tight text-[var(--cb-ink)] sm:text-4xl">Projects</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--cb-body)]">
          Static profiles only—no accounts, no forms, no messaging. Each entry is typed content you can read, diff, and
          challenge in the open.
        </p>
        <ul className="mt-14 space-y-10">
          {projectsCatalog.map((p) => (
            <li key={p.slug} className="border-b border-[var(--cb-border)] pb-10 last:border-b-0 last:pb-0">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-2xl">
                  <h2 className="cb-display text-2xl text-[var(--cb-ink)]">{p.title}</h2>
                  <p className="mt-3 text-base leading-relaxed text-[var(--cb-body)]">{p.summary}</p>
                </div>
                <Link
                  href={`/projects/${p.slug}`}
                  className="inline-flex h-11 shrink-0 items-center justify-center border border-[var(--cb-ink)] px-6 text-sm font-medium text-[var(--cb-ink)] transition-colors hover:bg-[var(--cb-ink)] hover:text-[var(--cb-canvas)]"
                >
                  Open profile
                </Link>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-12 max-w-2xl text-sm leading-relaxed text-[var(--cb-muted)]">
          Model reference:{" "}
          <Link href="/docs/project-profile-model.md" className="underline-offset-4 hover:underline">
            /docs/project-profile-model.md
          </Link>
        </p>
      </div>
    </main>
  );
}
