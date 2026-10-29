import { StyleGallery } from "@/components/style-gallery";
import { styleGalleryMetadata } from "@/lib/seo";

export const metadata = styleGalleryMetadata("en");

export default function EnglishStylesPage() {
  return <StyleGallery locale="en" />;
}
