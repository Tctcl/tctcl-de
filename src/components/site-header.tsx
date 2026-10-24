import Link from "next/link";

import { getCopy } from "@/content/site-copy";
import type { Locale } from "@/lib/locale";
import {
  blogPath,
  homePath,
  roomPath,
  type CurrentSection,
} from "@/lib/routes";

import { LanguageSwitch } from "./language-switch";

type SiteHeaderProps = {
  locale: Locale;
  alternateHref?: string | null;
  current?: CurrentSection;
};

export function SiteHeader({
  locale,
  alternateHref,
  current,
}: SiteHeaderProps) {
  const copy = getCopy(locale);
  const home = homePath(locale);

  const navItems: {
    key: CurrentSection;
    href: string;
    label: string;
  }[] = [
    { key: "music", href: roomPath("music", locale), label: copy.nav.music },
    {
      key: "tinkering",
      href: roomPath("tinkering", locale),
      label: copy.nav.tinkering,
    },
    {
      key: "projects",
      href: roomPath("projects", locale),
      label: copy.nav.projects,
    },
    { key: "journal", href: blogPath(locale), label: copy.nav.journal },
    { key: "about", href: roomPath("about", locale), label: copy.nav.about },
    { key: "work", href: roomPath("work", locale), label: copy.nav.work },
  ];

  const isActive = (key: CurrentSection) =>
    key === current ||
    (key === "journal" && (current === "journal" || current === "article"));

  return (
    <header className="border-b border-border">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-8 gap-y-3 px-5 py-4 sm:py-5 md:px-8">
        <Link
          href={home}
          className="group flex items-baseline gap-2"
          aria-label={copy.brand.aria}
        >
          <span className="font-serif text-2xl font-semibold leading-none tracking-[-0.035em]">
            TCTCL
          </span>
          <span className="font-mono text-[9px] uppercase tracking-[0.24em] text-muted-foreground transition-colors group-hover:text-blood">
            {copy.brand.subtitle}
          </span>
        </Link>

        <div className="flex items-center gap-5">
          <nav
            aria-label={copy.nav.main}
            className="hidden items-center gap-5 lg:flex"
          >
            {navItems.map((item) => {
              const active = isActive(item.key);

              return (
                <Link
                  key={item.key}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`font-mono text-[10px] uppercase tracking-[0.16em] transition-colors hover:text-blood ${
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
          className="order-last grid w-full grid-cols-3 gap-x-4 gap-y-3 border-t border-border/70 pt-3 lg:hidden"
        >
          {navItems.map((item) => {
            const active = isActive(item.key);

            return (
              <Link
                key={item.key}
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
