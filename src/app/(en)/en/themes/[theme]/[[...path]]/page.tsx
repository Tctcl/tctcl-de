import type { Metadata } from "next";

import {
  ThemeInternalPage,
  themeInternalMetadata,
  themeStaticParams,
  type ThemeRouteParams,
} from "@/themes/internal-page";

export const dynamicParams = false;

export function generateStaticParams(): ThemeRouteParams[] {
  return themeStaticParams("en");
}

export async function generateMetadata({
  params,
}: {
  params: Promise<ThemeRouteParams>;
}): Promise<Metadata> {
  return themeInternalMetadata({ locale: "en", params });
}

export default async function EnglishThemePage({
  params,
}: {
  params: Promise<ThemeRouteParams>;
}) {
  return <ThemeInternalPage locale="en" params={params} />;
}
