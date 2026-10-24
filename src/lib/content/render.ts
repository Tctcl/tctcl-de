import type { Element, Parent, Root } from "hast";
import { toString } from "hast-util-to-string";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeShiki from "@shikijs/rehype";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified, type Transformer } from "unified";
import { visit } from "unist-util-visit";

import { inkCodeTheme } from "./ink-code-theme";
import type { Heading, Post, RenderedPost } from "./schema";

function collectHeadings(headings: Heading[]): Transformer<Root, Root> {
  return (tree) => {
    visit(tree, "element", (node: Element) => {
      if (node.tagName !== "h2" && node.tagName !== "h3") {
        return;
      }

      const id = node.properties?.id;

      if (typeof id !== "string" || id.length === 0) {
        return;
      }

      const text = toString(node).trim();

      if (!text) {
        return;
      }

      headings.push({
        id,
        text,
        depth: node.tagName === "h2" ? 2 : 3,
      });
    });
  };
}

function rehypeExternalLinks(): Transformer<Root, Root> {
  return (tree) => {
    visit(tree, "element", (node: Element) => {
      if (node.tagName !== "a") {
        return;
      }

      const href = node.properties?.href;

      if (typeof href === "string" && /^https?:\/\//.test(href)) {
        node.properties.target = "_blank";
        node.properties.rel = ["noopener", "noreferrer"];
      }
    });
  };
}

function rehypeArticleImages(filePath: string): Transformer<Root, Root> {
  return (tree) => {
    visit(tree, "element", (node: Element) => {
      if (node.tagName !== "img") {
        return;
      }

      const alt = node.properties?.alt;

      if (typeof alt !== "string" || alt.trim().length === 0) {
        throw new Error(
          `Missing image alt text in ${filePath}. Markdown images must use a descriptive alt text: ![description](/path/to/image.jpg).`,
        );
      }

      node.properties.loading = "lazy";
      node.properties.decoding = "async";
      node.properties.className = ["article-image"];
    });
  };
}

function rehypeCodeFrames(): Transformer<Root, Root> {
  return (tree) => {
    visit(tree, "element", (node: Element, index, parent: Parent | undefined) => {
      if (node.tagName !== "pre" || !parent || typeof index !== "number") {
        return;
      }

      const code = node.children.find(
        (child): child is Element =>
          child.type === "element" && child.tagName === "code",
      );

      const codeClassName = code?.properties?.className;
      const languageFromClass = Array.isArray(codeClassName)
        ? codeClassName
            .find(
              (value) =>
                typeof value === "string" && value.startsWith("language-"),
            )
            ?.slice("language-".length)
        : undefined;

      const languageFromPre = node.properties?.["data-language"];
      const language =
        typeof languageFromPre === "string" && languageFromPre.length > 0
          ? languageFromPre
          : languageFromClass || "code";

      parent.children[index] = {
        type: "element",
        tagName: "div",
        properties: {
          className: ["code-frame"],
          "data-language": language,
        },
        children: [node],
      };
    });
  };
}

export async function renderPost(post: Post): Promise<RenderedPost> {
  const headings: Heading[] = [];

  const processor = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(collectHeadings, headings)
    .use(rehypeAutolinkHeadings, {
      behavior: "wrap",
      properties: {
        className: ["heading-anchor"],
      },
    })
    .use(rehypeShiki, {
      theme: inkCodeTheme,
      fallbackLanguage: "text",
      langs: [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json",
        "bash",
        "sql",
        "php",
        "yaml",
        "html",
        "css",
        "md",
        "diff",
        "xml",
        "dockerfile",
        "nginx",
        "ini",
        "python",
        "powershell",
        "csharp",
        "go",
        "rust",
        "toml",
        "graphql",
        "http",
      ],
    })
    .use(rehypeExternalLinks)
    .use(rehypeArticleImages, post.filePath)
    .use(rehypeCodeFrames)
    .use(rehypeStringify);

  const file = await processor.process(post.body);

  return {
    html: String(file),
    headings,
  };
}
