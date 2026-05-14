import type { Metadata } from "next";
import { PublicPageShell } from "@/components/site/PublicPageShell";
import { StandardDocument } from "@/components/site/StandardDocument";
import { ethicsStandardMeta } from "@/content/ethics-standard";
import { siteMeta } from "@/content/site-copy";

const pageTitle = ethicsStandardMeta.name;

export const metadata: Metadata = {
  title: pageTitle,
  description: ethicsStandardMeta.scope,
  openGraph: {
    title: `${pageTitle} · ${siteMeta.title}`,
    description: ethicsStandardMeta.scope,
    type: "article",
    siteName: siteMeta.title,
  },
  twitter: {
    card: "summary_large_image",
    title: `${pageTitle} · ${siteMeta.title}`,
    description: ethicsStandardMeta.scope,
  },
};

export default function StandardPage() {
  return (
    <PublicPageShell>
      <StandardDocument />
    </PublicPageShell>
  );
}
