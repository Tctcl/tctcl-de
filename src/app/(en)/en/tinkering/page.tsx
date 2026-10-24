import { TinkeringPage } from "@/components/tinkering-page";
import { roomMetadata } from "@/lib/seo";

export const metadata = roomMetadata("en", "tinkering");

export default function EnglishTinkeringPage() {
  return <TinkeringPage locale="en" />;
}
