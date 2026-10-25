import { RoomHero } from "@/components/room-hero";
import { RoomSectionContent } from "@/components/room-section";
import { SectionLabel } from "@/components/section-label";
import { SiteShell } from "@/components/site-shell";
import { otherLocale, type Locale } from "@/lib/locale";
import { roomPath } from "@/lib/routes";
import { defaultTheme, type ThemeId } from "@/lib/theme-ids";
import { getThemeRoomCopy } from "@/themes/copy";
import { RoomFlavor } from "@/themes/room-flavor";

export function TinkeringPage({
  locale,
  theme = defaultTheme,
}: {
  locale: Locale;
  theme?: ThemeId;
}) {
  const copy = getThemeRoomCopy(locale, "tinkering", theme);
  const alternateHref = roomPath("tinkering", otherLocale(locale));

  return (
    <SiteShell
      locale={locale}
      alternateHref={alternateHref}
      current="tinkering"
      theme={theme}
    >
      <RoomHero locale={locale} room="tinkering" theme={theme} />
      <RoomFlavor locale={locale} room="tinkering" theme={theme} />

      <section
        aria-labelledby="tinkering-start"
        className="border-b border-border"
      >
        <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
          <div className="grid gap-8 md:grid-cols-12 md:gap-6">
            <div className="md:col-span-3">
              <SectionLabel index="01">{copy.label}</SectionLabel>
            </div>
            <div className="md:col-span-8 md:col-start-5">
              <h2
                id="tinkering-start"
                className="font-serif text-3xl leading-tight tracking-[-0.025em] sm:text-4xl"
              >
                {copy.sections[0].title}
              </h2>
              <div className="mt-5 max-w-2xl space-y-4 text-[15px] leading-7 text-muted-foreground">
                <RoomSectionContent section={copy.sections[0]} />
              </div>

              <div className="mt-10 border border-border bg-card/30 p-5 sm:p-6">
                <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-blood">
                  {copy.toolkit.label}
                </p>
                <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                  {copy.toolkit.items.map((item) => (
                    <li
                      key={item}
                      className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 max-w-2xl space-y-4 text-[15px] leading-7 text-muted-foreground">
                <h3 className="font-serif text-2xl leading-tight text-foreground">
                  {copy.sections[1].title}
                </h3>
                <RoomSectionContent section={copy.sections[1]} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="tinkering-rules"
        className="border-b border-border"
      >
        <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
          <div className="grid gap-8 md:grid-cols-12 md:gap-6">
            <div className="md:col-span-3">
              <SectionLabel index="02">{copy.label}</SectionLabel>
            </div>
            <div className="md:col-span-8 md:col-start-5">
              <h2
                id="tinkering-rules"
                className="font-serif text-3xl leading-tight tracking-[-0.025em] sm:text-4xl"
              >
                {copy.sections[2].title}
              </h2>
              <div className="mt-4 max-w-2xl text-[15px] leading-7 text-muted-foreground">
                <RoomSectionContent section={copy.sections[2]} />
              </div>

              <ol className="mt-8 border-t border-border">
                {copy.rules.map((rule, index) => (
                  <li
                    key={rule.title}
                    className="grid gap-2 border-b border-border py-5 sm:grid-cols-[2.5rem_minmax(0,1fr)] sm:gap-6"
                  >
                    <span className="font-mono text-[10px] tracking-[0.12em] text-blood">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-serif text-2xl leading-tight">
                        {rule.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {rule.text}
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
        aria-labelledby="tinkering-again"
        className="border-b border-border"
      >
        <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
          <div className="grid gap-8 md:grid-cols-12 md:gap-6">
            <div className="md:col-span-3">
              <SectionLabel index="03">{copy.label}</SectionLabel>
            </div>
            <div className="md:col-span-7 md:col-start-5">
              <h2
                id="tinkering-again"
                className="font-serif text-3xl leading-tight tracking-[-0.025em] sm:text-4xl"
              >
                {copy.sections[3].title}
              </h2>
              <div className="mt-5 max-w-2xl space-y-4 text-[15px] leading-7 text-muted-foreground">
                <RoomSectionContent section={copy.sections[3]} />
              </div>
            </div>
            <aside className="md:col-span-2 md:col-start-11">
              <p className="border-t border-blood pt-3 font-mono text-[9px] uppercase leading-relaxed tracking-[0.16em] text-muted-foreground">
                {copy.marginal.map((line, index) => (
                  <span
                    key={line}
                    className={`block ${index === copy.marginal.length - 1 ? "mt-2 text-blood" : ""}`}
                  >
                    {line}
                  </span>
                ))}
              </p>
            </aside>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
