import type { Metadata, Viewport } from "next";
import Link from "next/link";

import "./globals.css";

export const metadata: Metadata = {
  title: "404 — TCTCL Labs",
  description:
    "Diese Seite existiert nicht. This page does not exist.",
  robots: {
    index: false,
    follow: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#e9e4da",
  colorScheme: "light",
};

export default function GlobalNotFound() {
  return (
    <html lang="de">
      <body className="flex min-h-screen flex-col">
        <div className="h-1 w-full bg-blood" aria-hidden="true" />

        <header className="border-b border-border">
          <div className="mx-auto flex max-w-6xl items-baseline gap-2 px-5 py-5 md:px-8">
            <Link
              href="/"
              className="font-serif text-2xl font-semibold leading-none tracking-[-0.035em]"
            >
              TCTCL
            </Link>
            <span className="font-mono text-[9px] uppercase tracking-[0.32em] text-muted-foreground">
              Labs
            </span>
          </div>
        </header>

        <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-5 py-20 md:px-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-blood">
            404 / Nicht gefunden · Not found
          </p>
          <h1 className="mt-5 max-w-2xl font-serif text-[clamp(2.4rem,6vw,4.6rem)] font-semibold leading-[1.02] tracking-[-0.035em]">
            Hier ist nichts.
            <span lang="en" className="block italic text-muted-foreground">
              There is nothing here.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-[15.5px] leading-7 text-muted-foreground">
            Die Seite existiert nicht, wurde verschoben oder war nur ein
            Gerücht.
            <span lang="en" className="mt-2 block">
              The page does not exist, has moved, or was only a rumour.
            </span>
          </p>

          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 font-mono text-[10px] uppercase tracking-[0.16em]">
            <Link href="/" className="editorial-link text-blood">
              Startseite →
            </Link>
            <Link
              href="/en"
              hrefLang="en"
              lang="en"
              className="editorial-link text-muted-foreground"
            >
              Homepage →
            </Link>
            <Link
              href="/blog"
              className="editorial-link text-muted-foreground"
            >
              Journal →
            </Link>
          </div>
        </main>

        <footer className="border-t border-border">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-4 font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground sm:flex-row sm:items-center sm:justify-between md:px-8">
            <p>Kein Tracking. Keine Cookies. Kein Banner.</p>
            <p>tctcl.de</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
