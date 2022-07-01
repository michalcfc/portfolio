import React, { useState } from "react";

import {
    MenuListWrapper
} from "./MenuList.styles"

import MenuItem from "../MenuItem";
import { MenuListProps } from "./MenuList.d"

const MenuList: React.FC<MenuListProps> = ({
    links,
    depthLevel
}) => {

    const [currentSubmenu, setCurrentSubmenu] = useState<number | null>(null)

    return (
        <MenuListWrapper isFirstDepthLevel={depthLevel === 0} isMore={depthLevel > 1}>
            {links.map(link => (
                    <MenuItem
                        key={link.id}
                        url={link.uri}
                        type={link?.type}
                        name={link.name}
                        onHover={() => setCurrentSubmenu(link.id)}
                    >
                    {link?.submenu
                        && link.id === currentSubmenu
                        &&  <MenuList
                            key={link.id}
                            links={link.submenu}
                            depthLevel={depthLevel+1}
                        />
                    }
                    </MenuItem>
            ))}
        </MenuListWrapper>
    )
}

export default MenuList