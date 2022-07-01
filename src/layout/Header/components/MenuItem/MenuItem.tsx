import React from "react";
import {
    MenuItemWrapper
} from "./MenuItem.styles"

import { Link } from "~components/common/Link";
import { MenuItemProps } from "./MenuItem.d"

const MenuItem: React.FC<MenuItemProps> = ({
    onHover,
    url,
    name,
    type,
    children
}) => (
        <MenuItemWrapper>
            <Link
                type={type}
                href={url}
                onMouseEnter={() => onHover()}
            >
                {name}
            </Link>
            {children}
        </MenuItemWrapper>
    )

export default MenuItem