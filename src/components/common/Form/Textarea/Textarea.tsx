import React from 'react';
import { TextareaProps } from './Textarea.d';

import {
  Label,
  TextareaStyle,
  InputWrapper,
} from '../Form.styles';

// components
import { FormError } from '~components/common/Form/FormError';

const Textarea: React.FC<TextareaProps> = ({
  icon,
  errorText,
  label,
  ...rest
}) => (
  <InputWrapper>
    <Label>{label}</Label>
    <TextareaStyle
      {...rest}
    />
    {errorText
            && (
            <FormError
              text={errorText}
            />
            )}
  </InputWrapper>
);

export default Textarea;
