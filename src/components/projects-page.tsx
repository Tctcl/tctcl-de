import { EmptyState } from "@/components/empty-state";
import { RoomHero } from "@/components/room-hero";
import { RoomSectionContent } from "@/components/room-section";
import { SectionLabel } from "@/components/section-label";
import { SiteShell } from "@/components/site-shell";
import { projects } from "@/content/projects";
import { otherLocale, type Locale } from "@/lib/locale";
import { roomPath } from "@/lib/routes";
import { defaultTheme, type ThemeId } from "@/lib/theme-ids";
import { getThemeRoomCopy } from "@/themes/copy";
import { RoomFlavor } from "@/themes/room-flavor";

export function ProjectsPage({
  locale,
  theme = defaultTheme,
}: {
  locale: Locale;
  theme?: ThemeId;
}) {
  const copy = getThemeRoomCopy(locale, "projects", theme);
  const alternateHref = roomPath("projects", otherLocale(locale));

  return (
    <SiteShell
      locale={locale}
      alternateHref={alternateHref}
      current="projects"
      theme={theme}
    >
      <RoomHero locale={locale} room="projects" theme={theme} />
      <RoomFlavor locale={locale} room="projects" theme={theme} />

      <section
        aria-labelledby="projects-kinds"
        className="border-b border-border"
      >
        <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
          <div className="grid gap-8 md:grid-cols-12 md:gap-6">
            <div className="md:col-span-3">
              <SectionLabel index="01">{copy.label}</SectionLabel>
            </div>
            <div className="md:col-span-8 md:col-start-5">
              <h2
                id="projects-kinds"
                className="font-serif text-3xl leading-tight tracking-[-0.025em] sm:text-4xl"
              >
                {copy.sections[0].title}
              </h2>
              <div className="mt-5 max-w-2xl text-[15px] leading-7 text-muted-foreground">
                <RoomSectionContent section={copy.sections[0]} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="projects-status"
        className="border-b border-border bg-card/35"
      >
        <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
          <div className="grid gap-8 md:grid-cols-12 md:gap-6">
            <div className="md:col-span-3">
              <SectionLabel index="02">{copy.label}</SectionLabel>
            </div>
            <div className="md:col-span-8 md:col-start-5">
              <h2
                id="projects-status"
                className="font-serif text-3xl leading-tight tracking-[-0.025em] sm:text-4xl"
              >
                Status
              </h2>
              <dl className="mt-6 grid gap-x-8 gap-y-5 border-t border-border pt-5 sm:grid-cols-2">
                {copy.statuses.map((status) => (
                  <div key={status.key}>
                    <dt className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.16em] text-blood">
                      <span
                        aria-hidden="true"
                        className="h-1.5 w-1.5 bg-current"
                      />
                      {status.label}
                    </dt>
                    <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {status.text}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="projects-bench"
        className="border-b border-border"
      >
        <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
          <div className="grid gap-8 md:grid-cols-12 md:gap-6">
            <div className="md:col-span-3">
              <SectionLabel index="03">{copy.label}</SectionLabel>
            </div>
            <div className="md:col-span-8 md:col-start-5">
              <h2
                id="projects-bench"
                className="font-serif text-3xl leading-tight tracking-[-0.025em] sm:text-4xl"
              >
                {copy.benchTitle}
              </h2>

              {projects.length === 0 ? (
                <EmptyState
                  indent={false}
                  label={copy.empty.label}
                  title={copy.empty.title}
                  text={copy.empty.text}
                  note={copy.empty.note}
                />
              ) : (
                <ol className="mt-8 border-t border-border">
                  {projects.map((project) => {
                    const status = copy.statuses.find(
                      (entry) => entry.key === project.status,
                    );

                    return (
                      <li
                        key={project.name}
                        className="grid gap-3 border-b border-border py-6 sm:grid-cols-[minmax(0,1fr)_10rem] sm:gap-8"
                      >
                        <div>
                          <h3 className="font-serif text-2xl leading-tight">
                            {project.href ? (
                              <a
                                href={project.href}
                                className="transition-colors hover:text-blood"
                              >
                                {project.name} ↗
                              </a>
                            ) : (
                              project.name
                            )}
                          </h3>
                          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                            {project.description}
                          </p>
                          {project.notes?.map((note) => (
                            <p
                              key={note}
                              className="mt-2 text-sm leading-relaxed text-muted-foreground"
                            >
                              {note}
                            </p>
                          ))}
                        </div>
                        <div className="font-mono text-[9px] uppercase leading-relaxed tracking-[0.14em] text-muted-foreground">
                          {status ? (
                            <p className="text-blood">{status.label}</p>
                          ) : null}
                          <p className="mt-2">
                            {[project.year, ...(project.tags ?? [])]
                              .filter(Boolean)
                              .join(" / ")}
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </ol>
              )}
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="projects-writing"
        className="border-b border-border"
      >
        <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
          <div className="grid gap-8 md:grid-cols-12 md:gap-6">
            <div className="md:col-span-3">
              <SectionLabel index="04">{copy.label}</SectionLabel>
            </div>
            <div className="md:col-span-7 md:col-start-5">
              <h2
                id="projects-writing"
                className="font-serif text-3xl leading-tight tracking-[-0.025em] sm:text-4xl"
              >
                {copy.sections[1].title}
              </h2>
              <div className="mt-5 max-w-2xl space-y-4 text-[15px] leading-7 text-muted-foreground">
                <RoomSectionContent section={copy.sections[1]} />
              </div>
            </div>
            <aside className="md:col-span-2 md:col-start-11">
              <p className="border-t border-blood pt-3 font-mono text-[9px] uppercase leading-relaxed tracking-[0.16em] text-muted-foreground">
                {copy.benchNotes.map((line, index) => (
                  <span
                    key={line}
                    className={`block ${index === copy.benchNotes.length - 1 ? "text-blood" : ""}`}
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
