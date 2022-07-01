const size = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1440,
};

const device = {
  xs: `(min-width: ${size.xs}px)`,
  sm: `(min-width: ${size.sm}px)`,
  md: `(min-width: ${size.md}px)`,
  lg: `(min-width: ${size.lg}px)`,
  xl: `(min-width: ${size.xl}px)`,
  xxl: `(min-width: ${size.xxl}px)`,
};

export default { size, device };
