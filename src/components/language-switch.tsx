import Link from "next/link";

import { getCopy } from "@/content/site-copy";
import { otherLocale, type Locale } from "@/lib/locale";
import { blogPath } from "@/lib/routes";

type LanguageSwitchProps = {
  locale: Locale;
  alternateHref?: string | null;
};

export function LanguageSwitch({
  locale,
  alternateHref,
}: LanguageSwitchProps) {
  const copy = getCopy(locale);
  const other = otherLocale(locale);
  const fallback = !alternateHref;
  const target = alternateHref ?? blogPath(other);
  const switchLabel =
    other === "en" ? copy.nav.switchToEnglish : copy.nav.switchToGerman;
  const linkLabel = fallback ? copy.nav.noTranslation : switchLabel;

  return (
    <nav
      aria-label={copy.nav.language}
      className="flex items-center gap-1 font-mono text-[11px] tracking-[0.16em]"
    >
      {locale === "de" ? (
        <span
          aria-current="true"
          aria-label={`${copy.nav.currentLanguage}: DE`}
          className="text-blood"
        >
          DE
        </span>
      ) : (
        <Link
          href={alternateHref ?? blogPath("de")}
          hrefLang="de"
          lang="de"
          aria-label={linkLabel}
          title={linkLabel}
          className="text-muted-foreground transition-colors hover:text-blood"
        >
          DE
        </Link>
      )}
      <span aria-hidden="true" className="text-border">
        /
      </span>
      {locale === "en" ? (
        <span
          aria-current="true"
          aria-label={`${copy.nav.currentLanguage}: EN`}
          className="text-blood"
        >
          EN
        </span>
      ) : (
        <Link
          href={target}
          hrefLang="en"
          lang="en"
          aria-label={linkLabel}
          title={linkLabel}
          className="text-muted-foreground transition-colors hover:text-blood"
        >
          EN
        </Link>
      )}
    </nav>
  );
}
