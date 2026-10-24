import { HomePage } from "@/components/home-page";
import { homeMetadata } from "@/lib/seo";

export const metadata = homeMetadata("en");

export default function EnglishHomePage() {
  return <HomePage locale="en" />;
}
