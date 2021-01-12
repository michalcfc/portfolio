import React from "react"
import { 
  SelectStyle, 
  SelectLabel,
  SelectWrapper 
} from "./Select.styles"
import { SelectProps } from "./Select.d"

import { OPTIONS_NUMBER_VALUE } from "./selectConstants"

const Select: React.FC<SelectProps> = ({
  placeholder,
  defaultValue,
  defaultOptions,
  numberOptionsValue,
  label,
  onChange,
  onBlur,
  onFocus,
  onSubmit,
  onKeyDown,
  onKeyPress,
  onKeyUp
}) => {
  const options = OPTIONS_NUMBER_VALUE.map(option => {
    return <option key={option.value} value={option.value}>{option.label}</option>
  })
  return (
    <SelectWrapper>
      <SelectLabel>{label}</SelectLabel>
      <SelectStyle
        placeholder={placeholder}
        defaultValue={defaultValue}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        onSubmit={onSubmit}
        onKeyDown={onKeyDown}
        onKeyPress={onKeyPress}
        onKeyUp={onKeyUp}
        >
          {numberOptionsValue ? options : defaultOptions}
        </SelectStyle>
    </SelectWrapper>
  )
}

export default Select;
