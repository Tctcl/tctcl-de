import { getCopy } from "@/content/site-copy";
import { getRoomCopy } from "@/content/rooms";
import type { Locale } from "@/lib/locale";
import type { RoomId } from "@/lib/routes";
import type { ThemeId } from "@/lib/theme-ids";

import type { ThemeCopyTable } from "./types";

const styleCookieDe =
  "Ein Cookie für den Stil. Kein Tracking, kein Banner.";
const styleCookieEn = "One cookie for the style. No tracking, no banner.";

/**
 * Every style keeps the same facts but gets its own voice. Long-form room
 * paragraphs and articles stay canonical; only labels, teasers and chrome copy
 * change here.
 */
export const themeCopy: ThemeCopyTable = {
  werkstatt: { de: {}, en: {} },

  konsole: {
    de: {
      brand: { subtitle: "tty1", aria: "TCTCL — Startseite" },
      nav: {
        home: "~",
        tinkering: "tuefteln",
        projects: "projekte",
        journal: "journal",
        about: "ueber",
        work: "arbeit",
      },
      home: {
        eyebrow: "tctcl@werkstatt:~$ whoami",
        title: "Musik, Code und",
        accent: "halbfertige Ideen.",
        intro: [
          "Ich bin Entwickler, Tüftler und Musiknerd. Beruflich E-Commerce, meist JTL. Privat Linux, Docker, Sound und Dinge, die ich lieber selbst baue.",
          "Diese Seite ist ein Dateisystem mit Meinungen. Kein Tracking, ein Cookie für den Stil, keine Anmeldung.",
        ],
        marginalLabel: "cat /etc/profil",
        marginalFacts: [
          { term: "$DAYJOB", value: "E-Commerce / JTL / APIs" },
          { term: "$HOMELAB", value: "Linux, Docker, Self-Hosting" },
          { term: "$HEAD", value: "Techno, DJing, Sound System" },
          { term: "$PWD", value: "/home/tctcl/werkstatt" },
        ],
        marginalNote: styleCookieDe,
        marginalStamp: "exit 0",
        roomsLabel: "ls -la",
        roomsTitle: "./raeume",
        roomsIntro:
          "Fünf Verzeichnisse, ein Benutzer. Alles irgendwie verlinkt.",
        roomCta: "cd",
        nowLabel: "tail -f",
        nowTitle: "Aktuell im Prozess",
        nowIntro:
          "Kein Live-Feed. Nur das, was gerade auf der Platte liegt.",
        journalLabel: "less",
        journalTitle: "Zuletzt geschrieben",
        journalIntro:
          "Notizen, Fundstücke und Dinge, die ich früher hätte committen sollen.",
        journalTags: ["notizen", "fundstuecke", "ideen"],
        journalEmptyTitle: "0 Beiträge.",
        journalEmptyText:
          "Das Journal ist initialisiert. Der erste Text ist noch nicht fertig.",
        journalEmptyNote:
          "Sobald etwas veröffentlicht wird, erscheint es hier und im Journal.",
        allPosts: "journal/",
      },
      blog: {
        eyebrow: "journal/",
        title: "Notizen aus der Werkstatt.",
        intro:
          "Hier landen Dinge, die ich beim Bauen oder Hören gelernt habe: Anleitungen, Fehlersuchen, Meinungen. Kein Veröffentlichungsplan, keine künstliche Serie.",
        emptyLabel: "journal / 00",
        emptyTitle: "0 Beiträge.",
        emptyText:
          "Das Journal ist initialisiert, aber der erste Beitrag ist noch nicht fertig.",
        emptyNote:
          "Sobald ein Text veröffentlicht wird, erscheint er automatisch hier.",
      },
      footer: {
        tagline: "Musik, Software und Dinge dazwischen.",
        privacy: styleCookieDe,
        colophon: "Next.js, Markdown, kein CMS.",
      },
      rooms: {
        tinkering: {
          label: "tuefteln",
          teaser:
            "Dinge aufschrauben, verstehen, wieder zusammensetzen — meistens.",
        },
        projects: {
          label: "projekte",
          teaser:
            "Ein leeres Verzeichnis mit Absicht. Keine erfundenen Fallstudien.",
        },
        about: {
          label: "ueber",
          teaser: "Wer hier tippt und warum das alles so aussieht.",
        },
        work: {
          label: "arbeit",
          teaser:
            "E-Commerce, JTL, APIs. Bezahlt und trotzdem ehrlich beschrieben.",
        },
      },
    },
    en: {
      brand: { subtitle: "tty1", aria: "TCTCL — homepage" },
      nav: {
        home: "~",
        tinkering: "tinkering",
        projects: "projects",
        journal: "journal",
        about: "about",
        work: "work",
      },
      home: {
        eyebrow: "tctcl@workshop:~$ whoami",
        title: "Music, code and",
        accent: "half-finished ideas.",
        intro: [
          "I'm a developer, tinkerer and music nerd. E-commerce by day, mostly JTL. Linux, Docker, sound and things I'd rather build myself the rest of the time.",
          "This site is a filesystem with opinions. No tracking, one cookie for the style, no sign-up.",
        ],
        marginalLabel: "cat /etc/profile",
        marginalFacts: [
          { term: "$DAYJOB", value: "E-commerce / JTL / APIs" },
          { term: "$HOMELAB", value: "Linux, Docker, self-hosting" },
          { term: "$HEAD", value: "Techno, DJing, sound systems" },
          { term: "$PWD", value: "/home/tctcl/workshop" },
        ],
        marginalNote: styleCookieEn,
        marginalStamp: "exit 0",
        roomsLabel: "ls -la",
        roomsTitle: "./rooms",
        roomsIntro: "Five directories, one user. All connected somehow.",
        roomCta: "cd",
        nowLabel: "tail -f",
        nowTitle: "Currently in progress",
        nowIntro: "No live feed. Just what's on disk right now.",
        journalLabel: "less",
        journalTitle: "Latest writing",
        journalIntro:
          "Notes, finds and things I should have committed earlier.",
        journalTags: ["notes", "finds", "ideas"],
        journalEmptyTitle: "0 posts.",
        journalEmptyText:
          "The journal is initialised. The first text isn't finished.",
        journalEmptyNote:
          "Once something is published, it appears here and in the journal.",
        allPosts: "journal/",
      },
      blog: {
        eyebrow: "journal/",
        title: "Notes from the workshop.",
        intro:
          "Things I learned while building or listening: guides, debugging notes, opinions. No publishing schedule, no artificial series.",
        emptyLabel: "journal / 00",
        emptyTitle: "0 posts.",
        emptyText:
          "The journal is initialised, but the first post isn't finished.",
        emptyNote:
          "Once a text is published, it appears here automatically.",
      },
      footer: {
        tagline: "Music, software and things in between.",
        privacy: styleCookieEn,
        colophon: "Next.js, Markdown, no CMS.",
      },
      rooms: {
        tinkering: {
          label: "tinkering",
          teaser:
            "Take things apart, understand them, put them back — mostly.",
        },
        projects: {
          label: "projects",
          teaser: "An intentionally empty directory. No invented case studies.",
        },
        about: {
          label: "about",
          teaser: "Who is typing here and why it all looks like this.",
        },
        work: {
          label: "work",
          teaser: "E-commerce, JTL, APIs. Paid for, yet described honestly.",
        },
      },
    },
  },

  minecraft: {
    de: {
      brand: { subtitle: "Überlebensmodus", aria: "TCTCL — Startseite" },
      nav: {
        tinkering: "Werkbank",
        projects: "Bauplätze",
        journal: "Notizbuch",
        about: "Spieler",
        work: "Aufträge",
      },
      home: {
        eyebrow: "TCTCL / Welt 1 / Tag 1",
        title: "Musik, Code und",
        accent: "halbfertige Ideen.",
        intro: [
          "Ich bin Entwickler, Tüftler und Musiknerd. Beruflich E-Commerce, meist JTL. Daneben Linux, Docker und Dinge, die ich lieber selbst baue.",
          "Diese Seite ist meine Werkstatt: Projekte, Notizen und Experimente. Kein Shop, kein Content-Plan, kein Inventar zum Verkauf.",
        ],
        marginalLabel: "Inventar",
        marginalFacts: [
          { term: "Beruf", value: "E-Commerce / JTL / APIs" },
          { term: "Basis", value: "Linux, Docker, Self-Hosting" },
          { term: "Im Kopf", value: "Techno, DJing, Sound System" },
          { term: "Hier", value: "Notizen, Projekte, Experimente" },
        ],
        marginalNote: styleCookieDe,
        marginalStamp: "kein Creative-Modus",
        roomsLabel: "Hotbar",
        roomsTitle: "Wähle einen Block.",
        roomsIntro:
          "Jeder Slot öffnet einen Raum. Nichts davon ist handelbar.",
        roomCta: "Abbauen",
        nowLabel: "Werkbank",
        nowTitle: "Gerade auf der Werkbank",
        nowIntro:
          "Kein Live-Feed, keine erfundenen Fortschrittsbalken. Nur echte Baustellen.",
        journalLabel: "Notizbuch",
        journalTitle: "Zuletzt geschrieben",
        journalIntro:
          "Notizen, Fundstücke und Dinge, die ich mir früher hätte aufschreiben sollen.",
        journalTags: ["Notizen", "Fundstücke", "Ideen"],
        allPosts: "Alle Notizen",
      },
      blog: {
        eyebrow: "Notizbuch",
        title: "Notizen aus der Werkstatt.",
        intro:
          "Hier landen Dinge, die ich beim Bauen oder Hören gelernt habe. Kein Veröffentlichungsplan, keine künstliche Serie.",
        emptyLabel: "Notizbuch / 00",
        emptyTitle: "Noch nichts veröffentlicht.",
        emptyText:
          "Das Notizbuch liegt bereit, aber der erste Eintrag ist noch nicht fertig.",
        emptyNote:
          "Sobald etwas veröffentlicht wird, erscheint es automatisch hier.",
      },
      footer: {
        tagline: "Musik, Software und Dinge dazwischen.",
        privacy: styleCookieDe,
        colophon:
          "Next.js, Markdown, kein CMS. Keine Mojang- oder Microsoft-Assets.",
      },
      rooms: {
        tinkering: {
          label: "Werkbank",
          teaser:
            "Dinge aufschrauben, verstehen, wieder zusammensetzen — meistens.",
        },
        projects: {
          label: "Bauplätze",
          teaser:
            "Ein leeres Inventar mit Absicht. Keine erfundenen Bauwerke.",
        },
        about: {
          label: "Spieler",
          teaser: "Wer hier abbaut und warum das alles so blockig ist.",
        },
        work: {
          label: "Aufträge",
          teaser:
            "E-Commerce, JTL, APIs. Bezahlt und trotzdem ehrlich beschrieben.",
        },
      },
    },
    en: {
      brand: { subtitle: "survival mode", aria: "TCTCL — homepage" },
      nav: {
        tinkering: "Workbench",
        projects: "Builds",
        journal: "Notebook",
        about: "Player",
        work: "Quests",
      },
      home: {
        eyebrow: "TCTCL / world 1 / day 1",
        title: "Music, code and",
        accent: "half-finished ideas.",
        intro: [
          "I'm a developer, tinkerer and music nerd. E-commerce by day, mostly JTL. Linux, Docker and things I'd rather build myself the rest of the time.",
          "This site is my workshop: projects, notes and experiments. No shop, no content plan, no inventory for sale.",
        ],
        marginalLabel: "Inventory",
        marginalFacts: [
          { term: "Work", value: "E-commerce / JTL / APIs" },
          { term: "Base", value: "Linux, Docker, self-hosting" },
          { term: "In my head", value: "Techno, DJing, sound systems" },
          { term: "Here", value: "Notes, projects, experiments" },
        ],
        marginalNote: styleCookieEn,
        marginalStamp: "no creative mode",
        roomsLabel: "Hotbar",
        roomsTitle: "Pick a block.",
        roomsIntro: "Each slot opens a room. None of it is tradeable.",
        roomCta: "Mine",
        nowLabel: "Crafting table",
        nowTitle: "Currently on the bench",
        nowIntro:
          "No live feed, no invented progress bars. Just real builds.",
        journalLabel: "Notebook",
        journalTitle: "Latest writing",
        journalIntro:
          "Notes, finds and things I should have written down earlier.",
        journalTags: ["Notes", "Finds", "Ideas"],
        allPosts: "All notes",
      },
      blog: {
        eyebrow: "Notebook",
        title: "Notes from the workshop.",
        intro:
          "Things I learned while building or listening. No publishing schedule, no artificial series.",
        emptyLabel: "Notebook / 00",
        emptyTitle: "Nothing published yet.",
        emptyText:
          "The notebook is ready, but the first entry isn't finished.",
        emptyNote:
          "Once something is published, it appears here automatically.",
      },
      footer: {
        tagline: "Music, software and things in between.",
        privacy: styleCookieEn,
        colophon:
          "Next.js, Markdown, no CMS. No Mojang or Microsoft assets.",
      },
      rooms: {
        tinkering: {
          label: "Workbench",
          teaser:
            "Take things apart, understand them, put them back — mostly.",
        },
        projects: {
          label: "Builds",
          teaser: "An intentionally empty inventory. No invented builds.",
        },
        about: {
          label: "Player",
          teaser: "Who is mining here and why it all looks so blocky.",
        },
        work: {
          label: "Quests",
          teaser: "E-commerce, JTL, APIs. Paid for, yet described honestly.",
        },
      },
    },
  },

  "jtl-nova": {
    de: {
      brand: { subtitle: "Storefront", aria: "TCTCL — Startseite" },
      home: {
        eyebrow: "TCTCL / Onlineshop / Katalog",
        title: "Musik, Code und",
        accent: "halbfertige Ideen.",
        intro: [
          "Ich bin Entwickler, Tüftler und Musiknerd. Beruflich baue ich E-Commerce-Systeme, meistens im JTL-Umfeld. Daneben hoste ich Kram selbst und baue Werkzeuge, weil mir das vorhandene zu umständlich ist.",
          "Diese Seite ist meine Werkstatt. Kein Warenkorb, keine Preise, keine Versandkosten. Nur Räume, Notizen und Projekte.",
        ],
        marginalLabel: "Produktdetails",
        marginalFacts: [
          { term: "Kategorie", value: "Werkstatt / Unsortiert" },
          { term: "Hersteller", value: "TCTCL" },
          { term: "Verfügbarkeit", value: "dauerhaft unbestimmt" },
          { term: "Versand", value: "digital, sofort" },
        ],
        marginalNote: styleCookieDe,
        marginalStamp: "kein Checkout",
        roomsLabel: "Kategorien",
        roomsTitle: "Unsere Räume",
        roomsIntro:
          "Alles aus einer Hand, nichts auf Lager. Jede Kategorie führt zu einer echten Seite.",
        roomCta: "Kategorie öffnen",
        nowLabel: "Neu im Sortiment",
        nowTitle: "Gerade in Arbeit",
        nowIntro:
          "Kein Live-Bestand, keine erfundenen Lieferzeiten. Nur das, was wirklich auf dem Tisch liegt.",
        journalLabel: "Ratgeber",
        journalTitle: "Zuletzt geschrieben",
        journalIntro:
          "Notizen, Fundstücke und Dinge, die ich mir früher hätte aufschreiben sollen.",
        allPosts: "Alle Beiträge",
      },
      blog: {
        eyebrow: "Ratgeber",
        title: "Notizen aus der Werkstatt.",
        intro:
          "Anleitungen, Fehlersuchen und Meinungen. Kein Veröffentlichungsplan, keine künstliche Serie.",
        emptyLabel: "Ratgeber / 00",
        emptyTitle: "Noch nichts veröffentlicht.",
        emptyText:
          "Der Ratgeber ist eingerichtet, aber der erste Beitrag ist noch nicht fertig.",
        emptyNote:
          "Sobald ein Text veröffentlicht wird, erscheint er automatisch hier.",
      },
      footer: {
        tagline: "Musik, Software und Dinge dazwischen.",
        privacy: styleCookieDe,
        colophon: "Next.js, Markdown, kein CMS. Kein Shop-System.",
      },
      rooms: {
        tinkering: {
          teaser:
            "Dinge aufschrauben, verstehen, wieder zusammensetzen — meistens.",
        },
        projects: {
          teaser:
            "Kein Warenkorb, kein Lagerbestand: ehrlich leer. Keine erfundenen Referenzen.",
        },
        about: {
          teaser: "Wer hier tippt und warum das alles so aussieht.",
        },
        work: {
          teaser:
            "E-Commerce, JTL, APIs. Bezahlt und trotzdem ehrlich beschrieben.",
        },
      },
    },
    en: {
      brand: { subtitle: "Storefront", aria: "TCTCL — homepage" },
      home: {
        eyebrow: "TCTCL / online store / catalogue",
        title: "Music, code and",
        accent: "half-finished ideas.",
        intro: [
          "I'm a developer, tinkerer and music nerd. Professionally I build e-commerce systems, mostly around JTL. On the side I host things myself and build tools because the existing ones are too clunky.",
          "This site is my workshop. No cart, no prices, no shipping costs. Just rooms, notes and projects.",
        ],
        marginalLabel: "Product details",
        marginalFacts: [
          { term: "Category", value: "Workshop / Unsorted" },
          { term: "Manufacturer", value: "TCTCL" },
          { term: "Availability", value: "permanently undetermined" },
          { term: "Delivery", value: "digital, immediate" },
        ],
        marginalNote: styleCookieEn,
        marginalStamp: "no checkout",
        roomsLabel: "Categories",
        roomsTitle: "Our rooms",
        roomsIntro:
          "Everything from one hand, nothing in stock. Every category opens a real page.",
        roomCta: "Open category",
        nowLabel: "New in the range",
        nowTitle: "Currently in progress",
        nowIntro:
          "No live stock, no invented delivery times. Just what's really on the bench.",
        journalLabel: "Guides",
        journalTitle: "Latest writing",
        journalIntro:
          "Notes, finds and things I should have written down earlier.",
        allPosts: "All posts",
      },
      blog: {
        eyebrow: "Guides",
        title: "Notes from the workshop.",
        intro:
          "Guides, debugging notes and opinions. No publishing schedule, no artificial series.",
        emptyLabel: "Guides / 00",
        emptyTitle: "Nothing published yet.",
        emptyText:
          "The guide section is set up, but the first post isn't finished.",
        emptyNote:
          "Once a text is published, it appears here automatically.",
      },
      footer: {
        tagline: "Music, software and things in between.",
        privacy: styleCookieEn,
        colophon: "Next.js, Markdown, no CMS. No shop system.",
      },
      rooms: {
        tinkering: {
          teaser:
            "Take things apart, understand them, put them back — mostly.",
        },
        projects: {
          teaser:
            "No cart, no stock: honestly empty. No invented references.",
        },
        about: {
          teaser: "Who is typing here and why it all looks like this.",
        },
        work: {
          teaser: "E-commerce, JTL, APIs. Paid for, yet described honestly.",
        },
      },
    },
  },

  hype: {
    de: {
      brand: { subtitle: "Growth", aria: "TCTCL — Startseite" },
      nav: {
        tinkering: "Innovation",
        projects: "Portfolio",
        journal: "Insights",
        about: "Founder",
        work: "Services",
      },
      home: {
        eyebrow: "TCTCL / Personal Brand / Stealth",
        title: "Musik, Code und",
        accent: "halbfertige Ideen.",
        intro: [
          "Ich bin Entwickler, Tüftler und Musiknerd. Beruflich baue ich E-Commerce-Systeme, meistens im JTL-Umfeld. Daneben hoste ich Kram selbst und baue Werkzeuge.",
          "Diese Seite ist meine Werkstatt — ohne Angebot, ohne Content-Plan, ohne Anmeldung. Die Zahlen unten sind echt. Die Inszenierung nicht.",
        ],
        marginalLabel: "Key Facts",
        marginalFacts: [
          { term: "Team", value: "1 Person" },
          { term: "Räume", value: "5" },
          { term: "Projekte", value: "0 veröffentlicht" },
          { term: "Tracking", value: "0 (ein Stil-Cookie)" },
        ],
        marginalNote: `Satire. ${styleCookieDe}`,
        marginalStamp: "bootstrapped",
        roomsLabel: "Business Units",
        roomsTitle: "Skalierbare Räume",
        roomsIntro:
          "Fünf vertikale Märkte, eine Person, kein Burnout-Timer.",
        roomCta: "Deep Dive",
        nowLabel: "Roadmap",
        nowTitle: "Aktuell im Sprint",
        nowIntro:
          "Kein Live-Feed, keine erfundenen KPIs. Nur echte Baustellen.",
        journalLabel: "Thought Leadership",
        journalTitle: "Zuletzt geschrieben",
        journalIntro:
          "Notizen, Fundstücke und Dinge, die ich mir früher hätte aufschreiben sollen.",
        allPosts: "Alle Insights",
      },
      blog: {
        eyebrow: "Thought Leadership",
        title: "Notizen aus der Werkstatt.",
        intro:
          "Anleitungen, Fehlersuchen und Meinungen. Kein Veröffentlichungsplan, keine künstliche Serie.",
        emptyLabel: "Insights / 00",
        emptyTitle: "Noch nichts veröffentlicht.",
        emptyText:
          "Der Content-Funnel ist eingerichtet, aber der erste Beitrag ist noch nicht fertig.",
        emptyNote:
          "Sobald ein Text veröffentlicht wird, erscheint er automatisch hier.",
      },
      footer: {
        tagline: "Musik, Software und Dinge dazwischen.",
        privacy: `Satire. ${styleCookieDe}`,
        colophon: "Next.js, Markdown, kein CMS. Keine Investoren.",
      },
      rooms: {
        tinkering: {
          label: "Innovation",
          teaser:
            "Dinge aufschrauben, verstehen, wieder zusammensetzen — meistens.",
        },
        projects: {
          label: "Portfolio",
          teaser:
            "0 veröffentlichte Case Studies. Das ist die ehrlichste Kennzahl der Seite.",
        },
        about: {
          label: "Founder",
          teaser: "Wer hier tippt und warum das alles so aussieht.",
        },
        work: {
          label: "Services",
          teaser:
            "E-Commerce, JTL, APIs. Bezahlt und trotzdem ehrlich beschrieben.",
        },
      },
    },
    en: {
      brand: { subtitle: "Growth", aria: "TCTCL — homepage" },
      nav: {
        tinkering: "Innovation",
        projects: "Portfolio",
        journal: "Insights",
        about: "Founder",
        work: "Services",
      },
      home: {
        eyebrow: "TCTCL / personal brand / stealth",
        title: "Music, code and",
        accent: "half-finished ideas.",
        intro: [
          "I'm a developer, tinkerer and music nerd. Professionally I build e-commerce systems, mostly around JTL. On the side I host things myself and build tools.",
          "This site is my workshop — no offer, no content plan, no sign-up. The numbers below are real. The framing isn't.",
        ],
        marginalLabel: "Key facts",
        marginalFacts: [
          { term: "Team", value: "1 person" },
          { term: "Rooms", value: "5" },
          { term: "Projects", value: "0 published" },
          { term: "Tracking", value: "0 (one style cookie)" },
        ],
        marginalNote: `Satire. ${styleCookieEn}`,
        marginalStamp: "bootstrapped",
        roomsLabel: "Business Units",
        roomsTitle: "Scalable rooms",
        roomsIntro:
          "Five vertical markets, one person, no burnout timer.",
        roomCta: "Deep dive",
        nowLabel: "Roadmap",
        nowTitle: "Currently in sprint",
        nowIntro: "No live feed, no invented KPIs. Just real builds.",
        journalLabel: "Thought Leadership",
        journalTitle: "Latest writing",
        journalIntro:
          "Notes, finds and things I should have written down earlier.",
        allPosts: "All insights",
      },
      blog: {
        eyebrow: "Thought Leadership",
        title: "Notes from the workshop.",
        intro:
          "Guides, debugging notes and opinions. No publishing schedule, no artificial series.",
        emptyLabel: "Insights / 00",
        emptyTitle: "Nothing published yet.",
        emptyText:
          "The content funnel is set up, but the first post isn't finished.",
        emptyNote:
          "Once a text is published, it appears here automatically.",
      },
      footer: {
        tagline: "Music, software and things in between.",
        privacy: `Satire. ${styleCookieEn}`,
        colophon: "Next.js, Markdown, no CMS. No investors.",
      },
      rooms: {
        tinkering: {
          label: "Innovation",
          teaser:
            "Take things apart, understand them, put them back — mostly.",
        },
        projects: {
          label: "Portfolio",
          teaser:
            "0 published case studies. The most honest metric on this site.",
        },
        about: {
          label: "Founder",
          teaser: "Who is typing here and why it all looks like this.",
        },
        work: {
          label: "Services",
          teaser: "E-commerce, JTL, APIs. Paid for, yet described honestly.",
        },
      },
    },
  },

  retro: {
    de: {
      brand: { subtitle: "Homepage", aria: "TCTCL — Startseite" },
      nav: {
        home: "Startseite",
        tinkering: "Tüfteln",
        projects: "Projekte",
        journal: "Tagebuch",
        about: "Über mich",
        work: "Arbeit",
      },
      home: {
        eyebrow: "Willkommen auf meiner Homepage!!!",
        title: "Musik, Code und",
        accent: "halbfertige Ideen.",
        intro: [
          "Ich bin Entwickler, Tüftler und Musiknerd. Beruflich E-Commerce, meist JTL. Privat Linux, Docker und Dinge, die ich lieber selbst baue.",
          "Diese Seite ist meine Werkstatt. Kein Tracking, ein Cookie für den Stil, kein Gästebuch-Spam. Beste Ansicht bei 800×600.",
        ],
        marginalLabel: "Über mich",
        marginalNote: styleCookieDe,
        marginalStamp: "Under Construction",
        roomsLabel: "Meine Seiten",
        roomsTitle: "Guck dich um!",
        roomsIntro:
          "Jede Ecke hat ihr eigenes Thema. Alles hängt irgendwie zusammen.",
        roomCta: "Hier klicken!",
        nowLabel: "Was ich gerade mache",
        nowTitle: "Auf dem Tisch",
        nowIntro:
          "Kein Live-Feed. Nur das, was gerade auf dem Tisch liegt.",
        journalLabel: "Tagebuch",
        journalTitle: "Zuletzt geschrieben",
        journalIntro:
          "Notizen, Fundstücke und Dinge, die ich mir früher hätte aufschreiben sollen.",
        allPosts: "Alle Einträge",
      },
      blog: {
        eyebrow: "Tagebuch",
        title: "Notizen aus der Werkstatt.",
        intro:
          "Hier landen Dinge, die ich beim Bauen oder Hören gelernt habe. Kein Veröffentlichungsplan, keine künstliche Serie.",
        emptyLabel: "Tagebuch / 00",
        emptyTitle: "Noch nichts veröffentlicht.",
        emptyText:
          "Das Tagebuch ist eingerichtet, aber der erste Eintrag ist noch nicht fertig.",
        emptyNote:
          "Sobald etwas veröffentlicht wird, erscheint es automatisch hier.",
      },
      footer: {
        tagline: "Musik, Software und Dinge dazwischen.",
        privacy: styleCookieDe,
        colophon: "Next.js, Markdown, kein CMS. Kein Gästebuch.",
      },
    },
    en: {
      brand: { subtitle: "Homepage", aria: "TCTCL — homepage" },
      nav: {
        home: "Home",
        tinkering: "Tinkering",
        projects: "Projects",
        journal: "Diary",
        about: "About me",
        work: "Work",
      },
      home: {
        eyebrow: "Welcome to my homepage!!!",
        title: "Music, code and",
        accent: "half-finished ideas.",
        intro: [
          "I'm a developer, tinkerer and music nerd. E-commerce by day, mostly JTL. Linux, Docker and things I'd rather build myself the rest of the time.",
          "This site is my workshop. No tracking, one cookie for the style, no guestbook spam. Best viewed at 800×600.",
        ],
        marginalLabel: "About me",
        marginalNote: styleCookieEn,
        marginalStamp: "Under Construction",
        roomsLabel: "My pages",
        roomsTitle: "Have a look around!",
        roomsIntro: "Every corner has its own topic. It all connects anyway.",
        roomCta: "Click here!",
        nowLabel: "What I'm doing",
        nowTitle: "On the bench",
        nowIntro: "No live feed. Just what's on the bench right now.",
        journalLabel: "Diary",
        journalTitle: "Latest writing",
        journalIntro:
          "Notes, finds and things I should have written down earlier.",
        allPosts: "All entries",
      },
      blog: {
        eyebrow: "Diary",
        title: "Notes from the workshop.",
        intro:
          "Things I learned while building or listening. No publishing schedule, no artificial series.",
        emptyLabel: "Diary / 00",
        emptyTitle: "Nothing published yet.",
        emptyText:
          "The diary is set up, but the first entry isn't finished.",
        emptyNote:
          "Once something is published, it appears here automatically.",
      },
      footer: {
        tagline: "Music, software and things in between.",
        privacy: styleCookieEn,
        colophon: "Next.js, Markdown, no CMS. No guestbook.",
      },
    },
  },

  papier: {
    de: {
      brand: { subtitle: "Dossier", aria: "TCTCL — Startseite" },
      nav: { about: "Vita" },
      home: {
        eyebrow: "TCTCL / Personalakte / Ausgabe 01",
        title: "Musik, Code und",
        accent: "halbfertige Ideen.",
        marginalLabel: "Anmerkungen",
        marginalNote: styleCookieDe,
        marginalStamp: "zu den Akten",
        roomsLabel: "Kapitel",
        roomsTitle: "Inhalt",
        roomsIntro:
          "Fünf Abschnitte, ein Verfasser. Alles hängt irgendwie zusammen.",
        roomCta: "Abschnitt lesen",
        nowLabel: "Randnotizen",
        nowTitle: "Gegenwärtig auf dem Tisch",
        nowIntro:
          "Kein Live-Feed, keine erfundenen Statusmeldungen. Eher das, was gerade auf dem Tisch liegt.",
        journalLabel: "Journal",
        journalTitle: "Zuletzt geschrieben",
        journalIntro:
          "Notizen, Fundstücke und Dinge, die ich mir früher hätte aufschreiben sollen.",
        allPosts: "Alle Beiträge",
      },
      blog: {
        eyebrow: "Journal",
        title: "Notizen aus der Werkstatt.",
        intro:
          "Hier landen Dinge, die ich beim Bauen oder Hören gelernt habe: Anleitungen, Fehlersuchen, Meinungen. Kein Veröffentlichungsplan.",
        emptyLabel: "Journal / 00",
        emptyTitle: "Noch nichts veröffentlicht.",
        emptyText:
          "Das Journal ist eingerichtet, aber der erste Beitrag ist noch nicht fertig.",
        emptyNote:
          "Sobald ein Text veröffentlicht wird, erscheint er automatisch hier.",
      },
      footer: {
        tagline: "Musik, Software und Dinge dazwischen.",
        privacy: styleCookieDe,
        colophon: "Next.js, Markdown, kein CMS.",
      },
      rooms: {
        about: {
          label: "Vita",
          teaser: "Wer hier tippt und warum das alles so aussieht.",
        },
      },
    },
    en: {
      brand: { subtitle: "Dossier", aria: "TCTCL — homepage" },
      nav: { about: "Vita" },
      home: {
        eyebrow: "TCTCL / personal file / issue 01",
        title: "Music, code and",
        accent: "half-finished ideas.",
        marginalLabel: "Annotations",
        marginalNote: styleCookieEn,
        marginalStamp: "for the record",
        roomsLabel: "Chapters",
        roomsTitle: "Contents",
        roomsIntro:
          "Five sections, one author. Everything connects somehow.",
        roomCta: "Read section",
        nowLabel: "Marginalia",
        nowTitle: "Currently on the bench",
        nowIntro:
          "Not a live feed, not invented status updates. Just what's on the bench right now.",
        journalLabel: "Journal",
        journalTitle: "Latest writing",
        journalIntro:
          "Notes, finds and things I should have written down earlier.",
        allPosts: "All posts",
      },
      blog: {
        eyebrow: "Journal",
        title: "Notes from the workshop.",
        intro:
          "Things I learned while building or listening: guides, debugging notes, opinions. No publishing schedule.",
        emptyLabel: "Journal / 00",
        emptyTitle: "Nothing published yet.",
        emptyText:
          "The journal is set up, but the first post isn't finished.",
        emptyNote:
          "Once a text is published, it appears here automatically.",
      },
      footer: {
        tagline: "Music, software and things in between.",
        privacy: styleCookieEn,
        colophon: "Next.js, Markdown, no CMS.",
      },
      rooms: {
        about: {
          label: "Vita",
          teaser: "Who is typing here and why it all looks like this.",
        },
      },
    },
  },
};

export function getThemeCopy(locale: Locale, theme: ThemeId) {
  const base = getCopy(locale);
  const overrides = themeCopy[theme][locale];

  return {
    ...base,
    brand: { ...base.brand, ...overrides.brand },
    nav: { ...base.nav, ...overrides.nav },
    home: { ...base.home, ...overrides.home },
    blog: { ...base.blog, ...overrides.blog },
    footer: { ...base.footer, ...overrides.footer },
  };
}

export function getThemeRoomCopy<Id extends RoomId>(
  locale: Locale,
  room: Id,
  theme: ThemeId,
) {
  const base = getRoomCopy(locale, room);
  const overrides = themeCopy[theme][locale].rooms?.[room];

  return overrides ? { ...base, ...overrides } : base;
}


