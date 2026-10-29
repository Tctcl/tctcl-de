import type { MetadataRoute } from "next";

import {
  getAllPublishedPosts,
  getBlogPageCount,
} from "@/lib/content";
import { locales, type Locale } from "@/lib/locale";
import {
  blogPagePath,
  homePath,
  postPath,
  roomIds,
  roomPath,
  stylePath,
} from "@/lib/routes";
import { absoluteUrl } from "@/lib/site";

function asDate(value: string): Date {
  return new Date(`${value}T00:00:00.000Z`);
}

function blogLanguages(page: number): Record<string, string> {
  const languages: Record<string, string> = {};

  for (const locale of locales) {
    if (getBlogPageCount(locale) >= page) {
      languages[locale] = absoluteUrl(blogPagePath(locale, page));
    }
  }

  return languages;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    entries.push({
      url: absoluteUrl(homePath(locale)),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          de: absoluteUrl(homePath("de")),
          en: absoluteUrl(homePath("en")),
        },
      },
    });

    for (const room of roomIds) {
      entries.push({
        url: absoluteUrl(roomPath(room, locale)),
        changeFrequency: "monthly",
        priority: 0.8,
        alternates: {
          languages: {
            de: absoluteUrl(roomPath(room, "de")),
            en: absoluteUrl(roomPath(room, "en")),
          },
        },
      });
    }

    entries.push({
      url: absoluteUrl(stylePath(locale)),
      changeFrequency: "monthly",
      priority: 0.6,
      alternates: {
        languages: {
          de: absoluteUrl(stylePath("de")),
          en: absoluteUrl(stylePath("en")),
        },
      },
    });

    const pageCount = getBlogPageCount(locale);

    for (let page = 1; page <= pageCount; page += 1) {
      entries.push({
        url: absoluteUrl(blogPagePath(locale, page)),
        changeFrequency: "weekly",
        priority: page === 1 ? 0.8 : 0.4,
        alternates: {
          languages: blogLanguages(page),
        },
      });
    }
  }

  const published = getAllPublishedPosts();
  const translationUrls = new Map<
    string,
    Partial<Record<Locale, string>>
  >();

  for (const post of published) {
    const existing = translationUrls.get(post.translationKey) ?? {};
    existing[post.language] = absoluteUrl(postPath(post.language, post.slug));
    translationUrls.set(post.translationKey, existing);
  }

  for (const post of published) {
    const translations = translationUrls.get(post.translationKey);
    const hasTranslation =
      translations && Object.keys(translations).length > 1;

    entries.push({
      url: absoluteUrl(postPath(post.language, post.slug)),
      lastModified: asDate(post.updatedAt ?? post.date),
      changeFrequency: "yearly",
      priority: 0.7,
      alternates: hasTranslation ? { languages: translations } : undefined,
    });
  }

  return entries;
}
