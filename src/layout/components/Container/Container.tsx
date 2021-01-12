import React from "react"
import { ContainerStyle } from "./Container.styles"
import { ContainerProps } from "./Container.d"

const Container: React.FC<ContainerProps> = ({children}) => (
  <>
    <ContainerStyle>
    {children}
    </ContainerStyle>
  </>
)

export default Container;
