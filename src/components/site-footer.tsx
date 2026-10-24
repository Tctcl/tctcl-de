import Link from "next/link";

import { getCopy } from "@/content/site-copy";
import { sectionIds, type Locale } from "@/lib/locale";
import { blogPath, homePath } from "@/lib/routes";
import { BUILD_YEAR, SITE } from "@/lib/site";

export function SiteFooter({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);
  const home = homePath(locale);
  const ids = sectionIds[locale];

  const navItems = [
    { href: `${home}#${ids.work}`, label: copy.nav.work },
    { href: `${home}#${ids.about}`, label: copy.nav.about },
    { href: `${home}#${ids.projects}`, label: copy.nav.projects },
    { href: blogPath(locale), label: copy.nav.journal },
  ];

  return (
    <footer className="mt-20 border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 md:grid-cols-12 md:px-8">
        <div className="md:col-span-5">
          <p className="font-serif text-xl font-semibold tracking-[-0.02em]">
            TCTCL <span className="text-blood">Labs</span>
          </p>
          <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
            {copy.footer.tagline}
          </p>
        </div>

        <nav aria-label={copy.footer.navLabel} className="md:col-span-3">
          <ul className="grid grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-blood"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-3 md:col-start-10">
          <p className="font-mono text-[9px] uppercase leading-relaxed tracking-[0.16em] text-muted-foreground">
            {copy.footer.privacy}
          </p>
          <p className="mt-3 font-mono text-[9px] uppercase leading-relaxed tracking-[0.16em] text-muted-foreground">
            {copy.footer.colophon}
          </p>
          <a
            href="#top"
            className="mt-4 inline-block font-mono text-[9px] uppercase tracking-[0.16em] text-blood transition-colors hover:text-blood-deep"
          >
            {copy.footer.backToTop} ↑
          </a>
        </div>
      </div>

      <div className="border-t border-border/80">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-4 font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground sm:flex-row sm:items-center sm:justify-between md:px-8">
          <p>
            © {BUILD_YEAR} {copy.footer.copyright}
          </p>
          <p>{SITE.url.replace("https://", "")}</p>
        </div>
      </div>
    </footer>
  );
}
