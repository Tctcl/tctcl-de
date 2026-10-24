import type { Locale } from "@/lib/locale";

export type NowEntry = {
  title: string;
  text: string;
  tag: string;
};

/**
 * Short, hand-edited list for the homepage noticeboard. Update it when the
 * workbench changes. There are deliberately no dates or progress percentages,
 * so the site never fakes live activity.
 */
export const nowEntries: Record<Locale, NowEntry[]> = {
  de: [
    {
      title: "DJ-Bibliothek",
      text: "Track-Analyse, BPM, Beatgrids, Keys und Metadaten. Ein Werkzeug, das die Bibliothek nicht nach dem dritten Update zerlegt.",
      tag: "Musik",
    },
    {
      title: "Sound System",
      text: "Subs, Kicks, Mids, Tops, DSP und Gehäuse. Erst lesen, rechnen und verstehen — irgendwann sägen.",
      tag: "Hardware",
    },
    {
      title: "Self-Hosting",
      text: "Linux, Docker, Backups und die Frage, wie viel Infrastruktur ein Privatprojekt wirklich braucht.",
      tag: "Infrastruktur",
    },
    {
      title: "JTL & Daten",
      text: "APIs, Importe und die unschönen Fälle, in denen Systeme anders reagieren, als die Dokumentation behauptet.",
      tag: "Arbeit",
    },
  ],
  en: [
    {
      title: "DJ library",
      text: "Track analysis, BPM, beatgrids, keys and metadata. A tool that doesn't fall apart after the third update.",
      tag: "Music",
    },
    {
      title: "Sound system",
      text: "Subs, kicks, mids, tops, DSP and enclosures. Read, calculate and understand first — cut wood later.",
      tag: "Hardware",
    },
    {
      title: "Self-hosting",
      text: "Linux, Docker, backups and the question of how much infrastructure a private project actually needs.",
      tag: "Infrastructure",
    },
    {
      title: "JTL & data",
      text: "APIs, imports and the ugly cases where systems behave differently from what the docs claim.",
      tag: "Work",
    },
  ],
};
