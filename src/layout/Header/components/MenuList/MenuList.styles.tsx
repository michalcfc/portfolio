import styled from "styled-components";

type DataProps = {
    isMore: boolean
    isFirstDepthLevel?: boolean
}

export const MenuListWrapper = styled.ul<DataProps>`
    list-style: none;
    padding: ${({ theme, isFirstDepthLevel }) => !isFirstDepthLevel && `${theme.spacing.sm} 0`};
    min-width: ${({ isFirstDepthLevel }) => !isFirstDepthLevel && '10rem'};
    border-radius: ${({ theme }) => theme.borderRadius.base};
    top: ${({ isMore }) => isMore && '-7px'};
    left: ${({ isMore }) => isMore ? '100%' : 'auto'};
    display: ${({ isFirstDepthLevel }) => isFirstDepthLevel && "flex"};
    position: ${({ isFirstDepthLevel }) => !isFirstDepthLevel && 'absolute'};
    background: ${({ theme, isFirstDepthLevel }) => !isFirstDepthLevel && theme.colors.white};
    box-shadow: ${({ isFirstDepthLevel }) => !isFirstDepthLevel && "0 10px 35px rgb(38 42 76 / 10%)"};
`;
