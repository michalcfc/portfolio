import React, { useContext } from "react";
import { HeaderStyle } from "./Header.styles"
import { HeaderProps } from "./Header.d"



const Header: React.FC<HeaderProps> = ({links}) => {
return ( 
  <>
    <HeaderStyle>
      {/* <img src="" alt="logo"/> */}
      <p>AppJS.pl</p>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </HeaderStyle>
  </>
  )
}

export default Header;
