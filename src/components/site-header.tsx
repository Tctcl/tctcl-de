import Link from "next/link";

import { getCopy } from "@/content/site-copy";
import { sectionIds, type Locale } from "@/lib/locale";
import { blogPath, homePath } from "@/lib/routes";

import { LanguageSwitch } from "./language-switch";

type SiteHeaderProps = {
  locale: Locale;
  alternateHref?: string | null;
  current?: "home" | "blog" | "article";
};

export function SiteHeader({
  locale,
  alternateHref,
  current,
}: SiteHeaderProps) {
  const copy = getCopy(locale);
  const home = homePath(locale);
  const ids = sectionIds[locale];
  const isJournal = current === "blog" || current === "article";

  const navItems = [
    { href: `${home}#${ids.work}`, label: copy.nav.work },
    { href: `${home}#${ids.about}`, label: copy.nav.about },
    { href: `${home}#${ids.projects}`, label: copy.nav.projects },
    { href: blogPath(locale), label: copy.nav.journal },
  ];

  return (
    <header className="border-b border-border">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-8 gap-y-3 px-5 py-4 sm:py-5 md:px-8">
        <Link
          href={home}
          className="group flex items-baseline gap-2"
          aria-label={`TCTCL Labs — ${home === "/" ? "Startseite" : "homepage"}`}
        >
          <span className="font-serif text-2xl font-semibold leading-none tracking-[-0.035em]">
            TCTCL
          </span>
          <span className="font-mono text-[9px] uppercase tracking-[0.32em] text-muted-foreground transition-colors group-hover:text-blood">
            Labs
          </span>
        </Link>

        <div className="flex items-center gap-5">
          <nav
            aria-label={copy.nav.main}
            className="hidden items-center gap-5 sm:flex"
          >
            {navItems.map((item) => {
              const active = item.label === copy.nav.journal && isJournal;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`font-mono text-[10px] uppercase tracking-[0.18em] transition-colors hover:text-blood ${
                    active ? "text-blood" : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <LanguageSwitch locale={locale} alternateHref={alternateHref} />
        </div>

        <nav
          aria-label={copy.nav.main}
          className="order-last flex w-full items-center justify-between gap-3 border-t border-border/70 pt-3 sm:hidden"
        >
          {navItems.map((item) => {
            const active = item.label === copy.nav.journal && isJournal;

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`font-mono text-[9px] uppercase tracking-[0.12em] transition-colors hover:text-blood ${
                  active ? "text-blood" : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
