import React from "react";
import { LayoutD } from './Layout.d';

import { Main } from './Main';
import { Header } from './Header';
import { Footer } from './Footer';
import { Wrapper } from './Wrapper';
import { AsideLeft } from '~layout/AsideLeft';
import { AsideRight } from "~layout/AsideRight";

const Layout: React.FC<LayoutD> = ({
  theme,
  toggleTheme,
  children,
}) => {

  const LAYOUT_VIEW = "fullWidth"

    const navbar = [
        { id: 1, name: "Pages", uri: "/searchList", submenu: [
                    {id: 1, name: "Services", uri: "/services"},
                    {id: 2, name: "Features", uri: "/features"}
                ]},
        { id: 2, name: "Projects", uri: "/projects" },
        { id: 3, name: "Profile", uri: "/user/profile" },
        { id: 4, name: "About", uri: "/about" },
        { id: 5, name: "Contact", uri: "/contact" },
    ]

  return (
    <Wrapper view={LAYOUT_VIEW}>
      <Header
        theme={theme}
        links={navbar}
        toggleTheme={toggleTheme}
      />
        <AsideLeft
            isVisible={false}
        />
        <Main>{children}</Main>
        <AsideRight
            isVisible={false}
        />
      <Footer />
    </Wrapper>
  );
};

export default Layout;
