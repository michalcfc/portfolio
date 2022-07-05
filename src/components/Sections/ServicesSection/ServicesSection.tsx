import React from 'react';

import { ServicesSectionD } from './ServicesSection.d';

// utils
import { SPACING } from '~utils/styles/spacing';

// components
import { Section } from '../Section';
import { Box } from '~components/common/Box';
import { Text } from '~components/common/Text';
import { Grid } from '~components/common/Grid';
import { Heading } from '~components/common/Heading';

const ServicesSection: React.FC<ServicesSectionD> = () => {
  const services = [
    { id: 1, name: 'Service One', desc: 'Vivamus in quam ut felis consectetur imperdiet et sed metus. Nullam tristique scelerisque metus id dignissim.' },
    { id: 2, name: 'Service Two', desc: 'Vivamus in quam ut felis consectetur imperdiet et sed metus. Nullam tristique scelerisque metus id dignissim.' },
    { id: 3, name: 'Service Three', desc: 'Vivamus in quam ut felis consectetur imperdiet et sed metus. Nullam tristique scelerisque metus id dignissim.' },
    { id: 4, name: 'Service Four', desc: 'Vivamus in quam ut felis consectetur imperdiet et sed metus. Nullam tristique scelerisque metus id dignissim.' },
    { id: 5, name: 'Service Five', desc: 'Vivamus in quam ut felis consectetur imperdiet et sed metus. Nullam tristique scelerisque metus id dignissim.' },
    { id: 6, name: 'Service Six', desc: 'Vivamus in quam ut felis consectetur imperdiet et sed metus. Nullam tristique scelerisque metus id dignissim.' },
  ];

  return (
    <Section
      title="My Services"
      subtitle="Morbi risus elit, fringilla in cursus a, molestie non dui. Nunc accumsan gravida risus, ac semper libero mollis ut."
    >
      <Grid
        gridGap={SPACING.xl}
        gridTemplateColumns={[
          '1fr',
          'repeat(2, 1fr)',
          'repeat(2, 1fr)',
          'repeat(3, 1fr)',
        ]}
      >
        {services.map((service) => (
          <Box key={service.id}>
            <Heading type="h3" title={service.name} />
            <Text text={service.desc} />
          </Box>
        ))}
      </Grid>

    </Section>
  );
};

export default ServicesSection;
