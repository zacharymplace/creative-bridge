import type { ReactNode } from "react";
import { PublicNav } from "./PublicNav";
import { SiteFooter } from "@/components/landing/SiteFooter";

type PublicPageShellProps = {
  children: ReactNode;
};

export function PublicPageShell({ children }: PublicPageShellProps) {
  return (
    <div className="flex min-h-full flex-col bg-[var(--cb-canvas)] text-[var(--cb-ink)]">
      <PublicNav />
      <div className="flex-1">{children}</div>
      <SiteFooter />
    </div>
  );
}
