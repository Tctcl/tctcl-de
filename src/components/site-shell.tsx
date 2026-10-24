import type { ReactNode } from "react";

import { getCopy } from "@/content/site-copy";
import type { Locale } from "@/lib/locale";

import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

type SiteShellProps = {
  locale: Locale;
  children: ReactNode;
  alternateHref?: string | null;
  current?: "home" | "blog" | "article";
};

export function SiteShell({
  locale,
  children,
  alternateHref,
  current,
}: SiteShellProps) {
  const copy = getCopy(locale);

  return (
    <>
      <a href="#main" className="skip-link">
        {copy.nav.skip}
      </a>
      <div className="h-1 w-full bg-blood" aria-hidden="true" />
      <SiteHeader
        locale={locale}
        alternateHref={alternateHref}
        current={current}
      />
      <main id="main" className="flex-1">
        {children}
      </main>
      <SiteFooter locale={locale} />
    </>
  );
}
