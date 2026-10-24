import type { Locale } from "./locale";

const prefix = (locale: Locale) => (locale === "de" ? "" : "/en");

export type RoomId = "music" | "tinkering" | "projects" | "about" | "work";

export type CurrentSection = "home" | "journal" | "article" | RoomId;

export const roomIds: RoomId[] = [
  "music",
  "tinkering",
  "projects",
  "about",
  "work",
];

const roomPaths: Record<RoomId, Record<Locale, string>> = {
  music: { de: "/musik", en: "/en/music" },
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
