import { WorkPage } from "@/components/work-page";
import { roomMetadata } from "@/lib/seo";

export const metadata = roomMetadata("de", "work");

export default function GermanWorkPage() {
  return <WorkPage locale="de" />;
}
