import {
  CSSProperties,
} from 'styled-components';

import {
  BackgroundProps,
  BorderProps,
  BoxShadowProps,
  LayoutProps,
  FlexboxProps,
  GridProps,
  PositionProps,
  SpaceProps,
} from 'styled-system';

type CustomProps = {
  hoverEffect?: boolean,
};

export type FlexBoxD =
    SpaceProps &
    LayoutProps &
    FlexboxProps &
    BackgroundProps &
    BorderProps &
    BoxShadowProps &
    GridProps &
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
