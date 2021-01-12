import styled from "styled-components";

type DataProps = {
}

export const AsideStyle = styled.div<DataProps>`
    flex: 0 1 400px;
    border-left: 1px solid ${({ theme }) => theme.colors.lightGray};
`;
