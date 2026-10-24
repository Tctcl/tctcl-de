import type { Locale } from "./locale";

export const SITE = {
  url: "https://tctcl.de",
  name: "TCTCL Labs",
  author: "TCTCL",
  defaultOgImage: "/og.png",
  defaultOgImageAlt: {
    de: "TCTCL Labs — Software, E-Commerce und Experimente",
    en: "TCTCL Labs — software, e-commerce and experiments",
  },
  jobTitle: {
    de: "Softwareentwickler",
    en: "Software developer",
  },
  description: {
    de: "TCTCL Labs: Entwicklung, Integrationen und Werkzeuge für JTL-Shop, JTL-Wawi und den E-Commerce. Außerdem Musik, Self-Hosting und Dinge, die einfach interessant sind.",
    en: "TCTCL Labs: development, integrations and tooling for JTL-Shop, JTL-Wawi and e-commerce. Also music, self-hosting and things that are simply interesting.",
  },
  knowsAbout: [
    "JTL-Shop",
    "JTL-Wawi",
    "E-Commerce",
    "API-Integration",
    "Datenimport",
    "Softwareentwicklung",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Linux",
    "Docker",
    "Self-Hosting",
  ],
} as const;

export function absoluteUrl(path: string): string {
  if (/^https?:\/\//.test(path)) {
    return path;
  }

  return new URL(path, SITE.url).toString();
}

export function personId(): string {
  return `${SITE.url}/#person`;
}

export function websiteId(): string {
  return `${SITE.url}/#website`;
}

export function siteDescription(locale: Locale): string {
  return SITE.description[locale];
}

/**
 * The copyright year is baked at build time. The site is fully static, so a
 * new deploy is what moves it forward.
 */
export const BUILD_YEAR = new Date().getFullYear();
