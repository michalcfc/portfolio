import React from 'react';
import { InputProps } from './Input.d';
import {
  Label,
  InputStyle,
  InputWrapper,
} from '../Form.styles';

// components
import { FormError } from '~components/common/Form/FormError';

const Input: React.FC<InputProps> = ({
  label,
  errorText,
  ...rest
}) => (
  <InputWrapper>
    <Label>
      {label}
    </Label>
    <InputStyle
      {...rest}
    />
    {errorText
        && <FormError text={errorText} />}
  </InputWrapper>
);

export default Input;
