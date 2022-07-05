import React from 'react';

import { HeroD } from './Hero.d';
import {
  HeroContent,
  HeroWrapper,
} from '~components/Hero/Hero.styles';

// components
import { Container } from '~components/common/Container';
import { HeroLeftAside } from './components/HeroLeftAside';
import { HeroRightAside } from './components/HeroRightAside';

const Hero: React.FC<HeroD> = ({
  img,
  strap,
  title,
  subtitle,
  primary_cta,
  secondary_cta,
}) => (
  <HeroWrapper>
    <Container>
      <HeroContent>
        <HeroLeftAside
          strap={strap}
          title={title}
          subtitle={subtitle}
          primary_cta={primary_cta}
          secondary_cta={secondary_cta ?? undefined}
        />
        {img
                         && (
                         <HeroRightAside
                           img={img}
                         />
                         )}
      </HeroContent>
    </Container>
  </HeroWrapper>
);

export default Hero;
