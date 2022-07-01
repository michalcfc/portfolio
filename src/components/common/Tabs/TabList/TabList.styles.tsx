import styled from 'styled-components';
import {SPACING} from "~utils/styles/spacing";

type DataProps = {

};

export const TabListWrapper = styled.ul<DataProps>`
  display: flex;
  align-items: center;
  margin: ${SPACING.md} 0;
`;
