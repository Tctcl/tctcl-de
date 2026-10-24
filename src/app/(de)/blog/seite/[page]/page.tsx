import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { BlogIndexPage } from "@/components/blog-index-page";
import { getBlogPageCount } from "@/lib/content";
import { blogIndexMetadata } from "@/lib/seo";

type PageParams = {
  page: string;
};

export const dynamicParams = false;

export function generateStaticParams(): PageParams[] {
  const pageCount = getBlogPageCount("de");

  return Array.from({ length: Math.max(0, pageCount - 1) }, (_, index) => ({
    page: String(index + 2),
  }));
}

function parsePage(value: string): number | null {
  const page = Number(value);

  if (!Number.isInteger(page) || page < 2 || String(page) !== value) {
    return null;
  }

  return page <= getBlogPageCount("de") ? page : null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<PageParams>;
}): Promise<Metadata> {
  const { page: rawPage } = await params;
  const page = parsePage(rawPage);

  return page ? blogIndexMetadata("de", page) : {};
}

export default async function GermanBlogPaginationPage({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const { page: rawPage } = await params;
  const page = parsePage(rawPage);

  if (!page) {
    notFound();
  }

  return <BlogIndexPage locale="de" page={page} />;
}
