import React from 'react';

import { TextProps } from './Text.d';
import { TextStyles } from './Text.styles';

const Text: React.FC<TextProps> = ({
  text,
  isMuted,
  children,
  ...rest
}) => (
  <TextStyles
    isMuted={isMuted}
    {...rest}
  >
    {text || children}
  </TextStyles>
);

export default Text;
