import styled from "styled-components";
// import { mapToTheme as theme  } from 'styled-map';

type DataProps = {
  display?: "block" | "inline-block"
}



export const Btn = styled.button<DataProps>`
  border: none;
  cursor: pointer;
  font-size: 1.125rem;
  border-radius: .375rem;
  line-height: 1.75rem;
  padding: 1rem 1.5rem;

`;
