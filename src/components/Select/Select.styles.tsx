import styled from "styled-components";

type DataProps = {
}

export const SelectWrapper = styled.div<DataProps>`
    width: 100%;
    position: relative;
    margin: .75rem .24rem;
`;
    
    
export const SelectLabel = styled.label<DataProps>`
    top: -8px;
    left: 14px;
    padding: 0.2rem;
    background: #fff;
    font-size: 0.8rem;
    position: absolute;
`;
    
export const SelectStyle = styled.select<DataProps>`
    width: 100%;
    background: none;
    padding: .75rem 1rem;
    transition: all 0.2s;
    border-radius: 0.4rem;
    border: 1px solid #999;
`;