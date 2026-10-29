import { ProjectsPage } from "@/components/projects-page";
import { roomMetadata } from "@/lib/seo";

export const metadata = roomMetadata("de", "projects");

export default function GermanProjectsPage() {
  return <ProjectsPage locale="de" />;
}
