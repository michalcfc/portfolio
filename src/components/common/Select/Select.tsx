import { SelectD } from './Select.d'
import {
  SelectStyle,
  SelectLabel,
  SelectWrapper,
} from './Select.styles';

import { OPTIONS_NUMBER_VALUE } from './selectConstants';

const Select = ({
    label,
    options,
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
    <SelectWrapper>
      <SelectLabel>{label}</SelectLabel>
      <SelectStyle
        {...rest}
      >
        {data}
      </SelectStyle>
    </SelectWrapper>
  );
};

export default Select;
