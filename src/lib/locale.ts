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
