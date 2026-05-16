import { siteNav } from "@/content/site-copy";
import { HeroSection } from "./HeroSection";
import { ManifestoSection } from "./ManifestoSection";
import { MobileNav } from "./MobileNav";
import { NextFrontierSection } from "./NextFrontierSection";
import { PositionSection } from "./PositionSection";
import { ProblemSection } from "./ProblemSection";
import { SiteFooter } from "./SiteFooter";
import { StartHereSection } from "./StartHereSection";
import { StandardSection } from "./StandardSection";

export function LandingPage() {
  return (
    <>
      <a
        href="#position"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:border focus:border-[var(--cb-ink)] focus:bg-[var(--cb-canvas)] focus:px-4 focus:py-2 focus:text-sm"
      >
        {siteNav.skipToContent}
      </a>
      <HeroSection />
      <MobileNav />
      <NextFrontierSection />
      <StartHereSection />
      <main>
        <PositionSection />
        <ProblemSection />
        <StandardSection />
        <ManifestoSection />
      </main>
      <SiteFooter />
    </>
  );
}
