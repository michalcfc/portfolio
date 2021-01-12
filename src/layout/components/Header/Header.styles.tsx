import styled from "styled-components";
import { flex } from '../../../utilis/flex.styles';


type DataProps = {

}

// console.log(({ theme }) => theme.colors.red)

export const HeaderStyle = styled.div<DataProps>`
    ${flex}
    height: 60px;
    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);
    background: ${({ theme }) => theme.colors.white};
    border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
`;
