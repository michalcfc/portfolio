import React from 'react';
import { motion } from "framer-motion"

import { FollowersD } from './Followers.d';

// utils
import { SIZES } from "~utils/styles/sizes";
import { COLORS } from "~utils/styles/colors";
import { SPACING } from "~utils/styles/spacing";
import { FONT_SIZES } from "~utils/styles/fontSizes";
import { BOX_SHADOWS } from "~utils/styles/boxShadows";
import { BORDER_RADIUS } from "~utils/styles/borderRadius";

// components
import { Box } from "~components/common/Box";
import { Text } from "~components/common/Text"

const Followers: React.FC<FollowersD> = () => (
    <motion.div
        animate={{
            y: [0, 40, 0]
        }}
        transition={{
            ease: 'easeInOut',
            duration: 4,
            yoyo: Infinity
        }}
    >
    <Box
        right={-40}
        bottom={50}
        p={SPACING.lg}
        maxWidth={SIZES.xs}
        position={'absolute'}
        background={COLORS.white}
        boxShadow={BOX_SHADOWS.lg}
        borderRadius={BORDER_RADIUS.md}
    >
      <Text
          fontSize={FONT_SIZES.md}
          text={'More than 21,500+ students enrolled around the world'}
      />
    </Box>
    </motion.div>
);

export default Followers;
