import fs from "node:fs";
import path from "node:path";

const PUBLIC_ROOT = path.resolve(process.cwd(), "public");

/**
 * Articles may only reference images that ship with the site. This keeps
 * third-party requests out of the journal and turns a typo in a path into a
 * build error instead of a broken image.
 */
export function assertPublicImage(src: string, source: string): void {
  if (!src.startsWith("/") || src.startsWith("//")) {
    throw new Error(
      `Invalid image path "${src}" in ${source}: use a local public path beginning with "/".`,
    );
  }

  const cleanPath = src.split("#")[0].split("?")[0];
  const target = path.resolve(PUBLIC_ROOT, `.${cleanPath}`);

  if (
    target !== PUBLIC_ROOT &&
    !target.startsWith(`${PUBLIC_ROOT}${path.sep}`)
  ) {
    throw new Error(
      `Invalid image path "${src}" in ${source}: it points outside public/.`,
    );
  }

  if (!fs.existsSync(target) || !fs.statSync(target).isFile()) {
    throw new Error(
      `Missing image "${src}" in ${source}: expected a file at public${cleanPath}.`,
    );
  }
}
