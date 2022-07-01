import {
  SpaceProps,
  LayoutProps,
} from 'styled-system';

import { InputHTMLAttributes } from 'react';

type CustomProps = {
  bg?: string
  borderSize?: number
  isActiveIcon?: boolean
  label: string
};

export type InputProps =
    SpaceProps &
    CustomProps &
    LayoutProps &
    InputHTMLAttributes<any>;
