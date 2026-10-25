import Link from "next/link";

import { ArticleCard } from "@/components/article-card";
import { SiteShell } from "@/components/site-shell";
import { homePath } from "@/lib/routes";
import type { ThemeHomeProps } from "@/themes/types";

import { getHomeData } from "./data";

export function MinecraftHome({ locale, theme }: ThemeHomeProps) {
  const { copy, posts, now, hotbar } = getHomeData(locale, theme);
  const alternateHref = homePath(locale === "de" ? "en" : "de");

  return (
    <SiteShell locale={locale} alternateHref={alternateHref} current="home" theme={theme}>
      <div className="mc-page">
        <section className="mc-hero" aria-labelledby="mc-title">
          <div className="mc-hero-main">
            <p className="mc-kicker">{copy.home.eyebrow}</p>
            <h1 id="mc-title" className="mc-heading">
              {copy.home.title}
              <span>{copy.home.accent}</span>
            </h1>

            <div className="mc-book">
              {copy.home.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mc-actions">
              <a href="#rooms" className="mc-button">
                {copy.home.roomCta}
              </a>
              <Link href={hotbar[2].href} className="mc-button mc-button--ghost">
                {copy.nav.journal}
              </Link>
            </div>
          </div>

          <aside className="mc-inventory" aria-label={copy.home.marginalLabel}>
            <p className="mc-inventory-title">{copy.home.marginalLabel}</p>
            <ul>
              {copy.home.marginalFacts.map((fact, index) => (
                <li key={fact.term}>
                  <span className="mc-slot-number">{index + 1}</span>
                  <span className="mc-slot-term">{fact.term}</span>
                  <span className="mc-slot-value">{fact.value}</span>
                </li>
              ))}
            </ul>
            <p className="mc-inventory-note">{copy.home.marginalNote}</p>
            <p className="mc-inventory-stamp">{copy.home.marginalStamp}</p>
          </aside>
        </section>

        <section id="rooms" className="mc-section scroll-mt-24" aria-labelledby="mc-rooms">
          <div className="mc-section-head">
            <p className="mc-kicker">00 / {copy.home.roomsLabel}</p>
            <h2 id="mc-rooms" className="mc-heading mc-heading--small">
              {copy.home.roomsTitle}
            </h2>
            <p>{copy.home.roomsIntro}</p>
          </div>

          <div className="mc-blocks">
            {hotbar.map((room) => (
              <Link key={room.key} href={room.href} className="mc-block">
                <span className="mc-block-corner" aria-hidden="true" />
                <p className="mc-block-index">{room.index}</p>
                <h3>{room.label}</h3>
                <p className="mc-block-teaser">{room.teaser}</p>
                <p className="mc-block-tags">{room.tags.join(" · ")}</p>
                <span className="mc-block-cta">{copy.home.roomCta} →</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mc-section mc-section--dirt" aria-labelledby="mc-now">
          <div className="mc-section-head">
            <p className="mc-kicker">01 / {copy.home.nowLabel}</p>
            <h2 id="mc-now" className="mc-heading mc-heading--small">
              {copy.home.nowTitle}
            </h2>
            <p>{copy.home.nowIntro}</p>
          </div>

          <ol className="mc-crafting">
            {now.map((entry, index) => (
              <li key={entry.title}>
                <span className="mc-craft-slot" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3>{entry.title}</h3>
                  <p className="mc-tag">{entry.tag}</p>
                  <p>{entry.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="mc-section" aria-labelledby="mc-journal">
          <div className="mc-section-head">
            <p className="mc-kicker">02 / {copy.home.journalLabel}</p>
            <h2 id="mc-journal" className="mc-heading mc-heading--small">
              {copy.home.journalTitle}
            </h2>
            <p>{copy.home.journalIntro}</p>
          </div>

          {posts.length > 0 ? (
            <>
              <ol className="mc-posts">
                {posts.map((post) => (
                  <li key={post.slug}>
                    <ArticleCard post={post} locale={locale} />
                  </li>
                ))}
              </ol>
              <p className="mc-more">
                <Link href={hotbar[2].href}>{copy.home.allPosts} →</Link>
              </p>
            </>
          ) : (
            <div className="mc-empty">
              <p className="mc-empty-label">{copy.blog.emptyLabel}</p>
              <h3>{copy.home.journalEmptyTitle}</h3>
              <p>{copy.home.journalEmptyText}</p>
              <p>{copy.home.journalEmptyNote}</p>
              <Link href={hotbar[2].href}>{copy.home.allPosts} →</Link>
            </div>
          )}
        </section>
      </div>
    </SiteShell>
  );
}
