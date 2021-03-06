import React from 'react';
import styled, { css } from 'styled-components';

import defaultTheme from 'utils/token';
import mediaQueries from 'utils/mediaQuery';
import { DEVICES } from 'utils/mediaQuery/consts';
import isDefined from 'Atoms/Stack/helpers/isDefined';
import getViewportGridStyles from './helpers/getViewportGridStyles';

const StyledGrid = styled(({ className, children, dataTest }) => (
  <div className={className} data-test={dataTest}>
    {children}
  </div>
))<any>`
  /*
    Just apply all mediaQueries (from devices map)
    smallMobile - default values are not mediaQuery and needs to be rendered differently
   */
  ${props =>
    DEVICES.map((viewport, index, devices) =>
      viewport in mediaQueries
        ? mediaQueries[viewport](css<any>`
            ${isDefined(props[viewport]) && getViewportGridStyles({ viewport, index, devices })};
          `)
        : viewport === 'smallMobile' &&
          css<any>`
            ${getViewportGridStyles({ viewport, index, devices })};
          `,
    )};
  // for IE it needs to be explicitly set for children columns/rows
  & > * {
    display: block;
  }
`;

StyledGrid.defaultProps = {
  theme: defaultTheme,
};

const Grid = ({
  inline,
  rows = '1fr',
  columns = '1fr',
  gap,
  rowGap,
  columnGap,
  maxWidth,
  children,
  dataTest,
  element = 'div',
  ...props
}: GridProps) => {
  const smallMobile: GridBasicProps = { inline, rows, columns, gap, rowGap, columnGap, maxWidth };
  return (
    <StyledGrid smallMobile={smallMobile} data-test={dataTest} as={element} {...props}>
      {children}
    </StyledGrid>
  );
};

export default Grid;
