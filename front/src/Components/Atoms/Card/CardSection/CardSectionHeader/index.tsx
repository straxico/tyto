import React from 'react';
import styled, { css } from 'styled-components';

import defaultTheme from 'utils/token';
import { left } from 'utils/rtl/index';
import media from 'utils/mediaQuery';
import Icon from 'Atoms/Icon';
import { CardSectionContext } from '../index';
import { getSize } from '../../../Icon/index';
import { ICON_SIZES } from '../../../Icon/consts';

const StyledCardSectionIconRight = styled(Icon)`
  align-self: center;
  transition: ${({ theme }) => theme.jajiga.durationFast};
`;

StyledCardSectionIconRight.defaultProps = {
  theme: defaultTheme,
};

export const StyledCardSectionHeader = styled.div<{ expandable; expanded }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  transition: margin ${({ theme }) => theme.jajiga.durationFast} linear;
  cursor: ${({ expandable }) => expandable && 'pointer'};
  position: relative;
  min-height: ${({ expandable }) => expandable && getSize(ICON_SIZES.MEDIUM as IconSize)};
  margin: ${({ theme }) => `-${theme.jajiga.spaceMedium}`};
  padding: ${({ theme }) => theme.jajiga.spaceMedium};
  margin-bottom: ${({ expanded }) => expanded && 0};
  
  ${media.desktop(css<{ expanded }>`
    padding: ${({ theme }) => theme.jajiga.spaceLarge};
    margin: ${({ theme }) => `-${theme.jajiga.spaceLarge}`};
    margin-bottom: ${({ expanded }) => expanded && 0};
  `)}


  &:hover {
    background: ${({ theme, expandable }) => expandable && theme.jajiga.paletteWhiteHover};
  }

  ${StyledCardSectionIconRight} {
    transform: ${({ expanded }) => expanded && 'rotate(-180deg)'};
    margin-${left}: ${({ theme }) => theme.jajiga.spaceMedium};
  }
  &:focus {
    background: ${({ theme, expandable }) => expandable && theme.jajiga.paletteWhiteHover};
    outline: none;
  }

 
`;

StyledCardSectionHeader.defaultProps = {
  theme: defaultTheme,
};

const StyledCardSectionButtons = styled.div`
  margin-${left}: ${({ theme }) => theme.jajiga.spaceLarge};
`;

StyledCardSectionButtons.defaultProps = {
  theme: defaultTheme,
};

const StyledCardSectionHeaderContent = styled.div<{ expandable }>`
  flex: 1;
`;

StyledCardSectionHeaderContent.defaultProps = {
  theme: defaultTheme,
};

const CardSectionHeader = ({ children, actions }: CardSectionHeaderProps) => (
  <CardSectionContext.Consumer>
    {({ expandable, expanded, handleToggleSection, onKeyDownHandler }) => (
      <StyledCardSectionHeader
        expandable={expandable}
        expanded={expanded}
        onClick={expandable && handleToggleSection}
        aria-expanded={expandable && expanded}
        role={expandable && 'button'}
        tabIndex={expandable && 0}
        onKeyDown={onKeyDownHandler}>
        <StyledCardSectionHeaderContent expandable={expandable}>
          {children}
        </StyledCardSectionHeaderContent>
        {actions && <StyledCardSectionButtons>{actions}</StyledCardSectionButtons>}
        {!actions && expandable && <StyledCardSectionIconRight size="normal" color="secondary" />}
      </StyledCardSectionHeader>
    )}
  </CardSectionContext.Consumer>
);

export default CardSectionHeader;
