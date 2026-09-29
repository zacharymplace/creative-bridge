import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteMeta, siteThemeColor } from "@/content/site-copy";

export const metadata: Metadata = {
  title: {
    default: siteMeta.title,
    template: `%s · ${siteMeta.title}`,
  },
  description: siteMeta.description,
  applicationName: siteMeta.title,
  openGraph: {
    title: siteMeta.title,
    description: siteMeta.description,
    type: "website",
    siteName: siteMeta.title,
  },
  twitter: {
    card: "summary_large_image",
    title: siteMeta.title,
    description: siteMeta.description,
  },
};

export const viewport: Viewport = {
  themeColor: siteThemeColor,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
