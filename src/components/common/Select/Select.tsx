import React from 'react';
import { SelectD } from './Select.d';
import {
  SelectStyle,
  SelectLabel,
  SelectWrapper,
} from './Select.styles';

import { OPTIONS_NUMBER_VALUE } from './selectConstants';

const Select: React.FC<SelectD> = ({
  label,
  defaultOptions,
  numberOptionsValue,
  ...rest
}) => {
  const options = (numberOptionsValue
    ? OPTIONS_NUMBER_VALUE
    : defaultOptions ?? []).map((option) => (
      <option
        key={option.value}
        value={option.value}
      >
        {option.label}
      </option>
  ));

  return (
    <SelectWrapper>
      <SelectLabel>{label}</SelectLabel>
      <SelectStyle
        {...rest}
      >
        {options}
      </SelectStyle>
    </SelectWrapper>
  );
};

export default Select;
