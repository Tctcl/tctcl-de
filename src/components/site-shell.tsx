import type { ReactNode } from "react";

import type { Locale } from "@/lib/locale";
import type { CurrentSection } from "@/lib/routes";
import { defaultTheme, type ThemeId } from "@/lib/theme-ids";
import { getThemeCopy } from "@/themes/copy";

import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

type SiteShellProps = {
  locale: Locale;
  children: ReactNode;
  alternateHref?: string | null;
  current?: CurrentSection;
  theme?: ThemeId;
};

export function SiteShell({
  locale,
  children,
  alternateHref,
  current,
  theme = defaultTheme,
}: SiteShellProps) {
  const copy = getThemeCopy(locale, theme);

  return (
    <div data-theme={theme} className="site-shell flex min-h-screen flex-col">
      <a href="#main" className="skip-link">
        {copy.nav.skip}
      </a>
      <div className="site-topline" aria-hidden="true" />
      <SiteHeader
        locale={locale}
        theme={theme}
        alternateHref={alternateHref}
        current={current}
      />
      <main id="main" className="flex-1">
        {children}
      </main>
      <SiteFooter locale={locale} theme={theme} />
    </div>
  );
}
