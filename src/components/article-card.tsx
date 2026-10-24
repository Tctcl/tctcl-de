import Link from "next/link";

import { getCopy } from "@/content/site-copy";
import type { Post } from "@/lib/content";
import { formatShortDate } from "@/lib/format";
import type { Locale } from "@/lib/locale";
import { postPath } from "@/lib/routes";

type ArticleCardProps = {
  post: Post;
  locale: Locale;
  showDescription?: boolean;
  headingLevel?: 2 | 3;
};

export function ArticleCard({
  post,
  locale,
  showDescription = true,
  headingLevel = 3,
}: ArticleCardProps) {
  const copy = getCopy(locale);
  const href = postPath(locale, post.slug);
  const Heading = headingLevel === 2 ? "h2" : "h3";

  return (
    <article className="group grid gap-3 border-t border-border py-7 md:grid-cols-12 md:gap-6">
      <div className="md:col-span-2">
        <time
          dateTime={post.date}
          className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground"
        >
          {formatShortDate(post.date, locale)}
        </time>
        {post.categories.length > 0 ? (
          <p className="mt-2 font-mono text-[9px] uppercase leading-relaxed tracking-[0.14em] text-blood">
            {post.categories.join(" / ")}
          </p>
        ) : null}
      </div>

      <div className="md:col-span-7">
        <Heading className="font-serif text-2xl leading-tight tracking-[-0.01em]">
          <Link href={href} className="transition-colors hover:text-blood">
            {post.title}
          </Link>
        </Heading>
        {showDescription ? (
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            {post.description}
          </p>
        ) : null}
      </div>

      <div className="flex items-baseline justify-between gap-4 md:col-span-3 md:block md:text-right">
        <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground">
          {post.readingTime} {copy.writing.minRead}
        </p>
        <span
          aria-hidden="true"
          className="inline-block font-mono text-sm text-blood transition-transform group-hover:translate-x-1 md:mt-4"
        >
          →
        </span>
      </div>
    </article>
  );
}
