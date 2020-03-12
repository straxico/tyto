import * as React from 'react';
import styled, { css } from 'styled-components';

import defaultTheme from 'utils/token';
import { rtlSpacing } from 'utils/rtl';
import media from 'utils/mediaQuery';
import Heading, { StyledHeading } from '../../Heading';
import Text from '../../Text';

export const StyledCardHeader = styled.div`
  position: relative;
  width: 100%;
  padding: ${({ theme }) => theme.jajiga.spaceMedium};
  box-sizing: border-box;
  color: ${({ theme }) => theme.jajiga.colorHeading};

  ${media.desktop(css`
    padding: ${({ theme }) => theme.jajiga.spaceLarge};
  `)}
`;

StyledCardHeader.defaultProps = {
  theme: defaultTheme,
};

const StyledHeadingWrapper = styled.div`
  display: flex;
  align-items: center;

  ${StyledHeading} {
    width: 100%;
  }
`;

const StyledSubTitle = styled.div`
  display: flex;
  margin-top: ${({ theme }) => theme.jajiga.spaceXXSmall};
`;

StyledSubTitle.defaultProps = {
  theme: defaultTheme,
};

const StyledIcon = styled.div`
  color: ${({ theme }) => theme.jajiga.colorHeading};
  display: flex;
  align-items: center;
  margin: ${({ theme }) => rtlSpacing(`0 ${theme.jajiga.spaceSmall} 0 0`)};
`;

StyledIcon.defaultProps = {
  theme: defaultTheme,
};

const CardHeader = ({
  icon,
  title,
  subTitle,
  actions,
  dataTest,
  dataA11ySection,
}: CardHeaderProps) => (
  <StyledCardHeader data-test={dataTest}>
    <StyledHeadingWrapper>
      {icon && <StyledIcon>{icon}</StyledIcon>}
      <Heading type="title3" element="h2" dataA11ySection={dataA11ySection}>
        {title}
      </Heading>
      {actions}
    </StyledHeadingWrapper>
    {subTitle && (
      <StyledSubTitle>
        <Text>{subTitle}</Text>
      </StyledSubTitle>
    )}
  </StyledCardHeader>
);
CardHeader.displayName = 'CardHeader';
export default CardHeader;
