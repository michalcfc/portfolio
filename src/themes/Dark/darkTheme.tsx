import { DefaultTheme } from 'styled-components';

import { COLORS } from '~utils/styles/colors';
import { ALERTS } from '~utils/styles/alerts';
import { BADGES } from '~utils/styles/badges';
import { SPACING } from '~utils/styles/spacing';
import { BUTTONS } from '~utils/styles/buttons';
import { FONT_SIZES } from '~utils/styles/fontSizes';
import { ANIMATIONS } from '~utils/styles/animations';
import { BOX_SHADOWS } from '~utils/styles/boxShadows';
import { FONT_WEIGHTS } from '~utils/styles/fontWeights';
import { AVATAR_SIZES } from '~utils/styles/avatarSizes';
import { BORDER_RADIUS } from '~utils/styles/borderRadius';

export const darkTheme: DefaultTheme = {
  textColor: COLORS.white,
  background: COLORS.black,
  borderRadius: {
    ...BORDER_RADIUS,
  },
  colors: {
    ...COLORS,
  },
  boxShadows: {
    ...BOX_SHADOWS,
  },
  spacing: {
    ...SPACING,
  },
  fontWeights: {
    ...FONT_WEIGHTS,
  },
  fontSizes: {
    ...FONT_SIZES,
  },
  buttons: {
    ...BUTTONS,
  },
  alerts: {
    ...ALERTS,
  },
  badges: {
    ...BADGES,
  },
  avatarSize: {
    ...AVATAR_SIZES,
  },
  animations: {
    ...ANIMATIONS,
  },
};
