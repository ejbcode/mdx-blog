import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import Theme from './src/theme/theme';

const GlobalStyles = createGlobalStyle`
* {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      color:red;
    }


`;

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={Theme}>
    <GlobalStyles />

    {element}
  </ThemeProvider>
);
