import styled from 'styled-components';

import {
  space,
  layout,
  border,
  compose,
  boxShadow,
  background,
  SpaceProps,
  LayoutProps,
  BorderProps,
  BoxShadowProps,
  BackgroundProps,
} from 'styled-system';

export type BoxProps = BackgroundProps &
BorderProps &
BoxShadowProps &
LayoutProps &
SpaceProps;

const sectionStyledSystem = compose(
  space,
  border,
  layout,
  boxShadow,
  background,
);

export const SectionWrapper = styled.div<BoxProps>`
  ${sectionStyledSystem}
`;
