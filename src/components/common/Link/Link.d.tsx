import { LinkProps } from "next/link";
import { HTMLProps } from 'react';
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
  children?: JSX.Element
}

export type LinkD =
    CustomProps &
    SpaceProps &
    LinkProps &
    TypographyProps &
    Pick<CSSProperties,
        | 'textDecoration'
        >
