import React from 'react';

import { ProjectsSectionD } from './ProjectsSection.d';

// components
import { Section } from '../Section';

const ProjectsSection: React.FC<ProjectsSectionD> = () => (
  <Section
    title="Projects"
    subtitle="27 beautiful, hand-crafted designs to get you started. Choose the one you like best and start customize it to your website."
  />
);

export default ProjectsSection;
