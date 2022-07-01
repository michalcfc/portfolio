import styled, { CSSProperties } from 'styled-components';

import {
    space,
    system,
    layout,
    border,
    flexbox,
    compose,
    position,
    boxShadow,
    background,
    GridProps,
    SpaceProps,
    LayoutProps,
    BorderProps,
    FlexboxProps,
    PositionProps,
    BoxShadowProps,
    BackgroundProps, grid,
} from 'styled-system';

export type BoxProps = BackgroundProps &
BorderProps &
BoxShadowProps &
FlexboxProps &
LayoutProps &
GridProps &
PositionProps &
SpaceProps &
Pick<CSSProperties,
    | 'gap'
    | 'textDecoration'
    | 'textTransform'
    | 'whiteSpace'
    | 'textAlign'
    | 'textOverflow'
    | 'overflow'
    > &
{
  hoverEffect?: boolean
};

const boxStyledSystem = compose(
  grid,
  space,
  border,
  layout,
  flexbox,
  position,
  boxShadow,
  background,
  system({
    gap: {
      property: 'gap',
      scale: `${space}`
    },
    overflow: true,
    textOverflow: true,
    textDecoration: true,
    whiteSpace: true,
    textAlign: true,
    transform: true,
    transition: true,
  }),
);

export const BoxWrapper = styled.div<BoxProps>`
  ${boxStyledSystem}
  &:hover {
    cursor:  ${({ hoverEffect }) => hoverEffect && 'pointer'};
    background: ${({ theme, hoverEffect }) => hoverEffect && theme.colors.lightBlue};
  }
`;
