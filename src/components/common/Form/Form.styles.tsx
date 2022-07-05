import styled, { css } from 'styled-components';

export const Label = styled.label`
  text-transform: capitalize;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

class DataProps {
}

export const InputWrapper = styled.div<DataProps>`
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  &:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }
`;

export const commonStyle = css`
  border: ${({ theme }) => `1px solid ${theme.colors.gray}`};
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.base};
  &:hover,
  &:focus {
    border: ${({ theme }) => `1px solid ${theme.colors.black}`};
  }

  &:focus {
    outline: 0;
  }
`;

export const SelectStyle = styled.select<DataProps>`
  ${commonStyle}
`;
export const TextareaStyle = styled.textarea<DataProps>`
    height: 150px;
    ${commonStyle}
`;

export const InputStyle = styled.input<DataProps>`
  ${commonStyle}
`;
