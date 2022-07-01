import React from 'react';
import { SpaceProps } from 'styled-system';
import { StyledComponentPropsWithRef } from 'styled-components';

type CustomProps = {
  as?: any,
  title?: string
};

export type HeadingProps<
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    C extends React.ComponentType<any> | keyof JSX.IntrinsicElements,
    > = SpaceProps & CustomProps & StyledComponentPropsWithRef<C>;
