export const locales = ["de", "en"] as const;

export type Locale = (typeof locales)[number];

export const htmlLang: Record<Locale, string> = {
  de: "de",
  en: "en",
};

export const openGraphLocale: Record<Locale, string> = {
  de: "de_DE",
  en: "en_US",
};

export const dateLocale: Record<Locale, string> = {
  de: "de-DE",
  en: "en-GB",
};

export function otherLocale(locale: Locale): Locale {
  return locale === "de" ? "en" : "de";
}

export const sectionIds: Record<
  Locale,
  { work: string; about: string; projects: string; writing: string }
> = {
  de: {
    work: "arbeit",
    about: "ueber",
    projects: "projekte",
    writing: "journal",
  },
  en: {
    work: "work",
    about: "about",
    projects: "projects",
    writing: "journal",
  },
};
