import React from 'react';

import { ProjectDescriptionD } from './ProjectDescription.d';

const ProjectDescription: React.FC<ProjectDescriptionD> = ({
  desc,
}) => (
  <>
    <div dangerouslySetInnerHTML={{
      __html: desc,
    }}
    />
  </>
);

export default ProjectDescription;
