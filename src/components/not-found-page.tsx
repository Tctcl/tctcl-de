import Link from "next/link";

import { SiteShell } from "@/components/site-shell";
import { getCopy } from "@/content/site-copy";
import type { Locale } from "@/lib/locale";
import { blogPath, homePath } from "@/lib/routes";

export function NotFoundPage({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);

  return (
    <SiteShell locale={locale} alternateHref={null}>
      <section className="mx-auto flex min-h-[60vh] max-w-6xl items-center px-5 py-20 md:px-8 md:py-28">
        <div className="grid w-full gap-8 md:grid-cols-12 md:gap-6">
          <div className="md:col-span-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-blood">
              404 / {copy.notFound.eyebrow}
            </p>
          </div>

          <div className="md:col-span-8 md:col-start-5">
            <h1 className="max-w-2xl font-serif text-[clamp(2.4rem,6vw,4.6rem)] font-semibold leading-[1.02] tracking-[-0.035em]">
              {copy.notFound.title}
            </h1>
            <p className="mt-6 max-w-xl text-[15.5px] leading-7 text-muted-foreground sm:text-base">
              {copy.notFound.text}
            </p>

            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 font-mono text-[10px] uppercase tracking-[0.16em]">
              <Link
                href={homePath(locale)}
                className="editorial-link text-blood"
              >
                {copy.notFound.backHome} →
              </Link>
              <Link
                href={blogPath(locale)}
                className="editorial-link text-muted-foreground"
              >
                {copy.notFound.backBlog} →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
