import { NextResponse, type NextRequest } from "next/server";

import {
  THEME_COOKIE,
  THEME_COOKIE_MAX_AGE,
  THEME_PATH_SEGMENT,
  defaultTheme,
  isThemeId,
  pickRandomTheme,
  type ThemeId,
} from "@/lib/theme-ids";

function localePrefix(pathname: string): "" | "/en" {
  return pathname === "/en" || pathname.startsWith("/en/") ? "/en" : "";
}

function setThemeCookie(response: NextResponse, theme: ThemeId): void {
  response.cookies.set({
    name: THEME_COOKIE,
    value: theme,
    path: "/",
    maxAge: THEME_COOKIE_MAX_AGE,
    sameSite: "lax",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  });
}

function noStore(response: NextResponse): NextResponse {
  // Every HTML response is rendered for one visitor's style cookie, so it must
  // never be stored by a shared cache. `private` is the part that matters;
  // Next.js owns the `Vary` header for rewritten app routes and re-appends its
  // own RSC values after the proxy runs.
  response.headers.set(
    "Cache-Control",
    "private, no-cache, no-store, must-revalidate",
  );
  response.headers.append("Vary", "Cookie");
  return response;
}

// Crawlers do not keep cookies, so randomising their style would hand them a
// different page on every visit and fill their crawl budget with variants.
const crawlerPattern =
  /bot\b|crawler|spider|slurp|facebookexternalhit|embedly|quora link preview|pinterest|whatsapp|telegrambot|discordbot|google-inspectiontool|lighthouse|headlesschrome|curl\/|wget\/|python-requests|axios\//i;

function isCrawler(request: NextRequest): boolean {
  return crawlerPattern.test(request.headers.get("user-agent") ?? "");
}

/**
 * The theme lives in a first-party cookie and is selected before the page is
 * served. Statically generated theme variants are rewritten onto the clean
 * URLs, so there is no flash and no second public URL per style.
 */
export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const prefix = localePrefix(pathname);
  const internalBase = `${prefix}/${THEME_PATH_SEGMENT}`;

  // /themes/<style>/... is internal. Direct visits become clean URLs.
  if (
    pathname === internalBase ||
    pathname.startsWith(`${internalBase}/`)
  ) {
    const rest = pathname.slice(internalBase.length);
    const [, rawTheme, ...pathParts] = rest.split("/");

    if (!isThemeId(rawTheme)) {
      return NextResponse.redirect(new URL(`${prefix || "/"}${search}`, request.url));
    }

    const cleanSuffix = pathParts.join("/");
    const cleanPath = cleanSuffix
      ? `${prefix}/${cleanSuffix}`
      : prefix || "/";
    const response = NextResponse.redirect(
      new URL(`${cleanPath}${search}`, request.url),
    );
    setThemeCookie(response, rawTheme);
    return noStore(response);
  }

  const cookieTheme = request.cookies.get(THEME_COOKIE)?.value;
  const knownTheme = isThemeId(cookieTheme) ? cookieTheme : null;
  const theme: ThemeId =
    knownTheme ?? (isCrawler(request) ? defaultTheme : pickRandomTheme());
  const needsTheme = !knownTheme && theme !== defaultTheme;

  const cleanSuffix =
    pathname === prefix || pathname === `${prefix}/`
      ? ""
      : pathname.slice(prefix.length);
  const internalPath =
    theme === defaultTheme
      ? null
      : `${internalBase}/${theme}${cleanSuffix}`;

  const response = internalPath
    ? NextResponse.rewrite(new URL(`${internalPath}${search}`, request.url))
    : NextResponse.next();

  if (needsTheme) {
    setThemeCookie(response, theme);
  }

  return noStore(response);
}

export const config = {
  matcher: [
    "/((?!_next|_vercel|favicon|og\\.png|robots\\.txt|sitemap\\.xml|.*\\.[a-zA-Z0-9]+$).*)",
  ],
};
