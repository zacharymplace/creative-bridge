import Link from "next/link";
import { notFound } from "next/navigation";

import { getWhyfile, whyfiles } from "@/content/whyfiles/whyfiles";

export function generateStaticParams() {
  return whyfiles.map((whyfile) => ({ slug: whyfile.slug }));
}

export default async function WhyfilePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const whyfile = getWhyfile(slug);

  if (!whyfile) notFound();

  return (
    <main>
      <section className="cb-container cb-section-y">
        <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-[var(--cb-muted)]">
          Whyfile
        </p>

        <h1 className="cb-display mt-4 max-w-4xl text-4xl tracking-tight text-[var(--cb-ink)] sm:text-5xl sm:leading-tight">
          {whyfile.title}
        </h1>

        {[
          ["Claim", whyfile.claim],
          ["Why this matters", whyfile.whyItMatters],
          ["What could go wrong without it", whyfile.whatCouldGoWrong],
          ["Boundary created", whyfile.boundaryCreated],
        ].map(([label, body]) => (
          <section key={label} className="mt-8 border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
            <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--cb-muted)]">
              {label}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--cb-body)]">
              {body}
            </p>
          </section>
        ))}

        <section className="mt-8 border border-[var(--cb-border)] bg-[var(--cb-surface)] p-6 sm:p-8">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--cb-muted)]">
            Related layers
          </h2>
          <ul className="mt-4 space-y-2 text-sm leading-7 text-[var(--cb-body)]">
            {whyfile.related.map((item) => (
              <li key={item}>— {item}</li>
            ))}
          </ul>
        </section>

        <p className="mt-10">
          <Link href="/whyfiles" className="text-sm text-[var(--cb-body)] underline-offset-4 hover:underline">
            Back to Whyfiles
          </Link>
        </p>
      </section>
    </main>
  );
}
