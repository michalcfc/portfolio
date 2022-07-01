import { lighten } from 'polished';
import { COLORS } from './colors';
import { SPACING } from "~utils/styles/spacing";
import { FONT_SIZES } from "~utils/styles/fontSizes";

export const BUTTONS = {

  size: {
    default: {
      height: '2.5rem',
      fontSize: FONT_SIZES.sm,
      padding: `0 ${SPACING.lg}`
    },
    xs: {
      height: '2.5rem',
      fontSize: FONT_SIZES.xs,
      padding: `0 ${SPACING.md}`
    },
    sm: {
      height: '2.5rem',
      fontSize: FONT_SIZES.xs,
      padding: `0 ${SPACING.md}`
    },
    md: {
      height: '2.5rem',
      fontSize: FONT_SIZES.sm,
      padding: `0 ${SPACING.md}`

    },
    lg: {
      height: '3.475rem',
      fontSize: FONT_SIZES.md,
      padding: `0 ${SPACING.xl}`
    }
  },

  primary: {
    color: COLORS.white,
    background: COLORS.brand
  },

  secondary: {
    color: COLORS.white,
    background: COLORS.black
  },

  success: {
    color: COLORS.white,
    background: COLORS.brand,
  },

  danger: {
    color: COLORS.white,
    background: COLORS.red,
  },

  outline: {
    color: COLORS.black,
    background: 'transparent',
    border: `1px solid ${COLORS.black}`
  },

  ghost: {
    color: COLORS.black,
    background: COLORS.lightGray,
  },

  text: {
    padding: 0,
    background: 'transparent',
  },

  border: {
    success: 'transparent',
    danger: 'transparent',
    warning: 'transparent',
    text: 'transparent',
    outline: '1px solid',
    default: 'transparent',
  },

  background: {
    text: 'none',
    link: 'none',
    ghost: 'none',
    default: COLORS.brand,
    success: COLORS.brand,
    primary: COLORS.brand,
    secondary: COLORS.black,
    danger: COLORS.red,
    warning: COLORS.yellow,
    outline: COLORS.lightBlue,
  },

  backgroundHover: {
    text: lighten(0.1, COLORS.lightGray),
    danger: lighten(0.1, COLORS.red),
    success: lighten(0.1, COLORS.brand),
    primary: lighten(0.1, COLORS.brand),
    secondary: lighten(0.1, COLORS.black),
    ghost: COLORS.lightBlue,
    outline: lighten(0.1, COLORS.brand),
  },
};
