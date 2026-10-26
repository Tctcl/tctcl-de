import Link from "next/link";

import { ThemeSwitcher } from "@/components/theme-switcher";
import { projects } from "@/content/projects";
import type { Locale } from "@/lib/locale";
import {
  blogPath,
  homePath,
  roomIds,
  roomPath,
  stylePath,
} from "@/lib/routes";
import { BUILD_YEAR, SITE } from "@/lib/site";
import { themeIds, type ThemeId } from "@/lib/theme-ids";
import { interfaceCopy, themeChrome } from "@/themes/chrome";
import { getThemeCopy } from "@/themes/copy";

function footerItems(locale: Locale, theme: ThemeId) {
  const copy = getThemeCopy(locale, theme);

  return [
    { href: homePath(locale), label: copy.nav.home },
    { href: roomPath("tinkering", locale), label: copy.nav.tinkering },
    { href: roomPath("projects", locale), label: copy.nav.projects },
    { href: blogPath(locale), label: copy.nav.journal },
    { href: roomPath("about", locale), label: copy.nav.about },
    { href: roomPath("work", locale), label: copy.nav.work },
  ];
}

function FooterLinks({
  locale,
  theme,
  className,
}: {
  locale: Locale;
  theme: ThemeId;
  className: string;
}) {
  return (
    <nav aria-label={interfaceCopy[locale].footerNav} className={className}>
      {footerItems(locale, theme).map((item) => (
        <Link key={item.href} href={item.href}>
          {item.label}
        </Link>
      ))}
    </nav>
  );
}

