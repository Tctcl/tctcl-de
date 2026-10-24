import type { Locale } from "@/lib/locale";

type WorkItem = {
  title: string;
  description: string;
  meta: string;
};

export type SiteCopy = {
  meta: {
    title: string;
    description: string;
    ogAlt: string;
  };
  nav: {
    skip: string;
    work: string;
    about: string;
    projects: string;
    journal: string;
    main: string;
    language: string;
    switchToEnglish: string;
    switchToGerman: string;
    currentLanguage: string;
    noTranslation: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    lead: string;
    facts: string[];
    journalCta: string;
    aboutCta: string;
    cardTop: string;
    cardBottom: string;
    cardLabel: string;
  };
  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    quote: string;
    asideLabel: string;
    asideItems: string[];
  };
  work: {
    eyebrow: string;
    title: string;
    intro: string;
    items: WorkItem[];
  };
  projects: {
    eyebrow: string;
    title: string;
    intro: string;
    emptyLabel: string;
    emptyTitle: string;
    emptyText: string;
    emptyNote: string;
  };
  writing: {
    eyebrow: string;
    title: string;
    intro: string;
    emptyLabel: string;
    emptyTitle: string;
    emptyText: string;
    emptyNote: string;
    allPosts: string;
    minRead: string;
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
      title: "TCTCL Labs — Software, E-Commerce und Experimente",
      description:
        "TCTCL Labs: Entwicklung, Integrationen und Werkzeuge für JTL-Shop, JTL-Wawi und den E-Commerce. Außerdem Musik, Self-Hosting und Dinge, die einfach interessant sind.",
      ogAlt: "TCTCL Labs — Software, E-Commerce und Experimente",
    },
    nav: {
      skip: "Zum Inhalt springen",
      work: "Arbeit",
      about: "Über",
      projects: "Projekte",
      journal: "Journal",
      main: "Hauptnavigation",
      language: "Sprache wechseln",
      switchToEnglish: "Zur englischen Version",
      switchToGerman: "Zur deutschen Version",
      currentLanguage: "Aktuelle Sprache",
      noTranslation: "Keine englische Übersetzung — zum englischen Journal",
    },
    hero: {
      eyebrow: "TCTCL Labs / Software & E-Commerce",
      title: "Ich baue Software für den Handel.",
      titleAccent: "Manchmal auch nur, weil sie mich interessiert.",
      lead: "JTL-Shop, JTL-Wawi, Integrationen, Daten und Web-Anwendungen. Ich arbeite an Systemen, die Dinge zusammenbringen — und an Ideen, die kein Produkt werden müssen.",
      facts: ["JTL-Shop", "JTL-Wawi", "APIs & Daten", "Linux & Docker"],
      journalCta: "Ins Journal",
      aboutCta: "Wer dahinter steckt",
      cardTop: "ASH / BLOOD",
      cardBottom: "DE / EN",
      cardLabel: "INDEX",
    },
    about: {
      eyebrow: "Über",
      title: "Systeme verstehen, indem man sie auseinandernimmt.",
      paragraphs: [
        "Ich bin Entwickler und arbeite an E-Commerce-Systemen — vor allem im JTL-Ökosystem. Dort entstehen Plugins, Anbindungen, Imports und Werkzeuge für Probleme, die in der Dokumentation nicht vorkommen.",
        "Technik ist für mich weniger Selbstzweck als eine Methode, ein System wirklich zu verstehen. Ich lese Logs, verfolge Daten durch Schnittstellen und baue lieber ein kleines Werkzeug, als denselben Handgriff zum zwanzigsten Mal zu machen.",
        "Daneben: Musik, DJing, selbst gehostete Dienste und mehr Nebenprojekte als freie Festplatte. Nicht alles davon wird ein Produkt. Manches ist einfach interessant genug.",
      ],
      quote:
        "Ich mag Systeme, die man verstehen kann. Am liebsten solche, die man selbst gebaut hat.",
      asideLabel: "Neben dem Terminal",
      asideItems: ["Musik", "DJing", "Self-Hosting", "Nebenprojekte"],
    },
    work: {
      eyebrow: "Arbeit",
      title: "Woran ich arbeite",
      intro:
        "Keine Leistungsliste mit Buzzwords. Das sind die Bereiche, in denen ich tatsächlich unterwegs bin.",
      items: [
        {
          title: "JTL-Shop",
          description:
            "Anpassungen, Plugins und Templates — inklusive der Stellen, an denen das Standardverhalten aufhört und eigene Entscheidungen anfangen.",
          meta: "Shop / Plugin / Template",
        },
        {
          title: "JTL-Wawi",
          description:
            "Anbindungen, API-Zugriffe und Workflows, die Daten zwischen Wawi, Shop und allem dazwischen bewegen.",
          meta: "Wawi / API / Sync",
        },
        {
          title: "E-Commerce-Automation",
          description:
            "Imports, Lieferantendaten, Migrationen und wiederkehrende Handgriffe, die besser ein Skript erledigt.",
          meta: "Daten / Import / Migration",
        },
        {
          title: "Plugins & Werkzeuge",
          description:
            "Kleine und größere Werkzeuge für Probleme, für die es kein fertiges Produkt gibt. Oft entstehen sie genau dort.",
          meta: "Tooling / CLI / Utilities",
        },
        {
          title: "Webanwendungen",
          description:
            "React, TypeScript und Tailwind für die Oberfläche; darunter das, was die Anwendung tatsächlich tun muss.",
          meta: "React / TypeScript / Tailwind",
        },
        {
          title: "Infrastruktur",
          description:
            "Linux, Docker, Server und Self-Hosting. Dinge selbst betreiben, statt sie nur zu deployen.",
          meta: "Linux / Docker / Self-Hosting",
        },
      ],
    },
    projects: {
      eyebrow: "Projekte",
      title: "Projekte & Experimente",
      intro:
        "Neben der Arbeit entstehen Werkzeuge, Experimente und musikalische Umwege. Öffentlich wird hier nur, was tatsächlich existiert.",
      emptyLabel: "Werkbank / 00",
      emptyTitle: "Noch nichts ausgestellt.",
      emptyText:
        "Die Werkbank ist absichtlich leer. Projekte und Experimente bekommen hier einen Platz, sobald sie öffentlich interessant sind — nicht vorher.",
      emptyNote:
        "Wenn du wissen willst, woran ich gerade denke: Das Journal ist der bessere Ort dafür.",
    },
    writing: {
      eyebrow: "Journal",
      title: "Zuletzt geschrieben",
      intro:
        "Technische Notizen, Anleitungen und Dinge, die ich beim Bauen gelernt habe. Keine Content-Maschine.",
      emptyLabel: "Journal / 00",
      emptyTitle: "Der erste Beitrag ist noch nicht veröffentlicht.",
      emptyText:
        "Das Journal ist technisch fertig: Markdown, Metadaten, Sitemap und alles, was dazugehört. Sobald der erste Text wirklich fertig ist, steht er hier.",
      emptyNote:
        "Geplant sind Texte zu JTL-Shop, JTL-Wawi, APIs, Imports und dem Rest des Alltags zwischen Shop und Server.",
      allPosts: "Alle Beiträge",
      minRead: "Min. Lesezeit",
    },
    blog: {
      eyebrow: "Journal",
      title: "Notizen zwischen Shop und Server.",
      description:
        "Technische Texte über JTL, E-Commerce, Integrationen und den täglichen Umgang mit Daten. Geschrieben, wenn es etwas zu sagen gibt.",
      intro:
        "Hier landen Dinge, die ich beim Bauen gelernt habe: Anleitungen, Fehlersuchen, Entscheidungen und gelegentlich eine Meinung. Kein Veröffentlichungsplan, keine künstliche Serie.",
      emptyLabel: "Journal / 00",
      emptyTitle: "Noch nichts veröffentlicht.",
      emptyText:
        "Das Journal ist eingerichtet, aber der erste Beitrag ist noch nicht fertig. Statt einer Platzhalter-Seite bleibt es hier erst einmal leer.",
      emptyNote:
        "Sobald ein Text veröffentlicht wird, erscheint er automatisch hier, in der Sitemap und auf der Startseite.",
      countOne: "Beitrag",
      countMany: "Beiträge",
      pageTitle: "Journal — Seite {page}",
      pageDescription: "Seite {page} des Journals von TCTCL Labs.",
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
      text: "Die Seite existiert nicht, wurde verschoben oder war nur ein Gerücht. Der Rest des Journals ist noch da.",
      backHome: "Zur Startseite",
      backBlog: "Zum Journal",
      metaTitle: "Seite nicht gefunden",
      metaDescription: "Diese Seite existiert nicht.",
    },
    footer: {
      tagline: "Software, E-Commerce und Dinge, die niemand angefordert hat.",
      navLabel: "Footer-Navigation",
      privacy: "Kein Tracking. Keine Cookies. Kein Banner.",
      colophon: "Gebaut mit Next.js, Markdown und ohne CMS.",
      copyright: "TCTCL Labs",
      backToTop: "Nach oben",
    },
    common: {
      arrow: "→",
    },
  },
  en: {
    meta: {
      title: "TCTCL Labs — software, e-commerce and experiments",
      description:
        "TCTCL Labs: development, integrations and tooling for JTL-Shop, JTL-Wawi and e-commerce. Also music, self-hosting and things that are simply interesting.",
      ogAlt: "TCTCL Labs — software, e-commerce and experiments",
    },
    nav: {
      skip: "Skip to content",
      work: "Work",
      about: "About",
      projects: "Projects",
      journal: "Journal",
      main: "Main navigation",
      language: "Change language",
      switchToEnglish: "Go to the English version",
      switchToGerman: "Go to the German version",
      currentLanguage: "Current language",
      noTranslation: "No German translation — go to the German journal",
    },
    hero: {
      eyebrow: "TCTCL Labs / Software & e-commerce",
      title: "I build software for commerce.",
      titleAccent: "Sometimes just because it's interesting.",
      lead: "JTL-Shop, JTL-Wawi, integrations, data and web applications. I work on systems that bring things together — and on ideas that don't need to become products.",
      facts: ["JTL-Shop", "JTL-Wawi", "APIs & data", "Linux & Docker"],
      journalCta: "Read the journal",
      aboutCta: "Who's behind this",
      cardTop: "ASH / BLOOD",
      cardBottom: "DE / EN",
      cardLabel: "INDEX",
    },
    about: {
      eyebrow: "About",
      title: "Understanding systems by taking them apart.",
      paragraphs: [
        "I'm a developer working on e-commerce systems, mostly in the JTL ecosystem. That's where plugins, integrations, imports and tools for the problems that never make it into the docs come from.",
        "Technology isn't an end in itself for me. It's how I actually understand a system. I read logs, follow data through interfaces, and would rather build a small tool than repeat the same manual step for the twentieth time.",
        "Beyond that: music, DJing, self-hosted services and more side projects than free disk space. Not all of it becomes a product. Some of it is just interesting enough.",
      ],
      quote:
        "I like systems you can understand. Best of all, the ones you built yourself.",
      asideLabel: "Outside the terminal",
      asideItems: ["Music", "DJing", "Self-hosting", "Side projects"],
    },
    work: {
      eyebrow: "Work",
      title: "What I work on",
      intro:
        "No services list full of buzzwords. These are the areas I'm actually working in.",
      items: [
        {
          title: "JTL-Shop",
          description:
            "Customisations, plugins and templates — including the point where standard behaviour ends and someone has to make a decision.",
          meta: "Shop / plugin / template",
        },
        {
          title: "JTL-Wawi",
          description:
            "Integrations, API access and workflows that move data between Wawi, the shop and everything in between.",
          meta: "Wawi / API / sync",
        },
        {
          title: "E-commerce automation",
          description:
            "Imports, supplier data, migrations and recurring manual work that is better handled by a script.",
          meta: "Data / import / migration",
        },
        {
          title: "Plugins & tooling",
          description:
            "Small and not-so-small tools for problems that don't have an off-the-shelf product. They often start exactly there.",
          meta: "Tooling / CLI / utilities",
        },
        {
          title: "Web applications",
          description:
            "React, TypeScript and Tailwind on the surface; underneath, whatever the application actually needs to do.",
          meta: "React / TypeScript / Tailwind",
        },
        {
          title: "Infrastructure",
          description:
            "Linux, Docker, servers and self-hosting. Running things yourself instead of only deploying them.",
          meta: "Linux / Docker / self-hosting",
        },
      ],
    },
    projects: {
      eyebrow: "Projects",
      title: "Projects & experiments",
      intro:
        "Tools, experiments and musical detours happen alongside the work. Only things that actually exist end up here.",
      emptyLabel: "Workbench / 00",
      emptyTitle: "Nothing on display yet.",
      emptyText:
        "The workbench is deliberately empty. Projects and experiments get a place here once they're publicly interesting — not before.",
      emptyNote:
        "If you want to know what I'm thinking about, the journal is the better place for that.",
    },
    writing: {
      eyebrow: "Journal",
      title: "Latest writing",
      intro:
        "Technical notes, guides and things I learned while building. Not a content machine.",
      emptyLabel: "Journal / 00",
      emptyTitle: "The first post isn't published yet.",
      emptyText:
        "The journal is technically ready: Markdown, metadata, sitemap and everything else. As soon as the first text is really finished, it will appear here.",
      emptyNote:
        "Planned topics include JTL-Shop, JTL-Wawi, APIs, imports and the rest of everyday life between shop and server.",
      allPosts: "All posts",
      minRead: "min read",
    },
    blog: {
      eyebrow: "Journal",
      title: "Notes from between shop and server.",
      description:
        "Technical writing about JTL, e-commerce, integrations and the daily work with data. Published when there's something worth saying.",
      intro:
        "This is where I put things I learned while building: guides, debugging notes, decisions and occasionally an opinion. No publishing schedule, no artificial series.",
      emptyLabel: "Journal / 00",
      emptyTitle: "Nothing published yet.",
      emptyText:
        "The journal is set up, but the first post isn't finished. Rather than a placeholder page, it stays empty for now.",
      emptyNote:
        "Once a text is published, it appears here automatically, in the sitemap and on the homepage.",
      countOne: "post",
      countMany: "posts",
      pageTitle: "Journal — page {page}",
      pageDescription: "Page {page} of the TCTCL Labs journal.",
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
      text: "The page doesn't exist, has moved, or was only a rumour. The rest of the journal is still here.",
      backHome: "Back to the homepage",
      backBlog: "Go to the journal",
      metaTitle: "Page not found",
      metaDescription: "This page does not exist.",
    },
    footer: {
      tagline: "Software, e-commerce and things nobody asked for.",
      navLabel: "Footer navigation",
      privacy: "No tracking. No cookies. No banner.",
      colophon: "Built with Next.js, Markdown and no CMS.",
      copyright: "TCTCL Labs",
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
