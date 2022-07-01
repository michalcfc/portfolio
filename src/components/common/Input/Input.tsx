import React from 'react';
import { InputProps } from './Input.d';
import {
  InputWrapper,
  InputStyle,
  Label,
} from './Input.styles';

const Input: React.FC<InputProps> = ({
  label,
  ...rest
}) => (
  <InputWrapper>
    <InputStyle
      {...rest}
    />
    <Label>{`${label}`}</Label>
  </InputWrapper>
);

export default Input;
