import type { ComponentType } from "react";

import type { RoomBase, RoomCopy } from "@/content/rooms";
import type { SiteCopy } from "@/content/site-copy";
import type { Locale } from "@/lib/locale";
import type { CurrentSection, RoomId } from "@/lib/routes";
import type { ThemeId } from "@/lib/theme-ids";

export type ThemeChromeProps = {
  locale: Locale;
  theme: ThemeId;
  current?: CurrentSection;
  alternateHref?: string | null;
};

export type ThemeHomeProps = {
  locale: Locale;
  theme: ThemeId;
};

export type ThemeDefinition = {
  id: ThemeId;
  Header: ComponentType<ThemeChromeProps>;
  Footer: ComponentType<ThemeChromeProps>;
  Home: ComponentType<ThemeHomeProps>;
};

/**
 * Theme copy is layered over the canonical copy rather than duplicated. Only
 * the strings a style actually says differently need to exist here.
 */
export type ThemeCopyOverrides = {
  brand?: Partial<SiteCopy["brand"]>;
  nav?: Partial<SiteCopy["nav"]>;
  home?: Partial<SiteCopy["home"]>;
  blog?: Partial<SiteCopy["blog"]>;
  footer?: Partial<SiteCopy["footer"]>;
  rooms?: Partial<Record<RoomId, Partial<RoomBase>>>;
};

export type ThemeCopyTable = Record<
  ThemeId,
  Record<Locale, ThemeCopyOverrides>
>;

export type ThemedRoomCopy<Id extends RoomId> = RoomCopy[Id];
