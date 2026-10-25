import type { Locale } from "@/lib/locale";

import type { ThemeId } from "@/lib/theme-ids";

export type ThemeCatalogEntry = {
  id: ThemeId;
  label: Record<Locale, string>;
  blurb: Record<Locale, string>;
  note?: Record<Locale, string>;
  swatch: [string, string, string];
  themeColor: string;
  colorScheme: "light" | "dark";
  kind: "default" | "parody" | "satire";
};

export const themeCatalog: ThemeCatalogEntry[] = [
  {
    id: "werkstatt",
    label: { de: "Werkstatt", en: "Workshop" },
    blurb: {
      de: "Die ruhige Werkstatt: Asche, Tinte, Papier.",
      en: "The quiet workshop: ash, ink, paper.",
    },
    swatch: ["#e9e4da", "#171512", "#8e1d14"],
    themeColor: "#e9e4da",
    colorScheme: "light",
    kind: "default",
  },
  {
    id: "konsole",
    label: { de: "Konsole", en: "Terminal" },
    blurb: {
      de: "Alles ist ein Befehl. Monospace, Boot-Log, man pages.",
      en: "Everything is a command. Monospace, boot log, man pages.",
    },
    swatch: ["#07100b", "#c9f7d7", "#46d17a"],
    themeColor: "#050c08",
    colorScheme: "dark",
    kind: "default",
  },
  {
    id: "minecraft",
    label: { de: "Minecraft", en: "Minecraft" },
    blurb: {
      de: "Blockige Werkstatt mit Hotbar, Inventar und Werkbank.",
      en: "Blocky workshop with hotbar, inventory and crafting table.",
    },
    note: {
      de: "Hommage an Minecraft. Keine Verbindung zu Mojang oder Microsoft.",
      en: "Homage to Minecraft. Not affiliated with Mojang or Microsoft.",
    },
    swatch: ["#6a9c3f", "#3b2a1a", "#f2c94c"],
    themeColor: "#3f5d2a",
    colorScheme: "light",
    kind: "parody",
  },
  {
    id: "jtl-nova",
    label: { de: "JTL Nova", en: "JTL Nova" },
    blurb: {
      de: "Shop-Storefront-Parodie mit Produktkarten und Produktdetails.",
      en: "Storefront parody with product cards and product details.",
    },
    note: {
      de: "Hommage an JTL-Shop Nova. Keine Verbindung zu JTL.",
      en: "Homage to JTL-Shop Nova. Not affiliated with JTL.",
    },
    swatch: ["#ffffff", "#0b5fa5", "#ef8a24"],
    themeColor: "#0b5fa5",
    colorScheme: "light",
    kind: "parody",
  },
  {
    id: "hype",
    label: { de: "Hype", en: "Hype" },
    blurb: {
      de: "Skalierbare Synergien, echte Zahlen, sichtbare Satire.",
      en: "Scalable synergies, real numbers, visible satire.",
    },
    note: {
      de: "Satire. Alle Kennzahlen stammen aus dem echten Inhalt.",
      en: "Satire. Every number comes from the actual content.",
    },
    swatch: ["#6d28d9", "#ec4899", "#f59e0b"],
    themeColor: "#6d28d9",
    colorScheme: "light",
    kind: "satire",
  },
  {
    id: "retro",
    label: { de: "Retro 90s", en: "Retro 90s" },
    blurb: {
      de: "Baustelle, Besucherzähler, Gastbuch. Bitte 800×600.",
      en: "Under construction, hit counter, guestbook. Best at 800×600.",
    },
    swatch: ["#000044", "#00ffff", "#ff00ff"],
    themeColor: "#000044",
    colorScheme: "dark",
    kind: "parody",
  },
  {
    id: "papier",
    label: { de: "Papier", en: "Paper" },
    blurb: {
      de: "Dossier, Fußnoten, zwei Spalten, kein Spaß.",
      en: "Dossier, footnotes, two columns, no fun.",
    },
    swatch: ["#f4f1e8", "#1a1a1a", "#8b1e1e"],
    themeColor: "#f4f1e8",
    colorScheme: "light",
    kind: "default",
  },
];

export const themeCatalogById = Object.fromEntries(
  themeCatalog.map((theme) => [theme.id, theme]),
) as Record<ThemeId, ThemeCatalogEntry>;

export function themeLabel(theme: ThemeId, locale: Locale): string {
  return themeCatalogById[theme].label[locale];
}
