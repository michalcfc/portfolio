import styled from 'styled-components';
import { mapToTheme as theme } from 'styled-map';
import {
  space,
  compose,
  layout,
  BackgroundProps,
  BorderProps,
  BoxShadowProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  background,
  border,
  boxShadow,
  color,
  position,
} from 'styled-system';

type CustomProps = {
  isShow?: boolean
  variant?: "success" | "warning" | "danger" | "info"
};

export type IconProps = BackgroundProps &
    BorderProps &
    LayoutProps &
    BoxShadowProps &
    PositionProps &
    SpaceProps &
    CustomProps

const iconStyledSystem = compose(
    background,
    border,
    boxShadow,
    layout,
    color,
    position,
    space,
);

export const IconWrapper = styled.div<IconProps>`
  ${iconStyledSystem};
`;
