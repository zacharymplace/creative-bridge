import type { Metadata } from "next";
import { DocsIndex } from "@/components/site/DocsIndex";
import { PublicPageShell } from "@/components/site/PublicPageShell";
import { docsIndexMeta } from "@/content/docs-index";
import { siteMeta } from "@/content/site-copy";

export const metadata: Metadata = {
  title: docsIndexMeta.title,
  description: docsIndexMeta.description,
  openGraph: {
    title: `${docsIndexMeta.title} · ${siteMeta.title}`,
    description: docsIndexMeta.description,
    type: "website",
    siteName: siteMeta.title,
  },
  twitter: {
    card: "summary_large_image",
    title: `${docsIndexMeta.title} · ${siteMeta.title}`,
    description: docsIndexMeta.description,
  },
};

export default function DocsPage() {
  return (
    <PublicPageShell>
      <DocsIndex />
    </PublicPageShell>
  );
}
