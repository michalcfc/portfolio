import React from 'react';

import { HeroLeftAsideD } from './HeroLeftAside.d';

// utils
import { SPACING } from '~utils/styles/spacing';
import { FONT_SIZES } from '~utils/styles/fontSizes';

// components
import { Img } from '~components/common/Img';
import { Box } from '~components/common/Box';
import { Text } from '~components/common/Text';
import { Heading } from '~components/common/Heading';
import { FlexBox } from '~components/common/FlexBox';
import { HeroActionButtons } from '../HeroActionButtons';

const HeroLeftAside: React.FC<HeroLeftAsideD> = ({
  strap,
  title,
  subtitle,
  primary_cta,
  secondary_cta,
}) => (
  <>
    <Box position="relative" gridColumn={['span 12', 'span 12', 'span 12', 'span 6']}>
      <FlexBox alignItems="center">
        <Img
          width={32}
          height={32}
          title="Hello"
          alt="wave hand"
          src="/img/icons/wave.png"
        />
        {strap && (
          <Text
            ml={SPACING.md}
            text={strap}
            fontSize={FONT_SIZES.md}
          />
        )}
      </FlexBox>
      <Heading
        type="h1"
        title={title}
        mb={SPACING.md}
      />
      <Text
        text={subtitle}
        fontSize={FONT_SIZES.lg}
      />
      <HeroActionButtons
        primary_cta={primary_cta}
      />
      <Img
        width={45}
        height={34}
        left={-140}
        top={0}
        position="absolute"
        src="/img/icons/element1.png"
        alt="shape element"
      />
      <Img
        width={45}
        height={34}
        left={-180}
        bottom={-100}
        position="absolute"
        src="/img/icons/element2.png"
        alt="shape element"
      />
    </Box>
  </>
);

export default HeroLeftAside;
