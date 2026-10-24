import Link from "next/link";

import { ArticleBreadcrumbs } from "@/components/breadcrumbs";
import { ArticleCard } from "@/components/article-card";
import { CopyCodeEnhancer } from "@/components/copy-code-enhancer";
import { JsonLd } from "@/components/json-ld";
import { SiteShell } from "@/components/site-shell";
import { TableOfContents } from "@/components/table-of-contents";
import { getCopy } from "@/content/site-copy";
import {
  getRelatedPosts,
  getTranslation,
  renderPost,
  type Post,
} from "@/lib/content";
import { formatDate, formatShortDate } from "@/lib/format";
import { blogPath, postPath } from "@/lib/routes";
import { absoluteUrl } from "@/lib/site";
import {
  articleStructuredData,
  breadcrumbStructuredData,
} from "@/lib/structured-data";

export async function ArticlePage({ post }: { post: Post }) {
  const locale = post.language;
  const copy = getCopy(locale);
  const { html, headings } = await renderPost(post);
  const translation = getTranslation(post);
  const related = getRelatedPosts(post);
  const articlePath = postPath(locale, post.slug);
  const canonicalUrl = post.canonicalUrl
    ? absoluteUrl(post.canonicalUrl)
    : absoluteUrl(articlePath);
  const translationHref = translation
    ? postPath(translation.language, translation.slug)
    : null;

  return (
    <SiteShell
      locale={locale}
      alternateHref={translationHref}
      current="article"
    >
      <JsonLd
        id="article-jsonld"
        data={articleStructuredData(post, canonicalUrl)}
      />
      <JsonLd
        id="breadcrumb-jsonld"
        data={breadcrumbStructuredData([
          {
            name: copy.article.breadcrumbHome,
            url: absoluteUrl(locale === "de" ? "/" : "/en"),
          },
          {
            name: copy.article.breadcrumbBlog,
            url: absoluteUrl(blogPath(locale)),
          },
          {
            name: post.title,
            url: canonicalUrl,
          },
        ])}
      />

      <div className="mx-auto max-w-6xl px-5 pt-8 md:px-8">
        <ArticleBreadcrumbs locale={locale} title={post.title} />

        <div className="mt-8 grid gap-4 border-t border-border pt-6 md:grid-cols-12 md:gap-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-blood md:col-span-3">
            {post.categories.length > 0
              ? post.categories.join(" / ")
              : copy.article.breadcrumbBlog}
          </p>
          <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground md:col-span-9 md:text-right">
            {copy.article.by} {post.author}
            <span aria-hidden="true" className="mx-2 text-blood">
              /
            </span>
            <time dateTime={post.date}>{formatShortDate(post.date, locale)}</time>
            <span aria-hidden="true" className="mx-2 text-blood">
              /
            </span>
            {post.readingTime} {copy.article.minRead}
          </p>
        </div>

        <article className="mt-8 grid gap-10 lg:grid-cols-12 lg:gap-10">
          <div className="min-w-0 lg:col-span-8">
            <header>
              <h1 className="max-w-3xl font-serif text-[clamp(2.3rem,5.4vw,4.2rem)] font-semibold leading-[1.03] tracking-[-0.035em]">
                {post.title}
              </h1>
              <p className="mt-6 max-w-2xl border-l-2 border-blood pl-4 font-serif text-lg leading-relaxed text-muted-foreground sm:text-xl">
                {post.description}
              </p>
              <dl className="mt-8 flex flex-wrap gap-x-8 gap-y-3 border-y border-border py-3 font-mono text-[9px] uppercase tracking-[0.15em] text-muted-foreground">
                <div className="flex gap-2">
                  <dt>{copy.article.publishedOn}</dt>
                  <dd className="text-foreground">
                    <time dateTime={post.date}>
                      {formatDate(post.date, locale)}
                    </time>
                  </dd>
                </div>
                {post.updatedAt ? (
                  <div className="flex gap-2">
                    <dt>{copy.article.updatedOn}</dt>
                    <dd className="text-foreground">
                      <time dateTime={post.updatedAt}>
                        {formatDate(post.updatedAt, locale)}
                      </time>
                    </dd>
                  </div>
                ) : null}
              </dl>
            </header>

            {post.image ? (
              <figure className="mt-10">
                {/* The exact intrinsic size is unknown, so keep the natural ratio. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.image}
                  alt={post.imageAlt ?? ""}
                  loading="lazy"
                  decoding="async"
                  className="w-full border border-border"
                />
              </figure>
            ) : null}

            <TableOfContents
              headings={headings}
              locale={locale}
              variant="inline"
            />

            <div
              id="article-content"
              className="prose-tctcl mt-10"
              dangerouslySetInnerHTML={{ __html: html }}
            />

            <CopyCodeEnhancer
              containerId="article-content"
              contentKey={`${locale}-${post.slug}-${post.updatedAt ?? post.date}`}
              copyLabel={copy.article.copyCode}
              copiedLabel={copy.article.copiedCode}
              errorLabel={copy.article.copyError}
            />

            {translation && translationHref ? (
              <aside className="mt-12 border-l-2 border-blood pl-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                  {copy.article.translationNotice}
                </p>
                <Link
                  href={translationHref}
                  hrefLang={translation.language}
                  lang={translation.language}
                  className="editorial-link mt-2 inline-block font-mono text-[10px] uppercase tracking-[0.16em] text-blood"
                >
                  {copy.article.translationLink} →
                </Link>
              </aside>
            ) : null}

            {post.tags.length > 0 ? (
              <div className="mt-12 border-t border-border pt-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-blood">
                  {copy.article.tagsLabel}
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <li
                      key={tag}
                      className="border border-border px-2 py-1 font-mono text-[9px] uppercase tracking-[0.12em] text-muted-foreground"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {related.length > 0 ? (
              <section
                aria-labelledby="related-heading"
                className="mt-16 border-t border-border pt-8"
              >
                <h2
                  id="related-heading"
                  className="font-serif text-3xl leading-tight tracking-[-0.025em]"
                >
                  {copy.article.relatedTitle}
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {copy.article.relatedIntro}
                </p>
                <ol className="mt-6 border-b border-border">
                  {related.map((entry) => (
                    <li key={entry.slug}>
                      <ArticleCard post={entry} locale={locale} />
                    </li>
                  ))}
                </ol>
              </section>
            ) : null}

            <p className="mt-12">
              <Link
                href={blogPath(locale)}
                className="editorial-link font-mono text-[10px] uppercase tracking-[0.16em] text-blood"
              >
                ← {copy.article.backToBlog}
              </Link>
            </p>
          </div>

          <div className="lg:col-span-3 lg:col-start-10">
            <TableOfContents
              headings={headings}
              locale={locale}
              variant="sidebar"
            />
          </div>
        </article>
      </div>
    </SiteShell>
  );
}
