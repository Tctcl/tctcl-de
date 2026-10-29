import type { Locale } from "@/lib/locale";

export type SiteCopy = {
  meta: {
    title: string;
    description: string;
    ogAlt: string;
  };
  brand: {
    subtitle: string;
    aria: string;
  };
  nav: {
    skip: string;
    home: string;
    tinkering: string;
    projects: string;
    journal: string;
    about: string;
    work: string;
    main: string;
    language: string;
    switchToEnglish: string;
    switchToGerman: string;
    currentLanguage: string;
    noTranslation: string;
  };
  home: {
    eyebrow: string;
    title: string;
    accent: string;
    intro: string[];
    marginalLabel: string;
    marginalFacts: {
      term: string;
      value: string;
    }[];
    marginalNote: string;
    marginalStamp: string;
    roomsLabel: string;
    roomsTitle: string;
    roomsIntro: string;
    roomCta: string;
    nowLabel: string;
    nowTitle: string;
    nowIntro: string;
    journalLabel: string;
    journalTitle: string;
    journalIntro: string;
    journalTags: string[];
    journalEmptyTitle: string;
    journalEmptyText: string;
    journalEmptyNote: string;
    allPosts: string;
  };
  blog: {
    eyebrow: string;
    title: string;
    description: string;
    intro: string;
    emptyLabel: string;
    emptyTitle: string;
    emptyText: string;
    emptyNote: string;
    countOne: string;
    countMany: string;
    pageTitle: string;
    pageDescription: string;
    previous: string;
    next: string;
    pagination: string;
    page: string;
  };
  article: {
    breadcrumbHome: string;
    breadcrumbBlog: string;
    toc: string;
    publishedOn: string;
    updatedOn: string;
    by: string;
    minRead: string;
    relatedTitle: string;
    relatedIntro: string;
    backToBlog: string;
    translationNotice: string;
    translationLink: string;
    tagsLabel: string;
    categoriesLabel: string;
    copyCode: string;
    copiedCode: string;
    copyError: string;
  };
  notFound: {
    eyebrow: string;
    title: string;
    text: string;
    backHome: string;
    backBlog: string;
    metaTitle: string;
    metaDescription: string;
  };
  footer: {
    tagline: string;
    navLabel: string;
    privacy: string;
    colophon: string;
    copyright: string;
    backToTop: string;
  };
  common: {
    arrow: string;
  };
};

