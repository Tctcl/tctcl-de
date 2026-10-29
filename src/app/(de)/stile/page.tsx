import { StyleGallery } from "@/components/style-gallery";
import { styleGalleryMetadata } from "@/lib/seo";

export const metadata = styleGalleryMetadata("de");

export default function GermanStylesPage() {
  return <StyleGallery locale="de" />;
}
