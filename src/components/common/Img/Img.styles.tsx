import styled, { CSSProperties } from 'styled-components';

import {
  space,
  layout,
  LayoutProps,
  compose,
  BackgroundProps,
  PositionProps,
  SpaceProps,
  border,
  BorderProps,
  background,
  color,
  position,
  system,
} from 'styled-system';

export type ImageProps = BackgroundProps &
LayoutProps &
PositionProps &
SpaceProps &
Pick<CSSProperties, 'transform' | 'transition' | 'objectFit'> &
{
  hoverEffect?: boolean
  borderRadius?: string
  boxShadow?: string
};

const imageStyledSystem = compose(
  background,
  color,
  layout,
  position,
  space,
  system({
    transform: true,
    transition: true,
    overflow: true,
    whiteSpace: true,
    objectFit: true,
  }),
);

export const ImgWrapper = styled.div<ImageProps>`
    line-height: 0;
    min-width: 100%;
    overflow: hidden;
    position: ${({ width, height }) => (!width || !height) && 'relative'};
    width: ${({ width, height }) => (!width || !height) && 'auto'};
    height: ${({ width, height }) => (!width || !height) && '100%'};
    ${imageStyledSystem};
  & > span {
    box-shadow: ${({ boxShadow }) => boxShadow};
    border-radius: ${({ borderRadius }) => borderRadius}
  }
`;
