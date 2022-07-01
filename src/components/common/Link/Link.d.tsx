import { LinkHTMLAttributes } from 'react';
import {
  SpaceProps,
  TypographyProps
} from 'styled-system';
import { CSSProperties } from "styled-components";
import { ButtonSizes, ButtonVariants} from "~components/common/Button/types";

export interface CustomProps {
  size?: ButtonSizes
  name?: string
  type?: 'button'
  isAbsolute?: boolean
  variant?: ButtonVariants
}

export type LinkD = SpaceProps &
    CustomProps &
    TypographyProps &
    LinkHTMLAttributes<any> &
    Pick<CSSProperties,
        | 'textDecoration'
        >
