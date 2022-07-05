import React from 'react';
import { SectionD } from './Section.d';

import { SectionWrapper } from './Section.styles';

// utils
import { SIZES } from '~utils/styles/sizes';
import { FONT_SIZES } from '~utils/styles/fontSizes';
import { SPACING } from '~utils/styles/spacing';

// components
import { Box } from '~components/common/Box';
import { Text } from '~components/common/Text';
import { Heading } from '~components/common/Heading';
import { FlexBox } from '~components/common/FlexBox';
import { Container } from '~components/common/Container';

const Section: React.FC<SectionD> = ({
  title,
  subtitle,
  children,
  ...rest
}) => (
  <Container
    py={SPACING['3xl']}
  >
    <SectionWrapper {...rest}>
      <FlexBox
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        {title
                    && (
                    <Box
                      mb={SPACING['2xl']}
                      maxWidth={SIZES.md}
                      textAlign="center"
                      flexDirection="column"
                    >
                      <Heading type="h2" title={title ?? ''} />
                      <Text isMuted fontSize={FONT_SIZES.md} text={subtitle ?? ''} />
                    </Box>
                    )}
      </FlexBox>
      {children}
    </SectionWrapper>
  </Container>
);

export default Section;
