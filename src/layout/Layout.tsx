import React from 'react'
import { LayoutProps } from "./Layout.d"
import { connect } from "react-redux";

import Main from "./components/Main"
import Aside from "./components/Aside"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import Container from './components/Container';


const Layout: React.FC<LayoutProps> = ({children}) => {

  return (
    <>
  <div className="wrapper">
    <Header 
      links={[
        "Home", 
        "Post", 
        "About", 
        "Contact"
    ]} />
    <Container>
      {/* <Sidebar /> */}
        <Main>
          {children}
        </Main>
          {/* <Aside /> */}
        </Container>

    <Footer />
    </div>
    </>
    )
  }

export default Layout;