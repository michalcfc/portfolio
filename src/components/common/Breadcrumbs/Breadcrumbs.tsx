import React from 'react';

import { BreadcrumbsD } from './Breadcrumbs.d';
import { BreadcrumbsWrapper } from './Breadcrumbs.styles';

// components
import { Box } from "~components/common/Box";
import { Text } from "~components/common/Text";

const Breadcrumbs: React.FC<BreadcrumbsD> = () => (
  <BreadcrumbsWrapper>
      <Box my={2}>
        <Text muted text={'Home > Books > First Snow'} />
      </Box>
  </BreadcrumbsWrapper>
);

export default Breadcrumbs;
