import React from "react"
import { MainStyle } from "./Main.styles"
import { MainProps } from "./Main.d"

const Main: React.FC<MainProps> = ({children}) => (
  <>
    <MainStyle>
    {children}
    </MainStyle>
  </>
)

export default Main;
