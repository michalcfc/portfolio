import { COLORS } from './colors';

export const BADGES = {
  size: {
    default: {
      fontSize: '.675rem',
      padding: '.75rem 1rem'
    },
    xs: {
      fontSize: '.735rem',
      padding: '0.475rem 0.725rem'
    },
    sm: {
      fontSize: '.735rem',
      padding: '0.475rem 0.725rem'
    },
    md: {
      fontSize: '.735rem',
      padding: '0.475rem 0.725rem'
    },
    lg: {
      fontSize: '.735rem',
      padding: '0.475rem 0.725rem'
    },
    xl: {
      fontSize: '.735rem',
      padding: '0.475rem 0.725rem'
    },
  },

  fontSize: {
    default: '.675rem',
    xs: '.675rem',
    sm: '.735rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.375rem',
  },
  text: {
    default: `${COLORS.black}`,
    glass: `${COLORS.white}`,
    info: `${COLORS.darkBlue}`,
    danger: `${COLORS.red}`,
    warning: `${COLORS.orange}`,
    success: `${COLORS.green}`,
  },
  border: {
    glass: `${COLORS.white}`,
    info: `${COLORS.black}`,
    danger: `${COLORS.white}`,
    warning: `${COLORS.white}`,
    success: `${COLORS.white}`,
  },
  background: {
    default: `${COLORS.white}`,
    glass: `${COLORS.glass}`,
    info: `${COLORS.lightBlue}`,
    danger: `${COLORS.red}`,
    warning: `${COLORS.orange}`,
    success: `${COLORS.green}`,
  },
};
