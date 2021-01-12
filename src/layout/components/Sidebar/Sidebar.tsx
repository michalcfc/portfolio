import React from "react"
import { SidebarStyle } from "./Sidebar.styles"
import { SidebarProps } from "./Sidebar.d"

const Sidebar: React.FC<SidebarProps> = ({links}) => (
  <>
    <SidebarStyle>
      <ul>
      {links.map((link, id) => {
        return <li key={id}>{link}</li>
      })}
      </ul>
    </SidebarStyle>
  </>
)

export default Sidebar;
