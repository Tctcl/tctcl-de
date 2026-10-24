import type { Metadata } from "next";

import { NotFoundPage } from "@/components/not-found-page";
import { getCopy } from "@/content/site-copy";

const copy = getCopy("de");

export const metadata: Metadata = {
  title: copy.notFound.metaTitle,
  description: copy.notFound.metaDescription,
  robots: {
    index: false,
    follow: false,
  },
};

export default function GermanNotFound() {
  return <NotFoundPage locale="de" />;
}
