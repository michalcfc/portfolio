import React from 'react';
import { HeroActionButtonsD } from './HeroActionButtons.d';

// utils
import { SPACING } from '~utils/styles/spacing';

// components
import { Link } from '~components/common/Link';
import { FlexBox } from '~components/common/FlexBox';

const HeroActionButtons: React.FC<HeroActionButtonsD> = ({
<<<<<<< HEAD
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
=======
    primary_cta,
    secondary_cta
 }) => (
    <FlexBox
        mt={SPACING.lg}
        alignItems={'center'}
    >
        <Link
            mr={3}
            size={"lg"}
            type={'button'}
            variant={'success'}
            href={primary_cta.uri}
            name={primary_cta.name}
        />
        {secondary_cta && <Link
            size={'lg'}
            type={'button'}
            variant={'outline'}
            href={secondary_cta?.uri}
            name={secondary_cta?.name}
        />}
    </FlexBox>
)
>>>>>>> 4d30df1... init project

export default HeroActionButtons;
