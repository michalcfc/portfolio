import React from 'react';

import { TextProps } from '@components/Text/Text.d';
import { TextStyles } from './Text.styles';

const Text: React.FC<TextProps> = ({
  text,
  muted,
  children,
  ...rest
}) => (
  <TextStyles
    muted={muted}
    {...rest}
  >
    {text || children}
  </TextStyles>
);

export default Text;
