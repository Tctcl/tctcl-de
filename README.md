# tctcl.de

Personal site of TCTCL Labs: German first, English second, built as a fully
static Next.js site with a Markdown journal.

The design is deliberately restrained: ash paper, charcoal ink, muted rules and
a single deep red accent. No analytics, no cookies, no forms, no third-party
scripts.

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
| `/` | `/en` | Homepage |
| `/blog` | `/en/blog` | Journal index |
| `/blog/seite/[page]` | `/en/blog/page/[page]` | Pagination (8 posts per page) |
| `/blog/[slug]` | `/en/blog/[slug]` | Article |
| `/sitemap.xml` | | XML sitemap |
| `/robots.txt` | | Crawler rules |

German is the default language and lives at the root. There is no middleware and
no locale cookie: each language has its own root layout, so the server sends the
correct `<html lang>` on the first byte.

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

Projects are intentionally an empty, typed list in
`src/content/projects.ts`. The homepage shows an honest empty state until real,
public projects are added.

## Structure

```text
src/app/(de)/            German routes and root layout
src/app/(en)/            English routes and root layout
src/app/global-not-found.tsx   Bilingual fallback 404
src/components/          Layout, journal and article UI
src/content/             Site copy (DE/EN) and the project list
src/lib/content/         Markdown loader, schema and renderer
src/lib/                 Routing, SEO, structured data and formatting
content/blog/            Markdown articles
docs/                    Editorial documentation
```

## SEO

- Unique title and description per page
- Canonical URLs based on `https://tctcl.de`
- `hreflang` only for real translations, plus `x-default`
- Open Graph and Twitter metadata with a local 1200×630 image
- XML sitemap with translation alternates
- JSON-LD for `Person`, `WebSite`, `Blog`, `BlogPosting` and `BreadcrumbList`
- Static generation for every public route, including articles
- Real 404 responses for unknown routes, drafts and invalid page numbers
- Drafts are absent from every public surface

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
