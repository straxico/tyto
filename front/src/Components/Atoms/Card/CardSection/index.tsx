import React from 'react';
import styled, { css } from 'styled-components';

import defaultTheme from 'utils/token';
import media from 'utils/mediaQuery';
import Icon, { getSize } from '../../Icon';

import { ICON_SIZES } from '../../Icon/consts';

const StyledCardSectionIconRight = styled(Icon)`
  align-self: center;
  transition: ${({ theme }) => theme.jajiga.durationFast};
`;

StyledCardSectionIconRight.defaultProps = {
  theme: defaultTheme,
};

const StyledCardSectionContent = styled.div<{ expanded }>`
  font-family: ${({ theme }) => theme.jajiga.fontFamily};
  font-size: ${({ theme }) => theme.jajiga.fontSizeTextNormal};
  line-height: ${({ theme }) => theme.jajiga.lineHeightText};
  color: ${({ theme }) => theme.jajiga.colorTextPrimary};
  border-top: ${({ theme, expanded }) =>
    expanded
      ? `1px solid ${theme.jajiga.paletteCloudNormal}`
      : `0px solid ${theme.jajiga.paletteCloudNormal}`};
  padding-top: ${({ theme, expanded }) => expanded && `${theme.jajiga.spaceMedium}`};
  overflow: hidden;
`;

StyledCardSectionContent.defaultProps = {
  theme: defaultTheme,
};

export const StyledCardSection = styled.div<{ expandable; expanded }>`
  width: 100%;
  padding: ${({ theme }) => theme.jajiga.spaceMedium};
  box-sizing: border-box;
  position: relative;
  background: ${({ theme }) => theme.jajiga.backgroundCard};

  ${media.desktop(css`
    padding: ${({ theme }) => theme.jajiga.spaceLarge};
  `)}
`;

StyledCardSection.defaultProps = {
  theme: defaultTheme,
};

const StyledCardSectionHeader = styled.div<{ expanded; expandable }>`
  margin-bottom: ${({ theme, expanded }) => expanded && theme.jajiga.spaceMedium};
  display: flex;
  flex-direction: row;
  cursor: pointer;
  position: relative;
  min-height: ${({ expandable }) => expandable && getSize(ICON_SIZES.MEDIUM as IconSize)};
`;

StyledCardSectionHeader.defaultProps = {
  theme: defaultTheme,
};

export const CardSectionContext: React.Context<any> = React.createContext({
  expandable: false,
  expanded: false,
  handleToggleSection: () => {},
  onKeyDownHandler: () => {},
});

class CardSection extends React.Component<any, CardSectionProps> {
  componentDidMount() {
    const { handleToggleSection, initialExpanded, setInitialExpandedSection } = this.props;

    if (initialExpanded) {
      handleToggleSection();
      setInitialExpandedSection();
    }
  }

  injectCallbackAndToggleSection = () => {
    const { handleToggleSection, onClose, onExpand, expanded } = this.props;
    handleToggleSection(); // First do toggle

    if (expanded && onClose) {
      // If is expanded -> action is closing
      onClose();
    }
    if (!expanded && onExpand) {
      // if is closed > action is expanding
      onExpand();
    }
  };

  handleKeyDown = ev => {
    if (ev.keyCode === 13 || ev.keyCode === 32) {
      ev.preventDefault();

      this.injectCallbackAndToggleSection();
    }
  };

  render() {
    const { children, dataTest, expandable, expanded } = this.props;
    return (
      <StyledCardSection data-test={dataTest} expandable={expandable} expanded={expanded}>
        <CardSectionContext.Provider
          value={{
            expandable,
            expanded,
            handleToggleSection: this.injectCallbackAndToggleSection,
            onKeyDownHandler: this.handleKeyDown,
          }}>
          {children}
        </CardSectionContext.Provider>
      </StyledCardSection>
    );
  }
}

export default CardSection;

export { default as CardSectionHeader } from './CardSectionHeader';
export { default as CardSectionContent } from './CardSectionContent';
