import type { Locale } from "@/lib/locale";
import type { ThemeId } from "@/lib/theme-ids";

/**
 * Chrome copy is the small, decorative layer each style adds around the shared
 * content: prompts, counters, shop labels, tickers. It is deliberately separate
 * from the theme copy overrides, which re-voice the actual rooms.
 */
export const interfaceCopy = {
  de: {
    mainNav: "Hauptnavigation",
    footerNav: "Footer-Navigation",
  },
  en: {
    mainNav: "Main navigation",
    footerNav: "Footer navigation",
  },
} satisfies Record<Locale, { mainNav: string; footerNav: string }>;

type ThemeChrome = {
  konsole: {
    host: string;
    roomsDir: string;
    listingHint: string;
    zeroPosts: string;
    flavorLabel: string;
  };
  minecraft: {
    flavorLabel: string;
    flavorNote: string;
    assetsNote: string;
  };
  "jtl-nova": {
    menu: string;
    breadcrumb: string;
    currency: string;
    styles: string;
    sku: string;
    category: string;
    categories: string;
    availability: string;
    availabilityValue: string;
    price: string;
    priceValue: string;
    shipping: string;
    shippingValue: string;
    condition: string;
    conditionValue: string;
    flavorLabel: string;
    flavorNote: string;
    inProgress: string;
    catalog: string;
    journal: string;
    service: string;
    allRooms: string;
    orderLabel: string;
    orderValue: string;
    stockLabel: string;
    stockHeading: string;
    stockValue: string;
    salesLabel: string;
    salesValue: string;
    sidebarNote: string;
    newsletterTitle: string;
    newsletterText: string;
    newsletterCta: string;
    newsletterNote: string;
    noCart: string;
    noPrices: string;
    noShipping: string;
    styleCookie: string;
    disclaimer: string;
  };
  hype: {
    topLine: string;
    checkNumbers: string;
    metricsAria: string;
    rooms: string;
    projects: string;
    posts: string;
    styleCookie: string;
    trackingScripts: string;
    trust: string;
    quote: string;
    quoteAttribution: string;
    quoteAria: string;
    inProgress: string;
    ctaTitle: string;
    ctaText: string;
    satireNote: string;
    trackingCookies: string;
    person: string;
    flavorAria: string;
    room: string;
    content: string;
    real: string;
    tracking: string;
    zeroScripts: string;
    scaling: string;
    onePerson: string;
  };
  retro: {
    ticker: string;
    badge: string;
    counterLabel: string;
    counterNote: string;
    counterAria: string;
    construction: string;
    noGuestbook: string;
    cookie: string;
    more: string;
    noticesAria: string;
    footerConstruction: string;
    footerCounter: string;
    offline: string;
    bestView: string;
    footerLegal: string;
    flavorAria: string;
    flavorText: string;
  };
  papier: {
    flavorLabel: string;
    flavorAria: string;
    colophon: string;
  };
  werkstatt: Record<string, never>;
};

