import { notFound } from "next/navigation";

import { ArticleCard } from "@/components/article-card";
import { BlogPagination } from "@/components/blog-pagination";
import { EmptyState } from "@/components/empty-state";
import { JsonLd } from "@/components/json-ld";
import { SectionLabel } from "@/components/section-label";
import { SiteShell } from "@/components/site-shell";
import {
  getBlogPageCount,
  getPostsForPage,
  getPublishedPosts,
} from "@/lib/content";
import { otherLocale, type Locale } from "@/lib/locale";
import { blogPagePath, blogPath } from "@/lib/routes";
import { blogStructuredData } from "@/lib/structured-data";
import { defaultTheme, type ThemeId } from "@/lib/theme-ids";
import { getThemeCopy } from "@/themes/copy";

type BlogIndexPageProps = {
  locale: Locale;
  page: number;
  theme?: ThemeId;
};

export function BlogIndexPage({
  locale,
  page,
  theme = defaultTheme,
}: BlogIndexPageProps) {
  const copy = getThemeCopy(locale, theme);
  const pageCount = getBlogPageCount(locale);

  if (!Number.isInteger(page) || page < 1 || page > pageCount) {
    notFound();
  }

  const posts = getPostsForPage(locale, page);
  const total = getPublishedPosts(locale).length;
  const other = otherLocale(locale);
  const otherPageCount = getBlogPageCount(other);
  const alternateHref =
    page <= 1
      ? blogPath(other)
      : page <= otherPageCount
        ? blogPagePath(other, page)
        : blogPath(other);

  const title =
    page === 1
      ? copy.blog.title
      : copy.blog.pageTitle.replace("{page}", String(page));
  const intro = page === 1 ? copy.blog.intro : copy.blog.description;

  return (
    <SiteShell
      locale={locale}
      alternateHref={alternateHref}
      current="journal"
      theme={theme}
    >
      <JsonLd id="blog-jsonld" data={blogStructuredData(locale)} />

      <section className="mx-auto max-w-6xl px-5 pb-12 pt-12 sm:pt-16 md:px-8">
        <div className="grid gap-8 md:grid-cols-12 md:gap-6">
          <div className="md:col-span-3">
            <SectionLabel index={String(page).padStart(2, "0")}>
              {copy.blog.eyebrow}
            </SectionLabel>
          </div>

          <div className="md:col-span-8 md:col-start-5">
            <h1 className="max-w-3xl font-serif text-[clamp(2.4rem,5.6vw,4.4rem)] font-semibold leading-[1.02] tracking-[-0.035em]">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-[15.5px] leading-7 text-muted-foreground sm:text-base">
              {intro}
            </p>
            <p className="mt-6 font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
              {total} {total === 1 ? copy.blog.countOne : copy.blog.countMany}
              {pageCount > 1
                ? ` / ${copy.blog.page.replace("{page}", String(page))} ${pageCount}`
                : null}
            </p>
          </div>
        </div>
      </section>

      <section
        aria-label={copy.blog.eyebrow}
        className="mx-auto max-w-6xl px-5 pb-16 md:px-8 md:pb-24"
      >
        <div className="md:ml-[25%]">
          {posts.length > 0 ? (
            <ol className="border-b border-border">
              {posts.map((post) => (
                <li key={post.slug}>
                  <ArticleCard post={post} locale={locale} headingLevel={2} />
                </li>
              ))}
            </ol>
          ) : (
            <EmptyState
              indent={false}
              headingLevel={2}
              label={copy.blog.emptyLabel}
              title={copy.blog.emptyTitle}
              text={copy.blog.emptyText}
              note={copy.blog.emptyNote}
            />
          )}

          <BlogPagination locale={locale} page={page} pageCount={pageCount} />
        </div>
      </section>
    </SiteShell>
  );
}
