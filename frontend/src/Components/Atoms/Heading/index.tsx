import React from 'react';
import styled from 'styled-components';

import defaultTheme from 'utils/token';
import getSpacingToken from 'utils/common/getSpacingToken';
import { getBreakpointWidth } from 'utils/mediaQuery';
import { QUERIES } from 'utils/mediaQuery/consts';
import { ELEMENT_OPTIONS, TYPE_OPTIONS, TOKENS } from './consts';

export const getHeadingToken: GetHeadingToken = name => ({ theme, type }) => {
  const tokens = {
    [TOKENS.weightHeading]: {
      [TYPE_OPTIONS.DISPLAY]: theme.jajiga.fontWeightHeadingDisplay,
      [TYPE_OPTIONS.DISPLAYSUBTITLE]: theme.jajiga.fontWeightHeadingDisplaySubtitle,
      [TYPE_OPTIONS.TITLE1]: theme.jajiga.fontWeightHeadingTitle1,
      [TYPE_OPTIONS.TITLE2]: theme.jajiga.fontWeightHeadingTitle2,
      [TYPE_OPTIONS.TITLE3]: theme.jajiga.fontWeightHeadingTitle3,
      [TYPE_OPTIONS.TITLE4]: theme.jajiga.fontWeightHeadingTitle4,
      [TYPE_OPTIONS.TITLE5]: theme.jajiga.fontWeightHeadingTitle5,
    },
    [TOKENS.sizeHeading]: {
      [TYPE_OPTIONS.DISPLAY]: theme.jajiga.fontSizeHeadingDisplay,
      [TYPE_OPTIONS.DISPLAYSUBTITLE]: theme.jajiga.fontSizeHeadingDisplaySubtitle,
      [TYPE_OPTIONS.TITLE1]: theme.jajiga.fontSizeHeadingTitle1,
      [TYPE_OPTIONS.TITLE2]: theme.jajiga.fontSizeHeadingTitle2,
      [TYPE_OPTIONS.TITLE3]: theme.jajiga.fontSizeHeadingTitle3,
      [TYPE_OPTIONS.TITLE4]: theme.jajiga.fontSizeHeadingTitle4,
      [TYPE_OPTIONS.TITLE5]: theme.jajiga.fontSizeHeadingTitle5,
    },
    [TOKENS.lineHeight]: {
      [TYPE_OPTIONS.DISPLAY]: theme.jajiga.lineHeightHeadingDisplay,
      [TYPE_OPTIONS.DISPLAYSUBTITLE]: theme.jajiga.lineHeightHeadingDisplaySubtitle,
      [TYPE_OPTIONS.TITLE1]: theme.jajiga.lineHeightHeadingTitle1,
      [TYPE_OPTIONS.TITLE2]: theme.jajiga.lineHeightHeadingTitle2,
      [TYPE_OPTIONS.TITLE3]: theme.jajiga.lineHeightHeadingTitle3,
      [TYPE_OPTIONS.TITLE4]: theme.jajiga.lineHeightHeadingTitle4,
      [TYPE_OPTIONS.TITLE5]: theme.jajiga.lineHeightHeadingTitle5,
    },
  };

  return tokens[name][type];
};

export const StyledHeading = styled(
  ({ element: Component, className, children, dataTest, dataA11ySection, id }) => (
    <Component
      className={className}
      data-test={dataTest}
      data-a11y-section={dataA11ySection}
      id={id}>
      {children}
    </Component>
  ),
)`
  font-size: ${getHeadingToken(TOKENS.sizeHeading)};
  font-weight: ${getHeadingToken(TOKENS.weightHeading)};
  color: ${({ theme, inverted }) =>
    inverted ? theme.jajiga.colorHeadingInverted : theme.jajiga.colorHeading};
  line-height: ${getHeadingToken(TOKENS.lineHeight)};
  text-transform: ${({ type }) => type === TYPE_OPTIONS.TITLE5 && 'uppercase'};
  margin: 0;
  margin-bottom: ${getSpacingToken};
  
  @media (max-width: ${({ theme }) =>
    +getBreakpointWidth(QUERIES.LARGEMOBILE, theme, true) - 1}px) {
      font-size: ${({ theme, type }) =>
        // TODO change 2/3 to token
        
        Math.round((parseInt(getHeadingToken(TOKENS.sizeHeading)({ theme, type }), 10) * 2) / 3)}px;
}

}
`;

StyledHeading.defaultProps = {
  theme: defaultTheme,
};

const Heading = ({
  children,
  type = TYPE_OPTIONS.TITLE1 as HeadingType,
  element = ELEMENT_OPTIONS.H1 as HeadingElement,
  dataTest,
  inverted = false,
  spaceAfter,
  dataA11ySection,
  id,
}: HeadingProps) => (
  <StyledHeading
    id={id}
    type={type}
    element={element}
    inverted={inverted}
    dataTest={dataTest}
    spaceAfter={spaceAfter}
    dataA11ySection={dataA11ySection}>
    {children}
  </StyledHeading>
);

export default Heading;
