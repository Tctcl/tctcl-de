import type { ReactNode } from "react";

import "../globals.css";

import { htmlLang } from "@/lib/locale";
import { rootMetadata, rootViewport } from "@/lib/root-metadata";

export const metadata = rootMetadata("de");
export const viewport = rootViewport;

export default function GermanRootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang={htmlLang.de}>
      <body id="top" className="flex min-h-screen flex-col">
        {children}
      </body>
    </html>
  );
}
