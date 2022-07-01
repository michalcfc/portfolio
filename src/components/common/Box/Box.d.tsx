import {
  CSSProperties,
} from 'styled-components';

import {
  GridProps,
  SpaceProps,
  BorderProps,
  LayoutProps,
  FlexboxProps,
  PositionProps,
  BoxShadowProps,
  BackgroundProps,
} from 'styled-system';

type CustomProps = {
  hoverEffect?: boolean,
};

export type BoxProps =
    GridProps &
    SpaceProps &
    LayoutProps &
    FlexboxProps &
    BackgroundProps &
    BorderProps &
    BoxShadowProps &
    PositionProps &
    CustomProps &
    Pick<
    CSSProperties,
    | 'gap'
    | 'textDecoration'
    | 'textTransform'
    | 'whiteSpace'
    | 'textAlign'
    | 'textOverflow'
    | 'overflow'
    >;
