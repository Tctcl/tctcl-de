import { WorkPage } from "@/components/work-page";
import { roomMetadata } from "@/lib/seo";

export const metadata = roomMetadata("en", "work");

export default function EnglishWorkPage() {
  return <WorkPage locale="en" />;
}
