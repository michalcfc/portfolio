import styled from 'styled-components';

import {
    space,
    color,
    system,
    layout,
    border,
    compose,
    boxShadow,
    background,
    SpaceProps,
    ColorProps,
    LayoutProps,
    BorderProps,
    BoxShadowProps,
    BackgroundProps,
} from 'styled-system';

export type BoxProps = BackgroundProps &
    BorderProps &
    BoxShadowProps &
    LayoutProps &
    SpaceProps

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
