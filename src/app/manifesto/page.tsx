import type { Metadata } from "next";
import { PublicPageShell } from "@/components/site/PublicPageShell";
import { ManifestoDocument } from "@/components/site/ManifestoDocument";
import { manifestoMeta, manifestoPreamble } from "@/content/manifesto";
import { siteMeta } from "@/content/site-copy";

export const metadata: Metadata = {
  title: manifestoMeta.title,
  description: manifestoPreamble,
  openGraph: {
    title: `${manifestoMeta.title} · ${siteMeta.title}`,
    description: manifestoPreamble,
    type: "article",
    siteName: siteMeta.title,
  },
  twitter: {
    card: "summary_large_image",
    title: `${manifestoMeta.title} · ${siteMeta.title}`,
    description: manifestoPreamble,
  },
};

export default function ManifestoPage() {
  return (
    <PublicPageShell>
      <ManifestoDocument />
    </PublicPageShell>
  );
}
