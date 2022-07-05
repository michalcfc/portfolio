import { useState } from 'react';
import { AppProps } from 'next/app';

// seo
import { DefaultSeo } from 'next-seo';
import { appWithTranslation } from 'next-i18next';
import { ThemeProvider } from 'styled-components';
import { config } from '@fortawesome/fontawesome-svg-core';
import { seo } from '~lib/seo';

// layout
import { Layout } from '../layout';
import GlobalStyles from '~styles/globalStyles';

// locales

// theme
import { lightTheme, darkTheme } from '../themes';

// icons
import '@fortawesome/fontawesome-svg-core/styles.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  config.autoAddCss = false;

  return (
    <ThemeProvider
      theme={theme === 'light' ? lightTheme : darkTheme}
    >
      <GlobalStyles />
      <Layout theme={theme} toggleTheme={toggleTheme}>
        <DefaultSeo {...seo} />
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default appWithTranslation(MyApp);
