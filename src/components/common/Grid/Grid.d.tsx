import {
  GridProps,
  SpaceProps,
  LayoutProps,
  FlexboxProps,
  BackgroundProps,
  BorderProps,
  BoxShadowProps,
  PositionProps,
} from 'styled-system';
import { CSSProperties } from 'styled-components';

type CustomProps = {
  title?: string
};

export type GridPropTypes =
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
    | 'textDecoration'
    | 'textTransform'
    | 'whiteSpace'
    | 'textAlign'
    | 'textOverflow'
    | 'overflow'
    >;
