import Link from "next/link";

import { ArticleCard } from "@/components/article-card";
import { SiteShell } from "@/components/site-shell";
import { homePath } from "@/lib/routes";
import { themeChrome } from "@/themes/chrome";
import type { ThemeHomeProps } from "@/themes/types";

import { getHomeData } from "./data";

export function KonsoleHome({ locale, theme }: ThemeHomeProps) {
  const { copy, posts, now, hotbar } = getHomeData(locale, theme);
  const alternateHref = homePath(locale === "de" ? "en" : "de");
  const chrome = themeChrome.konsole[locale];

  return (
    <SiteShell locale={locale} alternateHref={alternateHref} current="home" theme={theme}>
      <div className="console-page">
        <section className="console-hero" aria-labelledby="console-title">
          <div className="console-window">
            <div className="console-window-bar">
              <span>{chrome.host}: ~</span>
              <span>bash</span>
            </div>
            <div className="console-window-body">
              <p className="console-line">
                <span className="console-user">{chrome.host}</span>:~$ whoami
              </p>
              <h1 id="console-title" className="console-heading">
                {copy.home.title}
                <br />
                <span>{copy.home.accent}</span>
              </h1>

              {copy.home.intro.map((paragraph, index) => (
                <p key={paragraph} className="console-output">
                  <span className="console-muted">
                    [{String(index + 1).padStart(2, "0")}]
                  </span>{" "}
                  {paragraph}
                </p>
              ))}

              <p className="console-line">
                <span className="console-user">{chrome.host}</span>:~${" "}
                <span className="console-command-text">cat note.txt</span>
              </p>
              <p className="console-output console-warning">
                {copy.home.marginalNote}
              </p>

              <p className="console-actions">
                <a href="#rooms" className="console-action">
                  cd ./{chrome.roomsDir}
                </a>
                <Link href={hotbar[2].href} className="console-action">
                  less ./journal
                </Link>
              </p>
            </div>
          </div>

          <aside className="console-aside" aria-label={copy.home.marginalLabel}>
            <p className="console-aside-title"># {copy.home.marginalLabel}</p>
            <dl>
              {copy.home.marginalFacts.map((fact) => (
                <div key={fact.term}>
                  <dt>{fact.term}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
            <p className="console-aside-stamp">{copy.home.marginalStamp}</p>
          </aside>
        </section>

        <section id="rooms" className="console-section scroll-mt-24" aria-labelledby="console-rooms">
          <p className="console-command-line">
            <span className="console-user">{chrome.host}</span>:~$ ls -la ./
            {chrome.roomsDir}
          </p>
          <h2 id="console-rooms" className="console-section-title">
            {copy.home.roomsTitle}
          </h2>
          <p className="console-section-intro">{copy.home.roomsIntro}</p>

          <div className="console-listing">
            <p className="console-listing-head" aria-hidden="true">
              drwxr-xr-x  tctcl  staff  {chrome.listingHint}
            </p>
            {hotbar.map((room) => (
              <Link key={room.key} href={room.href} className="console-entry">
                <span className="console-entry-index">[{room.index}]</span>
                <span className="console-entry-name">{room.label}/</span>
                <span className="console-entry-teaser">{room.teaser}</span>
                <span className="console-entry-arrow" aria-hidden="true">
                  →
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="console-section" aria-labelledby="console-now">
          <p className="console-command-line">
            <span className="console-user">{chrome.host}</span>:~$ tail -f
            now.log
          </p>
          <h2 id="console-now" className="console-section-title">
            {copy.home.nowTitle}
          </h2>
          <p className="console-section-intro">{copy.home.nowIntro}</p>

          <ol className="console-log">
            {now.map((entry, index) => (
              <li key={entry.title}>
                <span className="console-muted">
                  [{String(index + 1).padStart(2, "0")}]
                </span>{" "}
                <strong>{entry.title}</strong>{" "}
                <span className="console-tag">({entry.tag})</span>
                <span className="console-log-text">{entry.text}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="console-section" aria-labelledby="console-journal">
          <p className="console-command-line">
            <span className="console-user">{chrome.host}</span>:~$ ls
            ./journal
          </p>
          <h2 id="console-journal" className="console-section-title">
            {copy.home.journalTitle}
          </h2>
          <p className="console-section-intro">{copy.home.journalIntro}</p>

          {posts.length > 0 ? (
            <>
              <ol className="console-posts">
                {posts.map((post) => (
                  <li key={post.slug}>
                    <ArticleCard post={post} locale={locale} />
                  </li>
                ))}
              </ol>
              <p className="console-more">
                <Link href={hotbar[2].href}>$ ls ./journal →</Link>
              </p>
            </>
          ) : (
            <div className="console-empty">
              <p>$ ls ./journal</p>
              <p>{chrome.zeroPosts}</p>
              <p>{copy.home.journalEmptyText}</p>
              <Link href={hotbar[2].href}>{copy.home.allPosts} →</Link>
            </div>
          )}
        </section>
      </div>
    </SiteShell>
  );
}
