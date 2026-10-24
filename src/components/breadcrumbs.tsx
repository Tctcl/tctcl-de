import Link from "next/link";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { getCopy } from "@/content/site-copy";
import type { Locale } from "@/lib/locale";
import { blogPath, homePath } from "@/lib/routes";

type ArticleBreadcrumbsProps = {
  locale: Locale;
  title: string;
};

export function ArticleBreadcrumbs({
  locale,
  title,
}: ArticleBreadcrumbsProps) {
  const copy = getCopy(locale);
  const label = locale === "de" ? "Brotkrumen" : "Breadcrumb";

  return (
    <Breadcrumb aria-label={label}>
      <BreadcrumbList className="gap-1.5 font-mono text-[9px] uppercase tracking-[0.14em] sm:gap-2">
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link
              href={homePath(locale)}
              className="text-muted-foreground hover:text-blood"
            >
              {copy.article.breadcrumbHome}
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link
              href={blogPath(locale)}
              className="text-muted-foreground hover:text-blood"
            >
              {copy.article.breadcrumbBlog}
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem className="min-w-0">
          <BreadcrumbPage className="max-w-[16rem] truncate text-foreground sm:max-w-[28rem]">
            {title}
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
