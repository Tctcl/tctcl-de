export type ProjectStatus =
  | "building"
  | "experiment"
  | "paused"
  | "abandoned";

export type Project = {
  name: string;
  description: string;
  href?: string;
  year?: string;
  tags?: string[];
  status?: ProjectStatus;
  notes?: string[];
};

/**
 * Only add projects that are real and public. An empty list is intentional:
 * the workbench renders an honest empty state instead of invented case studies.
 */
export const projects: Project[] = [];
