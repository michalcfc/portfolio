import {
  ImgHTMLAttributes,
} from 'react';

import { ImageProps } from "next/image";
import { CSSProperties } from "styled-components";

import {
  LayoutProps,
  PositionProps,
  SpaceProps,
  BorderProps,
  BackgroundProps
} from 'styled-system';

type CustomProps = {
  src: string
  alt: string
  width?: number
  height?: number
  boxShadow?: string
  borderRadius?: string
  hoverEffect?: boolean,
};

export type ImageD =
    SpaceProps &
    LayoutProps &
    PositionProps &
    BorderProps &
    CustomProps &
    BackgroundProps &
    ImageProps &
    ImgHTMLAttributes<HTMLImageElement> &
    Pick<CSSProperties, 'transform' | 'transition' | 'objectFit'>;
