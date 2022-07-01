import styled from "styled-components";

type DataProps = {
}

export const MenuItemWrapper = styled.li<DataProps>`
  position: relative;
  padding: ${({ theme }) => `0 ${theme.spacing.md}`};
  &:hover {
    cursor: pointer;
    &:before {
      background: white;
      width: 100%;
    }
    &:after {
      width: 100%;
    }
  };
  &:before, &:after {
    content: '';
    left: 0;
    width: 0%;
    height: 2px;
    bottom: -8px;
    transition: 0.5s;
    position: absolute;
    background:${({ theme }) => theme.colors.gradient };
  };
  &:before {
    left: 0;
    transition: 0.5s  ease-in-out;
  }
  &:after {
    right: 0;
    transition: width 0.5s ease-in-out;
    background:${({ theme }) => theme.colors.gradient };
  }
`;
