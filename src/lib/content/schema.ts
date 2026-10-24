import { z } from "zod";

const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

const isoDate = z
  .string()
  .regex(/^\d{4}-\d{2}-\d{2}$/, "Use the YYYY-MM-DD format.")
  .refine((value) => {
    const date = new Date(`${value}T00:00:00Z`);
    return (
      !Number.isNaN(date.getTime()) &&
      date.toISOString().slice(0, 10) === value
    );
  }, "Use a real calendar date.");

const uniqueStringList = (max: number, maxLength = 48) =>
  z
    .array(z.string().trim().min(1).max(maxLength))
    .max(max)
    .refine(
      (values) => new Set(values).size === values.length,
      "Values must be unique.",
    );

const canonicalUrl = z.string().refine((value) => {
  try {
    return new URL(value).protocol === "https:";
  } catch {
    return false;
  }
}, "Use an absolute https:// URL.");

export const postFrontmatterSchema = z
  .object({
    title: z.string().trim().min(1).max(120),
    description: z.string().trim().min(1).max(320),
    slug: z
      .string()
      .regex(
        slugPattern,
        "Use lowercase letters, numbers and single hyphens only.",
      ),
    date: isoDate,
    updatedAt: isoDate.optional(),
    language: z.enum(["de", "en"]),
    author: z.string().trim().min(1).max(80).default("TCTCL"),
    categories: uniqueStringList(5, 40).default([]),
    tags: uniqueStringList(8, 40).default([]),
    draft: z.boolean().default(false),
    image: z
      .string()
      .regex(
        /^\/(?!\/)[^\s]+$/,
        "Use a local public path beginning with / (for example /images/post.jpg).",
      )
      .optional(),
    imageAlt: z.string().trim().min(1).max(240).optional(),
    translationKey: z
      .string()
      .regex(
        slugPattern,
        "Use lowercase letters, numbers and single hyphens only.",
      ),
    canonicalUrl: canonicalUrl.optional(),
    relatedArticles: uniqueStringList(6, 80).default([]),
  })
  .refine((data) => !data.image || Boolean(data.imageAlt), {
    message: "imageAlt is required when image is set.",
    path: ["imageAlt"],
  })
  .refine((data) => !data.imageAlt || Boolean(data.image), {
    message: "imageAlt only makes sense together with image.",
    path: ["imageAlt"],
  })
  .refine(
    (data) => !data.updatedAt || data.updatedAt >= data.date,
    {
      error: "updatedAt must not be earlier than date.",
      path: ["updatedAt"],
    },
  )
  .refine(
    (data) => !data.relatedArticles.includes(data.translationKey),
    {
      error: "An article cannot relate to itself.",
      path: ["relatedArticles"],
    },
  );

export type PostFrontmatter = z.infer<typeof postFrontmatterSchema>;

export type Post = PostFrontmatter & {
  body: string;
  filePath: string;
  readingTime: number;
  wordCount: number;
};

export type Heading = {
  id: string;
  text: string;
  depth: 2 | 3;
};

export type RenderedPost = {
  html: string;
  headings: Heading[];
};
