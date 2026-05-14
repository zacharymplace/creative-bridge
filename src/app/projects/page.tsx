import type { Metadata } from "next";
import { ProjectsIndex } from "@/components/site/ProjectsIndex";
import { PublicPageShell } from "@/components/site/PublicPageShell";
import { siteMeta } from "@/content/site-copy";

const title = "Projects";
const description =
  "Static example project profiles—tiers, intent, roles, disclosures, and human-finished pathways without accounts or messaging.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title: `${title} · ${siteMeta.title}`,
    description,
    type: "website",
    siteName: siteMeta.title,
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} · ${siteMeta.title}`,
    description,
  },
};

export default function ProjectsPage() {
  return (
    <PublicPageShell>
      <ProjectsIndex />
    </PublicPageShell>
  );
}
