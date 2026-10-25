# tctcl.de

Personal workshop of TCTCL: music, tinkering, projects and notes, with the
professional e-commerce work kept in its own room. German first, English second,
built as a fully static Next.js site with a Markdown journal.

The design is deliberately personal and editorial: ash paper, charcoal ink,
muted rules, a single deep red accent, irregular grids and small hand-made
marks. No analytics, no forms, no third-party scripts. One first-party cookie
stores which of the seven visual styles you chose.

## Stack

- Next.js 16 (App Router, static generation)
- React 19 and TypeScript
- Tailwind CSS v4 with a small set of shadcn/ui primitives
- Markdown files in the repository, validated with Zod
- Unified/Remark/Rehype and Shiki for rendering and syntax highlighting
- pnpm

System fonts are used throughout, so there are no font files to download.

## Local development

```bash
pnpm install
pnpm dev
```

The site runs at <http://localhost:3000>.

Useful checks:

```bash
pnpm lint
pnpm typecheck
pnpm build
pnpm start
```

The production build is the authoritative validation step: it checks every
article's frontmatter, slugs, translations, related articles, internal links and
image alt text.

## Routes

| German | English | Content |
| --- | --- | --- |
| `/` | `/en` | Homepage and room directory |
| `/tuefteln` | `/en/tinkering` | Tinkering room |
| `/projekte` | `/en/projects` | Project workbench and statuses |
| `/ueber` | `/en/about` | About |
| `/arbeit` | `/en/work` | Professional work |
| `/blog` | `/en/blog` | Journal index |
| `/blog/seite/[page]` | `/en/blog/page/[page]` | Pagination (8 posts per page) |
| `/blog/[slug]` | `/en/blog/[slug]` | Article |
| `/stile` | `/en/styles` | Gallery and switcher for all seven styles |
| `/sitemap.xml` | | XML sitemap |
| `/robots.txt` | | Crawler rules |

German is the default language and lives at the root. Each language has its own
root layout, so the server sends the correct `<html lang>` on the first byte.

The one cookie in use stores the visual style, not the language. `src/proxy.ts`
(the Next.js 16 replacement for middleware) reads it before rendering and
rewrites the clean URL to the matching prebuilt style variant. Nothing about the
URL changes, so links, canonicals and search results stay stable.

The language switch keeps you on the same article when a real translation
exists. Otherwise it falls back to the other language's journal index.

## Content

Articles live in:

```text
content/blog/de/<slug>.md
content/blog/en/<slug>.md
```

The publishing workflow, every frontmatter field and the validation rules are
documented in [`docs/writing.md`](docs/writing.md).

Drafts stay in the repository but are excluded from the journal, pagination,
related articles, the sitemap and the homepage. Their URLs return a real 404.

Room copy lives in `src/content/rooms.ts` (one object per language), the homepage
noticeboard is hand-edited in `src/content/now.ts`, and global navigation/meta
copy is in `src/content/site-copy.ts`.

Projects are intentionally an empty, typed list in
`src/content/projects.ts`. The workbench shows an honest empty state until real,
public projects are added. Project entries support a `status` (`building`,
`experiment`, `paused`, `abandoned`) and optional notes, so unfinished or
abandoned work can be described as what it is.

## Styles

The site ships seven visual styles. Each one changes colours, layout and voice,
not just a palette:

| Style | Character |
| --- | --- |
| Werkstatt | The default: ash, ink, paper, editorial grids |
| Konsole | Terminal, boot log, `ls`-style rooms |
| Minecraft | Blocky workshop with hotbar and inventory |
| JTL Nova | Storefront parody with product cards and product details |
| Hype | Startup satire with real numbers and a visible satire label |
| Retro 90s | Under construction, hit counter, guestbook jokes |
| Papier | Dossier, footnotes, two columns |

