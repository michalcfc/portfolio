import { LayoutProps, SpaceProps } from 'styled-system';
import { SelectHTMLAttributes } from 'react';

type Options = {
  label: string
  value: string
};

type CustomProps = {
  label: string
  errorText?: string
  numberOptionsValue?: number
  options: Options[]
};

export type SelectD =
    SpaceProps &
    CustomProps &
    LayoutProps &
    SelectHTMLAttributes<any>;
