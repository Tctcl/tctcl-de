export type Project = {
  name: string;
  description: string;
  href?: string;
  year?: string;
  tags?: string[];
};

/**
 * Only add projects that are real and public. An empty list is intentional:
 * the homepage renders an honest workbench empty state instead of invented
 * case studies.
 */
export const projects: Project[] = [];