export const themeChrome: { [K in ThemeId]: Record<Locale, ThemeChrome[K]> } = {
  werkstatt: { de: {}, en: {} },

  konsole: {
    de: {
      host: "tctcl@werkstatt",
      roomsDir: "raeume",
      listingHint: "raum / beschreibung",
      zeroPosts: "0 Beiträge",
      flavorLabel: "Terminal-Auszug",
    },
    en: {
      host: "tctcl@workshop",
      roomsDir: "rooms",
      listingHint: "room / description",
      zeroPosts: "0 posts",
      flavorLabel: "Terminal excerpt",
    },
  },

  minecraft: {
    de: {
      flavorLabel: "Inventar",
      flavorNote:
        "Kein Handel, kein Crafting-Rezept, keine erfundenen Ressourcen.",
      assetsNote: "Keine Mojang- oder Microsoft-Assets",
    },
    en: {
      flavorLabel: "Inventory",
      flavorNote: "No trading, no crafting recipe, no invented resources.",
      assetsNote: "No Mojang or Microsoft assets",
    },
  },

  "jtl-nova": {
    de: {
      menu: "Menü",
      breadcrumb: "Pfadnavigation",
      currency: "Euro — es gibt keine Preise",
      styles: "Stile",
      sku: "Art.-Nr.",
      category: "Kategorie",
      categories: "Kategorien",
      availability: "Verfügbarkeit",
      availabilityValue: "dauerhaft unbestimmt",
      price: "Preis",
      priceValue: "keiner. Kein Shop.",
      shipping: "Versand",
      shippingValue: "entfällt",
      condition: "Zustand",
      conditionValue: "in Arbeit",
      flavorLabel: "Produktdetails",
      flavorNote: "Kein Lager, kein Preis, kein Warenkorb.",
      inProgress: "in Arbeit",
      catalog: "Katalog",
      journal: "Journal",
      service: "Service",
      allRooms: "Alle Räume",
      orderLabel: "Reihenfolge",
      orderValue: "Werkstatt",
      stockLabel: "Lagerbestand",
      stockHeading: "Bestand",
      stockValue: "keiner",
      salesLabel: "Verkauf",
      salesValue: "nicht vorgesehen",
      sidebarNote:
        "Kein Shop: keine Preise, kein Warenkorb, kein Versand. Die Kategorien sind echte Seiten.",
      newsletterTitle: "Kein Newsletter. Nur das Journal.",
      newsletterText:
        "Kein Formular, keine Anmeldung, kein Versand. Neue Texte erscheinen direkt im Journal.",
      newsletterCta: "Journal öffnen",
      newsletterNote: "Ein Cookie für den Stil. Sonst nichts.",
      noCart: "Kein Warenkorb",
      noPrices: "Keine Preise",
      noShipping: "Kein Versand",
      styleCookie: "Ein Cookie für den Stil",
      disclaimer: "Hommage an JTL-Shop Nova. Keine Verbindung zu JTL.",
    },
    en: {
      menu: "Menu",
      breadcrumb: "Breadcrumb",
      currency: "Euro — there are no prices",
      styles: "Styles",
      sku: "Item no.",
      category: "Category",
      categories: "Categories",
      availability: "Availability",
      availabilityValue: "permanently undetermined",
      price: "Price",
      priceValue: "none. Not a shop.",
      shipping: "Shipping",
      shippingValue: "not applicable",
      condition: "Condition",
      conditionValue: "in progress",
      flavorLabel: "Product details",
      flavorNote: "No stock, no price, no cart.",
      inProgress: "in progress",
      catalog: "Catalogue",
      journal: "Journal",
      service: "Service",
      allRooms: "All rooms",
      orderLabel: "Order",
      orderValue: "Workshop",
      stockLabel: "Stock",
      stockHeading: "Stock",
      stockValue: "none",
      salesLabel: "Sale",
      salesValue: "not intended",
      sidebarNote:
        "Not a shop: no prices, no cart, no shipping. The categories are real pages.",
      newsletterTitle: "No newsletter. Just the journal.",
      newsletterText:
        "No form, no sign-up, no mailing. New writing appears straight in the journal.",
      newsletterCta: "Open journal",
      newsletterNote: "One cookie for the style. Nothing else.",
      noCart: "No cart",
      noPrices: "No prices",
      noShipping: "No shipping",
      styleCookie: "One cookie for the style",
      disclaimer: "Homage to JTL-Shop Nova. Not affiliated with JTL.",
    },
  },

  hype: {
    de: {
      topLine: "Skalierung ohne Tracking. Seit dem ersten Commit.",
      checkNumbers: "Zahlen prüfen",
      metricsAria: "Echte Kennzahlen",
      rooms: "Räume",
      projects: "Projekte",
      posts: "Beiträge auf dieser Seite",
      styleCookie: "Cookie für den Stil",
      trackingScripts: "Tracking-Skripte",
      trust:
        "Bekannt aus: keiner Publikation · Investoren: keine · Team: 1 Person · Buzzword-Dichte: messbar",
      quote: "„Wir sind nicht disruptiv. Wir sind nur wenige.“",
      quoteAttribution: "TCTCL, über sich selbst",
      quoteAria: "Zitat",
      inProgress: "in Arbeit",
      ctaTitle: "Buchen Sie kein Meeting.",
      ctaText:
        "Es gibt kein Angebot, keine Pipeline und keinen Kalender. Nur die Arbeit und die ehrliche Beschreibung davon.",
      satireNote: "Satire. Alle Kennzahlen stammen aus dem echten Inhalt.",
      trackingCookies: "Tracking-Cookies",
      person: "Person",
      flavorAria: "Kennzahlen",
      room: "Raum",
      content: "Inhalt",
      real: "100 % echt",
      tracking: "Tracking",
      zeroScripts: "0 Tracking-Skripte",
      scaling: "Skalierung",
      onePerson: "eine Person",
    },
    en: {
      topLine: "Scaling without tracking. Since the first commit.",
      checkNumbers: "Check the numbers",
      metricsAria: "Real numbers",
      rooms: "Rooms",
      projects: "Projects",
      posts: "Posts on this page",
      styleCookie: "Style cookie",
      trackingScripts: "Tracking scripts",
      trust:
        "Known from: no publication · Investors: none · Team: 1 person · Buzzword density: measurable",
      quote: "“We are not disruptive. There are just a few of us.”",
      quoteAttribution: "TCTCL, on itself",
      quoteAria: "Quote",
      inProgress: "in progress",
      ctaTitle: "Don't book a meeting.",
      ctaText:
        "There is no offer, no pipeline and no calendar. Just the work and an honest description of it.",
      satireNote: "Satire. Every number comes from the actual content.",
      trackingCookies: "Tracking cookies",
      person: "Person",
      flavorAria: "Metrics",
      room: "Room",
      content: "Content",
      real: "100% real",
      tracking: "Tracking",
      zeroScripts: "0 tracking scripts",
      scaling: "Scaling",
      onePerson: "one person",
    },
  },

  retro: {
    de: {
      ticker:
        "★ Willkommen auf meiner Homepage ★ Kein Tracking ★ Ein Cookie für den Stil ★ Beste Ansicht bei 800×600 ★",
      badge: "Under construction",
      counterLabel: "Besucherzähler",
      counterNote: "Offline. Kein Tracking, also auch keine echten Zahlen.",
      counterAria: "Besucherzähler",
      construction: "Under Construction",
      noGuestbook: "Kein Gästebuch. Kein Newsletter. Kein Popup.",
      cookie: "Ein Cookie für den Stil.",
      more: "Noch mehr",
      noticesAria: "Hinweise",
      footerConstruction: "*** Diese Seite ist niemals fertig ***",
      footerCounter: "Besucherzähler:",
      offline: "offline",
      bestView: "Beste Ansicht bei 800×600",
      footerLegal:
        "Kein Gästebuch · Kein Tracking · Ein Cookie für den Stil",
      flavorAria: "Hinweis",
      flavorText:
        "Diese Seite ist nie ganz fertig. Kein Gästebuch, kein Newsletter, kein Popup.",
    },
    en: {
      ticker:
        "★ Welcome to my homepage ★ No tracking ★ One cookie for the style ★ Best viewed at 800×600 ★",
      badge: "Under construction",
      counterLabel: "Visitor counter",
      counterNote: "Offline. No tracking, so no real numbers either.",
      counterAria: "Visitor counter",
      construction: "Under Construction",
      noGuestbook: "No guestbook. No newsletter. No popup.",
      cookie: "One cookie for the style.",
      more: "More",
      noticesAria: "Notes",
      footerConstruction: "*** This site is never finished ***",
      footerCounter: "Visitor counter:",
      offline: "offline",
      bestView: "Best viewed at 800×600",
      footerLegal: "No guestbook · No tracking · One cookie for the style",
      flavorAria: "Note",
      flavorText:
        "This site is never quite finished. No guestbook, no newsletter, no popup.",
    },
  },

  papier: {
    de: {
      flavorLabel: "Anmerkung",
      flavorAria: "Anmerkung",
      colophon: "Satz und Inhalt: eine Person.",
    },
    en: {
      flavorLabel: "Note",
      flavorAria: "Note",
      colophon: "Typeset and written by one person.",
    },
  },
};

