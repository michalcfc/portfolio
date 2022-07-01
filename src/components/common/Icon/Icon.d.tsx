import {
  SpaceProps,
  LayoutProps,
} from 'styled-system'

import { Colors } from "~utils/styles/types";

import {
  IconDefinition
} from "@fortawesome/fontawesome-common-types";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";

export interface CustomProps {
  name: IconDefinition
  size?: SizeProp
  color?: string
}

export type IconProps =
    SpaceProps &
    CustomProps &
    LayoutProps