import { LayoutProps, SpaceProps } from 'styled-system';
import { SelectHTMLAttributes } from 'react';

type Option = {
  id: number
  label: string
  value: number
};

type CustomProps = {
  label: string
  numberOptionsValue?: number
  defaultOptions?: Option[]
};

export type SelectD =
    SpaceProps &
    CustomProps &
    LayoutProps &
    SelectHTMLAttributes<any>;