export function SiteFooter({
  locale,
  theme,
}: {
  locale: Locale;
  theme: ThemeId;
}) {
  const copy = getThemeCopy(locale, theme);
  const switcher = <ThemeSwitcher locale={locale} theme={theme} variant="footer" />;

  if (theme === "konsole") {
    return (
      <footer className="console-footer">
        <div className="console-footer-inner">
          <p className="console-comment"># {copy.footer.tagline}</p>
          <p className="console-comment"># {copy.footer.privacy}</p>
          <FooterLinks locale={locale} theme={theme} className="console-footer-nav" />
          <div className="console-footer-tools">{switcher}</div>
        </div>
        <p className="console-footer-legal">
          © {BUILD_YEAR} {copy.footer.copyright} · {SITE.url.replace("https://", "")} · EOF
        </p>
      </footer>
    );
  }

  if (theme === "minecraft") {
    const chrome = themeChrome.minecraft[locale];

    return (
      <footer className="mc-footer">
        <div className="mc-footer-panel">
          <p className="mc-footer-brand">
            TCTCL <span>{copy.brand.subtitle}</span>
          </p>
          <p className="mc-footer-tagline">{copy.footer.tagline}</p>
          <FooterLinks locale={locale} theme={theme} className="mc-footer-slots" />
          <div className="mc-footer-switcher">{switcher}</div>
        </div>
        <p className="mc-footer-legal">
          © {BUILD_YEAR} {copy.footer.copyright} · {chrome.assetsNote} ·{" "}
          {copy.footer.privacy}
        </p>
      </footer>
    );
  }

  if (theme === "jtl-nova") {
    const chrome = themeChrome["jtl-nova"][locale];

    return (
      <footer className="nova-footer">
        <div className="nova-newsletter">
          <div className="nova-container nova-newsletter-row">
            <div>
              <h2 className="nova-newsletter-title">{chrome.newsletterTitle}</h2>
              <p className="nova-newsletter-text">{chrome.newsletterText}</p>
            </div>
            <div className="nova-newsletter-action">
              <Link href={blogPath(locale)} className="nova-button">
                {chrome.newsletterCta} <span aria-hidden="true">→</span>
              </Link>
              <p className="nova-newsletter-note">{chrome.newsletterNote}</p>
            </div>
          </div>
        </div>

        <div className="nova-footer-boxes">
          <div className="nova-container nova-footer-grid">
            <div className="nova-footer-about">
              <p className="nova-footer-brand">
                <span className="nova-mark nova-mark--small" aria-hidden="true">
                  T
                </span>
                tctcl
              </p>
              <p className="nova-footer-tagline">{copy.footer.tagline}</p>
              <p className="nova-footer-note">{chrome.sidebarNote}</p>
            </div>

            <div className="nova-footer-col">
              <p className="nova-footer-heading">{chrome.catalog}</p>
              <nav
                aria-label={chrome.catalog}
                className="nova-footer-links"
              >
                <Link href={homePath(locale)}>{copy.nav.home}</Link>
                <Link href={roomPath("tinkering", locale)}>
                  {copy.nav.tinkering}
                </Link>
                <Link href={roomPath("projects", locale)}>
                  {copy.nav.projects}
                </Link>
                <Link href={roomPath("about", locale)}>{copy.nav.about}</Link>
                <Link href={roomPath("work", locale)}>{copy.nav.work}</Link>
              </nav>
            </div>

            <div className="nova-footer-col">
              <p className="nova-footer-heading">{chrome.journal}</p>
              <nav
                aria-label={chrome.journal}
                className="nova-footer-links"
              >
                <Link href={blogPath(locale)}>{copy.nav.journal}</Link>
                <Link href={stylePath(locale)}>
                  {chrome.styles} ({themeIds.length})
                </Link>
              </nav>
            </div>

            <div className="nova-footer-col">
              <p className="nova-footer-heading">{chrome.service}</p>
              <ul className="nova-footer-service">
                <li>{chrome.noCart}</li>
                <li>{chrome.noPrices}</li>
                <li>{chrome.noShipping}</li>
                <li>{chrome.styleCookie}</li>
              </ul>
              <div className="nova-footer-switcher">{switcher}</div>
            </div>
          </div>
        </div>

        <div className="nova-footer-legal">
          <div className="nova-container nova-footer-legal-inner">
            <p>
              © {BUILD_YEAR} {copy.footer.copyright} ·{" "}
              {SITE.url.replace("https://", "")}
            </p>
            <p>{chrome.disclaimer}</p>
          </div>
        </div>
      </footer>
    );
  }

  if (theme === "hype") {
    const chrome = themeChrome.hype[locale];

    return (
      <footer className="hype-footer">
        <div className="hype-footer-stats">
          <p>
            <strong>{roomIds.length + 1}</strong> {chrome.rooms}
          </p>
          <p>
            <strong>{projects.length}</strong> {chrome.projects}
          </p>
          <p>
            <strong>0</strong> {chrome.trackingCookies}
          </p>
          <p>
            <strong>1</strong> {chrome.person}
          </p>
        </div>

        <div className="hype-footer-main">
          <p className="hype-footer-wordmark">TCTCL</p>
          <div>
            <p className="hype-footer-tagline">{copy.footer.tagline}</p>
            <FooterLinks locale={locale} theme={theme} className="hype-footer-nav" />
          </div>
          <div className="hype-footer-actions">{switcher}</div>
        </div>

        <p className="hype-footer-legal">
          {chrome.satireNote} {copy.footer.privacy} © {BUILD_YEAR}{" "}
          {copy.footer.copyright}.
        </p>
      </footer>
    );
  }

  if (theme === "retro") {
    const chrome = themeChrome.retro[locale];

    return (
      <footer className="retro-footer">
        <p className="retro-construction">{chrome.footerConstruction}</p>

        <FooterLinks locale={locale} theme={theme} className="retro-footer-nav" />

        <div className="retro-footer-row">
          <p className="retro-counter">
            {chrome.footerCounter} <span>{chrome.offline}</span>
          </p>
          <p className="retro-best-view">{chrome.bestView}</p>
          {switcher}
        </div>

        <p className="retro-footer-legal">
          © {BUILD_YEAR} {copy.footer.copyright} · {chrome.footerLegal}
        </p>
      </footer>
    );
  }

  if (theme === "papier") {
    const chrome = themeChrome.papier[locale];

    return (
      <footer className="paper-footer">
        <div className="paper-footer-grid">
          <div>
            <p className="paper-footer-brand">
              TCTCL <span>{copy.brand.subtitle}</span>
            </p>
            <p className="paper-footer-tagline">{copy.footer.tagline}</p>
          </div>
          <FooterLinks locale={locale} theme={theme} className="paper-footer-nav" />
          <div className="paper-footer-notes">
            <p>{copy.footer.privacy}</p>
            <p>{copy.footer.colophon}</p>
            {switcher}
          </div>
        </div>

        <p className="paper-footer-legal">
          © {BUILD_YEAR} {copy.footer.copyright} ·{" "}
          {SITE.url.replace("https://", "")} · {chrome.colophon}
        </p>
      </footer>
    );
  }

  return (
    <footer className="mt-20 border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 md:grid-cols-12 md:px-8">
        <div className="md:col-span-5">
          <p className="font-serif text-xl font-semibold tracking-[-0.02em]">
            TCTCL <span className="text-blood">{copy.brand.subtitle}</span>
          </p>
          <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
            {copy.footer.tagline}
          </p>
        </div>

        <FooterLinks
          locale={locale}
          theme={theme}
          className="grid grid-cols-2 gap-x-6 gap-y-2 font-mono text-[10px] uppercase tracking-[0.16em] md:col-span-4 [&_a]:text-muted-foreground [&_a:hover]:text-blood"
        />

        <div className="md:col-span-3 md:col-start-10">
          <p className="font-mono text-[9px] uppercase leading-relaxed tracking-[0.16em] text-muted-foreground">
            {copy.footer.privacy}
          </p>
          <p className="mt-3 font-mono text-[9px] uppercase leading-relaxed tracking-[0.16em] text-muted-foreground">
            {copy.footer.colophon}
          </p>
          <div className="mt-4">{switcher}</div>
          <a
            href="#top"
            className="mt-4 inline-block font-mono text-[9px] uppercase tracking-[0.16em] text-blood transition-colors hover:text-blood-deep"
          >
            {copy.footer.backToTop} ↑
          </a>
        </div>
      </div>

      <div className="border-t border-border/80">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-4 font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground sm:flex-row sm:items-center sm:justify-between md:px-8">
          <p>
            © {BUILD_YEAR} {copy.footer.copyright}
          </p>
          <p>{SITE.url.replace("https://", "")}</p>
        </div>
      </div>
    </footer>
  );
}
