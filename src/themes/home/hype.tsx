import Link from "next/link";

import { ArticleCard } from "@/components/article-card";
import { SiteShell } from "@/components/site-shell";
import { homePath } from "@/lib/routes";
import { themeChrome } from "@/themes/chrome";
import type { ThemeHomeProps } from "@/themes/types";

import { getHomeData } from "./data";

export function HypeHome({ locale, theme }: ThemeHomeProps) {
  const { copy, posts, now, hotbar } = getHomeData(locale, theme);
  const alternateHref = homePath(locale === "de" ? "en" : "de");
  const chrome = themeChrome.hype[locale];
  const projectCount = 0;

  return (
    <SiteShell locale={locale} alternateHref={alternateHref} current="home" theme={theme}>
      <div className="hype-page">
        <section className="hype-hero" aria-labelledby="hype-title">
          <div className="hype-hero-glow" aria-hidden="true" />
          <p className="hype-kicker">
            <span className="hype-badge">Satire</span>
            {copy.home.eyebrow}
          </p>

          <h1 id="hype-title" className="hype-heading">
            {copy.home.title}{" "}
            <span>{copy.home.accent}</span>
          </h1>

          <div className="hype-intro">
            {copy.home.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="hype-actions">
            <a href="#units" className="hype-button">
              {copy.home.roomCta} →
            </a>
            <a href="#metrics" className="hype-button hype-button--ghost">
              {chrome.checkNumbers}
            </a>
          </div>

          <p className="hype-trust">{chrome.trust}</p>
        </section>

        <section
          id="metrics"
          className="hype-metrics scroll-mt-24"
          aria-label={chrome.metricsAria}
        >
          <div>
            <strong>5</strong>
            <span>{chrome.rooms}</span>
          </div>
          <div>
            <strong>{projectCount}</strong>
            <span>{chrome.projects}</span>
          </div>
          <div>
            <strong>{posts.length}</strong>
            <span>{chrome.posts}</span>
          </div>
          <div>
            <strong>1</strong>
            <span>{chrome.styleCookie}</span>
          </div>
          <div>
            <strong>0</strong>
            <span>{chrome.trackingScripts}</span>
          </div>
        </section>

        <section id="units" className="hype-section scroll-mt-24" aria-labelledby="hype-units">
          <div className="hype-section-head">
            <p className="hype-kicker">00 / {copy.home.roomsLabel}</p>
            <h2 id="hype-units" className="hype-heading hype-heading--small">
              {copy.home.roomsTitle}
            </h2>
            <p>{copy.home.roomsIntro}</p>
          </div>

          <div className="hype-cards">
            {hotbar.map((room) => (
              <Link key={room.key} href={room.href} className="hype-card">
                <p className="hype-card-index">{room.index}</p>
                <h3>{room.label}</h3>
                <p className="hype-card-teaser">{room.teaser}</p>
                <p className="hype-card-tags">{room.tags.join(" · ")}</p>
                <span className="hype-card-cta">{copy.home.roomCta} →</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="hype-section hype-section--quote" aria-label={chrome.quoteAria}>
          <blockquote className="hype-quote">
            <p>{chrome.quote}</p>
            <footer>{chrome.quoteAttribution}</footer>
          </blockquote>
        </section>

        <section className="hype-section" aria-labelledby="hype-roadmap">
          <div className="hype-section-head">
            <p className="hype-kicker">01 / {copy.home.nowLabel}</p>
            <h2 id="hype-roadmap" className="hype-heading hype-heading--small">
              {copy.home.nowTitle}
            </h2>
            <p>{copy.home.nowIntro}</p>
          </div>

          <ol className="hype-roadmap">
            {now.map((entry, index) => (
              <li key={entry.title}>
                <span className="hype-roadmap-index">Q{index + 1}</span>
                <div>
                  <h3>{entry.title}</h3>
                  <p className="hype-roadmap-tag">{entry.tag}</p>
                  <p>{entry.text}</p>
                </div>
                <span className="hype-roadmap-state">{chrome.inProgress}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="hype-section" aria-labelledby="hype-insights">
          <div className="hype-section-head">
            <p className="hype-kicker">02 / {copy.home.journalLabel}</p>
            <h2 id="hype-insights" className="hype-heading hype-heading--small">
              {copy.home.journalTitle}
            </h2>
            <p>{copy.home.journalIntro}</p>
          </div>

          {posts.length > 0 ? (
            <>
              <ol className="hype-posts">
                {posts.map((post) => (
                  <li key={post.slug}>
                    <ArticleCard post={post} locale={locale} />
                  </li>
                ))}
              </ol>
              <p className="hype-more">
                <Link href={hotbar[2].href}>{copy.home.allPosts} →</Link>
              </p>
            </>
          ) : (
            <div className="hype-empty">
              <p className="hype-kicker">{copy.blog.emptyLabel}</p>
              <h3>{copy.home.journalEmptyTitle}</h3>
              <p>{copy.home.journalEmptyText}</p>
              <p>{copy.home.journalEmptyNote}</p>
              <Link href={hotbar[2].href} className="hype-button hype-button--ghost">
                {copy.home.allPosts}
              </Link>
            </div>
          )}
        </section>

        <section className="hype-cta-band" aria-labelledby="hype-cta">
          <h2 id="hype-cta">{chrome.ctaTitle}</h2>
          <p>{chrome.ctaText}</p>
          <Link href={hotbar[4].href} className="hype-button">
            {copy.nav.work} →
          </Link>
        </section>
      </div>
    </SiteShell>
  );
}
