import React from 'react';
import { HeroRightAsideD } from './HeroRightAside.d';

// utils
import { BOX_SHADOWS } from '~utils/styles/boxShadows';

// components
import { Box } from '~components/common/Box';
import { Img } from '~components/common/Img';
import { Followers } from '~components/common/Shapes';

const HeroRightAside: React.FC<HeroRightAsideD> = ({
  img,
}) => (
  <Box
    position="relative"
    gridColumn="8/14"
    display={['none', 'none', 'none', 'block']}
  >
    <Img
      src={img}
      width={480}
      height={400}
      alt="hero img"
      boxShadow={BOX_SHADOWS.lg}
    />
    <Img
      width={30}
      height={43}
      position="absolute"
      src="/img/icons/element3.png"
      alt="shape element"
    />
    <Followers />
  </Box>
);

export default HeroRightAside;
