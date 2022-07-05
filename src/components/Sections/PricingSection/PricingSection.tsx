import React from 'react';

import { PricingSectionD } from './PricingSection.d';

// components
import { Section } from '../Section';

const PricingSection: React.FC<PricingSectionD> = () => (
  <Section
    title="Tools I Use"
    subtitle="Morbi risus elit, fringilla in cursus a, molestie non dui. Nunc accumsan gravida risus, ac semper libero mollis ut."
  />
);

export default PricingSection;
