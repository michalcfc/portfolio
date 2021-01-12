import React from "react"
import { AsideStyle } from "./Aside.styles"
import { AsideProps } from "./Aside.d"

const Aside: React.FC<AsideProps> = ({content}) => (
  <>
    <AsideStyle>
      {content}
    </AsideStyle>
  </>
)

export default Aside;
