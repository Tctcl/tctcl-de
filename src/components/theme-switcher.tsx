"use client";

import { usePathname } from "next/navigation";
import { useId, useRef } from "react";

import type { Locale } from "@/lib/locale";
import { stylePath, themeSwitchPath } from "@/lib/routes";
import { THEME_PATH_SEGMENT, type ThemeId } from "@/lib/theme-ids";
import { themeCatalog, themeLabel } from "@/themes/catalog";

type ThemeSwitcherProps = {
  locale: Locale;
  theme: ThemeId;
  variant?: "header" | "footer" | "inline";
};

const labels = {
  de: {
    trigger: "Stil",
    title: "Stil wählen",
    intro:
      "Sieben Werkstätten, dieselben Fakten. Die Wahl wird für ein Jahr gespeichert.",
    current: "Aktiv",
    gallery: "Alle Stile ansehen",
    close: "Schließen",
    note: "Minecraft und JTL Nova sind Marken ihrer jeweiligen Inhaber. Diese Stile sind Hommagen ohne Verbindung.",
  },
  en: {
    trigger: "Style",
    title: "Choose a style",
    intro:
      "Seven workshops, the same facts. Your choice is stored for a year.",
    current: "Active",
    gallery: "See all styles",
    close: "Close",
    note: "Minecraft and JTL Nova are trademarks of their respective owners. These styles are homages with no affiliation.",
  },
} satisfies Record<Locale, Record<string, string>>;

function normalizePath(locale: Locale, pathname: string): string {
  const prefix = locale === "de" ? "" : "/en";
  const internalBase = `${prefix}/${THEME_PATH_SEGMENT}`;

  if (pathname === internalBase || pathname.startsWith(`${internalBase}/`)) {
    const rest = pathname.slice(internalBase.length);
    const parts = rest.split("/").filter(Boolean);
    const suffix = parts.slice(1).join("/");

    return suffix ? `${prefix}/${suffix}` : prefix || "/";
  }

  return pathname || prefix || "/";
}

export function ThemeSwitcher({
  locale,
  theme,
  variant = "header",
}: ThemeSwitcherProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const pathname = usePathname();
  const copy = labels[locale];
  const currentPath = normalizePath(locale, pathname ?? "/");
  const current = themeCatalog.find((entry) => entry.id === theme);

  return (
    <>
      <button
        type="button"
        className={`theme-switcher-trigger theme-switcher-trigger--${variant}`}
        onClick={() => dialogRef.current?.showModal()}
        aria-haspopup="dialog"
      >
        <span
          aria-hidden="true"
          className="theme-switcher-swatch"
          style={{ background: current?.swatch[2] ?? "currentColor" }}
        />
        <span>{copy.trigger}</span>
        <span className="theme-switcher-current">{themeLabel(theme, locale)}</span>
      </button>

      <dialog
        ref={dialogRef}
        className="theme-switcher-dialog"
        aria-labelledby={titleId}
        onClick={(event) => {
          if (event.target === dialogRef.current) {
            dialogRef.current.close();
          }
        }}
      >
        <div className="theme-switcher-panel">
          <div className="theme-switcher-head">
            <div>
              <p className="theme-switcher-kicker">TCTCL / 07</p>
              <h2 id={titleId} className="theme-switcher-title">
                {copy.title}
              </h2>
            </div>
            <button
              type="button"
              className="theme-switcher-close"
              onClick={() => dialogRef.current?.close()}
            >
              <span aria-hidden="true">×</span>
              <span className="theme-switcher-sr">{copy.close}</span>
            </button>
          </div>

          <p className="theme-switcher-intro">{copy.intro}</p>

          <ul className="theme-switcher-list">
            {themeCatalog.map((entry) => {
              const active = entry.id === theme;

              return (
                <li key={entry.id}>
                  <a
                    href={themeSwitchPath(locale, entry.id, currentPath)}
                    aria-current={active ? "true" : undefined}
                    className="theme-switcher-option"
                    data-active={active ? "true" : undefined}
                  >
                    <span className="theme-switcher-option-swatch" aria-hidden="true">
                      {entry.swatch.map((color) => (
                        <span
                          key={color}
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </span>
                    <span className="theme-switcher-option-text">
                      <span className="theme-switcher-option-label">
                        {entry.label[locale]}
                      </span>
                      <span className="theme-switcher-option-blurb">
                        {entry.blurb[locale]}
                      </span>
                    </span>
                    {active ? (
                      <span className="theme-switcher-option-state">
                        {copy.current}
                      </span>
                    ) : null}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="theme-switcher-foot">
            <a href={stylePath(locale)} className="theme-switcher-gallery">
              {copy.gallery} →
            </a>
            <p>{copy.note}</p>
          </div>
        </div>
      </dialog>
    </>
  );
}
