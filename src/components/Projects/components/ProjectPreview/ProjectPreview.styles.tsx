import styled from "styled-components";
import { ImgWrapper } from "~components/common/Img/Img.styles";

type DataProps = {

}

export const Action = styled.div<DataProps>`
  top: 0;
  left: 0;
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  & > a {
    z-index: 1000;
    &:hover {
      color: ${({theme}) => theme.colors.red};
    }
  }
`

export const ProjectWrapper = styled.div<DataProps>`
  position: relative;
  z-index: 1000;
  transition: all 0.3s ease-out 0s;
  &:hover {
    cursor: pointer;
    transform: translateY(-2%);
    &  ${Action} {
      opacity: 1;
      display: grid;
      place-items: center;
    }
  }
  &:hover ${ImgWrapper} {
    &:before {
        content: '';
        z-index: 1;
        width: 100%;
        opacity: 0.2;
        height: 100%;
        position: absolute;
        background: ${({ theme }) => theme.colors.lightBlue};
  }
  }
`;




