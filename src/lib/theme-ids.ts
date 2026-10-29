export const themeIds = [
  "werkstatt",
  "konsole",
  "minecraft",
  "jtl-nova",
  "hype",
  "retro",
  "papier",
] as const;

export type ThemeId = (typeof themeIds)[number];

export const defaultTheme: ThemeId = "werkstatt";

/** The default style stays available, but first visits showcase one of the others. */
export const randomThemeIds = themeIds.filter(
  (theme): theme is Exclude<ThemeId, "werkstatt"> => theme !== defaultTheme,
);

export const THEME_COOKIE = "tctcl_style";
export const THEME_COOKIE_MAX_AGE = 60 * 60 * 24 * 365;
export const THEME_PATH_SEGMENT = "themes";

export function isThemeId(value: unknown): value is ThemeId {
  return (
    typeof value === "string" && (themeIds as readonly string[]).includes(value)
  );
}

export function pickRandomTheme(): Exclude<ThemeId, "werkstatt"> {
  const index = Math.floor(Math.random() * randomThemeIds.length);
  return randomThemeIds[index] ?? randomThemeIds[0];
}
