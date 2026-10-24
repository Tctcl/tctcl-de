import { getCopy } from "@/content/site-copy";
import type { Heading } from "@/lib/content";
import type { Locale } from "@/lib/locale";

type TableOfContentsProps = {
  headings: Heading[];
  locale: Locale;
  variant?: "inline" | "sidebar";
};

export function TableOfContents({
  headings,
  locale,
  variant = "sidebar",
}: TableOfContentsProps) {
  if (headings.length < 4) {
    return null;
  }

  const copy = getCopy(locale);

  const list = (
    <ol className="space-y-2 border-l border-border pl-4">
      {headings.map((heading) => (
        <li
          key={heading.id}
          className={heading.depth === 3 ? "pl-3" : undefined}
        >
          <a
            href={`#${heading.id}`}
            className="block text-[13px] leading-snug text-muted-foreground transition-colors hover:text-blood"
          >
            {heading.text}
          </a>
        </li>
      ))}
    </ol>
  );

  if (variant === "inline") {
    return (
      <details className="mt-8 border-y border-border py-4 lg:hidden">
        <summary className="cursor-pointer font-mono text-[10px] uppercase tracking-[0.18em] text-blood">
          {copy.article.toc}
        </summary>
        <nav aria-label={copy.article.toc} className="mt-4">
          {list}
        </nav>
      </details>
    );
  }

  return (
    <aside className="hidden lg:block">
      <nav aria-label={copy.article.toc} className="sticky top-8">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-blood">
          {copy.article.toc}
        </p>
        <div className="mt-4">{list}</div>
      </nav>
    </aside>
  );
}
