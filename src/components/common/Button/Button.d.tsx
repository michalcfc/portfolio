import React, { ButtonHTMLAttributes } from 'react';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import {
  SpaceProps,
  BackgroundProps,
  ColorProps,
  LayoutProps,
  TypographyProps,
  BorderProps,
  PositionProps,
} from 'styled-system';
import { IconPosition, ButtonSizes, ButtonVariants } from './types';

type IconSettings = {
  size?: SizeProp
  name: IconDefinition,
  position: IconPosition
};

type Settings = {
  icon: IconSettings
};

type CustomProps = {
  color?: string
  variant?: ButtonVariants
  settings?: Settings
  buttonBackground?: string
  onMouseEnter?: () => void
  onMouseLeave?: () => void
  size?: ButtonSizes
  onClick: React.MouseEventHandler<HTMLElement>
};

export type ButtonD =
    SpaceProps &
    BackgroundProps &
    BorderProps &
    LayoutProps &
    CustomProps &
    ColorProps &
    PositionProps &
    TypographyProps &
    ButtonHTMLAttributes<HTMLButtonElement>;
