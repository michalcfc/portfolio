import React from 'react';

import { ProjectActionsD } from './ProjectActions.d';

// components
import { Box } from '~components/common/Box';
import { Link } from '~components/common/Link';

const ProjectActions: React.FC<ProjectActionsD> = () => (
  <Box mt={3}>
    <Link
      mb={2}
      width="100%"
      type="button"
      variant="success"
      name="Live preview"
      href="/"
    />
    <Link
      width="100%"
      type="button"
      variant="danger"
      name="Source code"
      href="/"
    />
  </Box>
);

export default ProjectActions;
