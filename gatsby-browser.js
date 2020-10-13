import React from 'react';
import { ThemeProvider, createGlobalStyle, css } from 'styled-components';
import Theme from './src/theme/theme';

const GlobalStyles = createGlobalStyle`${css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body,
  html {
    font-family: ${(props) => props.theme.fonts.main};
    height: 100%;
    background-color: ${(props) => props.theme.colors.light1};
  }
`}

`;

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={Theme}>
    <GlobalStyles />
    {element}

  </ThemeProvider>
);
