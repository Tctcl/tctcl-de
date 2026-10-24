import Link from "next/link";
import type { ReactNode } from "react";

import { ArticleCard } from "@/components/article-card";
import { EmptyState } from "@/components/empty-state";
import { JsonLd } from "@/components/json-ld";
import { SectionLabel } from "@/components/section-label";
import { SiteShell } from "@/components/site-shell";
import { projects } from "@/content/projects";
import { getCopy } from "@/content/site-copy";
import { getPublishedPosts } from "@/lib/content";
import { sectionIds, type Locale } from "@/lib/locale";
import {
  blogPath,
  homePath,
} from "@/lib/routes";
import { BUILD_YEAR } from "@/lib/site";
import {
  personStructuredData,
  websiteStructuredData,
} from "@/lib/structured-data";

function ProjectLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  const className = "transition-colors hover:text-blood";

  if (href.startsWith("/")) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}

export function HomePage({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);
  const ids = sectionIds[locale];
  const posts = getPublishedPosts(locale).slice(0, 3);
  const alternateHref = homePath(locale === "de" ? "en" : "de");
  const quote =
    locale === "de" ? `„${copy.about.quote}“` : `“${copy.about.quote}”`;

  return (
    <SiteShell
      locale={locale}
      alternateHref={alternateHref}
      current="home"
    >
      <JsonLd id="person-jsonld" data={personStructuredData(locale)} />
      <JsonLd id="website-jsonld" data={websiteStructuredData(locale)} />

      <section className="mx-auto max-w-6xl px-5 pb-16 pt-12 sm:pt-16 md:px-8 md:pb-24">
        <div className="grid gap-10 md:grid-cols-12 md:gap-6">
          <div className="md:col-span-7">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-blood">
              {copy.hero.eyebrow}
            </p>

            <h1 className="mt-6 max-w-3xl font-serif text-[clamp(2.5rem,6.8vw,5.2rem)] font-semibold leading-[0.97] tracking-[-0.045em]">
              {copy.hero.title}{" "}
              <span className="italic text-muted-foreground">
                {copy.hero.titleAccent}
              </span>
              <span
                aria-hidden="true"
                className="ml-2 inline-block h-2.5 w-2.5 bg-blood align-baseline"
              />
            </h1>

            <p className="mt-6 max-w-xl text-[15.5px] leading-7 text-muted-foreground sm:text-base">
              {copy.hero.lead}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-[10px] uppercase tracking-[0.16em]">
              <Link
                href={blogPath(locale)}
                className="editorial-link text-blood"
              >
                {copy.hero.journalCta} →
              </Link>
              <Link
                href={`#${ids.about}`}
                className="editorial-link text-muted-foreground"
              >
                {copy.hero.aboutCta} ↓
              </Link>
            </div>

            <ul className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground">
              {copy.hero.facts.map((fact, index) => (
                <li key={fact} className="flex items-center gap-3">
                  {index > 0 ? (
                    <span aria-hidden="true" className="text-blood">
                      /
                    </span>
                  ) : null}
                  <span>{fact}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden md:col-span-4 md:col-start-9 md:block">
            <div
              aria-hidden="true"
              className="ml-auto aspect-square w-full max-w-[250px] border border-border p-3"
            >
              <div className="relative h-full border border-border">
                <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-border" />
                <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-border" />
                <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blood" />
                <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 bg-blood" />
                <span className="absolute left-3 top-2 font-mono text-[7px] uppercase tracking-[0.16em] text-muted-foreground">
                  {copy.hero.cardTop}
                </span>
                <span className="absolute bottom-2 left-3 font-mono text-[7px] uppercase tracking-[0.16em] text-muted-foreground">
                  {copy.hero.cardLabel} / 01
                </span>
                <span className="absolute bottom-2 right-3 font-mono text-[7px] uppercase tracking-[0.16em] text-muted-foreground">
                  {copy.hero.cardBottom}
                </span>
              </div>
            </div>
            <p className="mt-3 text-right font-mono text-[8px] uppercase tracking-[0.18em] text-muted-foreground">
              TCTCL / {BUILD_YEAR}
            </p>
          </div>
        </div>
      </section>

      <section
        id={ids.about}
        aria-labelledby={`${ids.about}-title`}
        className="scroll-mt-24 border-t border-border"
      >
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <div className="grid gap-8 md:grid-cols-12 md:gap-6">
            <div className="md:col-span-3">
              <SectionLabel index="01">{copy.about.eyebrow}</SectionLabel>
            </div>

            <div className="md:col-span-6 md:col-start-5">
              <h2
                id={`${ids.about}-title`}
                className="font-serif text-3xl leading-[1.05] tracking-[-0.025em] sm:text-4xl"
              >
                {copy.about.title}
              </h2>
              <div className="mt-6 space-y-4 text-[15px] leading-7 text-muted-foreground">
                {copy.about.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <blockquote className="mt-8 border-l-2 border-blood pl-4 font-serif text-xl italic leading-snug text-foreground">
                {quote}
              </blockquote>
            </div>

            <aside className="md:col-span-2 md:col-start-11">
              <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
                {copy.about.asideLabel}
              </p>
              <ul className="mt-3 space-y-2">
                {copy.about.asideItems.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 border-t border-border pt-2 font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground"
                  >
                    <span
                      aria-hidden="true"
                      className="h-1 w-1 shrink-0 bg-blood"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <section
        id={ids.work}
        aria-labelledby={`${ids.work}-title`}
        className="scroll-mt-24 border-t border-border"
      >
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <div className="grid gap-8 md:grid-cols-12 md:gap-6">
            <div className="md:col-span-3">
              <SectionLabel index="02">{copy.work.eyebrow}</SectionLabel>
            </div>

            <div className="md:col-span-8 md:col-start-5">
              <h2
                id={`${ids.work}-title`}
                className="font-serif text-3xl leading-[1.05] tracking-[-0.025em] sm:text-4xl"
              >
                {copy.work.title}
              </h2>
              <p className="mt-3 max-w-2xl text-[15px] leading-7 text-muted-foreground">
                {copy.work.intro}
              </p>

              <ol className="mt-10 border-t border-border">
                {copy.work.items.map((item, index) => (
                  <li
                    key={item.title}
                    className="grid gap-2 border-b border-border py-6 sm:grid-cols-[2.5rem_minmax(0,1fr)_2fr] sm:items-baseline sm:gap-6"
                  >
                    <span className="font-mono text-[10px] tracking-[0.12em] text-blood">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-serif text-2xl leading-tight tracking-[-0.01em]">
                      {item.title}
                    </h3>
                    <div>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                      <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground">
                        {item.meta}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section
        id={ids.projects}
        aria-labelledby={`${ids.projects}-title`}
        className="scroll-mt-24 border-t border-border"
      >
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <div className="grid gap-8 md:grid-cols-12 md:gap-6">
            <div className="md:col-span-3">
              <SectionLabel index="03">
                {copy.projects.eyebrow}
              </SectionLabel>
            </div>

            <div className="md:col-span-8 md:col-start-5">
              <h2
                id={`${ids.projects}-title`}
                className="font-serif text-3xl leading-[1.05] tracking-[-0.025em] sm:text-4xl"
              >
                {copy.projects.title}
              </h2>
              <p className="mt-3 max-w-2xl text-[15px] leading-7 text-muted-foreground">
                {copy.projects.intro}
              </p>

              {projects.length === 0 ? (
                <EmptyState
                  indent={false}
                  label={copy.projects.emptyLabel}
                  title={copy.projects.emptyTitle}
                  text={copy.projects.emptyText}
                  note={copy.projects.emptyNote}
                />
              ) : (
                <ol className="mt-10 border-t border-border">
                  {projects.map((project, index) => (
                    <li
                      key={project.name}
                      className="grid gap-2 border-b border-border py-6 sm:grid-cols-[2.5rem_minmax(0,1fr)_2fr] sm:items-baseline sm:gap-6"
                    >
                      <span className="font-mono text-[10px] tracking-[0.12em] text-blood">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-serif text-2xl leading-tight tracking-[-0.01em]">
                        {project.href ? (
                          <ProjectLink href={project.href}>
                            {project.name}{" "}
                            <span className="font-mono text-xs text-blood">
                              ↗
                            </span>
                          </ProjectLink>
                        ) : (
                          project.name
                        )}
                      </h3>
                      <div>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {project.description}
                        </p>
                        <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground">
                          {[project.year, ...(project.tags ?? [])]
                            .filter(Boolean)
                            .join(" / ")}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              )}
            </div>
          </div>
        </div>
      </section>

      <section
        id={ids.writing}
        aria-labelledby={`${ids.writing}-title`}
        className="scroll-mt-24 border-t border-border"
      >
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <div className="grid gap-8 md:grid-cols-12 md:gap-6">
            <div className="md:col-span-3">
              <SectionLabel index="04">{copy.writing.eyebrow}</SectionLabel>
            </div>

            <div className="md:col-span-8 md:col-start-5">
              <h2
                id={`${ids.writing}-title`}
                className="font-serif text-3xl leading-[1.05] tracking-[-0.025em] sm:text-4xl"
              >
                {copy.writing.title}
              </h2>
              <p className="mt-3 max-w-2xl text-[15px] leading-7 text-muted-foreground">
                {copy.writing.intro}
              </p>

              {posts.length > 0 ? (
                <>
                  <ol className="mt-10 border-b border-border">
                    {posts.map((post) => (
                      <li key={post.slug}>
                        <ArticleCard post={post} locale={locale} />
                      </li>
                    ))}
                  </ol>
                  <p className="mt-6">
                    <Link
                      href={blogPath(locale)}
                      className="editorial-link font-mono text-[10px] uppercase tracking-[0.16em] text-blood"
                    >
                      {copy.writing.allPosts} →
                    </Link>
                  </p>
                </>
              ) : (
                <EmptyState
                  indent={false}
                  label={copy.writing.emptyLabel}
                  title={copy.writing.emptyTitle}
                  text={copy.writing.emptyText}
                  note={copy.writing.emptyNote}
                  action={{
                    href: blogPath(locale),
                    label: copy.hero.journalCta,
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
