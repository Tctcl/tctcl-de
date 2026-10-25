import Link from "next/link";

import { ArticleCard } from "@/components/article-card";
import { EmptyState } from "@/components/empty-state";
import { JsonLd } from "@/components/json-ld";
import { RoomMark } from "@/components/room-mark";
import { SectionLabel } from "@/components/section-label";
import { SiteShell } from "@/components/site-shell";
import { homePath } from "@/lib/routes";
import {
  personStructuredData,
  websiteStructuredData,
} from "@/lib/structured-data";
import type { ThemeHomeProps } from "@/themes/types";

import { getHomeData, type RoomLink } from "./data";

const spans: Record<string, string> = {
  tinkering: "md:col-span-5",
  projects: "md:col-span-7",
  journal: "md:col-span-7",
  about: "md:col-span-5",
  work: "md:col-span-8 md:col-start-5",
};

export function WerkstattHome({ locale, theme }: ThemeHomeProps) {
  const { copy, posts, now, hotbar } = getHomeData(locale, theme);
  const alternateHref = homePath(locale === "de" ? "en" : "de");

  const order: RoomLink[] = [
    hotbar[0],
    hotbar[1],
    hotbar[2],
    hotbar[3],
    hotbar[4],
  ];

  return (
    <SiteShell locale={locale} alternateHref={alternateHref} current="home" theme={theme}>
      <JsonLd id="person-jsonld" data={personStructuredData(locale)} />
      <JsonLd id="website-jsonld" data={websiteStructuredData(locale)} />

      <section className="mx-auto max-w-6xl px-5 pb-14 pt-10 sm:pt-14 md:px-8 md:pb-20">
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-blood">
              {copy.home.eyebrow}
            </p>

            <h1 className="mt-5 max-w-3xl font-serif text-[clamp(2.5rem,5.6vw,4.5rem)] font-semibold leading-[0.98] tracking-[-0.045em]">
              {copy.home.title}{" "}
              <span className="italic text-muted-foreground">
                {copy.home.accent}
              </span>
            </h1>

            <div className="mt-6 max-w-2xl space-y-4 text-[15.5px] leading-7 text-muted-foreground sm:text-base">
              {copy.home.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3 font-mono text-[10px] uppercase tracking-[0.16em]">
              <a href="#rooms" className="editorial-link text-blood">
                {copy.home.roomsTitle} ↓
              </a>
              <Link
                href={hotbar[2].href}
                className="editorial-link text-muted-foreground"
              >
                {copy.nav.journal} →
              </Link>
            </div>
          </div>

          <aside className="border-t border-border pt-6 md:col-span-3 md:col-start-10 md:border-l md:border-t-0 md:pl-6 md:pt-0">
            <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
              {copy.home.marginalLabel}
            </p>
            <dl className="mt-5 space-y-4">
              {copy.home.marginalFacts.map((fact) => (
                <div key={fact.term}>
                  <dt className="font-mono text-[8px] uppercase tracking-[0.16em] text-blood">
                    {fact.term}
                  </dt>
                  <dd className="mt-1 font-serif text-base leading-snug">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 border-t border-border pt-4 text-xs leading-relaxed text-muted-foreground">
              {copy.home.marginalNote}
            </p>
            <p className="stamp mt-8 hidden lg:inline-block">
              {copy.home.marginalStamp}
            </p>
          </aside>
        </div>
      </section>

      <section id="rooms" aria-labelledby="rooms-title" className="scroll-mt-24 border-t border-border">
        <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
          <div className="grid gap-6 md:grid-cols-12">
            <div className="md:col-span-3">
              <SectionLabel index="00">{copy.home.roomsLabel}</SectionLabel>
            </div>
            <div className="md:col-span-8 md:col-start-5">
              <h2
                id="rooms-title"
                className="font-serif text-3xl leading-tight tracking-[-0.025em] sm:text-4xl"
              >
                {copy.home.roomsTitle}
              </h2>
              <p className="mt-3 max-w-xl text-[15px] leading-7 text-muted-foreground">
                {copy.home.roomsIntro}
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-x-6 gap-y-12 md:grid-cols-12 md:gap-x-8">
            {order.map((room) => {
              const feature = room.key === "journal";

              if (feature) {
                return (
                  <Link
                    key={room.key}
                    href={room.href}
                    className={`group relative flex flex-col justify-between overflow-hidden bg-ink p-6 text-background transition-colors hover:bg-[#221f1b] sm:p-8 md:min-h-[21rem] ${spans[room.key]}`}
                  >
                    <div className="flex items-start justify-between gap-6">
                      <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#c85a4a]">
                        {room.index} / {room.label}
                      </p>
                      <span
                        aria-hidden="true"
                        className="font-mono text-sm text-[#c85a4a] transition-transform group-hover:translate-x-1"
                      >
                        ↗
                      </span>
                    </div>

                    <div className="mt-12 flex items-end justify-between gap-8">
                      <div>
                        <h3 className="font-serif text-3xl leading-tight tracking-[-0.02em] sm:text-4xl">
                          {room.label}
                        </h3>
                        <p className="mt-3 max-w-sm text-sm leading-relaxed text-background/70">
                          {room.teaser}
                        </p>
                        <p className="mt-5 font-mono text-[8px] uppercase tracking-[0.16em] text-background/50">
                          {room.tags.join(" / ")}
                        </p>
                        <p className="mt-5 font-mono text-[9px] uppercase tracking-[0.16em] text-background/80">
                          {copy.home.roomCta} →
                        </p>
                      </div>
                      <RoomMark
                        variant="journal"
                        className="hidden h-16 w-24 shrink-0 opacity-70 [&_span]:bg-background/40 sm:block"
                      />
                    </div>
                  </Link>
                );
              }

              return (
                <Link
                  key={room.key}
                  href={room.href}
                  className={`group flex flex-col border-t border-border pt-5 transition-colors hover:border-blood ${spans[room.key]}`}
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-blood">
                      {room.index} / {room.label}
                    </p>
                    <span
                      aria-hidden="true"
                      className="font-mono text-sm text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-blood"
                    >
                      ↗
                    </span>
                  </div>

                  <div className="mt-5">
                    <h3 className="font-serif text-2xl leading-tight tracking-[-0.02em]">
                      {room.label}
                    </h3>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
                      {room.teaser}
                    </p>
                  </div>

                  <div className="mt-auto flex items-end justify-between gap-4 pt-8">
                    <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-muted-foreground">
                      {room.tags.join(" / ")}
                    </p>
                    <RoomMark
                      variant={room.key}
                      className="hidden h-6 w-14 shrink-0 opacity-40 sm:block"
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section aria-labelledby="now-title" className="border-t border-border">
        <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
          <div className="grid gap-8 md:grid-cols-12 md:gap-6">
            <div className="md:col-span-3">
              <SectionLabel index="01">{copy.home.nowLabel}</SectionLabel>
            </div>

            <div className="md:col-span-8 md:col-start-5">
              <h2
                id="now-title"
                className="max-w-2xl font-serif text-3xl leading-tight tracking-[-0.025em] sm:text-4xl"
              >
                {copy.home.nowTitle}
              </h2>
              <p className="mt-3 max-w-xl text-[15px] leading-7 text-muted-foreground">
                {copy.home.nowIntro}
              </p>

              <ol className="mt-8 border-t border-border">
                {now.map((entry, index) => (
                  <li
                    key={entry.title}
                    className="grid gap-2 border-b border-border py-5 sm:grid-cols-[2.5rem_minmax(0,1fr)_2.5fr] sm:items-baseline sm:gap-6"
                  >
                    <span className="font-mono text-[10px] tracking-[0.12em] text-blood">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-serif text-xl leading-tight">
                        {entry.title}
                      </h3>
                      <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.16em] text-muted-foreground">
                        {entry.tag}
                      </p>
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {entry.text}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="journal-title" className="border-t border-border">
        <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
          <div className="grid gap-8 md:grid-cols-12 md:gap-6">
            <div className="md:col-span-3">
              <SectionLabel index="02">{copy.home.journalLabel}</SectionLabel>
            </div>

            <div className="md:col-span-8 md:col-start-5">
              <h2
                id="journal-title"
                className="font-serif text-3xl leading-tight tracking-[-0.025em] sm:text-4xl"
              >
                {copy.home.journalTitle}
              </h2>
              <p className="mt-3 max-w-xl text-[15px] leading-7 text-muted-foreground">
                {copy.home.journalIntro}
              </p>

              {posts.length > 0 ? (
                <>
                  <ol className="mt-8 border-b border-border">
                    {posts.map((post) => (
                      <li key={post.slug}>
                        <ArticleCard post={post} locale={locale} />
                      </li>
                    ))}
                  </ol>
                  <p className="mt-6">
                    <Link
                      href={hotbar[2].href}
                      className="editorial-link font-mono text-[10px] uppercase tracking-[0.16em] text-blood"
                    >
                      {copy.home.allPosts} →
                    </Link>
                  </p>
                </>
              ) : (
                <EmptyState
                  indent={false}
                  label={copy.blog.emptyLabel}
                  title={copy.home.journalEmptyTitle}
                  text={copy.home.journalEmptyText}
                  note={copy.home.journalEmptyNote}
                  action={{
                    href: hotbar[2].href,
                    label: copy.home.allPosts,
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
