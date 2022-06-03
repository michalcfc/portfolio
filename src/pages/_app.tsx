import { useState } from 'react';

import { DefaultSeo } from 'next-seo'
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './../themes';
import { GlobalStyles } from './../shared/styles';

import Layout from "../layout"

import SEO from './../../next-seo.config'

export default function App({ Component, pageProps }) {

  const [theme, setTheme] = useState('dark');
  
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  return (
    <>
        <DefaultSeo {...SEO} />
        <ThemeProvider
            theme={
            theme === 'light'
            ? lightTheme
            : darkTheme
          }
      >
      <GlobalStyles />
        <Layout 
          toggleTheme={toggleTheme}
          >
              <Component 
                {...pageProps} 
                />
        </Layout>
      </ThemeProvider>
      
    </>
  )
}