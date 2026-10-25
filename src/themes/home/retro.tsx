import Link from "next/link";

import { ArticleCard } from "@/components/article-card";
import { SiteShell } from "@/components/site-shell";
import { homePath } from "@/lib/routes";
import { themeChrome } from "@/themes/chrome";
import type { ThemeHomeProps } from "@/themes/types";

import { getHomeData } from "./data";

export function RetroHome({ locale, theme }: ThemeHomeProps) {
  const { copy, posts, now, hotbar } = getHomeData(locale, theme);
  const alternateHref = homePath(locale === "de" ? "en" : "de");
  const chrome = themeChrome.retro[locale];

  return (
    <SiteShell locale={locale} alternateHref={alternateHref} current="home" theme={theme}>
      <div className="retro-page">
        <section className="retro-welcome" aria-labelledby="retro-title">
          <p className="retro-welcome-kicker">★ {copy.home.eyebrow} ★</p>
          <h1 id="retro-title">
            {copy.home.title}
            <span>{copy.home.accent}</span>
          </h1>
          <div className="retro-welcome-copy">
            {copy.home.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="retro-welcome-actions">
            <a href="#seiten" className="retro-button">
              {copy.home.roomCta}
            </a>
            <Link href={hotbar[2].href} className="retro-button">
              {copy.nav.journal}
            </Link>
          </div>
        </section>

        <div className="retro-columns">
          <div className="retro-main">
            <section id="seiten" className="retro-panel scroll-mt-24" aria-labelledby="retro-pages">
              <h2 id="retro-pages" className="retro-panel-title">
                {copy.home.roomsTitle}
              </h2>
              <p className="retro-panel-intro">{copy.home.roomsIntro}</p>

              <ul className="retro-link-list">
                {hotbar.map((room) => (
                  <li key={room.key}>
                    <Link href={room.href}>
                      <span className="retro-bullet" aria-hidden="true">
                        ►
                      </span>
                      <span className="retro-link-label">{room.label}</span>
                      <span className="retro-link-teaser">{room.teaser}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            <section className="retro-panel" aria-labelledby="retro-now">
              <h2 id="retro-now" className="retro-panel-title">
                {copy.home.nowTitle}
              </h2>
              <p className="retro-panel-intro">{copy.home.nowIntro}</p>
              <ol className="retro-now">
                {now.map((entry) => (
                  <li key={entry.title}>
                    <p className="retro-now-title">
                      {entry.title}{" "}
                      <span className="retro-now-tag">[{entry.tag}]</span>
                    </p>
                    <p>{entry.text}</p>
                  </li>
                ))}
              </ol>
            </section>

            <section className="retro-panel" aria-labelledby="retro-journal">
              <h2 id="retro-journal" className="retro-panel-title">
                {copy.home.journalTitle}
              </h2>
              <p className="retro-panel-intro">{copy.home.journalIntro}</p>

              {posts.length > 0 ? (
                <>
                  <ol className="retro-posts">
                    {posts.map((post) => (
                      <li key={post.slug}>
                        <ArticleCard post={post} locale={locale} />
                      </li>
                    ))}
                  </ol>
                  <p className="retro-more">
                    <Link href={hotbar[2].href}>{copy.home.allPosts} →</Link>
                  </p>
                </>
              ) : (
                <div className="retro-empty">
                  <p>{copy.blog.emptyLabel}</p>
                  <h3>{copy.home.journalEmptyTitle}</h3>
                  <p>{copy.home.journalEmptyText}</p>
                  <p>{copy.home.journalEmptyNote}</p>
                  <Link href={hotbar[2].href}>{copy.home.allPosts} →</Link>
                </div>
              )}
            </section>
          </div>

          <aside className="retro-sidebar">
            <section className="retro-sidebox" aria-labelledby="retro-about">
              <h2 id="retro-about">{copy.home.marginalLabel}</h2>
              <dl>
                {copy.home.marginalFacts.map((fact) => (
                  <div key={fact.term}>
                    <dt>{fact.term}:</dt>
                    <dd>{fact.value}</dd>
                  </div>
                ))}
              </dl>
              <p className="retro-sidebox-note">{copy.home.marginalNote}</p>
            </section>

            <section
              className="retro-sidebox retro-counter-box"
              aria-label={chrome.counterAria}
            >
              <p className="retro-counter-label">{chrome.counterLabel}</p>
              <p className="retro-counter-digits" aria-hidden="true">
                0 0 0 0 0 0
              </p>
              <p className="retro-counter-note">{chrome.counterNote}</p>
            </section>

            <section className="retro-sidebox" aria-label={chrome.noticesAria}>
              <p className="retro-blink">{chrome.construction}</p>
              <p>{chrome.noGuestbook}</p>
              <p>{chrome.cookie}</p>
              <p className="retro-stamp">{copy.home.marginalStamp}</p>
            </section>

            <section className="retro-sidebox" aria-labelledby="retro-other">
              <h2 id="retro-other">{chrome.more}</h2>
              <ul className="retro-mini-links">
                <li>
                  <Link href={hotbar[3].href}>{copy.nav.about}</Link>
                </li>
                <li>
                  <Link href={hotbar[4].href}>{copy.nav.work}</Link>
                </li>
                <li>
                  <Link href={hotbar[2].href}>{copy.nav.journal}</Link>
                </li>
              </ul>
            </section>
          </aside>
        </div>
      </div>
    </SiteShell>
  );
}
