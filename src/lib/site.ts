import type { Locale } from "./locale";

export const SITE = {
  url: "https://tctcl.de",
  name: "TCTCL",
  author: "TCTCL",
  defaultOgImage: "/og.png",
  defaultOgImageAlt: {
    de: "TCTCL — Musik, Software und Dinge dazwischen",
    en: "TCTCL — music, software and things in between",
  },
  jobTitle: {
    de: "Softwareentwickler im E-Commerce",
    en: "Software developer in e-commerce",
  },
  description: {
    de: "Persönliche Werkstatt von TCTCL: E-Commerce-Entwicklung, Self-Hosting, Musik und Projekte, die nicht unbedingt ein Produkt werden müssen.",
    en: "TCTCL's personal workshop: e-commerce development, self-hosting, music and projects that don't have to become products.",
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
    "Electronic Music",
    "DJing",
    "Audio",
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
