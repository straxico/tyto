import React from 'react';
import styled, { css } from 'styled-components';

import media, { getBreakpointWidth } from 'utils/mediaQuery';
import defaultTheme from 'utils/token';
import { rtlSpacing } from 'utils/rtl';
import { QUERIES } from 'utils/mediaQuery/consts';
import { StyledButton } from '../../Button';
import { StyledButtonLink } from '../../ButtonLink';
import { withModalContext } from '../ModalContext';

const StyledChild = styled.div<{ flex }>`
  flex: ${({ flex }) => flex};
  box-sizing: border-box;
  padding: ${({ theme }) => rtlSpacing(`0 ${theme.jajiga.spaceMedium} 0 0`)};

  ${media.largeMobile(css`
    flex: none;
  `)};
`;

StyledChild.defaultProps = {
  theme: defaultTheme,
};

export const StyledModalFooter = styled.div<{ isMobileFullPage }>`
  display: flex;
  z-index: 800; // TODO: use z-index framework
  width: 100%;
  background-color: ${({ theme }) => theme.jajiga.paletteWhite};
  // TODO: create token paddingModalFooter
  padding: ${({ theme }) => rtlSpacing(`0 ${theme.jajiga.spaceMedium} ${theme.jajiga.spaceMedium}`)};
  box-sizing: border-box;
  // TODO: create token boxShadowActionableInverted
  transition: box-shadow ${({ theme }) => theme.jajiga.durationFast} ease-in-out;

  @media (max-width: ${({ theme }) =>
      +getBreakpointWidth(QUERIES.LARGEMOBILE, theme, true) - 1}px) {
    ${StyledButton}, ${StyledButtonLink} {
      font-size: ${({ theme }) => theme.jajiga.fontSizeButtonNormal};
      height: ${({ theme }) => theme.jajiga.heightButtonNormal};
    }
  }

  ${media.largeMobile(css<{ children; isMobileFullPage }>`
    justify-content: ${({ children }) => (children.length > 1 ? 'space-between' : 'flex-end')};
    // TODO: create token paddingModalFooterDesktop
    border-bottom-left-radius: ${({ isMobileFullPage }) => !isMobileFullPage && '9px'};
    border-bottom-right-radius: ${({ isMobileFullPage }) => !isMobileFullPage && '9px'};
  `)};

  ${StyledChild}:last-of-type {
    padding: 0;
  }
`;

StyledModalFooter.defaultProps = {
  theme: defaultTheme,
};

class ModalFooterComp extends React.PureComponent<ModalFooterProps> {
  componentDidMount() {
    this.callContextFunctions();
  }

  componentDidUpdate(prevProps: ModalFooterProps) {
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

  renderWrappedChildren = () => {
    const { children, flex = '0 1 auto' } = this.props;

    const getChildFlex = key =>
      Array.isArray(flex) && flex.length !== 1 ? flex[key] || flex[0] : flex;
    return React.Children.map(children, (child, key) => {
      if (child) {
        return (
          <StyledChild flex={getChildFlex(key)}>
            {React.cloneElement(child, {
              ref: node => {
                // Call the original ref, if any
                const { ref } = child;
                if (typeof ref === 'function') {
                  ref(node);
                } else if (ref !== null) {
                  ref.current = node;
                }
              },
            })}
          </StyledChild>
        );
      }
      return null;
    });
  };

  render() {
    const { children, dataTest, isMobileFullPage } = this.props;
    return (
      <StyledModalFooter data-test={dataTest} isMobileFullPage={isMobileFullPage}>
        {Array.isArray(children) ? this.renderWrappedChildren() : children}
      </StyledModalFooter>
    );
  }
}

const ModalFooter = withModalContext(ModalFooterComp);

export default ModalFooter;
