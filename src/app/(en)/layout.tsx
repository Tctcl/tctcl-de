import type { ReactNode } from "react";

import "../globals.css";

import { htmlLang } from "@/lib/locale";
import { rootMetadata, rootViewport } from "@/lib/root-metadata";

export const metadata = rootMetadata("en");
export const viewport = rootViewport;

export default function EnglishRootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang={htmlLang.en}>
      <body id="top" className="flex min-h-screen flex-col">
        {children}
      </body>
    </html>
  );
}
