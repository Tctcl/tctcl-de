import type { Metadata } from "next";

import { NotFoundPage } from "@/components/not-found-page";
import { getCopy } from "@/content/site-copy";

const copy = getCopy("en");

export const metadata: Metadata = {
  title: copy.notFound.metaTitle,
  description: copy.notFound.metaDescription,
  robots: {
    index: false,
    follow: false,
  },
};

export default function EnglishNotFound() {
  return <NotFoundPage locale="en" />;
}
