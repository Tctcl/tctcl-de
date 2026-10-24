import type { Locale } from "./locale";

const prefix = (locale: Locale) => (locale === "de" ? "" : "/en");

export function homePath(locale: Locale): string {
  return locale === "de" ? "/" : "/en";
}

export function blogPath(locale: Locale): string {
  return `${prefix(locale)}/blog`;
}

export function blogPagePath(locale: Locale, page: number): string {
  if (page <= 1) {
    return blogPath(locale);
  }

  const segment = locale === "de" ? "seite" : "page";
  return `${blogPath(locale)}/${segment}/${page}`;
}

export function postPath(locale: Locale, slug: string): string {
  return `${blogPath(locale)}/${slug}`;
}
