import {
  SpaceProps,
  LayoutProps,
  TypographyProps,
} from 'styled-system';

import {
  IconDefinition,
} from '@fortawesome/fontawesome-common-types';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';

export interface CustomProps {
  name: IconDefinition
  size?: SizeProp
  color?: string
}

export type IconProps =
    SpaceProps &
    TypographyProps &
    CustomProps &
    LayoutProps;
