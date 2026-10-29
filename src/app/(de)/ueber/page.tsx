import { AboutPage } from "@/components/about-page";
import { roomMetadata } from "@/lib/seo";

export const metadata = roomMetadata("de", "about");

export default function GermanAboutPage() {
  return <AboutPage locale="de" />;
}
