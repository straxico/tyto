import React from 'react';
import styled, { css } from 'styled-components';

import defaultTheme from 'utils/token';
import mediaQueries from 'utils/mediaQuery';
import { DEVICES } from 'utils/mediaQuery/consts';
import { ALIGNS, JUSTIFY, DIRECTIONS, SPACINGS } from './consts';
import isDefined from './helpers/isDefined';
import shouldUseFlex from './helpers/shouldUseFlex';
import getViewportFlexStyles from './helpers/getViewportFlexStyles';
import getChildrenMargin from './helpers/getChildrenMargin';

const StyledStack = styled(({ className, element: Element, children, dataTest, onClick }) => (
  <Element className={className} data-test={dataTest} onClick={onClick}>
    {children}
  </Element>
))`
  // just apply all mediaQueries
  // smallMobile - default values are not mediaQuery and needs to be rendered differently
  ${props =>
    DEVICES.map((viewport, index, devices) =>
      viewport in mediaQueries
        ? mediaQueries[viewport](css`
            ${isDefined(props[viewport]) && getViewportFlexStyles(viewport)};
            ${getChildrenMargin({ viewport, index, devices })}
          `)
        : viewport === 'smallMobile' &&
          css`
            ${getViewportFlexStyles(viewport)};
            ${getChildrenMargin({ viewport, index, devices })}
          `,
    )};
`;

StyledStack.defaultProps = {
  theme: defaultTheme,
};

const Stack = (props: StackProps) => {
  const {
    dataTest,
    inline = false,
    spacing = SPACINGS.NATURAL,
    align = ALIGNS.START,
    justify = JUSTIFY.START,
    grow = true,
    wrap = false,
    shrink = false,
    basis,
    spaceAfter,
    children,
    mediumMobile,
    largeMobile,
    tablet,
    desktop,
    largeDesktop,
    element = 'div',
    onClick,
  } = props;

  // turn on FLEX automatically or manually with prop flex
  const flex = shouldUseFlex(props);

  // when flex - use direction, otherwise column because it's block element
  const direction = props.direction || (flex ? DIRECTIONS.ROW : DIRECTIONS.COLUMN);

  const smallMobile = {
    direction,
    align,
    justify,
    wrap,
    grow,
    basis,
    inline,
    shrink,
    spacing,
    spaceAfter,
  };

  return (
    <StyledStack
      dataTest={dataTest}
      flex={flex}
      smallMobile={smallMobile}
      mediumMobile={mediumMobile}
      largeMobile={largeMobile}
      tablet={tablet}
      desktop={desktop}
      largeDesktop={largeDesktop}
      element={element}
      onClick={onClick}>
      {children}
    </StyledStack>
  );
};
export default Stack;
