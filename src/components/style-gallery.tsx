import Link from "next/link";

import { SiteShell } from "@/components/site-shell";
import type { Locale } from "@/lib/locale";
import { homePath, stylePath, themeSwitchPath } from "@/lib/routes";
import { defaultTheme, type ThemeId } from "@/lib/theme-ids";
import { themeCatalog, themeLabel } from "@/themes/catalog";

const copy = {
  de: {
    eyebrow: "Stile / 07",
    title: "Sieben Werkstätten, eine Wahrheit.",
    intro:
      "Jeder Stil ändert Farben, Layout und Ton. Die Fakten bleiben. Beim ersten Besuch entscheidet der Zufall, danach wird die Wahl für ein Jahr in einem Cookie gespeichert.",
    active: "Aktiv",
    choose: "Diesen Stil wählen",
    note: "Minecraft und JTL Nova sind Marken ihrer jeweiligen Inhaber. Diese Stile sind Hommagen ohne Verbindung. Keine Logos, Texturen oder kopierten Assets.",
    cookie: "Ein Cookie für den Stil. Kein Tracking, kein Banner.",
    home: "Zur Werkstatt",
    previewKicker: "01 / Raum",
    previewTitle: "Musik, Code und halbfertige Ideen.",
  },
  en: {
    eyebrow: "Styles / 07",
    title: "Seven workshops, one set of facts.",
    intro:
      "Every style changes colours, layout and voice. The facts stay. On a first visit chance decides; after that the choice is stored in a cookie for a year.",
    active: "Active",
    choose: "Choose this style",
    note: "Minecraft and JTL Nova are trademarks of their respective owners. These styles are homages with no affiliation. No logos, textures or copied assets.",
    cookie: "One cookie for the style. No tracking, no banner.",
    home: "Back to the workshop",
    previewKicker: "01 / Room",
    previewTitle: "Music, code and half-finished ideas.",
  },
} satisfies Record<Locale, Record<string, string>>;

export function StyleGallery({
  locale,
  theme = defaultTheme,
}: {
  locale: Locale;
  theme?: ThemeId;
}) {
  const text = copy[locale];
  const alternateHref = homePath(locale === "de" ? "en" : "de");

  return (
    <SiteShell
      locale={locale}
      alternateHref={alternateHref}
      current="home"
      theme={theme}
    >
      <div className="gallery-page">
        <header className="gallery-hero">
          <p className="gallery-kicker">{text.eyebrow}</p>
          <h1 className="gallery-title">{text.title}</h1>
          <p className="gallery-intro">{text.intro}</p>
          <p className="gallery-current">
            {text.active}: <strong>{themeLabel(theme, locale)}</strong>
          </p>
        </header>

        <ul className="gallery-grid">
          {themeCatalog.map((entry) => {
            const active = entry.id === theme;

            return (
              <li key={entry.id}>
                <article
                  className="style-card"
                  data-theme={entry.id}
                  data-active={active ? "true" : undefined}
                >
                  <div className="style-card-preview" aria-hidden="true">
                    <div className="style-card-chrome">
                      <span>TCTCL</span>
                      <span>{entry.label[locale]}</span>
                    </div>
                    <p className="style-card-kicker">{text.previewKicker}</p>
                    <p className="style-card-heading">
                      {text.previewTitle}
                    </p>
                    <p className="style-card-body">
                      {entry.blurb[locale]}
                    </p>
                    <div className="style-card-swatches">
                      {entry.swatch.map((color) => (
                        <span
                          key={color}
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="style-card-meta">
                    <div className="style-card-title-row">
                      <h2>{entry.label[locale]}</h2>
                      {active ? (
                        <span className="style-card-active">{text.active}</span>
                      ) : null}
                    </div>
                    <p className="style-card-blurb">{entry.blurb[locale]}</p>
                    {entry.note ? (
                      <p className="style-card-note">{entry.note[locale]}</p>
                    ) : null}

                    <div className="style-card-actions">
                      {active ? (
                        <Link
                          href={stylePath(locale)}
                          className="style-card-button style-card-button--active"
                          aria-current="page"
                        >
                          {text.active}
                        </Link>
                      ) : (
                        <a
                          href={themeSwitchPath(
                            locale,
                            entry.id,
                            stylePath(locale),
                          )}
                          className="style-card-button"
                        >
                          {text.choose} →
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>

        <footer className="gallery-footer">
          <p>{text.note}</p>
          <p>{text.cookie}</p>
          <Link href={homePath(locale)}>{text.home} →</Link>
        </footer>
      </div>
    </SiteShell>
  );
}
