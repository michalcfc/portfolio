import styled from 'styled-components';
import { mapToTheme as theme } from "styled-map"
import { space, compose } from 'styled-system';
import { Sizes } from "~utils/styles/types";

const widgetProps = compose(
  space,
);

type CustomProps = {
    maxWidth?: Sizes
};

// Helper function to convert pixels to rems (remy)
const remy = px => `${px / 16}rem`

export const ContainerStyles = styled.div<CustomProps>`
    ${widgetProps};
    max-width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;

    // Breakpoint for tablets
    @media (min-width: 576px) {
      max-width: ${remy(540)};
    }
    
    // Breakpoint for small desktops
    @media (min-width: 768px) {
      max-width: ${remy(720)};
    }
    
    // Breakpoint for medium desktops
    @media (min-width: 992px) {
      max-width: ${remy(960)};
    }
    
    // Breakpoint for large desktops and HD devices
    @media (min-width: 1200px) {
      max-width: ${remy(1200)};
    }
`;
