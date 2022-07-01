import styled from 'styled-components';
import {
  space,
  layout,
  compose,
} from 'styled-system';

type DataProps = {
  bg?: string
  borderSize?: number
  isActiveIcon?: boolean
};

const inputStyledSystem = compose(
    space,
    layout,
);

export const Label = styled.label`
  color: #999;
  font-weight: normal;
  opacity: 0.75;
  order: 1;
  /*outline: 0;*/
  padding-left: ${({ theme }) => theme.spacing.sm};
  pointer-events: none;
  text-shadow: none;
  text-transform: capitalize;
  transform-origin: left top;
  transform: scale(1) translate3d(0, 2rem, 0);
  transition: 200ms ease all;
`;

export const InputWrapper = styled.div<DataProps>`
  ${inputStyledSystem};
  display: flex;
  flex-direction: column;
  position: relative;
  &:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }
`;

export const InputStyle = styled.input<DataProps>`
  border-radius: ${({ theme }) => theme.borderRadius.base};
  border: ${({ theme }) => `1px solid ${theme.colors.gray}`};
  padding: ${({ theme }) => theme.spacing.md};
  display: flex;
  text-shadow: none;
  order: 2;
  &:focus {
    outline: 0;
    border: ${({ theme }) => `1px solid ${theme.colors.brand}`};
  }

  &:not(:focus) {
    color: transparent;
  }

  &:focus + ${Label} {
    color:  ${({ theme }) => theme.colors.gray};
    opacity: 1;
    transform: scale(0.8) translate3d(0, 1rem, 0);
    padding-left: ${({ theme }) => theme.spacing.md};
  }
`;
