import React from 'react';
import { Project } from '~types/Projects';
import { ProjectsListD } from './ProjectsList.d';

import {
  getProjectsByCategory,
} from '~components/Projects/helpers';

// components
import { Grid } from '~components/common/Grid';
import { ProjectPreview } from '../ProjectPreview';
import {
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
} from '~components/common/Tabs';

const ProjectsList: React.FC<ProjectsListD> = ({
  projects,
  categories,
}) => {
  const renderProjectsList = (projects: Project[]) => (
    <Grid
      gridGap={4}
      gridTemplateColumns={['1fr', '1fr', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}
    >
      {projects.map((project) => (
        <ProjectPreview
          img={project.img}
          name={project.name}
        />
      ))}
    </Grid>
  );

  const renderAllProjects = renderProjectsList(projects);

  const renderProjectsByCategory = (project: Project) => renderProjectsList(
    getProjectsByCategory(categories, project),
  );

  return (
    <Tabs>
      <TabList>
        <Tab title="All" />
        {categories.map((category) => (
          <Tab key={category} title={category} />
        ))}
      </TabList>

      <TabPanels>
        <TabPanel>
          {renderAllProjects}
        </TabPanel>
        {projects.map((project) => (
          <TabPanel>
            {renderProjectsByCategory(project)}
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};

export default ProjectsList;
