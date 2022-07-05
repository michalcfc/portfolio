import React from 'react';
import { HeroActionButtonsD } from './HeroActionButtons.d';

// utils
import { SPACING } from '~utils/styles/spacing';

// components
import { Link } from '~components/common/Link';
import { FlexBox } from '~components/common/FlexBox';

const HeroActionButtons: React.FC<HeroActionButtonsD> = ({
  primary_cta,
  secondary_cta,
}) => (
  <FlexBox
    mt={SPACING.lg}
    alignItems="center"
  >
    <Link
      mr={3}
      size="lg"
      type="button"
      variant="success"
      href={primary_cta.uri}
      name={primary_cta.name}
    />
    {secondary_cta && (
    <Link
      size="lg"
      type="button"
      variant="outline"
      href={secondary_cta?.uri}
      name={secondary_cta?.name}
    />
    )}
  </FlexBox>
);

export default HeroActionButtons;
