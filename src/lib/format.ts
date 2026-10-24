import { dateLocale, type Locale } from "./locale";

export function formatDate(value: string, locale: Locale): string {
  const date = new Date(`${value}T00:00:00Z`);

  return new Intl.DateTimeFormat(dateLocale[locale], {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}

export function formatShortDate(value: string, locale: Locale): string {
  const date = new Date(`${value}T00:00:00Z`);

  return new Intl.DateTimeFormat(dateLocale[locale], {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}
