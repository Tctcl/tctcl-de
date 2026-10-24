import { RoomMark } from "@/components/room-mark";
import { SectionLabel } from "@/components/section-label";
import { getRoomCopy } from "@/content/rooms";
import type { Locale } from "@/lib/locale";
import type { RoomId } from "@/lib/routes";

export function RoomHero({
  locale,
  room,
}: {
  locale: Locale;
  room: RoomId;
}) {
  const copy = getRoomCopy(locale, room);

  return (
    <header className="border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
        <div className="grid gap-8 md:grid-cols-12 md:gap-6">
          <div className="flex items-end justify-between gap-6 md:col-span-3 md:block">
            <div>
              <SectionLabel index={copy.index}>{copy.label}</SectionLabel>
              <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground">
                {copy.eyebrow}
              </p>
            </div>
            <RoomMark
              variant={room}
              className="h-12 w-20 shrink-0 opacity-80 md:mt-8"
            />
          </div>

          <div className="md:col-span-9">
            <h1 className="max-w-4xl font-serif text-[clamp(2.4rem,5.6vw,4.6rem)] font-semibold leading-[0.98] tracking-[-0.04em]">
              {copy.title}{" "}
              <span className="italic text-muted-foreground">
                {copy.accent}
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-[15.5px] leading-7 text-muted-foreground sm:text-base">
              {copy.intro}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
