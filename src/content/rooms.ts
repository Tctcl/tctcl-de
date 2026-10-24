import type { Locale } from "@/lib/locale";
import type { RoomId } from "@/lib/routes";

export type RoomSection = {
  title: string;
  paragraphs?: string[];
  items?: string[];
  note?: string;
};

type RoomBase = {
  index: string;
  label: string;
  eyebrow: string;
  title: string;
  accent: string;
  intro: string;
  teaser: string;
  tags: string[];
  metaTitle: string;
  metaDescription: string;
};

export type TinkeringCopy = RoomBase & {
  sections: RoomSection[];
  toolkit: {
    label: string;
    items: string[];
  };
  rules: {
    title: string;
    text: string;
  }[];
  marginal: string[];
};

export type ProjectsCopy = RoomBase & {
  sections: RoomSection[];
  statuses: {
    key: string;
    label: string;
    text: string;
  }[];
  benchTitle: string;
  benchNotes: string[];
  empty: {
    label: string;
    title: string;
    text: string;
    note: string;
  };
};

export type AboutCopy = RoomBase & {
  sections: RoomSection[];
  annoyances: string[];
};

export type WorkCopy = RoomBase & {
  sections: RoomSection[];
  areas: {
    title: string;
    text: string;
    tags: string[];
  }[];
  closing: string;
};

type RoomCopy = {
  tinkering: TinkeringCopy;
  projects: ProjectsCopy;
  about: AboutCopy;
  work: WorkCopy;
};

