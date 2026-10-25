import Link from "next/link";

import { LanguageSwitch } from "@/components/language-switch";
import { ThemeSwitcher } from "@/components/theme-switcher";
import type { Locale } from "@/lib/locale";
import {
  blogPath,
  homePath,
  roomPath,
  type CurrentSection,
} from "@/lib/routes";
import type { ThemeId } from "@/lib/theme-ids";
import { interfaceCopy, themeChrome } from "@/themes/chrome";
import { getThemeCopy } from "@/themes/copy";

type SiteHeaderProps = {
  locale: Locale;
  theme: ThemeId;
  alternateHref?: string | null;
  current?: CurrentSection;
};

type NavItem = {
  key: CurrentSection;
  href: string;
  label: string;
};

function buildNav(locale: Locale, theme: ThemeId): NavItem[] {
  const copy = getThemeCopy(locale, theme);

  return [
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
}

function activeFor(key: CurrentSection, current?: CurrentSection): boolean {
  return (
    key === current ||
    (key === "journal" && (current === "journal" || current === "article"))
  );
}

function InlineNav({
  items,
  current,
  className,
  locale,
}: {
  items: NavItem[];
  current?: CurrentSection;
  className: string;
  locale: Locale;
}) {
  return (
    <nav aria-label={interfaceCopy[locale].mainNav} className={className}>
      {items.map((item) => {
        const active = activeFor(item.key, current);

        return (
          <Link
            key={item.key}
            href={item.href}
            aria-current={active ? "page" : undefined}
            className={active ? "is-active" : undefined}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

export function SiteHeader({
  locale,
  theme,
  alternateHref,
  current,
}: SiteHeaderProps) {
  const copy = getThemeCopy(locale, theme);
  const home = homePath(locale);
  const items = buildNav(locale, theme);
  const language = (
    <LanguageSwitch locale={locale} alternateHref={alternateHref} />
  );
  const switcher = (variant: "header" | "inline" | "footer") => (
    <ThemeSwitcher locale={locale} theme={theme} variant={variant} />
  );

  if (theme === "konsole") {
    const chrome = themeChrome.konsole[locale];

    return (
      <header className="console-header">
        <div className="console-titlebar">
          <span className="console-titlebar-dots" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <Link href={home} aria-label={copy.brand.aria}>
            {chrome.host}
          </Link>
          <span className="console-titlebar-path">{copy.brand.subtitle}</span>
          {language}
        </div>

        <div className="console-header-main">
          <p className="console-prompt" aria-hidden="true">
            <span>{chrome.host}</span>:~$ ls ./{chrome.roomsDir}
          </p>
          <InlineNav
            items={items}
            current={current}
            className="console-nav"
            locale={locale}
          />
          {switcher("inline")}
        </div>
      </header>
    );
  }

  if (theme === "minecraft") {
    return (
      <header className="mc-header">
        <div className="mc-header-top">
          <Link href={home} className="mc-brand" aria-label={copy.brand.aria}>
            <span className="mc-brand-name">TCTCL</span>
            <span className="mc-brand-world">{copy.brand.subtitle}</span>
          </Link>
          <div className="mc-header-tools">
            {language}
            {switcher("inline")}
          </div>
        </div>

        <InlineNav
          items={items}
          current={current}
          className="mc-hotbar"
          locale={locale}
        />
      </header>
    );
  }

  if (theme === "jtl-nova") {
    const chrome = themeChrome["jtl-nova"][locale];

    return (
      <header className="shop-header">
        <div className="shop-utility">
          <p>
            <span className="shop-utility-strong">TCTCL</span>
            <span className="shop-utility-sep" aria-hidden="true">
              |
            </span>
            {chrome.utility}
          </p>
          <div className="shop-utility-links">
            {language}
            {switcher("inline")}
          </div>
        </div>

        <div className="shop-header-main">
          <Link href={home} className="shop-brand" aria-label={copy.brand.aria}>
            <span className="shop-brand-name">TCTCL</span>
            <span className="shop-brand-sub">{copy.brand.subtitle}</span>
          </Link>

          <InlineNav
            items={items}
            current={current}
            className="shop-categories"
            locale={locale}
          />
        </div>
      </header>
    );
  }

  if (theme === "hype") {
    const chrome = themeChrome.hype[locale];

    return (
      <header className="hype-header">
        <div className="hype-header-top">
          <span className="hype-satire">Satire</span>
          <p>{chrome.topLine}</p>
          {language}
        </div>
        <div className="hype-header-main">
          <Link href={home} className="hype-brand" aria-label={copy.brand.aria}>
            <span className="hype-brand-name">TCTCL</span>
            <span className="hype-brand-sub">{copy.brand.subtitle}</span>
          </Link>

          <InlineNav
            items={items}
            current={current}
            className="hype-nav"
            locale={locale}
          />

          <div className="hype-header-actions">
            <Link href={roomPath("work", locale)} className="hype-cta">
              {copy.nav.work} →
            </Link>
            {switcher("inline")}
          </div>
        </div>
      </header>
    );
  }

  if (theme === "retro") {
    const chrome = themeChrome.retro[locale];

    return (
      <header className="retro-header">
        <p className="retro-ticker">{chrome.ticker}</p>

        <div className="retro-header-main">
          <p className="retro-badge">{chrome.badge}</p>
          <Link href={home} className="retro-brand" aria-label={copy.brand.aria}>
            <span className="retro-brand-name">TCTCL</span>
            <span className="retro-brand-sub">{copy.brand.subtitle}</span>
          </Link>
          <div className="retro-header-tools">
            {language}
            {switcher("inline")}
          </div>
        </div>

        <InlineNav
          items={items}
          current={current}
          className="retro-nav"
          locale={locale}
        />
      </header>
    );
  }

  if (theme === "papier") {
    return (
      <header className="paper-header">
        <div className="paper-running-head">
          <span>TCTCL</span>
          <span>{locale === "de" ? "Personalakte" : "Personal file"}</span>
          <span>{locale === "de" ? "Ausgabe 01" : "Issue 01"}</span>
        </div>

        <div className="paper-header-main">
          <Link href={home} className="paper-brand" aria-label={copy.brand.aria}>
            <span className="paper-brand-name">TCTCL</span>
            <span className="paper-brand-sub">{copy.brand.subtitle}</span>
          </Link>
          <div className="paper-header-tools">
            {switcher("inline")}
            {language}
          </div>
        </div>

        <InlineNav
          items={items}
          current={current}
          className="paper-nav"
          locale={locale}
        />
      </header>
    );
  }

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
          <InlineNav
            items={items}
            current={current}
            className="hidden items-center gap-5 font-mono text-[10px] uppercase tracking-[0.16em] lg:flex [&_a]:text-muted-foreground [&_a:hover]:text-blood [&_.is-active]:text-blood"
            locale={locale}
          />
          {switcher("header")}
          {language}
        </div>

        <InlineNav
          items={items}
          current={current}
          className="order-last grid w-full grid-cols-3 gap-x-4 gap-y-3 border-t border-border/70 pt-3 font-mono text-[9px] uppercase tracking-[0.12em] lg:hidden [&_a]:text-muted-foreground [&_a:hover]:text-blood [&_.is-active]:text-blood"
          locale={locale}
        />
      </div>
    </header>
  );
}
