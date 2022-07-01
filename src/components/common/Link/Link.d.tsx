import {HTMLProps, LinkHTMLAttributes} from 'react';
import {
  LayoutProps,
  SpaceProps,
  TypographyProps
} from 'styled-system';
import { CSSProperties } from "styled-components";
import { ButtonSizes, ButtonVariants} from "~components/common/Button/types";
import {LinkProps} from "next/link";

export interface CustomProps {
  size?: ButtonSizes
  name?: string | undefined
  type?: 'button'
  isAbsolute?: boolean
  variant?: ButtonVariants
  children?: JSX.Element
}

export type LinkD = SpaceProps &
    CustomProps &
    LayoutProps &
    LinkProps &
    TypographyProps &
    HTMLProps<HTMLAnchorElement> &
    Pick<CSSProperties,
        | 'textDecoration'
        >
