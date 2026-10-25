import Link from "next/link";

import { ArticleCard } from "@/components/article-card";
import { SiteShell } from "@/components/site-shell";
import { homePath } from "@/lib/routes";
import { themeChrome } from "@/themes/chrome";
import type { ThemeHomeProps } from "@/themes/types";

import { getHomeData } from "./data";

export function JtlNovaHome({ locale, theme }: ThemeHomeProps) {
  const { copy, posts, now, hotbar } = getHomeData(locale, theme);
  const alternateHref = homePath(locale === "de" ? "en" : "de");
  const chrome = themeChrome["jtl-nova"][locale];

  return (
    <SiteShell locale={locale} alternateHref={alternateHref} current="home" theme={theme}>
      <div className="shop-page">
        <p className="shop-breadcrumb">
          {copy.nav.home} <span aria-hidden="true">/</span>{" "}
          {copy.brand.subtitle}
        </p>

        <section className="shop-hero" aria-labelledby="shop-title">
          <div className="shop-hero-media" aria-hidden="true">
            <span className="shop-hero-block shop-hero-block--a" />
            <span className="shop-hero-block shop-hero-block--b" />
            <span className="shop-hero-block shop-hero-block--c" />
            <span className="shop-hero-caption">TCTCL / {copy.brand.subtitle}</span>
          </div>

          <div className="shop-hero-copy">
            <p className="shop-kicker">{copy.home.eyebrow}</p>
            <h1 id="shop-title" className="shop-heading">
              {copy.home.title}{" "}
              <span>{copy.home.accent}</span>
            </h1>

            <div className="shop-intro">
              {copy.home.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="shop-actions">
              <a href="#rooms" className="shop-button">
                {copy.home.roomCta}
              </a>
              <Link href={hotbar[2].href} className="shop-button shop-button--ghost">
                {copy.nav.journal}
              </Link>
            </div>
          </div>

          <aside className="shop-specs" aria-label={copy.home.marginalLabel}>
            <p className="shop-specs-title">{copy.home.marginalLabel}</p>
            <dl>
              {copy.home.marginalFacts.map((fact) => (
                <div key={fact.term}>
                  <dt>{fact.term}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
            <p className="shop-specs-note">{copy.home.marginalNote}</p>
          </aside>
        </section>

        <nav className="shop-chip-row" aria-label={copy.home.roomsLabel}>
          <p>{copy.home.roomsLabel}</p>
          {hotbar.map((room) => (
            <Link key={room.key} href={room.href} className="shop-chip">
              {room.label}
            </Link>
          ))}
        </nav>

        <section id="rooms" className="shop-section scroll-mt-24" aria-labelledby="shop-rooms">
          <div className="shop-section-head">
            <p className="shop-kicker">00 / {copy.home.roomsLabel}</p>
            <h2 id="shop-rooms" className="shop-heading shop-heading--small">
              {copy.home.roomsTitle}
            </h2>
            <p>{copy.home.roomsIntro}</p>
          </div>

          <div className="shop-cards">
            {hotbar.map((room) => (
              <Link key={room.key} href={room.href} className="shop-card">
                <div className="shop-card-media" aria-hidden="true">
                  <span>{room.index}</span>
                </div>
                <div className="shop-card-body">
                  <p className="shop-card-sku">
                    {chrome.sku} TCTCL-{room.index}
                  </p>
                  <h3>{room.label}</h3>
                  <p className="shop-card-teaser">{room.teaser}</p>
                  <p className="shop-card-tags">{room.tags.join(" · ")}</p>
                  <p className="shop-card-cta">{copy.home.roomCta} →</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="shop-section shop-section--tinted" aria-labelledby="shop-now">
          <div className="shop-section-head">
            <p className="shop-kicker">01 / {copy.home.nowLabel}</p>
            <h2 id="shop-now" className="shop-heading shop-heading--small">
              {copy.home.nowTitle}
            </h2>
            <p>{copy.home.nowIntro}</p>
          </div>

          <ol className="shop-now-list">
            {now.map((entry, index) => (
              <li key={entry.title}>
                <span className="shop-now-index">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{entry.title}</h3>
                  <p className="shop-now-tag">{entry.tag}</p>
                </div>
                <p className="shop-now-text">{entry.text}</p>
                <span className="shop-now-state">{chrome.inProgress}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="shop-section" aria-labelledby="shop-journal">
          <div className="shop-section-head">
            <p className="shop-kicker">02 / {copy.home.journalLabel}</p>
            <h2 id="shop-journal" className="shop-heading shop-heading--small">
              {copy.home.journalTitle}
            </h2>
            <p>{copy.home.journalIntro}</p>
          </div>

          {posts.length > 0 ? (
            <>
              <ol className="shop-posts">
                {posts.map((post) => (
                  <li key={post.slug}>
                    <ArticleCard post={post} locale={locale} />
                  </li>
                ))}
              </ol>
              <p className="shop-more">
                <Link href={hotbar[2].href}>{copy.home.allPosts} →</Link>
              </p>
            </>
          ) : (
            <div className="shop-empty">
              <p className="shop-kicker">{copy.blog.emptyLabel}</p>
              <h3>{copy.home.journalEmptyTitle}</h3>
              <p>{copy.home.journalEmptyText}</p>
              <p>{copy.home.journalEmptyNote}</p>
              <Link href={hotbar[2].href} className="shop-button shop-button--ghost">
                {copy.home.allPosts}
              </Link>
            </div>
          )}
        </section>
      </div>
    </SiteShell>
  );
}
