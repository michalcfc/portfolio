import React from 'react';

import { faGoogle, faWordpressSimple } from '@fortawesome/free-brands-svg-icons';
import {
  faDesktop, faMobileAlt, faPalette, faSpaceShuttle,
} from '@fortawesome/free-solid-svg-icons';
import { FeaturesSectionD } from './FeaturesSection.d';

// utils
import { COLORS } from '~utils/styles/colors';
import { SPACING } from '~utils/styles/spacing';
import { BORDER_RADIUS } from '~utils/styles/borderRadius';

// components
import { Section } from '../Section';
import { Text } from '~components/common/Text';
import { Icon } from '~components/common/Icon';
import { Grid } from '~components/common/Grid';
import { FlexBox } from '~components/common/FlexBox';
import { Heading } from '~components/common/Heading';

const FeaturesSection: React.FC<FeaturesSectionD> = () => {
  const features = [
    {
      id: 1,
      icon: faGoogle,
      name: 'SEO Friendly',
      desc: 'Apps are built based on highly compatible design for all kinds of Internet browsers.',
    },
    {
      id: 2,
      icon: faPalette,
      name: 'Moder design',
      desc: 'Apps are built based on highly compatible design for all kinds of Internet browsers.',
    },
    {
      id: 3,
      icon: faMobileAlt,
      name: 'Mobile First Design',
      desc: 'Apps are built based on highly compatible design for all kinds of Internet browsers.',
    },
    {
      id: 4,
      icon: faSpaceShuttle,
      name: 'Fast loading speed',
      desc: 'Apps are built based on highly compatible design for all kinds of Internet browsers.',
    }, {
      id: 5,
      icon: faDesktop,
      name: 'Fully Responsive',
      desc: 'Apps are built based on highly compatible design for all kinds of Internet browsers.',
    },
    {
      id: 6,
      icon: faWordpressSimple,
      name: 'Easy cms',
      desc: 'Apps are built based on highly compatible design for all kinds of Internet browsers.',
    },
  ];

  return (
    <Section
      title="Ultraland feature overview"
      subtitle="27 beautiful, hand-crafted designs to get you started. Choose the one you like best and start customize it to your website."
    >
      <Grid
        gridGap={SPACING.lg}
        gridTemplateColumns={['1fr', 'repeat(2, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}
      >
        {features.map((feature) => (
          <FlexBox
            key={feature.id}
            p={SPACING.lg}
            borderRadius={BORDER_RADIUS.base}
            border={`1px solid ${COLORS.gray}`}
          >
            <div>
              <FlexBox
                mr={3}
                width="3rem"
                height="3rem"
                alignItems="center"
                justifyContent="center"
                background={COLORS.lightGray}
                borderRadius={BORDER_RADIUS.full}
              >
                <Icon lineHeight={1} name={faDesktop} size="2x" />
              </FlexBox>
            </div>
            <div>
              <Heading
                type="h4"
                mb={SPACING.xs}
                title={feature.name}
              />
              <Text
                muted
                text="Aenean quam ornare. Curabitur blandit."
              />
            </div>
          </FlexBox>
        ))}
      </Grid>
    </Section>
  );
};

export default FeaturesSection;