export const siteCopy: Record<Locale, SiteCopy> = {
  de: {
    meta: {
      title: "TCTCL — Musik, Software und Dinge dazwischen",
      description:
        "Persönliche Werkstatt von TCTCL: E-Commerce-Entwicklung, Self-Hosting, Musik und Projekte, die nicht unbedingt ein Produkt werden müssen.",
      ogAlt: "TCTCL — Musik, Software und Dinge dazwischen",
    },
    brand: {
      subtitle: "Werkstatt",
      aria: "TCTCL — Startseite",
    },
    nav: {
      skip: "Zum Inhalt springen",
      home: "Start",
      tinkering: "Tüfteln",
      projects: "Projekte",
      journal: "Journal",
      about: "Über",
      work: "Arbeit",
      main: "Hauptnavigation",
      language: "Sprache wechseln",
      switchToEnglish: "Zur englischen Version",
      switchToGerman: "Zur deutschen Version",
      currentLanguage: "Aktuelle Sprache",
      noTranslation:
        "Keine englische Übersetzung — zum englischen Journal",
    },
    home: {
      eyebrow: "TCTCL / persönliche Werkstatt",
      title: "Musik, Code und",
      accent: "halbfertige Ideen.",
      intro: [
        "Ich bin Entwickler, Tüftler und Musiknerd. Beruflich baue ich E-Commerce-Systeme, meistens im JTL-Umfeld. Daneben hoste ich Kram selbst, nehme Dinge auseinander und baue Werkzeuge, weil mir das vorhandene zu umständlich ist.",
        "Diese Seite ist meine Werkstatt: ein Ort für Projekte, Musiknotizen, technische Ausflüge und Ideen, die noch nicht wissen, was sie werden wollen. Kein Angebot, kein Content-Plan, keine Anmeldung.",
      ],
      marginalLabel: "Kurzfassung",
      marginalFacts: [
        { term: "Beruflich", value: "E-Commerce / JTL / APIs" },
        { term: "Privat", value: "Linux, Docker, Self-Hosting" },
        { term: "Im Kopf", value: "Techno, DJing, Sound System" },
        { term: "Hier", value: "Notizen, Projekte, Experimente" },
      ],
      marginalNote: "Ein Cookie für den Stil. Kein Tracking, kein Newsletter-Popup.",
      marginalStamp: "offen für Umwege",
      roomsLabel: "Räume",
      roomsTitle: "Guck dich um.",
      roomsIntro:
        "Jede Ecke hat ihr eigenes Thema. Alles hängt trotzdem irgendwie zusammen.",
      roomCta: "Raum öffnen",
      nowLabel: "Notizbrett",
      nowTitle: "Womit ich mich gerade beschäftige",
      nowIntro:
        "Kein Live-Feed und keine erfundenen Statusmeldungen. Eher das, was gerade auf dem Tisch liegt.",
      journalLabel: "Journal",
      journalTitle: "Zuletzt geschrieben",
      journalIntro:
        "Notizen, Fundstücke und Dinge, die ich mir früher hätte aufschreiben sollen.",
      journalTags: ["Notizen", "Fundstücke", "Ideen"],
      journalEmptyTitle: "Noch nichts veröffentlicht.",
      journalEmptyText:
        "Das Journal ist eingerichtet. Der erste Text ist noch nicht fertig — und statt einer Platzhalter-Seite bleibt es erstmal leer.",
      journalEmptyNote:
        "Sobald etwas veröffentlicht wird, steht es hier, im Journal und in der Sitemap.",
      allPosts: "Alle Beiträge",
    },
    blog: {
      eyebrow: "Journal",
      title: "Notizen aus der Werkstatt.",
      description:
        "Notizen, Fundstücke und technische Ausflüge: Musik, Software, Self-Hosting und alles dazwischen.",
      intro:
        "Hier landen Dinge, die ich beim Bauen oder Hören gelernt habe: Anleitungen, Fehlersuchen, Meinungen und Notizen, die nirgendwo anders hinpassen. Kein Veröffentlichungsplan, keine künstliche Serie.",
      emptyLabel: "Journal / 00",
      emptyTitle: "Noch nichts veröffentlicht.",
      emptyText:
        "Das Journal ist eingerichtet, aber der erste Beitrag ist noch nicht fertig. Statt einer Platzhalter-Seite bleibt es hier erst einmal leer.",
      emptyNote:
        "Sobald ein Text veröffentlicht wird, erscheint er automatisch hier, in der Sitemap und auf der Startseite.",
      countOne: "Beitrag",
      countMany: "Beiträge",
      pageTitle: "Journal — Seite {page}",
      pageDescription: "Seite {page} des Journals von TCTCL.",
      previous: "Neuere Beiträge",
      next: "Ältere Beiträge",
      pagination: "Seiten",
      page: "Seite {page}",
    },
    article: {
      breadcrumbHome: "Start",
      breadcrumbBlog: "Journal",
      toc: "Inhalt",
      publishedOn: "Veröffentlicht am",
      updatedOn: "Aktualisiert am",
      by: "Von",
      minRead: "Min. Lesezeit",
      relatedTitle: "Passt dazu",
      relatedIntro:
        "Weitere Texte aus dem Journal, die inhaltlich anschließen.",
      backToBlog: "Zurück zum Journal",
      translationNotice: "Dieser Text ist auch auf Englisch verfügbar.",
      translationLink: "Auf Englisch lesen",
      tagsLabel: "Themen",
      categoriesLabel: "Rubriken",
      copyCode: "Kopieren",
      copiedCode: "Kopiert",
      copyError: "Fehler",
    },
    notFound: {
      eyebrow: "404",
      title: "Hier ist nichts. Zumindest nicht das.",
      text: "Die Seite existiert nicht, wurde verschoben oder war nur ein Gerücht. Der Rest der Werkstatt ist noch da.",
      backHome: "Zur Startseite",
      backBlog: "Zum Journal",
      metaTitle: "Seite nicht gefunden",
      metaDescription: "Diese Seite existiert nicht.",
    },
    footer: {
      tagline: "Musik, Software und Dinge dazwischen.",
      navLabel: "Footer-Navigation",
      privacy: "Ein Cookie für den Stil. Kein Tracking. Kein Banner.",
      colophon: "Next.js, Markdown, kein CMS.",
      copyright: "TCTCL",
      backToTop: "Nach oben",
    },
    common: {
      arrow: "→",
    },
  },
  en: {
    meta: {
      title: "TCTCL — music, software and things in between",
      description:
        "TCTCL's personal workshop: e-commerce development, self-hosting, music and projects that don't have to become products.",
      ogAlt: "TCTCL — music, software and things in between",
    },
    brand: {
      subtitle: "workshop",
      aria: "TCTCL — homepage",
    },
    nav: {
      skip: "Skip to content",
      home: "Home",
      tinkering: "Tinkering",
      projects: "Projects",
      journal: "Journal",
      about: "About",
      work: "Work",
      main: "Main navigation",
      language: "Change language",
      switchToEnglish: "Go to the English version",
      switchToGerman: "Go to the German version",
      currentLanguage: "Current language",
      noTranslation: "No German translation — go to the German journal",
    },
    home: {
      eyebrow: "TCTCL / personal workshop",
      title: "Music, code and",
      accent: "half-finished ideas.",
      intro: [
        "I'm a developer, tinkerer and music nerd. Professionally I build e-commerce systems, mostly around JTL. On the side I host things myself, take stuff apart and build tools because the existing ones are too clunky.",
        "This site is my workshop: a place for projects, music notes, technical detours and ideas that haven't decided what they want to be yet. No offer, no content plan, no sign-up.",
      ],
      marginalLabel: "Short version",
      marginalFacts: [
        { term: "Work", value: "E-commerce / JTL / APIs" },
        { term: "Private", value: "Linux, Docker, self-hosting" },
        { term: "In my head", value: "Techno, DJing, sound systems" },
        { term: "Here", value: "Notes, projects, experiments" },
      ],
      marginalNote: "One cookie for the style. No tracking, no newsletter popup.",
      marginalStamp: "open to detours",
      roomsLabel: "Rooms",
      roomsTitle: "Have a look around.",
      roomsIntro:
        "Every corner has its own topic. It all connects anyway.",
      roomCta: "Open room",
      nowLabel: "Noticeboard",
      nowTitle: "What I'm currently messing with",
      nowIntro:
        "Not a live feed, not invented status updates. Just what's on the bench right now.",
      journalLabel: "Journal",
      journalTitle: "Latest writing",
      journalIntro:
        "Notes, finds and things I should have written down earlier.",
      journalTags: ["Notes", "Finds", "Ideas"],
      journalEmptyTitle: "Nothing published yet.",
      journalEmptyText:
        "The journal is set up. The first post isn't finished — and rather than a placeholder page, it stays empty for now.",
      journalEmptyNote:
        "Once something is published, it appears here, in the journal and in the sitemap.",
      allPosts: "All posts",
    },
    blog: {
      eyebrow: "Journal",
      title: "Notes from the workshop.",
      description:
        "Notes, finds and technical detours: music, software, self-hosting and everything in between.",
      intro:
        "This is where I put things I learned while building or listening: guides, debugging notes, opinions and notes that don't fit anywhere else. No publishing schedule, no artificial series.",
      emptyLabel: "Journal / 00",
      emptyTitle: "Nothing published yet.",
      emptyText:
        "The journal is set up, but the first post isn't finished. Rather than a placeholder page, it stays empty for now.",
      emptyNote:
        "Once a text is published, it appears here automatically, in the sitemap and on the homepage.",
      countOne: "post",
      countMany: "posts",
      pageTitle: "Journal — page {page}",
      pageDescription: "Page {page} of the TCTCL journal.",
      previous: "Newer posts",
      next: "Older posts",
      pagination: "Pages",
      page: "Page {page}",
    },
    article: {
      breadcrumbHome: "Home",
      breadcrumbBlog: "Journal",
      toc: "Contents",
      publishedOn: "Published on",
      updatedOn: "Updated on",
      by: "By",
      minRead: "min read",
      relatedTitle: "Related reading",
      relatedIntro: "More from the journal that picks up where this leaves off.",
      backToBlog: "Back to the journal",
      translationNotice: "This article is also available in German.",
      translationLink: "Read in German",
      tagsLabel: "Topics",
      categoriesLabel: "Sections",
      copyCode: "Copy",
      copiedCode: "Copied",
      copyError: "Error",
    },
    notFound: {
      eyebrow: "404",
      title: "There's nothing here. At least not this.",
      text: "The page doesn't exist, has moved, or was only a rumour. The rest of the workshop is still here.",
      backHome: "Back to the homepage",
      backBlog: "Go to the journal",
      metaTitle: "Page not found",
      metaDescription: "This page does not exist.",
    },
    footer: {
      tagline: "Music, software and things in between.",
      navLabel: "Footer navigation",
      privacy: "One cookie for the style. No tracking. No banner.",
      colophon: "Next.js, Markdown, no CMS.",
      copyright: "TCTCL",
      backToTop: "Back to top",
    },
    common: {
      arrow: "→",
    },
  },
};

export function getCopy(locale: Locale): SiteCopy {
  return siteCopy[locale];
}
