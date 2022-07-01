import React from "react";
import { NavbarD } from "./Navbar.d"

import {
    NavbarWrapper
} from "./Navbar.styles"

import { MenuList } from "./../MenuList";
import { MobileMenu } from "~layout/Header/components/MobileMenu";


const Navbar: React.FC<NavbarD> = ({
    links,
    isMobile,
}) => {

    return (
        <NavbarWrapper>
            {!isMobile
                && <MenuList depthLevel={0} links={links} />
            }
        </NavbarWrapper>
    )
}

export default Navbar