export const roomCopy: Record<Locale, RoomCopy> = {
  de: {
    tinkering: {
      index: "01",
      label: "Tüfteln",
      eyebrow: "Linux / Docker / Code / Hardware",
      title: "Erst auseinandernehmen.",
      accent: "Dann verstehen.",
      intro:
        "Ich hoste Dienste selbst, schreibe Skripte für Dinge, die sich sonst wiederholen, und lese mich in Systeme ein, bis ich ungefähr weiß, wo der Fehler sitzt.",
      teaser:
        "Self-Hosting, Linux, Docker und die Frage, wie Dinge eigentlich unter der Haube funktionieren.",
      tags: ["Linux", "Docker", "Self-Hosting"],
      metaTitle: "Tüfteln",
      metaDescription:
        "Self-Hosting, Linux, Docker, Automation und technische Umwege: Dinge selbst betreiben und verstehen.",
      sections: [
        {
          title: "Selbst hosten, weil ich es wissen will",
          paragraphs: [
            "Ein Server ist kein magischer Ort. Es ist ein Rechner mit Strom, Platten, Diensten und einer Menge Möglichkeiten, sich selbst ins Knie zu schießen. Genau deshalb ist es interessant.",
            "Ich mag es, die Kontrolle über meine Daten und Werkzeuge zu haben. Nicht aus Prinzip, sondern weil ich wissen will, was passiert, wenn etwas kaputtgeht — und weil ich es dann selbst reparieren kann.",
          ],
        },
        {
          title: "Der Werkzeugkasten",
          paragraphs: [
            "Ich benutze, was zum Problem passt. Meistens bedeutet das: ein Terminal, ein paar Container und weniger moving parts als ursprünglich geplant.",
          ],
        },
        {
          title: "Ein paar Regeln",
          paragraphs: [
            "Diese Regeln sind keine Gesetze. Sie sind das, was übrig bleibt, wenn man oft genug zu kompliziert angefangen hat.",
          ],
        },
        {
          title: "Immer wieder",
          paragraphs: [
            "Kleine Werkzeuge, die einen nervigen Handgriff erledigen. Saubere Datenflüsse. Und die Frage, wie viel Infrastruktur ein Privatprojekt wirklich braucht, bevor es sich selbst verwaltet.",
          ],
          note: "Tüftelnotizen landen im Journal, sobald sie lesbar sind.",
        },
      ],
      toolkit: {
        label: "Werkzeugkasten",
        items: [
          "Linux",
          "Docker",
          "TypeScript / JavaScript",
          "Python",
          "APIs",
          "Datenbanken",
          "Automatisierung",
          "Ein Terminal",
        ],
      },
      rules: [
        {
          title: "Erst das Problem verstehen.",
          text: "Die Abstraktion kommt später. Meistens braucht es sie gar nicht.",
        },
        {
          title: "Wenn ein Skript reicht, reicht ein Skript.",
          text: "Nicht jede Lösung braucht ein Framework, ein Dashboard und drei Container.",
        },
        {
          title: "Backups sind erst Backups, wenn sie zurückkommen.",
          text: "Ein Archiv, das sich nicht wiederherstellen lässt, ist Theater.",
        },
        {
          title: "Open Source ist kein Selbstzweck.",
          text: "Aber oft der bessere Anfang, weil man reinschauen kann.",
        },
        {
          title: "AI ist ein Werkzeug.",
          text: "Kein Persönlichkeitsmerkmal und kein Grund, alles damit zuzukleistern.",
        },
      ],
      marginal: ["Offene Werkbank", "kein fertiger Plan", "trotzdem weiter"],
    },
    projects: {
      index: "02",
      label: "Projekte",
      eyebrow: "Werkbank / gebaut / halbfertig",
      title: "Nicht alles braucht",
      accent: "einen Businessplan.",
      intro:
        "Manche Projekte entstehen, weil etwas fehlt. Andere, weil ein vorhandenes Werkzeug nervt. Und manche, weil ich verstehen will, ob ich es hinbekomme. Nicht alle sind fertig. Das ist der Punkt.",
      teaser:
        "Dinge, die ich gebaut habe, baue oder irgendwann wieder ausgrabe. Mit Status, nicht mit Pitch.",
      tags: ["Web", "Tools", "Experimente"],
      metaTitle: "Projekte",
      metaDescription:
        "Projekte und Experimente von TCTCL: Web-Anwendungen, Werkzeuge, Musiksoftware und Dinge, die einfach gebaut werden mussten.",
      sections: [
        {
          title: "Was hier landet",
          items: [
            "Web-Anwendungen und kleine Interfaces",
            "Selbst gehostete Dienste und Infrastruktur",
            "DJ- und Musikwerkzeuge",
            "JTL-Plugins, Integrationen und Automatisierungen",
            "Skripte, die einen Handgriff überflüssig machen",
            "Hardware- und Sound-Experimente",
          ],
        },
        {
          title: "Wie ich darüber schreibe",
          paragraphs: [
            "Zu jedem Projekt gehört, was es tut, warum ich angefangen habe und was unterwegs schiefging. Wenn etwas experimentell ist, steht das dabei. Wenn etwas eingestellt wurde, wird es nicht als strategische Neuausrichtung umgeschrieben.",
          ],
        },
      ],
      statuses: [
        { key: "building", label: "Im Bau", text: "Es passiert gerade etwas." },
        {
          key: "experiment",
          label: "Experiment",
          text: "Ich teste eine Idee, kein Produkt.",
        },
        {
          key: "paused",
          label: "Pausiert",
          text: "Liegt auf der Werkbank und wartet.",
        },
        {
          key: "abandoned",
          label: "Eingestellt",
          text: "Hat nicht funktioniert oder war zu Ende.",
        },
      ],
      benchTitle: "Werkbank",
      benchNotes: ["gebaut", "benutzt", "gelernt", "liegen gelassen"],
      empty: {
        label: "Werkbank / 00",
        title: "Noch kein öffentliches Projekt.",
        text: "Die Werkbank ist nicht leer, aber alles darauf ist noch nicht vorzeigbar. Statt erfundener Case Studies bleibt dieser Bereich ehrlich.",
        note: "Sobald ein Projekt öffentlich interessant ist, bekommt es hier eine Seite — auch wenn es unfertig ist.",
      },
    },
    about: {
      index: "04",
      label: "Über",
      eyebrow: "Person / Haltung / ein paar Kanten",
      title: "Ich bin TCTCL.",
      accent: "Mehr muss da nicht stehen.",
      intro:
        "Ich baue Software, höre viel Techno und nehme Dinge auseinander, um zu verstehen, wie sie funktionieren. Diese Seite ist der Versuch, das ohne Marketinghülle aufzuschreiben.",
      teaser:
        "Entwickler, Tüftler, Musiknerd. Und jemand, der Dinge lieber selbst herausfindet.",
      tags: ["Person", "Haltung"],
      metaTitle: "Über",
      metaDescription:
        "TCTCL: Entwickler, Tüftler und Musiknerd. Über Arbeit, Musik, Self-Hosting und die Art, wie ich Dinge angehe.",
      sections: [
        {
          title: "Beruflich",
          paragraphs: [
            "Ich arbeite in der E-Commerce-Entwicklung, vor allem im JTL-Umfeld: JTL-Shop, JTL-Wawi, Integrationen, APIs, Plugins, Automatisierung und die Infrastruktur darunter. Der interessante Teil ist selten die Storefront. Es sind die Daten, die Übergänge und die Fälle, für die es keine Dokumentation gibt.",
          ],
        },
        {
          title: "Der Rest",
          paragraphs: [
            "Musik, DJing, Self-Hosting, Linux, Docker, Server, kleine Werkzeuge und Projekte, die keinen Businessplan haben. Nicht alles muss monetarisiert werden. Manches ist einfach interessant genug.",
          ],
        },
        {
          title: "Wie ich ticke",
          paragraphs: [
            "Ich mag praktische Lösungen, klare Erklärungen und Systeme, die man verstehen kann. Ich habe wenig Geduld für unnötige Komplexität, aufgeblähte Software und Leute, die einfache Dinge kompliziert machen, um klug zu wirken.",
            "Das heißt nicht, dass ich immer richtig liege. Ich probiere Dinge aus, ändere die Richtung und baue manchmal mehr, als nötig gewesen wäre. Auch das gehört dazu.",
          ],
        },
        {
          title: "Was mich nervt",
        },
        {
          title: "Was du hier findest",
          paragraphs: [
            "Keinen Lebenslauf und keine Verkaufsshow. Eher offene Werkstatt: Musik, Technik, Projekte, Notizen und Dinge, die ich noch nicht einsortiert habe.",
          ],
        },
      ],
      annoyances: [
        "Abstraktionen ohne Problem",
        "SaaS für alles",
        "Dashboards, die mehr Zeit fressen als sie sparen",
        "Software, die den Nutzer bevormundet",
        "Buzzword-Bingo in technischen Diskussionen",
      ],
    },
    work: {
      index: "05",
      label: "Arbeit",
      eyebrow: "E-Commerce / JTL / Infrastruktur",
      title: "Der berufliche Teil.",
      accent: "Nicht der ganze Mensch.",
      intro:
        "Ich entwickle beruflich im E-Commerce, hauptsächlich rund um JTL. Das ist echte Erfahrung mit echten Systemen — und der Grund, warum hier viele technische Themen auftauchen. Es ist nur nicht der einzige Grund, warum es diese Seite gibt.",
      teaser:
        "E-Commerce-Entwicklung mit JTL, APIs, Daten und der Infrastruktur, die Online-Shops am Laufen hält.",
      tags: ["JTL", "APIs", "Infrastruktur"],
      metaTitle: "Arbeit",
      metaDescription:
        "Berufliche E-Commerce-Entwicklung: JTL-Shop, JTL-Wawi, Integrationen, APIs, Automatisierung und Infrastruktur.",
      sections: [
        {
          title: "Womit ich zu tun habe",
        },
        {
          title: "Wie ich arbeite",
          paragraphs: [
            "Direkt, praktisch und ohne Buzzword-Bingo. Erst das Problem verstehen, dann die kleinste Lösung suchen, die tatsächlich funktioniert. Wenn eine Idee schlecht ist, sage ich das lieber früh als höflich zu spät.",
          ],
        },
        {
          title: "Was das hier nicht ist",
          paragraphs: [
            "Kein Angebotstrichter, keine Paketpreise, kein Lead-Formular. Diese Seite beschreibt, womit ich beruflich zu tun habe. Wer beruflich anknüpfen will, kann das tun; der Rest der Seite bleibt trotzdem der interessantere Teil.",
          ],
        },
      ],
      areas: [
        {
          title: "JTL-Shop",
          text: "Anpassungen, Plugins und Templates. Auch die Stellen, an denen das Standardverhalten aufhört und jemand eine Entscheidung treffen muss.",
          tags: ["Shop", "Plugin", "Template"],
        },
        {
          title: "JTL-Wawi",
          text: "Anbindungen, API-Zugriffe und Workflows, die Daten zwischen Wawi, Shop und allem dazwischen bewegen.",
          tags: ["Wawi", "API", "Sync"],
        },
        {
          title: "Integrationen & APIs",
          text: "Systeme miteinander verbinden, Daten sauber übertragen und Fehler so behandeln, dass man sie nachvollziehen kann.",
          tags: ["API", "Daten", "Fehlerfälle"],
        },
        {
          title: "Daten & Automatisierung",
          text: "Importe, Lieferantendaten, Migrationen und wiederkehrende Handgriffe, die besser ein Skript erledigt.",
          tags: ["Import", "Migration", "Skripte"],
        },
        {
          title: "Werkzeuge & Plugins",
          text: "Kleine und größere Werkzeuge für Probleme, für die es kein fertiges Produkt gibt.",
          tags: ["Tooling", "CLI", "Utilities"],
        },
        {
          title: "Infrastruktur",
          text: "Linux, Docker, Server und Deployment. Dinge selbst betreiben, statt sie nur irgendwo hinzuschieben.",
          tags: ["Linux", "Docker", "Server"],
        },
      ],
      closing:
        "Der berufliche Teil gehört dazu. Er ist nur nicht der einzige Grund, warum ich Dinge baue.",
    },
  },
  en: {
    tinkering: {
      index: "01",
      label: "Tinkering",
      eyebrow: "Linux / Docker / code / hardware",
      title: "Take it apart first.",
      accent: "Then understand it.",
      intro:
        "I host services myself, write scripts for things that keep repeating, and read into systems until I roughly know where the fault is sitting.",
      teaser:
        "Self-hosting, Linux, Docker and the question of how things actually work under the hood.",
      tags: ["Linux", "Docker", "Self-hosting"],
      metaTitle: "Tinkering",
      metaDescription:
        "Self-hosting, Linux, Docker, automation and technical detours: running things yourself and understanding them.",
      sections: [
        {
          title: "Self-hosting because I want to know",
          paragraphs: [
            "A server isn't a magical place. It's a machine with power, disks, services and plenty of ways to shoot yourself in the foot. That's exactly why it's interesting.",
            "I like having control over my data and tools. Not as a principle, but because I want to know what happens when something breaks — and because I want to be able to fix it myself.",
          ],
        },
        {
          title: "The toolbox",
          paragraphs: [
            "I use what fits the problem. Most of the time that means a terminal, a few containers and fewer moving parts than I originally planned.",
          ],
        },
        {
          title: "A few rules",
          paragraphs: [
            "These aren't laws. They're what's left after starting too complicated often enough.",
          ],
        },
        {
          title: "Again and again",
          paragraphs: [
            "Small tools that remove an annoying manual step. Clean data flows. And the question of how much infrastructure a private project really needs before it starts maintaining itself.",
          ],
          note: "Tinkering notes end up in the journal once they're readable.",
        },
      ],
      toolkit: {
        label: "Toolbox",
        items: [
          "Linux",
          "Docker",
          "TypeScript / JavaScript",
          "Python",
          "APIs",
          "Databases",
          "Automation",
          "A terminal",
        ],
      },
      rules: [
        {
          title: "Understand the problem first.",
          text: "The abstraction comes later. Most of the time you don't need it at all.",
        },
        {
          title: "If a script is enough, a script is enough.",
          text: "Not every solution needs a framework, a dashboard and three containers.",
        },
        {
          title: "A backup is only a backup once it comes back.",
          text: "An archive you can't restore is theatre.",
        },
        {
          title: "Open source isn't a goal by itself.",
          text: "But it's often the better starting point because you can look inside.",
        },
        {
          title: "AI is a tool.",
          text: "Not a personality trait, and not a reason to smear it over everything.",
        },
      ],
      marginal: ["Open workbench", "no finished plan", "keep going"],
    },
    projects: {
      index: "02",
      label: "Projects",
      eyebrow: "Workbench / built / half-finished",
      title: "Not everything needs",
      accent: "a business plan.",
      intro:
        "Some projects exist because something is missing. Others because an existing tool is annoying. And some because I want to know whether I can build it. Not all of them are finished. That's the point.",
      teaser:
        "Things I've built, am building, or will dig out again at some point. With a status, not a pitch.",
      tags: ["Web", "Tools", "Experiments"],
      metaTitle: "Projects",
      metaDescription:
        "Projects and experiments by TCTCL: web applications, tools, music software and things that simply had to be built.",
      sections: [
        {
          title: "What ends up here",
          items: [
            "Web applications and small interfaces",
            "Self-hosted services and infrastructure",
            "DJ and music tools",
            "JTL plugins, integrations and automation",
            "Scripts that remove a manual step",
            "Hardware and sound experiments",
          ],
        },
        {
          title: "How I write about it",
          paragraphs: [
            "Every project gets what it does, why I started, and what went wrong along the way. If something is experimental, it says so. If something was abandoned, it doesn't get rewritten as a strategic pivot.",
          ],
        },
      ],
      statuses: [
        {
          key: "building",
          label: "Building",
          text: "Something is actually happening.",
        },
        {
          key: "experiment",
          label: "Experiment",
          text: "I'm testing an idea, not a product.",
        },
        {
          key: "paused",
          label: "Paused",
          text: "Sitting on the bench, waiting.",
        },
        {
          key: "abandoned",
          label: "Abandoned",
          text: "It didn't work, or it was finished.",
        },
      ],
      benchTitle: "Workbench",
      benchNotes: ["built", "used", "learned", "left alone"],
      empty: {
        label: "Workbench / 00",
        title: "No public project yet.",
        text: "The bench isn't empty, but nothing on it is ready to show. Instead of invented case studies, this section stays honest.",
        note: "Once a project is publicly interesting, it gets a page here — even if it's unfinished.",
      },
    },
    about: {
      index: "04",
      label: "About",
      eyebrow: "Person / attitude / a few edges",
      title: "I'm TCTCL.",
      accent: "That's all that needs to be here.",
      intro:
        "I build software, listen to a lot of techno, and take things apart to understand how they work. This page is an attempt to write that down without the marketing wrapper.",
      teaser:
        "Developer, tinkerer, music nerd. And someone who would rather find things out himself.",
      tags: ["Person", "Attitude"],
      metaTitle: "About",
      metaDescription:
        "TCTCL: developer, tinkerer and music nerd. On work, music, self-hosting and the way I approach things.",
      sections: [
        {
          title: "Work",
          paragraphs: [
            "I work in e-commerce development, mostly around JTL: JTL-Shop, JTL-Wawi, integrations, APIs, plugins, automation and the infrastructure underneath. The interesting part is rarely the storefront. It's the data, the handovers and the cases nobody wrote documentation for.",
          ],
        },
        {
          title: "The rest",
          paragraphs: [
            "Music, DJing, self-hosting, Linux, Docker, servers, small tools and projects without a business plan. Not everything needs to be monetised. Some things are simply interesting enough.",
          ],
        },
        {
          title: "How I work",
          paragraphs: [
            "I like practical solutions, clear explanations and systems you can understand. I have very little patience for unnecessary complexity, bloated software and people making simple things complicated to look clever.",
            "That doesn't mean I always get it right. I try things, change direction, and sometimes build more than was necessary. That's part of it too.",
          ],
        },
        {
          title: "What gets on my nerves",
        },
        {
          title: "What you'll find here",
          paragraphs: [
            "Not a résumé and not a sales pitch. More like an open workshop: music, technology, projects, notes and things I haven't sorted yet.",
          ],
        },
      ],
      annoyances: [
        "Abstractions without a problem",
        "SaaS for everything",
        "Dashboards that eat more time than they save",
        "Software that patronises the user",
        "Buzzword bingo in technical discussions",
      ],
    },
    work: {
      index: "05",
      label: "Work",
      eyebrow: "E-commerce / JTL / infrastructure",
      title: "The professional part.",
      accent: "Not the whole person.",
      intro:
        "I work in e-commerce development, mostly around JTL. That's real experience with real systems — and the reason a lot of technical topics show up here. It just isn't the only reason this site exists.",
      teaser:
        "E-commerce development with JTL, APIs, data and the infrastructure that keeps online shops running.",
      tags: ["JTL", "APIs", "Infrastructure"],
      metaTitle: "Work",
      metaDescription:
        "Professional e-commerce development: JTL-Shop, JTL-Wawi, integrations, APIs, automation and infrastructure.",
      sections: [
        {
          title: "What I work on",
        },
        {
          title: "How I work",
          paragraphs: [
            "Direct, practical and without buzzword bingo. Understand the problem first, then look for the smallest solution that actually works. If an idea is bad, I'd rather say so early than politely too late.",
          ],
        },
        {
          title: "What this isn't",
          paragraphs: [
            "No sales funnel, no package prices, no lead form. This page describes what I do professionally. If you want to talk shop, you can; the rest of the site is still the more interesting part.",
          ],
        },
      ],
      areas: [
        {
          title: "JTL-Shop",
          text: "Customisations, plugins and templates. Including the point where standard behaviour ends and someone has to make a decision.",
          tags: ["Shop", "Plugin", "Template"],
        },
        {
          title: "JTL-Wawi",
          text: "Integrations, API access and workflows that move data between Wawi, the shop and everything in between.",
          tags: ["Wawi", "API", "Sync"],
        },
        {
          title: "Integrations & APIs",
          text: "Connecting systems, moving data cleanly, and handling errors in a way people can actually follow.",
          tags: ["API", "Data", "Edge cases"],
        },
        {
          title: "Data & automation",
          text: "Imports, supplier data, migrations and recurring manual work that is better handled by a script.",
          tags: ["Import", "Migration", "Scripts"],
        },
        {
          title: "Tools & plugins",
          text: "Small and not-so-small tools for problems that don't have an off-the-shelf product.",
          tags: ["Tooling", "CLI", "Utilities"],
        },
        {
          title: "Infrastructure",
          text: "Linux, Docker, servers and deployment. Running things yourself instead of only pushing them somewhere.",
          tags: ["Linux", "Docker", "Servers"],
        },
      ],
      closing:
        "The professional part belongs here. It just isn't the only reason I build things.",
    },
  },
};

export function getRoomCopy<Id extends RoomId>(
  locale: Locale,
  room: Id,
): RoomCopy[Id] {
  return roomCopy[locale][room];
}