All seven are selectable in the header, in the footer and in the gallery at
[`/stile`](https://tctcl.de/stile) and `/en/styles`. The switcher is a native
`<dialog>`; each style is an ordinary anchor to an internal path, so no
client-side theme state or data fetching is involved.

### Selection and persistence

- A first visit picks one of the six non-default styles at random. Werkstatt is
  always available but deliberately not part of the random pool, so returning
  visitors can get back to the quiet version.
- The choice is stored in `tctcl_style` for one year: first-party,
  `HttpOnly` (nothing in the browser needs to read it), `SameSite=Lax`,
  `Secure` in production.
- No analytics, no tracking cookies, no consent banner. The cookie only carries
  the style name.
- The cookie is read in `src/proxy.ts`, so the correct variant arrives with the
  first byte. There is no flash of the wrong theme and no client-side swap.

### Internal routes

Each style is statically generated under an internal path:

```text
/themes/<style>/...
/en/themes/<style>/...
```

`src/proxy.ts` rewrites a clean URL to the matching internal path when the
cookie asks for a non-default style. Direct visits to an internal path set the
cookie and 307-redirect to the clean URL; an unknown style redirects to `/`.
Because the public URL never changes, links and canonicals stay stable.

These internal routes are implementation details:

- `robots.txt` disallows `/themes/` and `/en/themes/`
- The internal pages are `noindex` and canonical to the clean URL
- They are excluded from the sitemap and from every public surface
- `dynamicParams = false`, so only the prebuilt variants exist

The 404 page renders the default Werkstatt chrome, because a static 404 cannot
read the cookie.

### Content rules

Theme voice is layered over the canonical copy instead of duplicating it:

- `src/themes/copy.ts` holds partial DE/EN overrides for labels, teasers and
  room voice
- `src/themes/chrome.ts` holds the bilingual decorative strings (prompts,
  counters, shop labels, tickers)
- Long-form room paragraphs and articles stay shared across all styles

Minecraft and JTL Nova are explicit homages. The names appear with a disclaimer;
no logos, textures, fonts or other assets are copied. Every number in the Hype
style comes from the real content and the style is labelled as satire in the
page itself. No projects, clients, metrics or activity are invented for any
style.

### Caching

Every HTML response is rendered for one visitor's style, so it must never be
stored by a shared cache. The proxy sets
`Cache-Control: private, no-cache, no-store, must-revalidate` on HTML.

`Vary: Cookie` is not reliable here: Next.js owns that header for rewritten app
routes and re-appends its own RSC values after the proxy runs, so `Cookie` is
lost. A `headers()` rule in `next.config.ts` was tested and had no effect. The
practical answer is `private` plus `no-store`: the HTML for every variant is
still generated once at build time, but the per-visitor response is never kept
in a shared cache.

## Structure

```text
src/app/(de)/            German routes, internal style variants and root layout
src/app/(en)/            English routes, internal style variants and root layout
src/app/global-not-found.tsx   Bilingual fallback 404
src/proxy.ts             Style cookie, random first visit, rewrites, no-store
src/components/          Layout, rooms, journal and article UI
src/themes/              Style registry, copy overrides, chrome strings, homes
src/content/             Site, room and noticeboard copy (DE/EN), project list
src/lib/content/         Markdown loader, schema and renderer
src/lib/                 Routing, SEO, structured data and formatting
content/blog/            Markdown articles
docs/                    Editorial documentation
```

Inside `src/themes/`:

```text
catalog.ts               Labels, blurbs, swatches, disclaimers
copy.ts                  Per-style DE/EN voice overrides
chrome.ts                Decorative bilingual strings per style
registry.ts              Style → header, footer and homepage components
internal-page.tsx        Internal route resolver, metadata, static params
home/                    Seven bespoke homepage layouts
room-flavor.tsx          Per-style note between room hero and shared body
```

## SEO

- Unique title and description per page, independent of the chosen style
- Canonical URLs based on `https://tctcl.de`
- `hreflang` only for real translations, plus `x-default`
- Open Graph and Twitter metadata with a local 1200×630 image
- XML sitemap with translation alternates
- JSON-LD for `Person`, `WebSite`, `Blog`, `BlogPosting` and `BreadcrumbList`
- Static generation for every public route, including articles
- Real 404 responses for unknown routes, drafts and invalid page numbers
- Internal style variants are `noindex`, canonical to the clean URL, absent from
  the sitemap and disallowed in `robots.txt`
- Drafts are absent from every public surface
- The style gallery is a normal indexable page; the seven variants behind it are
  not

Metadata, titles, descriptions and OG images never vary by style. The style
cookie only changes presentation, so crawlers and shares always see the same
canonical page.

## Deployment

The site is a standard Next.js application and is deployed on Vercel. `main`
represents production; work is integrated on `dev`.

The canonical origin is a constant in `src/lib/site.ts` (`SITE.url`). Set the
production domain there if the site ever moves; it is deliberately not read from
an environment variable, so preview deployments cannot accidentally emit the
wrong canonical URL.

## License and content

The code is private to this repository. Article text and images remain the
property of their author.
