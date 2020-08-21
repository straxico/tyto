import React from 'react';
import styled, { css } from 'styled-components';

import defaultTheme from 'utils/token';
import Grid from 'Atoms/Grid';
import mq from 'utils/mediaQuery';
import { LAYOUT_SETTINGS } from './consts';

const getChildrenProps = (type, key) => {
  if (LAYOUT_SETTINGS[type].layoutColumns && LAYOUT_SETTINGS[type].layoutColumns[key]) {
    return LAYOUT_SETTINGS[type].layoutColumns[key];
  }
  return null;
};

const StyledLayout = styled(Grid)`
  box-sizing: border-box;
  margin: 0 auto;
  width: 100%;
  padding: 0 ${({ theme }) => theme.jajiga.spaceMedium};

  ${mq.desktop(css`
    padding: ${({ theme }) => theme.jajiga.spaceLarge};
  `)};
`;

StyledLayout.defaultProps = {
  theme: defaultTheme,
};

const Layout = ({ children, type, dataTest }: LayoutProps) => (
  <StyledLayout {...LAYOUT_SETTINGS[type]} dataTest={dataTest}>
    {React.Children.map(children, (item, key) =>
      React.cloneElement(item, {
        ...getChildrenProps(type, key),
      }),
    )}
  </StyledLayout>
);

export default Layout;

export { default as LayoutColumn } from './LayoutColumn';
