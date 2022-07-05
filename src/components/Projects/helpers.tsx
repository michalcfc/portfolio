import { Project, ProjectCategory } from '~types/Projects';

export const getAllProjectsCategories = (projects: Project[]) => {
  const allProjectsCategories = [...new Set(projects
    .map((obj) => obj.categories))]
    .flat();
  const uniqueProjectsCategories = [...new Map(allProjectsCategories
    .map((item) => [item, item]))
    .values()];

  return uniqueProjectsCategories;
};

export const getUniqueProjects = (projects: Project[]) => {
  const uniqueProjects = [...new Map(projects
    .map((item) => [item, item]))
    .values()];

  return uniqueProjects;
};

export const setProjectsList = (categories: ProjectCategory[], project: ProjectCategory | any) => {
  const projects: Project[] = [];

  for (let i = 0; i < categories.length; i += 1) {
    const projectCategories = project.categories
      .map((categoryName: ProjectCategory) => categoryName
        .toLowerCase());
    const categoryName = categories[i]
      .toLowerCase();

    if (projectCategories.includes(categoryName)) {
      projects.push(project);
    }
  }

  return getUniqueProjects(projects);
};

export const getProjectsByCategory = (categories: ProjectCategory[], project: Project) => {
  const projects = setProjectsList(categories, project);
  return projects;
};
