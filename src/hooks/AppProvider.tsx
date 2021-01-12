import React, { createContext, useEffect, useState } from "react";
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from "../themes"
import { GlobalStyles } from '../shared/styles';
import  { useDarkMode } from "./useDarkMode"

export const AppContext = createContext(null);

const AppProvider = ({ children }) => {
    const [theme, themeToggler, mountedComponent] = useDarkMode();
    const themeMode = theme === 'light' ? lightTheme : darkTheme;
    if(!mountedComponent) return <div/>
    return (
        <AppContext.Provider value={{themeToggler}}>
          <ThemeProvider theme={themeMode}>
            <GlobalStyles />
            {children}
          </ThemeProvider>
        </AppContext.Provider>
      );
};

export default AppProvider;