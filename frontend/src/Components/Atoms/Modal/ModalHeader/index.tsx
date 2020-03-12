import React from 'react';
import styled, { css } from 'styled-components';

import defaultTheme from 'utils/token';
import media from 'utils/mediaQuery';
import { left, right, rtlSpacing } from 'utils/rtl';
import Text from '../../Text';
import Heading, { StyledHeading } from '../../Heading';
import { StyledModalSection } from '../ModalSection';
import { withModalContext } from '../ModalContext';

const ModalTitle = styled.div<{ illustration }>`
  // TODO: create token marginModalTitle and marginModalTitleWithIllustration
  margin-top: ${({ theme, illustration }) => illustration && theme.jajiga.spaceXSmall};
  
  ${StyledHeading} {
    padding-${right}: ${({ theme }) => theme.jajiga.spaceXLarge};
  }
  ${media.desktop(css`
    ${StyledHeading} {
      padding: 0;
    }
  `)};
`;

ModalTitle.defaultProps = {
  theme: defaultTheme,
};

const ModalDescription = styled.div`
  margin-top: ${({ theme }) => theme.jajiga.spaceXSmall};
`;

ModalDescription.defaultProps = {
  theme: defaultTheme,
};

export const StyledModalHeader = styled.div<{ illustration; suppressed; isMobileFullPage }>`
  width: 100%;
  display: block;
  padding: ${({ theme, illustration, suppressed }) =>
    rtlSpacing(
      (illustration &&
        suppressed &&
        `${theme.jajiga.spaceXLarge} ${theme.jajiga.spaceMedium} ${theme.jajiga.spaceLarge} ${theme.jajiga.spaceMedium}`) ||
        (illustration &&
          !suppressed &&
          `${theme.jajiga.spaceXLarge} ${theme.jajiga.spaceMedium} 0 ${theme.jajiga.spaceMedium}`) ||
        (!illustration &&
          suppressed &&
          `${theme.jajiga.spaceLarge} ${theme.jajiga.spaceMedium} ${theme.jajiga.spaceLarge} ${theme.jajiga.spaceMedium}`) ||
        `${theme.jajiga.spaceLarge} ${theme.jajiga.spaceMedium} 0 ${theme.jajiga.spaceMedium}`,
    )};
  border-top-left-radius: ${({ isMobileFullPage }) =>
    !isMobileFullPage && '9px'}; // TODO: create token
  border-top-right-radius: ${({ isMobileFullPage }) =>
    !isMobileFullPage && '9px'}; // TODO: create token
  box-sizing: border-box;
  background-color: ${({ suppressed, theme }) =>
    suppressed ? theme.jajiga.paletteCloudLight : theme.jajiga.paletteWhite};

  & ~ ${StyledModalSection}:first-of-type {
    border-top: ${({ suppressed, theme }) =>
      suppressed && `1px solid ${theme.jajiga.paletteCloudNormal}`};
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    margin-top: ${({ suppressed }) => suppressed && '0!important'};
  }

  ${media.largeMobile(css<{ illustration; suppressed }>`
    padding: ${({ theme, illustration, suppressed }) =>
      rtlSpacing(
        illustration
          ? `${theme.jajiga.spaceXLarge} ${theme.jajiga.spaceXXLarge} ${
              suppressed ? theme.jajiga.spaceXXLarge : '0'
            } ${theme.jajiga.spaceXXLarge}`
          : `${theme.jajiga.spaceXXLarge} ${theme.jajiga.spaceXXLarge} ${
              suppressed ? theme.jajiga.spaceXXLarge : '0'
            } ${theme.jajiga.spaceXXLarge}`,
      )};

    & ~ ${StyledModalSection}:first-of-type {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  `)};
`;

StyledModalHeader.defaultProps = {
  theme: defaultTheme,
};

export const MobileHeader = styled.div<{ isMobileFullPage }>`
  display: inline-block;
  position: fixed;
  visibility: hidden;
  height: 52px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  // TODO use token for 52px
  top: ${({ isMobileFullPage }) => (isMobileFullPage ? '0' : '16px')};
  ${right}: 48px;
  ${left}: 0;
  font-family: ${({ theme }) => theme.jajiga.fontFamily};
  font-weight: ${({ theme }) => theme.jajiga.fontWeightHeadingDisplay};
  // TODO create token
  font-size: 18px;
  color: ${({ theme }) => theme.jajiga.colorHeading};
  // TODO use token for 52px
  line-height: 52px;
  box-sizing: border-box;
  padding: ${({ theme }) => rtlSpacing(`0 0 0 ${theme.jajiga.spaceLarge}`)};
  opacity: 0;
  transition: top ${({ theme }) => theme.jajiga.durationFast} ease-in-out,
    opacity ${({ theme }) => theme.jajiga.durationFast} ease-in-out,
    visibility ${({ theme }) => theme.jajiga.durationFast} ease-in-out;
  z-index: 800;

  ${media.largeMobile(css`
    left: auto;
    right: auto;
    padding: 0;
  `)};
`;

MobileHeader.defaultProps = {
  theme: defaultTheme,
};

const StyledModalHeaderContent = styled.div<{ description }>`
  margin-top: ${({ description }) => (description ? '32px' : '16px')};
`;

class ModalHeaderComp extends React.PureComponent<ModalHeaderProps> {
  componentDidMount() {
    this.callContextFunctions();
  }

  componentDidUpdate(prevProps: ModalHeaderProps) {
    if (prevProps !== this.props) {
      this.callContextFunctions();

      const { manageFocus } = this.props;

      if (manageFocus) {
        manageFocus();
      }
    }
  }

  callContextFunctions = () => {
    const { setDimensions, decideFixedFooter } = this.props;
    if (setDimensions) {
      setDimensions();
    }
    if (decideFixedFooter) {
      decideFixedFooter();
    }
  };

  render() {
    const {
      title,
      illustration,
      description,
      children,
      suppressed,
      dataTest,
      isMobileFullPage,
    } = this.props;
    const hasHeader = title || description;
    return (
      <StyledModalHeader
        illustration={!!illustration}
        suppressed={suppressed}
        data-test={dataTest}
        isMobileFullPage={isMobileFullPage}>
        {illustration}
        {hasHeader && (
          <ModalTitle illustration={!!illustration}>
            {title && <Heading type="title1">{title}</Heading>}
            {description && (
              <ModalDescription>
                <Text size="large" element="div">
                  {description}
                </Text>
              </ModalDescription>
            )}
          </ModalTitle>
        )}
        {children && (
          <StyledModalHeaderContent description={!!description}>
            {children}
          </StyledModalHeaderContent>
        )}
        {title && <MobileHeader isMobileFullPage={isMobileFullPage}>{title}</MobileHeader>}
      </StyledModalHeader>
    );
  }
}
const ModalHeader = withModalContext(ModalHeaderComp);

export default ModalHeader;
