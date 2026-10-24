import fs from "node:fs";
import path from "node:path";

import matter from "gray-matter";
import { z } from "zod";

import { blogPagePath, blogPath } from "@/lib/routes";
import { locales, type Locale } from "@/lib/locale";

import {
  postFrontmatterSchema,
  type Heading,
  type Post,
  type RenderedPost,
} from "./schema";

const CONTENT_ROOT = path.join(process.cwd(), "content", "blog");
const WORDS_PER_MINUTE = 200;

function contentDirectory(locale: Locale): string {
  return path.join(CONTENT_ROOT, locale);
}

function countWords(body: string): number {
  return body.trim().split(/\s+/).filter(Boolean).length;
}

function readingTime(body: string): number {
  return Math.max(1, Math.round(countWords(body) / WORDS_PER_MINUTE));
}

function normalizeDates(data: Record<string, unknown>): Record<string, unknown> {
  // js-yaml turns unquoted ISO dates into Date objects. The schema and the
  // rest of the pipeline expect the documented YYYY-MM-DD strings.
  const normalized = { ...data };

  for (const key of ["date", "updatedAt"] as const) {
    const value = normalized[key];

    if (value instanceof Date && !Number.isNaN(value.getTime())) {
      normalized[key] = value.toISOString().slice(0, 10);
    }
  }

  return normalized;
}

function formatZodError(error: z.ZodError): string {
  return error.issues
    .map((issue) => {
      const where = issue.path.length > 0 ? ` (${issue.path.join(".")})` : "";
      return `${issue.message}${where}`;
    })
    .join("\n");
}

function readPostsForLocale(locale: Locale): Post[] {
  const directory = contentDirectory(locale);

  if (!fs.existsSync(directory)) {
    return [];
  }

  const files = fs
    .readdirSync(directory, { withFileTypes: true })
    .filter(
      (entry) =>
        entry.isFile() &&
        entry.name.endsWith(".md") &&
        !entry.name.startsWith("_") &&
        !entry.name.startsWith("."),
    )
    .map((entry) => entry.name)
    .sort();

  return files.map((file) => {
    const filePath = path.join(directory, file);
    const source = fs.readFileSync(filePath, "utf8");
    const relativePath = path.relative(process.cwd(), filePath);

    let parsed: matter.GrayMatterFile<string>;

    try {
      parsed = matter(source);
    } catch (error) {
      throw new Error(
        `Could not parse frontmatter in ${relativePath}: ${String(error)}`,
      );
    }

    const result = postFrontmatterSchema.safeParse(normalizeDates(parsed.data));

    if (!result.success) {
      throw new Error(
        `Invalid frontmatter in ${relativePath}:\n${formatZodError(result.error)}`,
      );
    }

    const data = result.data;
    const slugFromFile = file.replace(/\.md$/, "");

    if (data.slug !== slugFromFile) {
      throw new Error(
        `Invalid frontmatter in ${relativePath}: slug "${data.slug}" must match the file name "${slugFromFile}".`,
      );
    }

    if (data.language !== locale) {
      throw new Error(
        `Invalid frontmatter in ${relativePath}: language is "${data.language}" but the file lives in the "${locale}" folder.`,
      );
    }

    if (!parsed.content.trim()) {
      throw new Error(`The article in ${relativePath} has no body.`);
    }

    return {
      ...data,
      body: parsed.content,
      filePath: relativePath,
      readingTime: readingTime(parsed.content),
      wordCount: countWords(parsed.content),
    };
  });
}

function assertUniquePosts(posts: Post[], locale: Locale): void {
  const slugs = new Map<string, string>();
  const translationKeys = new Map<string, string>();

  for (const post of posts) {
    const existingSlug = slugs.get(post.slug);
    if (existingSlug) {
      throw new Error(
        `Duplicate slug "${post.slug}" in ${locale}: ${existingSlug} and ${post.filePath}.`,
      );
    }
    slugs.set(post.slug, post.filePath);

    const existingTranslation = translationKeys.get(post.translationKey);
    if (existingTranslation) {
      throw new Error(
        `Duplicate translationKey "${post.translationKey}" in ${locale}: ${existingTranslation} and ${post.filePath}. Each language may only have one article per translationKey.`,
      );
    }
    translationKeys.set(post.translationKey, post.filePath);
  }
}

const markdownLinkPattern =
  /(?<!!)\[[^\]]*\]\(([^)\s]+)(?:\s+["'][^"']*["'])?\)/g;

