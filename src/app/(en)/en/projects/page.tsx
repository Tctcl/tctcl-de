import { ProjectsPage } from "@/components/projects-page";
import { roomMetadata } from "@/lib/seo";

export const metadata = roomMetadata("en", "projects");

export default function EnglishProjectsPage() {
  return <ProjectsPage locale="en" />;
}
