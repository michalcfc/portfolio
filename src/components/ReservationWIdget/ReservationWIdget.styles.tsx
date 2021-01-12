import styled from "styled-components";

type DataProps = {
    src?: string
}

export const WidgetContainer = styled.div<DataProps>`
    flex-grow: 1;
    display: flex;
    overflow: hidden;
    border-radius: 0.5rem;
    flex-direction: column;
    transition: box-shadow 0.2s ease 0s;
    background-color: rgb(255, 255, 255);
    box-shadow: rgba(25, 48, 82, 0.1) 0rem 0.5rem 0.875rem;
`;

export const WidgetRow = styled.div<DataProps>`
    display: flex;
`;

export const WidgetHeader = styled.div<DataProps>`
    padding: 1.5rem 1.5rem 0;
` 
export const WidgetBody = styled.div<DataProps>`
    padding: 1rem 1.5rem;
` 

export const StyledDatePickerWrapper = styled.div<DataProps>`
    & .DateRangePickerInput {
        border: none;
        display: flex;
    }
    & .DateInput {
        width: 100%;
        margin: .75rem .24rem;
        border-radius: 0.4rem;
        border: 1px solid #999;
        ::after {
            top: -8px;
            left: 14px;
            background: #fff;
            font-size: 0.8rem;
            position: absolute;
            content: "Date from";
        }
    }
    & .DateInput_input {
        position: relative;
        background-color: transparent;
        ::placeholder {
            top: -8px;
            left: 14px;
            position: absolute;
        }
    }
    & .DateRangePickerInput_arrow {
        display: none;
    }
`