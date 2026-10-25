import type { MetadataRoute } from "next";

import { absoluteUrl, SITE } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/themes/", "/en/themes/"],
    },
    sitemap: absoluteUrl("/sitemap.xml"),
    host: SITE.url,
  };
}
