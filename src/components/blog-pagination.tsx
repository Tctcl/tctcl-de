import Link from "next/link";

import { getCopy } from "@/content/site-copy";
import type { Locale } from "@/lib/locale";
import { blogPagePath } from "@/lib/routes";

type BlogPaginationProps = {
  locale: Locale;
  page: number;
  pageCount: number;
};

export function BlogPagination({
  locale,
  page,
  pageCount,
}: BlogPaginationProps) {
  if (pageCount <= 1) {
    return null;
  }

  const copy = getCopy(locale);

  return (
    <nav
      aria-label={copy.blog.pagination}
      className="mt-10 flex flex-col gap-4 font-mono text-[10px] uppercase tracking-[0.14em] sm:flex-row sm:items-center sm:justify-between"
    >
      <div>
        {page > 1 ? (
          <Link
            href={blogPagePath(locale, page - 1)}
            className="text-muted-foreground transition-colors hover:text-blood"
          >
            ← {copy.blog.previous}
          </Link>
        ) : (
          <span aria-hidden="true" />
        )}
      </div>

      <p className="text-muted-foreground">
        {copy.blog.page.replace("{page}", String(page))} / {pageCount}
      </p>

      <div className="sm:text-right">
        {page < pageCount ? (
          <Link
            href={blogPagePath(locale, page + 1)}
            className="text-muted-foreground transition-colors hover:text-blood"
          >
            {copy.blog.next} →
          </Link>
        ) : (
          <span aria-hidden="true" />
        )}
      </div>
    </nav>
  );
}
