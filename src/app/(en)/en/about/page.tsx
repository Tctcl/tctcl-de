import { AboutPage } from "@/components/about-page";
import { roomMetadata } from "@/lib/seo";

export const metadata = roomMetadata("en", "about");

export default function EnglishAboutPage() {
  return <AboutPage locale="en" />;
}
