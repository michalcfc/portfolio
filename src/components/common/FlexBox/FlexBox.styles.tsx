import styled, { CSSProperties } from 'styled-components';
import {
  BackgroundProps,
  background,
  BorderProps,
  border,
  BoxShadowProps,
  boxShadow,
  compose,
  LayoutProps,
  layout,
  FlexboxProps,
  flexbox,
  GridProps,
  grid,
  PositionProps,
  position,
  SpaceProps,
  space,
  system,
} from 'styled-system';

export type FlexBoxProps = BackgroundProps &
BorderProps &
BoxShadowProps &
FlexboxProps &
GridProps &
LayoutProps &
PositionProps &
SpaceProps &
Pick<CSSProperties, 'transform' | 'transition' | 'textAlign'> &
{
  hoverEffect?: boolean
};

const boxStyledSystem = compose(
  background,
  border,
  boxShadow,
  layout,
  flexbox,
  grid,
  position,
  space,
  system({
    gap: {
      property: 'gap',
      scale: `${space}`,
    },
    textAlign: true,
    transform: true,
    transition: true,
    overflow: true,
    textDecoration: true,
    textOverflow: true,
    textTransform: true,
    whiteSpace: true,
  }),
);

export const BoxWrapper = styled.div<FlexBoxProps>`
  ${boxStyledSystem};
  display: flex;
  &:hover {
    cursor:  ${({ hoverEffect }) => hoverEffect && 'pointer'};
    background: ${({ theme, hoverEffect }) => hoverEffect && theme.colors.lightGray};
  }
`;
