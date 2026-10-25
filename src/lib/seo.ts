import type { Metadata } from "next";

import { getCopy } from "@/content/site-copy";
import { getRoomCopy } from "@/content/rooms";
import {
  getBlogPageCount,
  getTranslation,
  type Post,
} from "@/lib/content";
import { locales, otherLocale, type Locale } from "@/lib/locale";
import { defaultOgImage, pageMetadata } from "@/lib/metadata";
import {
  blogPagePath,
  homePath,
  postPath,
  roomPath,
  stylePath,
  type RoomId,
} from "@/lib/routes";

export function homeMetadata(locale: Locale): Metadata {
  const copy = getCopy(locale);

  return pageMetadata({
    locale,
    title: { absolute: copy.meta.title },
    description: copy.meta.description,
    path: homePath(locale),
    alternates: {
      de: homePath("de"),
      en: homePath("en"),
    },
    image: {
      ...defaultOgImage(locale),
      alt: copy.meta.ogAlt,
    },
  });
}

export function roomMetadata(locale: Locale, room: RoomId): Metadata {
  const copy = getRoomCopy(locale, room);

  return pageMetadata({
    locale,
    title: copy.metaTitle,
    description: copy.metaDescription,
    path: roomPath(room, locale),
    alternates: {
      de: roomPath(room, "de"),
      en: roomPath(room, "en"),
    },
    image: defaultOgImage(locale),
  });
}

export function blogIndexMetadata(locale: Locale, page: number): Metadata {
  const copy = getCopy(locale);
  const firstPage = page <= 1;
  const alternates: Partial<Record<Locale, string>> = {};

  for (const candidate of locales) {
    if (firstPage || getBlogPageCount(candidate) >= page) {
      alternates[candidate] = blogPagePath(candidate, page);
    }
  }

  return pageMetadata({
    locale,
    title: firstPage
      ? copy.nav.journal
      : copy.blog.pageTitle.replace("{page}", String(page)),
    description: firstPage
      ? copy.blog.description
      : copy.blog.pageDescription.replace("{page}", String(page)),
    path: blogPagePath(locale, page),
    alternates,
    image: defaultOgImage(locale),
  });
}

export function styleGalleryMetadata(locale: Locale): Metadata {
  return pageMetadata({
    locale,
    title:
      locale === "de"
        ? "Stile — sieben Werkstätten"
        : "Styles — seven workshops",
    description:
      locale === "de"
        ? "Alle Stile der TCTCL-Werkstatt: Werkstatt, Konsole, Minecraft, JTL Nova, Hype, Retro 90s und Papier."
        : "All TCTCL workshop styles: Workshop, Terminal, Minecraft, JTL Nova, Hype, Retro 90s and Paper.",
    path: stylePath(locale),
    alternates: {
      de: stylePath("de"),
      en: stylePath("en"),
    },
    image: defaultOgImage(locale),
  });
}

export function articleMetadata(post: Post): Metadata {
  const locale = post.language;
  const translation = getTranslation(post);
  const alternates: Partial<Record<Locale, string>> = {
    [locale]: postPath(locale, post.slug),
  };

  if (translation) {
    alternates[otherLocale(locale)] = postPath(
      translation.language,
      translation.slug,
    );
  }

  const image = post.image
    ? { url: post.image, alt: post.imageAlt ?? post.title }
    : defaultOgImage(locale);

  return pageMetadata({
    locale,
    title: post.title,
    description: post.description,
    path: post.canonicalUrl ?? postPath(locale, post.slug),
    alternates,
    type: "article",
    image,
    publishedTime: `${post.date}T00:00:00.000Z`,
    modifiedTime: `${post.updatedAt ?? post.date}T00:00:00.000Z`,
    authors: [post.author],
    section: post.categories[0],
  });
}
