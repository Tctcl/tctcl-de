import Link from "next/link";

import { ArticleCard } from "@/components/article-card";
import { SiteShell } from "@/components/site-shell";
import { homePath } from "@/lib/routes";
import type { ThemeHomeProps } from "@/themes/types";

import { getHomeData } from "./data";

export function PapierHome({ locale, theme }: ThemeHomeProps) {
  const { copy, posts, now, hotbar } = getHomeData(locale, theme);
  const alternateHref = homePath(locale === "de" ? "en" : "de");

  return (
    <SiteShell locale={locale} alternateHref={alternateHref} current="home" theme={theme}>
      <div className="paper-page">
        <section className="paper-hero" aria-labelledby="paper-title">
          <p className="paper-kicker">{copy.home.eyebrow}</p>
          <h1 id="paper-title" className="paper-heading">
            {copy.home.title}{" "}
            <span>{copy.home.accent}</span>
          </h1>

          <div className="paper-abstract">
            <p className="paper-abstract-label">
              {locale === "de" ? "Zusammenfassung" : "Abstract"}
            </p>
            {copy.home.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p className="paper-keywords">
              <span>{locale === "de" ? "Schlagworte" : "Keywords"}:</span>{" "}
              {hotbar
                .flatMap((room) => room.tags)
                .slice(0, 6)
                .join(", ")}
            </p>
          </div>
        </section>

        <div className="paper-layout">
          <div className="paper-body">
            <section id="rooms" className="paper-section scroll-mt-24" aria-labelledby="paper-contents">
              <p className="paper-section-number">1.</p>
              <h2 id="paper-contents">{copy.home.roomsTitle}</h2>
              <p className="paper-lede">{copy.home.roomsIntro}</p>

              <ol className="paper-toc">
                {hotbar.map((room, index) => (
                  <li key={room.key}>
                    <span className="paper-toc-index">1.{index + 1}</span>
                    <div>
                      <h3>
                        <Link href={room.href}>{room.label}</Link>
                      </h3>
                      <p>{room.teaser}</p>
                      <p className="paper-toc-tags">{room.tags.join(" · ")}</p>
                    </div>
                    <Link
                      href={room.href}
                      className="paper-toc-link"
                      aria-label={`${copy.home.roomCta}: ${room.label}`}
                    >
                      →
                    </Link>
                  </li>
                ))}
              </ol>
            </section>

            <section className="paper-section" aria-labelledby="paper-now">
              <p className="paper-section-number">2.</p>
              <h2 id="paper-now">{copy.home.nowTitle}</h2>
              <p className="paper-lede">{copy.home.nowIntro}</p>

              <ol className="paper-notes">
                {now.map((entry, index) => (
                  <li key={entry.title}>
                    <span className="paper-note-index">[{index + 1}]</span>
                    <div>
                      <h3>{entry.title}</h3>
                      <p className="paper-note-tag">{entry.tag}</p>
                      <p>{entry.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            <section className="paper-section" aria-labelledby="paper-journal">
              <p className="paper-section-number">3.</p>
              <h2 id="paper-journal">{copy.home.journalTitle}</h2>
              <p className="paper-lede">{copy.home.journalIntro}</p>

              {posts.length > 0 ? (
                <>
                  <ol className="paper-posts">
                    {posts.map((post) => (
                      <li key={post.slug}>
                        <ArticleCard post={post} locale={locale} />
                      </li>
                    ))}
                  </ol>
                  <p className="paper-more">
                    <Link href={hotbar[2].href}>{copy.home.allPosts} →</Link>
                  </p>
                </>
              ) : (
                <div className="paper-empty">
                  <p className="paper-kicker">{copy.blog.emptyLabel}</p>
                  <h3>{copy.home.journalEmptyTitle}</h3>
                  <p>{copy.home.journalEmptyText}</p>
                  <p>{copy.home.journalEmptyNote}</p>
                  <Link href={hotbar[2].href}>{copy.home.allPosts} →</Link>
                </div>
              )}
            </section>

            <p className="paper-endmark" aria-hidden="true">
              ❦
            </p>
          </div>

          <aside className="paper-margin" aria-label={copy.home.marginalLabel}>
            <p className="paper-margin-title">{copy.home.marginalLabel}</p>
            <dl>
              {copy.home.marginalFacts.map((fact) => (
                <div key={fact.term}>
                  <dt>{fact.term}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
            <p className="paper-margin-note">{copy.home.marginalNote}</p>
            <p className="paper-margin-stamp">{copy.home.marginalStamp}</p>
            <p className="paper-margin-folio">— 01 —</p>
          </aside>
        </div>
      </div>
    </SiteShell>
  );
}
