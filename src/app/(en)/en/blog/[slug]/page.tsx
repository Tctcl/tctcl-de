import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ArticlePage } from "@/components/article-page";
import { getPostBySlug, getPublishedPosts } from "@/lib/content";
import { articleMetadata } from "@/lib/seo";

type ArticleParams = {
  slug: string;
};

export const dynamicParams = false;

export function generateStaticParams(): ArticleParams[] {
  return getPublishedPosts("en").map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<ArticleParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug("en", slug);

  return post ? articleMetadata(post) : {};
}

export default async function EnglishArticlePage({
  params,
}: {
  params: Promise<ArticleParams>;
}) {
  const { slug } = await params;
  const post = getPostBySlug("en", slug);

  if (!post) {
    notFound();
  }

  return <ArticlePage post={post} />;
}
