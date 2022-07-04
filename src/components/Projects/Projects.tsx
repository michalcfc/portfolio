import React from 'react';

import { ProjectsD } from './Projects.d';

// helpers
import { getAllProjectsCategories } from '~components/Projects/helpers';

// components
import { ProjectsList } from './components/ProjectsList';

const Projects: React.FC<ProjectsD> = ({
  projects,
}) => (
  <ProjectsList
    projects={projects}
    categories={getAllProjectsCategories(projects)}
  />
);

export default Projects;
