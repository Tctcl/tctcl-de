import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";

import { ArticlePage } from "@/components/article-page";
import { BlogIndexPage } from "@/components/blog-index-page";
import { HomePage } from "@/components/home-page";
import { ProjectsPage } from "@/components/projects-page";
import { AboutPage } from "@/components/about-page";
import { StyleGallery } from "@/components/style-gallery";
import { TinkeringPage } from "@/components/tinkering-page";
import { WorkPage } from "@/components/work-page";
import {
  getBlogPageCount,
  getPostBySlug,
  getPublishedPosts,
} from "@/lib/content";
import type { Locale } from "@/lib/locale";
import {
  blogPagePath,
  homePath,
  postPath,
  roomPath,
  stylePath,
  type RoomId,
} from "@/lib/routes";
import {
  articleMetadata,
  blogIndexMetadata,
  homeMetadata,
  roomMetadata,
  styleGalleryMetadata,
} from "@/lib/seo";
import {
  defaultTheme,
  themeIds,
  type ThemeId,
} from "@/lib/theme-ids";
import { themeCatalogById } from "@/themes/catalog";

export type ThemeRouteParams = {
  theme: string;
  path?: string[];
};

type ResolvedPage =
  | { kind: "home" }
  | { kind: "room"; room: RoomId }
  | { kind: "blog"; page: number }
  | { kind: "article"; slug: string }
  | { kind: "gallery" };

const roomSegments: Record<Locale, Record<string, RoomId>> = {
  de: {
    tuefteln: "tinkering",
    projekte: "projects",
    ueber: "about",
    arbeit: "work",
  },
  en: {
    tinkering: "tinkering",
    projects: "projects",
    about: "about",
    work: "work",
  },
};

function isTheme(value: string): value is ThemeId {
  return (themeIds as readonly string[]).includes(value);
}

export function resolveThemePage(
  locale: Locale,
  path: string[] | undefined,
): ResolvedPage | null {
  if (!path || path.length === 0) {
    return { kind: "home" };
  }

  if (path.length === 1) {
    const segment = path[0];
    const room = roomSegments[locale][segment];

    if (room) {
      return { kind: "room", room };
    }

    if (segment === (locale === "de" ? "stile" : "styles")) {
      return { kind: "gallery" };
    }

    if (segment === "blog") {
      return { kind: "blog", page: 1 };
    }

    return null;
  }

  if (path[0] !== "blog") {
    return null;
  }

  if (path.length === 2) {
    const post = getPostBySlug(locale, path[1]);
    return post ? { kind: "article", slug: post.slug } : null;
  }

  if (path.length === 3 && path[1] === (locale === "de" ? "seite" : "page")) {
    if (!/^\d+$/.test(path[2])) {
      return null;
    }

    const page = Number(path[2]);

    if (page < 1 || page > getBlogPageCount(locale)) {
      return null;
    }

    return { kind: "blog", page };
  }

  return null;
}

function cleanPathFor(locale: Locale, resolved: ResolvedPage): string {
  switch (resolved.kind) {
    case "home":
      return homePath(locale);
    case "room":
      return roomPath(resolved.room, locale);
    case "blog":
      return blogPagePath(locale, resolved.page);
    case "article":
      return postPath(locale, resolved.slug);
    case "gallery":
      return stylePath(locale);
  }
}

function baseMetadata(
  locale: Locale,
  resolved: ResolvedPage,
): Metadata {
  switch (resolved.kind) {
    case "home":
      return homeMetadata(locale);
    case "room":
      return roomMetadata(locale, resolved.room);
    case "blog":
      return blogIndexMetadata(locale, resolved.page);
    case "article": {
      const post = getPostBySlug(locale, resolved.slug);
      return post ? articleMetadata(post) : {};
    }
    case "gallery":
      return styleGalleryMetadata(locale);
  }
}

export async function themeInternalMetadata({
  locale,
  params,
}: {
  locale: Locale;
  params: Promise<ThemeRouteParams>;
}): Promise<Metadata> {
  const { theme, path } = await params;

  if (!isTheme(theme)) {
    return {};
  }

  const resolved = resolveThemePage(locale, path);

  if (!resolved) {
    return {};
  }

  const base = baseMetadata(locale, resolved);
  const canonical = cleanPathFor(locale, resolved);

  return {
    ...base,
    alternates: {
      ...base.alternates,
      canonical,
    },
    robots: {
      index: false,
      follow: true,
    },
  };
}

/**
 * Dark styles need a matching browser chrome and native control scheme.
 * The values come from the style catalog so they stay in one place.
 */
export async function themeInternalViewport({
  params,
}: {
  params: Promise<ThemeRouteParams>;
}): Promise<Viewport> {
  const { theme } = await params;
  const entry = themeCatalogById[isTheme(theme) ? theme : defaultTheme];

  return {
    width: "device-width",
    initialScale: 1,
    themeColor: entry.themeColor,
    colorScheme: entry.colorScheme,
  };
}

export function themeStaticParams(locale: Locale): ThemeRouteParams[] {
  const params: ThemeRouteParams[] = [];
  const rooms = Object.keys(roomSegments[locale]);
  const pageCount = getBlogPageCount(locale);
  const gallery = locale === "de" ? "stile" : "styles";
  const pageMarker = locale === "de" ? "seite" : "page";

  for (const theme of themeIds) {
    params.push({ theme, path: [] });

    for (const room of rooms) {
      params.push({ theme, path: [room] });
    }

    params.push({ theme, path: ["blog"] });

    for (let page = 2; page <= pageCount; page += 1) {
      params.push({ theme, path: ["blog", pageMarker, String(page)] });
    }

    for (const post of getPublishedPosts(locale)) {
      params.push({ theme, path: ["blog", post.slug] });
    }

    params.push({ theme, path: [gallery] });
  }

  return params;
}

export async function ThemeInternalPage({
  locale,
  params,
}: {
  locale: Locale;
  params: Promise<ThemeRouteParams>;
}) {
  const { theme, path } = await params;

  if (!isTheme(theme)) {
    notFound();
  }

  const resolved = resolveThemePage(locale, path);

  if (!resolved) {
    notFound();
  }

  switch (resolved.kind) {
    case "home":
      return <HomePage locale={locale} theme={theme} />;
    case "room":
      return <ThemedRoom locale={locale} room={resolved.room} theme={theme} />;
    case "blog":
      return <BlogIndexPage locale={locale} page={resolved.page} theme={theme} />;
    case "article": {
      const post = getPostBySlug(locale, resolved.slug);

      if (!post) {
        notFound();
      }

      return <ArticlePage post={post} theme={theme} />;
    }
    case "gallery":
      return <StyleGallery locale={locale} theme={theme} />;
  }
}

function ThemedRoom({
  locale,
  room,
  theme,
}: {
  locale: Locale;
  room: RoomId;
  theme: ThemeId;
}) {
  switch (room) {
    case "tinkering":
      return <TinkeringPage locale={locale} theme={theme} />;
    case "projects":
      return <ProjectsPage locale={locale} theme={theme} />;
    case "about":
      return <AboutPage locale={locale} theme={theme} />;
    case "work":
      return <WorkPage locale={locale} theme={theme} />;
  }
}
