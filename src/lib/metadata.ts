import type { Metadata } from "next";

import { openGraphLocale, type Locale } from "./locale";
import { SITE } from "./site";

export type OgImage = {
  url: string;
  alt: string;
  width?: number;
  height?: number;
};

type PageMetadataInput = {
  locale: Locale;
  title: string | { absolute: string };
  description: string;
  path: string;
  alternates: Partial<Record<Locale, string>>;
  type?: "website" | "article";
  image?: OgImage;
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  section?: string;
  robots?: Metadata["robots"];
};

export function defaultOgImage(locale: Locale): OgImage {
  return {
    url: SITE.defaultOgImage,
    alt: SITE.defaultOgImageAlt[locale],
    width: 1200,
    height: 630,
  };
}

export function pageMetadata({
  locale,
  title,
  description,
  path,
  alternates,
  type = "website",
  image,
  publishedTime,
  modifiedTime,
  authors,
  section,
  robots,
}: PageMetadataInput): Metadata {
  const ogTitle =
    typeof title === "string" ? title : title.absolute;
  const alternateLocales = (["de", "en"] as const)
    .filter((candidate) => candidate !== locale && alternates[candidate])
    .map((candidate) => openGraphLocale[candidate]);

  const languages = Object.fromEntries(
    Object.entries(alternates).filter(([, value]) => Boolean(value)),
  ) as Record<string, string>;

  const defaultAlternate = alternates.de ?? alternates.en;

  if (defaultAlternate) {
    languages["x-default"] = defaultAlternate;
  }

  const images = image
    ? [
        {
          url: image.url,
          width: image.width,
          height: image.height,
          alt: image.alt,
        },
      ]
    : undefined;

  return {
    title,
    description,
    alternates: {
      canonical: path,
      languages,
    },
    robots,
    openGraph: {
      type,
      title: ogTitle,
      description,
      url: path,
      siteName: SITE.name,
      locale: openGraphLocale[locale],
      alternateLocale:
        alternateLocales.length > 0 ? alternateLocales : undefined,
      images,
      ...(type === "article"
        ? {
            publishedTime,
            modifiedTime,
            authors,
            section,
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: image ? [image.url] : undefined,
    },
  };
}
