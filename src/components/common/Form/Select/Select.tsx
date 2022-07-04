import React from 'react';
import { FormError } from '~components/common/Form/FormError';
import { SelectD } from './Select.d';
import {
  Label,
  SelectStyle,
  InputWrapper,
} from '../Form.styles';

import { OPTIONS_NUMBER_VALUE } from './selectConstants';

const Select = ({
  label,
  options,
  errorText,
  numberOptionsValue,
  ...rest
}: SelectD) => {
  const data = (numberOptionsValue
    ? OPTIONS_NUMBER_VALUE
    : options).map((option) => (
      <option
        key={option.id}
        value={option.value}
      >
        {option.label}
      </option>
  ));

  return (
    <InputWrapper>
      <Label>{label}</Label>
      <SelectStyle
        {...rest}
      >
        {data}
      </SelectStyle>
      {errorText
                && <FormError text={errorText} />}
    </InputWrapper>
  );
};

export default Select;
