import Link from "next/link";

import { RoomMark } from "@/components/room-mark";
import { SiteShell } from "@/components/site-shell";
import { formatShortDate } from "@/lib/format";
import { blogPath, homePath, postPath, stylePath } from "@/lib/routes";
import { themeIds } from "@/lib/theme-ids";
import { themeChrome } from "@/themes/chrome";
import type { ThemeHomeProps } from "@/themes/types";

import { getHomeData } from "./data";

/**
 * A light storefront in the shape of the JTL Shop NOVA template: utility bar,
 * white header, category sidebar, product-like cards and a newsletter footer.
 * There is no check-out here, so every commerce slot states what it really is.
 */
export function JtlNovaHome({ locale, theme }: ThemeHomeProps) {
  const { copy, posts, now, rooms } = getHomeData(locale, theme);
  const alternateHref = homePath(locale === "de" ? "en" : "de");
  const chrome = themeChrome["jtl-nova"][locale];
  const journal = blogPath(locale);
  const styles = stylePath(locale);

  return (
    <SiteShell locale={locale} alternateHref={alternateHref} current="home" theme={theme}>
      <div className="shop-breadcrumb-band">
        <div className="nova-container">
          <nav aria-label={chrome.breadcrumb} className="shop-breadcrumb">
            <Link href={homePath(locale)}>{copy.nav.home}</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{copy.brand.subtitle}</span>
          </nav>
        </div>
      </div>

      <div className="nova-container shop-layout">
        <aside className="shop-sidebar" aria-label={chrome.categories}>
          <p className="shop-sidebar-title">{chrome.categories}</p>

          <ul className="shop-cats">
            <li>
              <span className="shop-cats-current" aria-current="page">
                {copy.nav.home}
              </span>
            </li>
            {rooms.map((room) => (
              <li key={room.key}>
                <Link href={room.href}>{room.label}</Link>
              </li>
            ))}
            <li>
              <Link href={journal}>{copy.nav.journal}</Link>
            </li>
            <li>
              <Link href={styles}>
                {chrome.styles} ({themeIds.length})
              </Link>
            </li>
          </ul>

          <div className="shop-sidebar-block">
            <p className="shop-sidebar-title">{chrome.stockHeading}</p>
            <dl className="shop-filter-list">
              <div>
                <dt>{chrome.stockLabel}</dt>
                <dd>{chrome.stockValue}</dd>
              </div>
              <div>
                <dt>{chrome.salesLabel}</dt>
                <dd>{chrome.salesValue}</dd>
              </div>
              <div>
                <dt>{chrome.price}</dt>
                <dd>{chrome.priceValue}</dd>
              </div>
              <div>
                <dt>{chrome.shipping}</dt>
                <dd>{chrome.shippingValue}</dd>
              </div>
            </dl>
          </div>

          <p className="shop-sidebar-note">{chrome.sidebarNote}</p>
        </aside>

        <div className="shop-main">
          <section className="shop-banner" aria-labelledby="shop-title">
            <div className="shop-banner-copy">
              <p className="shop-kicker">{copy.home.eyebrow}</p>
              <h1 id="shop-title" className="shop-banner-title">
                {copy.home.title} <span>{copy.home.accent}</span>
              </h1>
              <div className="shop-banner-intro">
                {copy.home.intro.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="shop-actions">
                <a href="#rooms" className="shop-button">
                  {copy.home.roomCta}
                </a>
                <Link href={journal} className="shop-button shop-button--ghost">
                  {copy.nav.journal}
                </Link>
              </div>
            </div>

            <aside
              className="shop-banner-facts"
              aria-label={copy.home.marginalLabel}
            >
              <p className="shop-kicker">{copy.home.marginalLabel}</p>
              <dl className="shop-facts">
                {copy.home.marginalFacts.map((fact) => (
                  <div key={fact.term}>
                    <dt>{fact.term}</dt>
                    <dd>{fact.value}</dd>
                  </div>
                ))}
                <div>
                  <dt>{chrome.price}</dt>
                  <dd>{chrome.priceValue}</dd>
                </div>
              </dl>
              <p className="shop-banner-note">{copy.home.marginalNote}</p>
            </aside>
          </section>

          <section
            id="rooms"
            className="shop-results scroll-mt-24"
            aria-labelledby="shop-rooms"
          >
            <div className="shop-results-head">
              <div>
                <p className="shop-kicker">01 / {chrome.catalog}</p>
                <h2 id="shop-rooms">{copy.home.roomsTitle}</h2>
                <p>{copy.home.roomsIntro}</p>
              </div>
              <p className="shop-result-count">
                {rooms.length} {chrome.categories}
              </p>
            </div>

            <div className="shop-toolbar">
              <p>
                <strong>{chrome.orderLabel}:</strong> {chrome.orderValue}
              </p>
              <Link href={styles}>
                {chrome.styles} ({themeIds.length}) <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="shop-cards">
              {rooms.map((room, index) => {
                const number = String(index + 1).padStart(2, "0");

                return (
                  <article key={room.key} className="shop-card">
                    <Link href={room.href} className="shop-card-link">
                      <div className="shop-card-media">
                        {index === 0 ? (
                          <span className="shop-ribbon">TCTCL</span>
                        ) : null}
                        <RoomMark
                          variant={room.key}
                          sizeClassName="shop-room-mark"
                        />
                        <span className="shop-card-index" aria-hidden="true">
                          {number}
                        </span>
                      </div>
                      <div className="shop-card-body">
                        <p className="shop-card-sku">
                          {chrome.sku} TCTCL-{number}
                        </p>
                        <h3 className="shop-card-title">{room.label}</h3>
                        <p className="shop-card-teaser">{room.teaser}</p>
                        <p className="shop-card-tags">{room.tags.join(" · ")}</p>
                        <p className="shop-card-price">{chrome.priceValue}</p>
                      </div>
                      <span className="shop-card-action">
                        {copy.home.roomCta} <span aria-hidden="true">→</span>
                      </span>
                    </Link>
                  </article>
                );
              })}
            </div>
          </section>

          <section className="shop-section" aria-labelledby="shop-now">
            <div className="shop-section-head">
              <div>
                <p className="shop-kicker">02 / {copy.home.nowLabel}</p>
                <h2 id="shop-now">{copy.home.nowTitle}</h2>
                <p>{copy.home.nowIntro}</p>
              </div>
              <p className="shop-section-count">
                {String(now.length).padStart(2, "0")} / {copy.home.nowLabel}
              </p>
            </div>

            <div className="shop-now-grid">
              {now.map((entry, index) => (
                <article key={entry.title} className="shop-now-card">
                  <span className="shop-now-index" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3>{entry.title}</h3>
                  <p className="shop-now-tag">{entry.tag}</p>
                  <p className="shop-now-text">{entry.text}</p>
                  <span className="shop-now-state">{chrome.inProgress}</span>
                </article>
              ))}
            </div>
          </section>

          <section className="shop-section" aria-labelledby="shop-journal">
            <div className="shop-section-head">
              <div>
                <p className="shop-kicker">03 / {copy.home.journalLabel}</p>
                <h2 id="shop-journal">{copy.home.journalTitle}</h2>
                <p>{copy.home.journalIntro}</p>
              </div>
              <Link href={journal}>
                {copy.home.allPosts} <span aria-hidden="true">→</span>
              </Link>
            </div>

            {posts.length > 0 ? (
              <div className="shop-journal-grid">
                {posts.map((post) => (
                  <article key={post.slug} className="shop-journal-card">
                    <time dateTime={post.date} className="shop-journal-date">
                      {formatShortDate(post.date, locale)}
                    </time>
                    <h3>
                      <Link href={postPath(locale, post.slug)}>
                        {post.title}
                      </Link>
                    </h3>
                    <p>{post.description}</p>
                    <span className="shop-journal-more" aria-hidden="true">
                      →
                    </span>
                  </article>
                ))}
              </div>
            ) : (
              <div className="shop-empty">
                <p className="shop-kicker">{copy.blog.emptyLabel}</p>
                <h3>{copy.blog.emptyTitle}</h3>
                <p>{copy.blog.emptyText}</p>
                <p className="shop-empty-note">{copy.blog.emptyNote}</p>
                <Link
                  href={journal}
                  className="shop-button shop-button--ghost"
                >
                  {copy.home.allPosts}
                </Link>
              </div>
            )}
          </section>
        </div>
      </div>
    </SiteShell>
  );
}
