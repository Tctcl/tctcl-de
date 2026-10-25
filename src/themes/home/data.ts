import { nowEntries } from "@/content/now";
import { getPublishedPosts, type Post } from "@/lib/content";
import type { Locale } from "@/lib/locale";
import { blogPath, roomPath, type RoomId } from "@/lib/routes";
import type { ThemeId } from "@/lib/theme-ids";

import { getThemeCopy, getThemeRoomCopy } from "../copy";

export type RoomLink = {
  key: RoomId | "journal";
  index: string;
  label: string;
  teaser: string;
  tags: string[];
  href: string;
};

export type HomeData = {
  copy: ReturnType<typeof getThemeCopy>;
  posts: Post[];
  now: (typeof nowEntries)[Locale];
  rooms: RoomLink[];
  journal: RoomLink;
  hotbar: RoomLink[];
};

export function getHomeData(locale: Locale, theme: ThemeId): HomeData {
  const copy = getThemeCopy(locale, theme);
  const posts = getPublishedPosts(locale).slice(0, 3);
  const now = nowEntries[locale];

  const rooms = (["tinkering", "projects", "about", "work"] as RoomId[]).map(
    (room): RoomLink => {
      const roomCopy = getThemeRoomCopy(locale, room, theme);

      return {
        key: room,
        index: roomCopy.index,
        label: roomCopy.label,
        teaser: roomCopy.teaser,
        tags: roomCopy.tags,
        href: roomPath(room, locale),
      };
    },
  );

  const journal: RoomLink = {
    key: "journal",
    index: "03",
    label: copy.nav.journal,
    teaser: copy.home.journalIntro,
    tags: copy.home.journalTags,
    href: blogPath(locale),
  };

  const byKey = new Map(rooms.map((room) => [room.key, room]));

  return {
    copy,
    posts,
    now,
    rooms,
    journal,
    hotbar: [
      byKey.get("tinkering")!,
      byKey.get("projects")!,
      journal,
      byKey.get("about")!,
      byKey.get("work")!,
    ],
  };
}
