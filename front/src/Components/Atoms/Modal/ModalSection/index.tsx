import React from 'react';
import styled, { css } from 'styled-components';

import defaultTheme from 'utils/token';
import media from 'utils/mediaQuery';
import { StyledModalFooter } from '../ModalFooter';
import { withModalContext } from '../ModalContext';

export const StyledModalSection = styled.section<{ suppressed; isMobileFullPage }>`
  width: 100%;
  padding: ${({ theme }) => `${theme.jajiga.spaceLarge} ${theme.jajiga.spaceMedium}`};
  background-color: ${({ theme, suppressed }) =>
    suppressed ? theme.jajiga.paletteCloudLight : theme.jajiga.paletteWhite};
  border-bottom: 1px solid ${({ theme }) => theme.jajiga.paletteCloudNormal};
  box-sizing: border-box;

  &:first-of-type {
    border-top: ${({ suppressed, theme }) =>
      suppressed && `1px solid ${theme.jajiga.paletteCloudNormal}`};
    border-top-left-radius: ${({ isMobileFullPage }) =>
      !isMobileFullPage && '9px'}; // TODO: create token
    border-top-right-radius: ${({ isMobileFullPage }) =>
      !isMobileFullPage && '9px'}; // TODO: create token
    margin-top: ${({ suppressed, theme }) => suppressed && theme.jajiga.spaceLarge};
  }

  &:last-of-type {
    border-bottom: ${({ suppressed, theme }) =>
      suppressed ? `1px solid ${theme.jajiga.paletteCloudNormal}` : '0'};
    border-bottom-left-radius: ${({ isMobileFullPage }) =>
      !isMobileFullPage && '9px'}; // TODO: create token
    border-bottom-right-radius: ${({ isMobileFullPage }) =>
      !isMobileFullPage && '9px'}; // TODO: create token
    & ~ ${StyledModalFooter} {
      margin-top: ${({ theme, suppressed }) => suppressed && theme.jajiga.spaceMedium};
    }
    &:not(:last-child) {
      border-radius: 0;
    }
  }

  ${media.largeMobile(css<{ suppressed }>`
    padding: ${({ theme }) => theme.jajiga.spaceXXLarge};

    &:first-of-type {
      margin-top: ${({ suppressed, theme }) => suppressed && theme.jajiga.spaceXXLarge};
    }
    &:last-of-type {
      & ~ ${StyledModalFooter} {
        padding-top: ${({ suppressed }) => !suppressed && '0'};
        margin-top: 0;
      }
    }
  `)};
`;

StyledModalSection.defaultProps = {
  theme: defaultTheme,
};

class ModalSectionComp extends React.PureComponent<ModalSectionProps> {
  componentDidMount() {
    const { setHasModalSection } = this.props;
    this.callContextFunctions();
    if (setHasModalSection) {
      setHasModalSection();
    }
  }

  componentDidUpdate(prevProps: ModalSectionProps) {
    if (prevProps !== this.props) {
      this.callContextFunctions();
      const { setHasModalSection, manageFocus } = this.props;

      if (setHasModalSection) {
        setHasModalSection();
      }

      if (manageFocus) {
        manageFocus();
      }
    }
  }

  componentWillUnmount() {
    const { removeHasModalSection } = this.props;
    this.callContextFunctions();
    if (removeHasModalSection) {
      removeHasModalSection();
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
    const { suppressed, children, dataTest, isMobileFullPage } = this.props;
    return (
      <StyledModalSection
        suppressed={suppressed}
        data-test={dataTest}
        isMobileFullPage={isMobileFullPage}>
        {children}
      </StyledModalSection>
    );
  }
}

const ModalSection = withModalContext(ModalSectionComp);

export default ModalSection;
