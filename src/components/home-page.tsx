import type { Locale } from "@/lib/locale";
import { defaultTheme, type ThemeId } from "@/lib/theme-ids";
import { getThemeDefinition } from "@/themes/registry";

export function HomePage({
  locale,
  theme = defaultTheme,
}: {
  locale: Locale;
  theme?: ThemeId;
}) {
  const Home = getThemeDefinition(theme).Home;

  return <Home locale={locale} theme={theme} />;
}
