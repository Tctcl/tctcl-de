import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import type { ThemeId } from "@/lib/theme-ids";

import { HypeHome } from "./home/hype";
import { JtlNovaHome } from "./home/jtl-nova";
import { KonsoleHome } from "./home/konsole";
import { MinecraftHome } from "./home/minecraft";
import { PapierHome } from "./home/papier";
import { RetroHome } from "./home/retro";
import { WerkstattHome } from "./home/werkstatt";
import type { ThemeDefinition } from "./types";

export const themeRegistry: Record<ThemeId, ThemeDefinition> = {
  werkstatt: {
    id: "werkstatt",
    Header: SiteHeader,
    Footer: SiteFooter,
    Home: WerkstattHome,
  },
  konsole: {
    id: "konsole",
    Header: SiteHeader,
    Footer: SiteFooter,
    Home: KonsoleHome,
  },
  minecraft: {
    id: "minecraft",
    Header: SiteHeader,
    Footer: SiteFooter,
    Home: MinecraftHome,
  },
  "jtl-nova": {
    id: "jtl-nova",
    Header: SiteHeader,
    Footer: SiteFooter,
    Home: JtlNovaHome,
  },
  hype: {
    id: "hype",
    Header: SiteHeader,
    Footer: SiteFooter,
    Home: HypeHome,
  },
  retro: {
    id: "retro",
    Header: SiteHeader,
    Footer: SiteFooter,
    Home: RetroHome,
  },
  papier: {
    id: "papier",
    Header: SiteHeader,
    Footer: SiteFooter,
    Home: PapierHome,
  },
};

export function getThemeDefinition(theme: ThemeId): ThemeDefinition {
  return themeRegistry[theme];
}
