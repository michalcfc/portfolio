import styled from "styled-components";

type DataProps = {
}

export const InputStyle = styled.input<DataProps>`
    margin: .75rem 0;
    background: none;
    transition: all 0.2s;
    padding: .75rem 1rem;
    border-radius: 0.4rem;
    border: 1px solid #000;
    touch-action: manipulation;
    &__wrapper {
        position: relative;
    }
    &:focus {
        box-shadow: none;
        border-color: #f7af38;
        background-size: 100% 2px;
    }
    &:placeholder-shown + label {
        visibility: hidden;
        z-index: -1;
        transition: 0.2s ease-in-out;
    }
    &:not(:placeholder-shown) + label,
    focus:not(:placeholder-shown) + label {
        visibility: visible;
        z-index: 1;
        opacity: 1;
        transform: translateY(-10px);
        transition: 0.2s ease-in-out transform;
    }
    &:focus + input,
    input:valid + label {
        font-size: 75%;
        top: 14px;
        left: 4px;
        overflow: hidden;
        padding: 0 8px;
        background: #fff;
    }
`;
