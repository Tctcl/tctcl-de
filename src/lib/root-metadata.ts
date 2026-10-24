import type { Metadata, Viewport } from "next";

import { getCopy } from "@/content/site-copy";
import type { Locale } from "@/lib/locale";
import { SITE } from "@/lib/site";

export function rootMetadata(locale: Locale): Metadata {
  const copy = getCopy(locale);

  return {
    metadataBase: new URL(SITE.url),
    title: {
      default: copy.meta.title,
      template: `%s — ${SITE.name}`,
    },
    description: copy.meta.description,
    applicationName: SITE.name,
    authors: [{ name: SITE.author, url: SITE.url }],
    creator: SITE.author,
    publisher: SITE.author,
    icons: {
      icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    },
    robots: {
      index: true,
      follow: true,
    },
    formatDetection: {
      telephone: false,
      email: false,
      address: false,
    },
  };
}

export const rootViewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#e9e4da",
  colorScheme: "light",
};
