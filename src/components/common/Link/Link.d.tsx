<<<<<<< HEAD
import { LinkProps } from 'next/link';
=======
import { LinkProps } from "next/link";
import { HTMLProps } from 'react';
>>>>>>> 4d30df1... init project
import {
  SpaceProps,
  LayoutProps,
  PositionProps,
  TypographyProps,
} from 'styled-system';
<<<<<<< HEAD
import { CSSProperties } from 'styled-components';
import { ButtonSizes, ButtonVariants } from '~components/common/Button/types';
=======
import { CSSProperties } from "styled-components";
import { ButtonSizes, ButtonVariants} from "~components/common/Button/types";
>>>>>>> 4d30df1... init project

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
    PositionProps &
    TypographyProps &
<<<<<<< HEAD
    LayoutProps &
=======
>>>>>>> 4d30df1... init project
    Pick<CSSProperties,
    | 'textDecoration'
    >;
