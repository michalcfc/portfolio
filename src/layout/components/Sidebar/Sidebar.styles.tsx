import styled from "styled-components";

type DataProps = {
}

export const SidebarStyle = styled.div<DataProps>`
    flex: 0 1 80px;
    display: flex;
    justify-content: center;
    background: ${({ theme }) => theme.colors.white};
    box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04);
    border-right: 1px solid ${({ theme }) => theme.colors.lightGray};
`;
