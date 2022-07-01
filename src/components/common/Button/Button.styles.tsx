import styled from 'styled-components';
import { mapToTheme as theme } from 'styled-map';
import { ButtonD } from './Button.d';

import {
    space,
    layout,
    compose,
    variant,
    fontSize,
    position,
    fontWeight,
    typography,
    buttonStyle,
    borderRadius, color,
} from 'styled-system';


const buttonSize = variant({
    prop: 'size',
    key: 'buttons.size'
})

const buttonStyledSystem = compose(
    space,
    layout,
    fontSize,
    fontWeight,
    color,
    position,
    buttonSize,
    typography,
    buttonStyle,
    borderRadius,
);

export const ButtonWrapper = styled.button<ButtonProps>`       
  display: flex;
  cursor: pointer;
  border-width: 0;
  border-style: solid;
  align-items: center;
  line-height: 1.25rem;
  outline-offset: 2px;
  justify-content: center;
  outline: transparent solid 2px;
  ${buttonStyledSystem};
  height: ${({ variant }) => variant === 'text' && 'unset'};
  border-radius: ${({ theme }) => theme.borderRadius.base};
  &:hover {
    background:  ${theme('buttons.backgroundHover', 'variant')};
  }

  &[disabled] {
    cursor: not-allowed;
    color: ${({ theme }) => theme.colors.gray};
    background-color: ${({ theme }) => theme.colors.lightGray};
  }
`;

ButtonWrapper.defaultProps = {
    size: 'md',
    variant: "success",
    textAlign: "center"
};