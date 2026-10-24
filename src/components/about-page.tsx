import Link from "next/link";

import { RoomHero } from "@/components/room-hero";
import { RoomSectionContent } from "@/components/room-section";
import { SectionLabel } from "@/components/section-label";
import { SiteShell } from "@/components/site-shell";
import { getRoomCopy } from "@/content/rooms";
import { getCopy } from "@/content/site-copy";
import { otherLocale, type Locale } from "@/lib/locale";
import { blogPath, roomPath, type RoomId } from "@/lib/routes";

const roomLinks: (RoomId | "journal")[] = [
  "tinkering",
  "projects",
  "journal",
  "work",
];

export function AboutPage({ locale }: { locale: Locale }) {
  const copy = getRoomCopy(locale, "about");
  const site = getCopy(locale);
  const alternateHref = roomPath("about", otherLocale(locale));

  return (
    <SiteShell locale={locale} alternateHref={alternateHref} current="about">
      <RoomHero locale={locale} room="about" />

      <section
        aria-labelledby="about-work"
        className="border-b border-border"
      >
        <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
          <div className="grid gap-10 md:grid-cols-12 md:gap-6">
            <div className="md:col-span-3">
              <SectionLabel index="01">{copy.label}</SectionLabel>
            </div>

            <div className="md:col-span-4">
              <h2
                id="about-work"
                className="font-serif text-2xl leading-tight tracking-[-0.02em]"
              >
                {copy.sections[0].title}
              </h2>
              <div className="mt-4 space-y-4 text-sm leading-7 text-muted-foreground">
                <RoomSectionContent section={copy.sections[0]} />
              </div>
              <Link
                href={roomPath("work", locale)}
                className="editorial-link mt-5 inline-block font-mono text-[9px] uppercase tracking-[0.16em] text-blood"
              >
                {site.nav.work} →
              </Link>
            </div>

            <div className="md:col-span-4 md:col-start-9">
              <h2 className="font-serif text-2xl leading-tight tracking-[-0.02em]">
                {copy.sections[1].title}
              </h2>
              <div className="mt-4 space-y-4 text-sm leading-7 text-muted-foreground">
                <RoomSectionContent section={copy.sections[1]} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="about-how"
        className="border-b border-border"
      >
        <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
          <div className="grid gap-8 md:grid-cols-12 md:gap-6">
            <div className="md:col-span-3">
              <SectionLabel index="02">{copy.label}</SectionLabel>
            </div>
            <div className="md:col-span-8 md:col-start-5">
              <h2
                id="about-how"
                className="font-serif text-3xl leading-tight tracking-[-0.025em] sm:text-4xl"
              >
                {copy.sections[2].title}
              </h2>
              <div className="mt-5 max-w-2xl space-y-5 text-base leading-8 text-muted-foreground">
                <RoomSectionContent section={copy.sections[2]} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="about-nerves"
        className="border-b border-border bg-card/35"
      >
        <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
          <div className="grid gap-8 md:grid-cols-12 md:gap-6">
            <div className="md:col-span-3">
              <SectionLabel index="03">{copy.label}</SectionLabel>
            </div>
            <div className="md:col-span-5 md:col-start-5">
              <h2
                id="about-nerves"
                className="font-serif text-3xl leading-tight tracking-[-0.025em] sm:text-4xl"
              >
                {copy.sections[3].title}
              </h2>
              <ul className="mt-6 border-t border-border">
                {copy.annoyances.map((item, index) => (
                  <li
                    key={item}
                    className="grid grid-cols-[2rem_minmax(0,1fr)] gap-3 border-b border-border py-3 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground"
                  >
                    <span className="text-blood">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-3 md:col-start-10">
              <p className="font-serif text-2xl leading-snug tracking-[-0.02em]">
                {copy.sections[4].title}
              </p>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                {copy.sections[4].paragraphs?.[0]}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="about-rooms" className="border-b border-border">
        <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
          <div className="grid gap-8 md:grid-cols-12 md:gap-6">
            <div className="md:col-span-3">
              <SectionLabel index="04">{copy.label}</SectionLabel>
            </div>
            <div className="md:col-span-8 md:col-start-5">
              <h2
                id="about-rooms"
                className="font-serif text-3xl leading-tight tracking-[-0.025em] sm:text-4xl"
              >
                {site.home.roomsTitle}
              </h2>
              <ul className="mt-6 grid gap-x-8 gap-y-3 border-t border-border pt-5 sm:grid-cols-2">
                {roomLinks.map((room) => {
                  const isJournal = room === "journal";
                  const entry = isJournal ? null : getRoomCopy(locale, room);
                  const href = isJournal
                    ? blogPath(locale)
                    : roomPath(room, locale);

                  return (
                    <li key={room}>
                      <Link
                        href={href}
                        className="group flex items-baseline justify-between gap-4 border-b border-border/70 py-2 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-blood"
                      >
                        <span>
                          {isJournal ? "03" : entry?.index} /{" "}
                          {isJournal ? site.nav.journal : entry?.label}
                        </span>
                        <span
                          aria-hidden="true"
                          className="transition-transform group-hover:translate-x-1"
                        >
                          →
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
