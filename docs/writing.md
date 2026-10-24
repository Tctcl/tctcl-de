# Writing for the journal

Articles are plain Markdown files in the repository. There is no CMS and no
database. Every public page is generated at build time, so publishing an article
means committing the file and letting the site rebuild.

## Where files live

```text
content/blog/de/<slug>.md
content/blog/en/<slug>.md
```

- The folder decides the language. A German file in `content/blog/en/` fails
  the build.
- The file name must match the `slug` field. `datenimport.md` must contain
  `slug: datenimport`.
- Files beginning with `_` or `.` are ignored. Use them for notes that should
  never be imported.

## Frontmatter

Every article starts with YAML frontmatter:

```yaml
---
title: Datenimport ohne Überraschungen
description: Ein kurzer Text über Reihenfolge, Prüfungen und nachvollziehbare Fehler beim Import.
slug: datenimport-ohne-ueberraschungen
date: 2026-08-03
updatedAt: 2026-08-11
language: de
author: TCTCL
categories:
  - Daten
tags:
  - Import
  - Validierung
draft: false
image: /images/journal/import.png
imageAlt: Editor mit einer Importdatei und einer Fehlerliste
translationKey: datenimport-grundlagen
canonicalUrl: https://example.com/original-article
relatedArticles:
  - erste-notizen
---

## Ausgangslage

Der Text beginnt hier.
```

| Field | Required | Rules |
| --- | --- | --- |
| `title` | yes | 1–120 characters |
| `description` | yes | 1–320 characters, used for listings and metadata |
| `slug` | yes | Lowercase letters, numbers and single hyphens; must match the file name |
| `date` | yes | `YYYY-MM-DD`, a real calendar date |
| `updatedAt` | no | `YYYY-MM-DD`, not earlier than `date` |
| `language` | yes | `de` or `en`, must match the folder |
| `author` | no | Defaults to `TCTCL`, maximum 80 characters |
| `categories` | no | Up to 5 unique entries, each up to 40 characters |
| `tags` | no | Up to 8 unique entries, each up to 40 characters |
| `draft` | no | Defaults to `false` |
| `image` | no | A local public path such as `/images/journal/import.png` |
| `imageAlt` | with `image` | Required when `image` is set, maximum 240 characters |
| `translationKey` | yes | Lowercase slug format; the same key in both languages marks a translation |
| `canonicalUrl` | no | Absolute `https://` URL, only for content originally published elsewhere |
| `relatedArticles` | no | Up to 6 `translationKey` values of published articles in the same language |

Dates may be written without quotes (`2026-08-03`). The loader normalizes YAML
date objects back to the documented string format.

## Drafts

Set `draft: true` to keep a finished file out of the public site:

- it is not listed in the journal, on the homepage or in related articles;
- it is absent from the sitemap;
- its URL returns a real 404;
- it is still checked for valid frontmatter and duplicate slugs/translation
  keys, so broken metadata is caught before publishing.

Remove the flag (or set it to `false`) when the text is ready.

## Translations

A translation is a real file in the other language with the same
`translationKey`:

```text
content/blog/de/datenimport-grundlagen.md    translationKey: datenimport-grundlagen
content/blog/en/data-import-foundations.md   translationKey: datenimport-grundlagen
```

When the pair exists:

- the language switch goes directly to the translated article;
- both pages emit `hreflang` alternates for each other;
- the article shows a translation notice;
- the sitemap links the two URLs as alternates.

When only one language exists, the switch falls back to the other language's
journal index, and no false `hreflang` alternate is emitted. Never copy a
`translationKey` into an article that is not actually a translation.

## Markdown

The renderer supports CommonMark plus GitHub-flavoured Markdown: headings,
lists, tables, blockquotes, task lists, strikethrough and fenced code.

### Headings and table of contents

Use `##` and `###` for sections. IDs are generated automatically and the table
of contents appears once an article has at least four `##`/`###` headings. The
article title (`#`) comes from frontmatter, so do not add an `#` heading to the
body.

### Images

Put files under `public/images/journal/` and reference them with a root path:

```markdown
![Beschreibung des Bildes](/images/journal/import.png)
```

Every Markdown image must have meaningful alt text. A missing or empty alt text
fails the build. Inline images are rendered at their natural ratio with a
maximum width of 100%, so use reasonably sized files (WebP, JPEG or PNG).

The optional `image` frontmatter field is the article's social/lead image and
requires `imageAlt`.

### Code

Fenced code blocks are highlighted by Shiki with the site's ink theme and get a
copy button after hydration:

````markdown
```ts
const answer = 42;
```
````

Supported language identifiers include `ts`, `tsx`, `js`, `jsx`, `json`,
`bash`, `sql`, `php`, `yaml`, `html`, `css`, `md`, `diff`, `xml`, `dockerfile`,
`nginx`, `ini`, `python`, `powershell`, `csharp`, `go`, `rust`, `toml`,
`graphql` and `http`. An unknown identifier falls back to unhighlighted text.

Raw HTML is not rendered. Write Markdown, not embedded markup.

### Links

Internal links must be absolute site paths:

```markdown
[Anderer Artikel](/blog/erste-notizen)
[English version](/en/blog/first-notes)
[Journal](/blog)
```

The build checks every internal link in a published article against real
published destinations. A typo, a draft target or a relative link fails the
build. External `http(s)` links open in a new tab automatically.

Pagination links use `/blog/seite/2` and `/en/blog/page/2` and must stay within
the actual page count. With eight posts per page, a second page only exists once
the ninth article is published.

## Related articles

`relatedArticles` takes `translationKey` values, not file names or URLs:

```yaml
relatedArticles:
  - datenimport-grundlagen
  - erste-notizen
```

Each entry must belong to a published article in the same language. Wrong
language, drafts and unknown keys all fail the build.

## Publishing checklist

1. Write the file in the correct language folder and set `draft: false`.
2. Add a descriptive `description`; it is the listing and search snippet.
3. Add `image` and `imageAlt` if the article should have a lead image.
4. Check every internal link and every `relatedArticles` key.
5. Add or update the translation with the same `translationKey` if one exists.
6. Run the checks:

   ```bash
   pnpm lint
   pnpm typecheck
   pnpm build
   ```

7. Review the built page, then commit and push. The deployment rebuilds the
   site, sitemap and feeds from the files in `content/`.

## Validation failures

The build stops with a file and field reference when, for example:

- a required field is missing or too long;
- the slug does not match the file name;
- the language does not match the folder;
- a date is not a real `YYYY-MM-DD` date, or `updatedAt` precedes `date`;
- two files in one language share a slug or `translationKey`;
- a related article is missing, drafted or in the other language;
- an internal link points to a non-existent or unpublished page;
- a Markdown image has no alt text;
- the article body is empty.

A failing build is intentional: it is better than publishing a page with broken
metadata or a dead link.
