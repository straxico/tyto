import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import QueryContext from './QueryContext';
import useMediaQueryContext from './QueryContext/useMediaQueryContext';

const ThemeProvider = ({ theme, dictionary, children }: ThemeProviderProps) => {
  const media = useMediaQueryContext();
  return (
    <QueryContext.Provider value={media}>
      <StyledThemeProvider theme={theme}>React.Children.only(children)</StyledThemeProvider>
    </QueryContext.Provider>
  );
};

export default ThemeProvider;
