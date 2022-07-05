import {
  BackgroundProps,
  BorderProps,
  BoxShadowProps,
  LayoutProps,
  SpaceProps,
} from 'styled-system';

type CustomProps = {
  title?: string
  subtitle?: string
};

export type SectionD =
    SpaceProps &
    LayoutProps &
    BackgroundProps &
    BorderProps &
    BoxShadowProps &
    CustomProps;
