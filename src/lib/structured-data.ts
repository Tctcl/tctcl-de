import type { Post } from "@/lib/content";
import { blogPath } from "@/lib/routes";
import type { Locale } from "@/lib/locale";
import { absoluteUrl, personId, SITE, siteDescription, websiteId } from "@/lib/site";

export function personStructuredData(locale: Locale): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": personId(),
    name: SITE.author,
    alternateName: SITE.name,
    url: absoluteUrl("/"),
    jobTitle: SITE.jobTitle[locale],
    description: siteDescription(locale),
    knowsAbout: [...SITE.knowsAbout],
    image: absoluteUrl(SITE.defaultOgImage),
  };
}

export function websiteStructuredData(locale: Locale): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId(),
    url: absoluteUrl("/"),
    name: SITE.name,
    description: siteDescription(locale),
    inLanguage: ["de", "en"],
    publisher: {
      "@id": personId(),
    },
  };
}

export function blogStructuredData(locale: Locale): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${absoluteUrl(blogPath(locale))}#blog`,
    name: "Journal",
    description: siteDescription(locale),
    url: absoluteUrl(blogPath(locale)),
    inLanguage: locale,
    isPartOf: {
      "@id": websiteId(),
    },
    publisher: {
      "@id": personId(),
    },
  };
}

export function articleStructuredData(
  post: Post,
  url: string,
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updatedAt ?? post.date,
    author: {
      "@type": "Person",
      "@id": personId(),
      name: post.author,
      url: absoluteUrl("/"),
    },
    publisher: {
      "@id": personId(),
    },
    image: absoluteUrl(post.image ?? SITE.defaultOgImage),
    url,
    mainEntityOfPage: url,
    inLanguage: post.language,
    isPartOf: {
      "@id": `${absoluteUrl(blogPath(post.language))}#blog`,
    },
    articleSection:
      post.categories.length > 0 ? post.categories : undefined,
    keywords: post.tags.length > 0 ? post.tags.join(", ") : undefined,
    wordCount: post.wordCount,
    timeRequired: `PT${post.readingTime}M`,
  };
}

type BreadcrumbItem = {
  name: string;
  url: string;
};

export function breadcrumbStructuredData(
  items: BreadcrumbItem[],
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
