import { EmptyState } from "@/components/empty-state";
import { RoomHero } from "@/components/room-hero";
import { RoomMark } from "@/components/room-mark";
import { RoomSectionContent } from "@/components/room-section";
import { SectionLabel } from "@/components/section-label";
import { SiteShell } from "@/components/site-shell";
import { getRoomCopy } from "@/content/rooms";
import { otherLocale, type Locale } from "@/lib/locale";
import { roomPath } from "@/lib/routes";

export function MusicPage({ locale }: { locale: Locale }) {
  const copy = getRoomCopy(locale, "music");
  const alternateHref = roomPath("music", otherLocale(locale));

  return (
    <SiteShell
      locale={locale}
      alternateHref={alternateHref}
      current="music"
    >
      <RoomHero locale={locale} room="music" />

      <div className="border-b border-border bg-card/35">
        <div className="mx-auto flex max-w-6xl items-center gap-4 px-5 py-3 md:px-8">
          <RoomMark variant="music" className="h-6 w-24 shrink-0 opacity-80" />
          <div className="flex flex-1 flex-wrap items-center justify-between gap-x-6 gap-y-1 font-mono text-[8px] uppercase tracking-[0.18em] text-muted-foreground">
            {copy.signal.map((label) => (
              <span key={label}>{label}</span>
            ))}
          </div>
        </div>
      </div>

      {copy.sections.slice(0, 2).map((section, index) => (
        <section
          key={section.title}
          aria-labelledby={`music-${index}`}
          className="border-b border-border"
        >
          <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
            <div className="grid gap-8 md:grid-cols-12 md:gap-6">
              <div className="md:col-span-3">
                <SectionLabel index={String(index + 1).padStart(2, "0")}>
                  {copy.label}
                </SectionLabel>
              </div>
              <div className="md:col-span-8 md:col-start-5">
                <h2
                  id={`music-${index}`}
                  className="font-serif text-3xl leading-tight tracking-[-0.025em] sm:text-4xl"
                >
                  {section.title}
                </h2>
                <div className="mt-5 max-w-2xl space-y-4 text-[15px] leading-7 text-muted-foreground">
                  <RoomSectionContent section={section} />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section
        aria-labelledby="music-sound-system"
        className="border-b border-border bg-ink text-background"
      >
        <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
          <div className="grid gap-8 md:grid-cols-12 md:gap-6">
            <div className="md:col-span-3">
              <p className="flex items-baseline gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-background/50">
                <span className="text-[#c85a4a]">03</span>
                <span>{copy.label}</span>
              </p>
              <div
                aria-hidden="true"
                className="mt-8 grid max-w-[13rem] grid-cols-2 gap-px border border-background/20 bg-background/20 font-mono text-[8px] uppercase tracking-[0.16em] text-background/50"
              >
                {["Sub", "Kick", "Mid", "Top"].map((part) => (
                  <div key={part} className="bg-ink p-3">
                    {part}
                  </div>
                ))}
              </div>
            </div>
            <div className="md:col-span-8 md:col-start-5">
              <h2
                id="music-sound-system"
                className="font-serif text-3xl leading-tight tracking-[-0.025em] sm:text-4xl"
              >
                {copy.sections[2].title}
              </h2>
              <div className="mt-5 max-w-2xl space-y-4 text-[15px] leading-7 text-background/70">
                <RoomSectionContent section={copy.sections[2]} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="music-notes" className="border-b border-border">
        <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
          <div className="grid gap-8 md:grid-cols-12 md:gap-6">
            <div className="md:col-span-3">
              <SectionLabel index="04">{copy.label}</SectionLabel>
            </div>
            <div className="md:col-span-8 md:col-start-5">
              <h2
                id="music-notes"
                className="font-serif text-3xl leading-tight tracking-[-0.025em] sm:text-4xl"
              >
                {copy.sections[3].title}
              </h2>
              <EmptyState
                indent={false}
                label={copy.empty.label}
                title={copy.empty.title}
                text={copy.empty.text}
              />
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
