import { TextareaHTMLAttributes } from "react";
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import {
  SpaceProps,
  LayoutProps,
} from 'styled-system';

type CustomProps = {
  icon?: IconDefinition
  isActiveIcon?: boolean
  label?: string
  errorText?: string
  placeholder: string
};

export type TextareaProps =
    SpaceProps &
    CustomProps &
    LayoutProps &
    TextareaHTMLAttributes<any>;
