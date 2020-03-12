import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

const ThemeProvider = ({ theme, dictionary, children }: ThemeProviderProps) => (
  <StyledThemeProvider theme={theme}>{React.Children.only(children)}</StyledThemeProvider>
);

export default ThemeProvider;
