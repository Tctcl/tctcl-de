import { RoomHero } from "@/components/room-hero";
import { RoomSectionContent } from "@/components/room-section";
import { SectionLabel } from "@/components/section-label";
import { SiteShell } from "@/components/site-shell";
import { getRoomCopy } from "@/content/rooms";
import { otherLocale, type Locale } from "@/lib/locale";
import { roomPath } from "@/lib/routes";

export function WorkPage({ locale }: { locale: Locale }) {
  const copy = getRoomCopy(locale, "work");
  const alternateHref = roomPath("work", otherLocale(locale));

  return (
    <SiteShell locale={locale} alternateHref={alternateHref} current="work">
      <RoomHero locale={locale} room="work" />

      <section
        aria-labelledby="work-areas"
        className="border-b border-border"
      >
        <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
          <div className="grid gap-8 md:grid-cols-12 md:gap-6">
            <div className="md:col-span-3">
              <SectionLabel index="01">{copy.label}</SectionLabel>
            </div>
            <div className="md:col-span-8 md:col-start-5">
              <h2
                id="work-areas"
                className="font-serif text-3xl leading-tight tracking-[-0.025em] sm:text-4xl"
              >
                {copy.sections[0].title}
              </h2>

              <ol className="mt-8 border-t border-border">
                {copy.areas.map((area, index) => (
                  <li
                    key={area.title}
                    className="grid gap-3 border-b border-border py-6 sm:grid-cols-[2.5rem_minmax(0,1fr)_2fr] sm:items-baseline sm:gap-6"
                  >
                    <span className="font-mono text-[10px] tracking-[0.12em] text-blood">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-serif text-2xl leading-tight">
                        {area.title}
                      </h3>
                      <p className="mt-2 font-mono text-[8px] uppercase leading-relaxed tracking-[0.14em] text-muted-foreground">
                        {area.tags.join(" / ")}
                      </p>
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {area.text}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="work-how"
        className="border-b border-border bg-card/35"
      >
        <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
          <div className="grid gap-10 md:grid-cols-12 md:gap-6">
            <div className="md:col-span-3">
              <SectionLabel index="02">{copy.label}</SectionLabel>
            </div>

            <div className="md:col-span-4">
              <h2
                id="work-how"
                className="font-serif text-2xl leading-tight tracking-[-0.02em]"
              >
                {copy.sections[1].title}
              </h2>
              <div className="mt-4 space-y-4 text-sm leading-7 text-muted-foreground">
                <RoomSectionContent section={copy.sections[1]} />
              </div>
            </div>

            <div className="md:col-span-4 md:col-start-9">
              <h2 className="font-serif text-2xl leading-tight tracking-[-0.02em]">
                {copy.sections[2].title}
              </h2>
              <div className="mt-4 space-y-4 text-sm leading-7 text-muted-foreground">
                <RoomSectionContent section={copy.sections[2]} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="work-closing" className="border-b border-border">
        <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
          <div className="grid gap-8 md:grid-cols-12 md:gap-6">
            <div className="md:col-span-3">
              <SectionLabel index="03">{copy.label}</SectionLabel>
            </div>
            <div className="md:col-span-8 md:col-start-5">
              <p
                id="work-closing"
                className="max-w-2xl border-l-2 border-blood pl-5 font-serif text-2xl leading-snug tracking-[-0.02em] sm:text-3xl"
              >
                {copy.closing}
              </p>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