function validateInternalLinks(
  post: Post,
  publishedByLocale: Record<Locale, Post[]>,
): void {
  for (const match of post.body.matchAll(markdownLinkPattern)) {
    const rawTarget = match[1];

    if (
      rawTarget.startsWith("#") ||
      rawTarget.startsWith("http://") ||
      rawTarget.startsWith("https://") ||
      rawTarget.startsWith("mailto:") ||
      rawTarget.startsWith("tel:")
    ) {
      continue;
    }

    if (!rawTarget.startsWith("/")) {
      throw new Error(
        `Invalid link "${rawTarget}" in ${post.filePath}: internal links must start with "/". Put the raw URL inside backticks or use an absolute https:// URL if it is not a site link.`,
      );
    }

    const target = rawTarget.split("#")[0].split("?")[0];

    if (
      target === "/" ||
      target === "/en" ||
      target === "/blog" ||
      target === "/en/blog" ||
      target === "/og.png" ||
      target === "/favicon.svg" ||
      target === "/robots.txt" ||
      target === "/sitemap.xml"
    ) {
      continue;
    }

    const postMatch = target.match(/^\/(?:(en)\/)?blog\/([^/]+)$/);

    if (postMatch) {
      const targetLocale: Locale = postMatch[1] ? "en" : "de";
      const targetSlug = postMatch[2];
      const exists = publishedByLocale[targetLocale].some(
        (candidate) => candidate.slug === targetSlug,
      );

      if (!exists) {
        throw new Error(
          `Broken article link "${rawTarget}" in ${post.filePath}: no published ${targetLocale} article has the slug "${targetSlug}".`,
        );
      }
      continue;
    }

    const pageMatch = target.match(/^\/(?:(en)\/)?blog\/(seite|page)\/(\d+)$/);

    if (pageMatch) {
      const targetLocale: Locale = pageMatch[1] ? "en" : "de";
      const expectedSegment = targetLocale === "de" ? "seite" : "page";
      const page = Number(pageMatch[3]);
      const pageCount = Math.max(
        1,
        Math.ceil(publishedByLocale[targetLocale].length / BLOG_PAGE_SIZE),
      );

      if (
        pageMatch[2] !== expectedSegment ||
        page < 2 ||
        page > pageCount
      ) {
        throw new Error(
          `Broken pagination link "${rawTarget}" in ${post.filePath}: use ${blogPagePath(targetLocale, 2)} as the pattern and stay within the published page count (${pageCount}).`,
        );
      }
      continue;
    }

    if (target === blogPath("de") || target === blogPath("en")) {
      continue;
    }

    throw new Error(
      `Unknown internal link "${rawTarget}" in ${post.filePath}. Add the route to validateInternalLinks in src/lib/content/index.ts if it is genuinely public.`,
    );
  }
}

function validateRelatedPosts(
  posts: Post[],
  publishedByLocale: Record<Locale, Post[]>,
  locale: Locale,
): void {
  const publishedKeys = new Set(
    publishedByLocale[locale].map((post) => post.translationKey),
  );

  for (const post of publishedByLocale[locale]) {
    for (const relatedKey of post.relatedArticles) {
      if (!publishedKeys.has(relatedKey)) {
        const belongsToAnotherLocale = publishedByLocale[
          locale === "de" ? "en" : "de"
        ].some((candidate) => candidate.translationKey === relatedKey);

        throw new Error(
          `Invalid relatedArticles entry "${relatedKey}" in ${post.filePath}: ${
            belongsToAnotherLocale
              ? `it exists in the other language, but not as a published ${locale} article.`
              : "no published article in this language uses that translationKey."
          }`,
        );
      }
    }
  }

  // Keep the parameter in the signature so callers cannot forget to validate
  // drafts as well; the duplicate check above already covers this locale.
  void posts;
}

function loadRaw(): Record<Locale, Post[]> {
  const postsByLocale = {
    de: readPostsForLocale("de"),
    en: readPostsForLocale("en"),
  } satisfies Record<Locale, Post[]>;

  for (const locale of locales) {
    assertUniquePosts(postsByLocale[locale], locale);
  }

  const publishedByLocale = {
    de: postsByLocale.de.filter((post) => !post.draft),
    en: postsByLocale.en.filter((post) => !post.draft),
  } satisfies Record<Locale, Post[]>;

  for (const locale of locales) {
    validateRelatedPosts(postsByLocale[locale], publishedByLocale, locale);
  }

  for (const post of [...publishedByLocale.de, ...publishedByLocale.en]) {
    validateInternalLinks(post, publishedByLocale);
  }

  return postsByLocale;
}

export const BLOG_PAGE_SIZE = 8;

export function getPublishedPosts(locale: Locale): Post[] {
  return loadRaw()[locale]
    .filter((post) => !post.draft)
    .sort((a, b) => {
      const byDate = b.date.localeCompare(a.date);
      return byDate !== 0 ? byDate : a.title.localeCompare(b.title);
    });
}

export function getPostBySlug(locale: Locale, slug: string): Post | null {
  return (
    getPublishedPosts(locale).find((post) => post.slug === slug) ?? null
  );
}

export function getTranslation(post: Post): Post | null {
  const other: Locale = post.language === "de" ? "en" : "de";
  return (
    getPublishedPosts(other).find(
      (candidate) => candidate.translationKey === post.translationKey,
    ) ?? null
  );
}

export function getRelatedPosts(post: Post): Post[] {
  const published = getPublishedPosts(post.language);
  const byKey = new Map(published.map((entry) => [entry.translationKey, entry]));

  return post.relatedArticles
    .map((key) => byKey.get(key))
    .filter((entry): entry is Post => Boolean(entry));
}

export function getBlogPageCount(locale: Locale): number {
  return Math.max(
    1,
    Math.ceil(getPublishedPosts(locale).length / BLOG_PAGE_SIZE),
  );
}

export function getAllPublishedPosts(): Post[] {
  const raw = loadRaw();
  return [...raw.de, ...raw.en]
    .filter((post) => !post.draft)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPostsForPage(locale: Locale, page: number): Post[] {
  const start = (page - 1) * BLOG_PAGE_SIZE;
  return getPublishedPosts(locale).slice(start, start + BLOG_PAGE_SIZE);
}

export type { Heading, Post, RenderedPost };
export { renderPost } from "./render";
