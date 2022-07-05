import React from 'react';
import { JumbotronD } from './Jumbotron.d';

// utils
import { COLORS } from '~utils/styles/colors';
import { SPACING } from '~utils/styles/spacing';

// components
import { Box } from '~components/common/Box';
import { Text } from '~components/common/Text';
import { Heading } from '~components/common/Heading';

const Jumbotron: React.FC<JumbotronD> = ({
  title,
  subtitle,
}) => (
  <Box
    textAlign="center"
    background={COLORS.gray300}
    py={SPACING['2xl']}
  >
    <Heading
      type="h2"
      title={title}
      color={COLORS.white}
    />
    {subtitle
            && (
            <Text
              muted
              text={subtitle}
            />
            )}
  </Box>
);

export default Jumbotron;
