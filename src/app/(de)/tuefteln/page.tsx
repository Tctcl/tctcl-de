import { TinkeringPage } from "@/components/tinkering-page";
import { roomMetadata } from "@/lib/seo";

export const metadata = roomMetadata("de", "tinkering");

export default function GermanTinkeringPage() {
  return <TinkeringPage locale="de" />;
}
