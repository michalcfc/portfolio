import React from 'react';

import { ToolSectionD } from './ToolSection.d';

// components
import { Section } from '../Section';

const ToolsSection: React.FC<ToolSectionD> = () => (
  <Section
    title="Tools We Use"
    subtitle="Morbi risus elit, fringilla in cursus a, molestie non dui. Nunc accumsan gravida risus, ac semper libero mollis ut."
  />
);

export default ToolsSection;
