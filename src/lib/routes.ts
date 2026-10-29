import type { Locale } from "./locale";
import { THEME_PATH_SEGMENT, type ThemeId } from "./theme-ids";

const prefix = (locale: Locale) => (locale === "de" ? "" : "/en");

export type RoomId = "tinkering" | "projects" | "about" | "work";

export type CurrentSection = "home" | "journal" | "article" | RoomId;

export const roomIds: RoomId[] = ["tinkering", "projects", "about", "work"];

const roomPaths: Record<RoomId, Record<Locale, string>> = {
  tinkering: { de: "/tuefteln", en: "/en/tinkering" },
  projects: { de: "/projekte", en: "/en/projects" },
  about: { de: "/ueber", en: "/en/about" },
  work: { de: "/arbeit", en: "/en/work" },
};

export function homePath(locale: Locale): string {
  return locale === "de" ? "/" : "/en";
}

export function blogPath(locale: Locale): string {
  return `${prefix(locale)}/blog`;
}

export function roomPath(room: RoomId, locale: Locale): string {
  return roomPaths[room][locale];
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

export function stylePath(locale: Locale): string {
  return `${prefix(locale)}/${locale === "de" ? "stile" : "styles"}`;
}

/**
 * Internal path that sets the style cookie and redirects back to the clean
 * URL. The suffix is a clean path without its locale prefix.
 */
export function themeSwitchPath(
  locale: Locale,
  theme: ThemeId,
  cleanPath: string,
): string {
  const base = `${prefix(locale)}/${THEME_PATH_SEGMENT}/${theme}`;
  const suffix = cleanSuffix(locale, cleanPath);

  return suffix ? `${base}${suffix}` : base;
}

/** Strips the locale prefix from a clean URL. */
export function cleanSuffix(locale: Locale, cleanPath: string): string {
  const home = locale === "de" ? "/" : "/en";

  if (cleanPath === home || cleanPath === `${home}/`) {
    return "";
  }

  if (locale === "en" && cleanPath.startsWith("/en/")) {
    return cleanPath.slice(3);
  }

  if (locale === "de" && cleanPath.startsWith("/")) {
    return cleanPath;
  }

  return cleanPath.startsWith("/") ? cleanPath : `/${cleanPath}`;
}

/** Clean path for an internal theme route suffix. */
export function cleanPathFromSuffix(locale: Locale, suffix: string): string {
  const normalized = suffix.startsWith("/") ? suffix : `/${suffix}`;

  if (normalized === "/") {
    return homePath(locale);
  }

  return `${prefix(locale)}${normalized}`;
}
