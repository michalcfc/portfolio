import { FONT_WEIGHTS } from '~utils/styles/fontWeights';
import { HeadingType } from '~utils/styles/types';
import { FONT_SIZES } from '~utils/styles/fontSizes';

interface HeadingStyles {
  fontSize?: string;
  fontWeight?: number;
  letterSpacing?: string | number;
  lineHeight?: string | number;
}

export const HEADINGS_STYLES_DESKTOP: Record<HeadingType, HeadingStyles> = {
  h1: {
    fontSize: FONT_SIZES.h1,
    fontWeight: FONT_WEIGHTS.bold,
  },
  h2: {
    fontSize: FONT_SIZES.h2,
    fontWeight: FONT_WEIGHTS.bold,
  },
  h3: {
    fontSize: FONT_SIZES.h3,
    fontWeight: FONT_WEIGHTS.bold,
  },
  h4: {
    fontSize: FONT_SIZES.h4,
    fontWeight: FONT_WEIGHTS.bold,
  },
  h5: {
    fontSize: FONT_SIZES.h5,
    fontWeight: FONT_WEIGHTS.bold,
    letterSpacing: '0.05rem',
  },
  h6: {
    fontSize: FONT_SIZES.h6,
    fontWeight: FONT_WEIGHTS.bold,
    letterSpacing: '0.05rem',
  },
};

export const HEADINGS_STYLES_MOBILE: Record<HeadingType, HeadingStyles> = {
  h1: {
    ...HEADINGS_STYLES_DESKTOP.h1,
    fontSize: '3.157rem',
  },
  h2: {
    ...HEADINGS_STYLES_DESKTOP.h2,
    fontSize: '2.369rem',
  },
  h3: {
    ...HEADINGS_STYLES_DESKTOP.h3,
    fontSize: '1.777rem',
  },
  h4: {
    ...HEADINGS_STYLES_DESKTOP.h4,
    fontSize: '1.333rem',
  },
  h5: {
    ...HEADINGS_STYLES_DESKTOP.h5,
  },
  h6: {
    ...HEADINGS_STYLES_DESKTOP.h6,
  },
};
