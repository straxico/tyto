import React from 'react';
import styled from 'styled-components';

import defaultTheme from 'utils/token';
import { rtlSpacing, left, right } from 'utils/rtl';
import Icon from 'Atoms/Icon';
import { SIZES, STATES } from './consts';

const getFontSize = ({ theme, size }) => {
  const tokens = {
    [SIZES.SMALL]: theme.jajiga.fontSizeTextSmall,
    [SIZES.NORMAL]: theme.jajiga.fontSizeTextNormal,
  };

  return tokens[size];
};

const getBackgroundColor = state => ({ selected, theme }) => {
  const states = {
    [STATES.DEFAULT]: selected ? theme.jajiga.backgroundTagSelected : theme.jajiga.backgroundTag,
    [STATES.HOVER]: selected
      ? theme.jajiga.backgroundTagSelectedHover
      : theme.jajiga.backgroundTagHover,
    [STATES.ACTIVE]: selected
      ? theme.jajiga.backgroundTagSelectedActive
      : theme.jajiga.backgroundTagActive,
  };
  return states[state];
};

const getSpacing = ({ icon, removable, theme }) => {
  const padding =
    (removable && icon && theme.jajiga.paddingTagRemovableWithIcon) ||
    (removable && !icon && theme.jajiga.paddingTagRemovable) ||
    (!removable && icon && theme.jajiga.paddingTagWithIcon) ||
    (!removable && !icon && theme.jajiga.paddingTag);
  return rtlSpacing(padding);
};

export const StyledTag = styled.div<{ selected; size; icon; removable }>`
  color: ${({ theme, selected }) =>
    selected ? theme.jajiga.colorTextTagSelected : theme.jajiga.colorTextTag};
  background: ${getBackgroundColor(STATES.DEFAULT)};
  display: inline-flex;
  cursor: pointer;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  font-size: ${getFontSize};
  font-weight: ${({ theme }) => theme.jajiga.fontWeightMedium};
  border-radius: ${({ theme }) => theme.jajiga.borderRadiusNormal};
  box-shadow: ${({ theme, selected }) =>
    !selected && `inset 0 0 0 1px ${theme.jajiga.borderColorTag}`};
  padding: ${getSpacing};
  transition: color ${({ theme }) => theme.jajiga.durationFast} ease-in-out,
    box-shadow ${({ theme }) => theme.jajiga.durationFast} ease-in-out,
    background ${({ theme }) => theme.jajiga.durationFast} ease-in-out;

  &:hover {
    background: ${getBackgroundColor(STATES.HOVER)};
    box-shadow: none;
  }

  &:active {
    background: ${getBackgroundColor(STATES.ACTIVE)};
    box-shadow: none;
  }

  &:focus {
    box-shadow: ${({ theme }) => `inset 0 0 0 2px ${theme.jajiga.borderColorTagFocus}`};
    outline: 0;
  }
`;

StyledTag.defaultProps = {
  theme: defaultTheme,
};

const IconContainer = styled.div<{ right?: boolean }>`
  display: flex;
  margin-${right}: 8px;

  svg {
    height: ${({ theme }) => theme.jajiga.widthIconSmall};
    width: ${({ theme }) => theme.jajiga.heightIconSmall};
  }
`;

IconContainer.defaultProps = {
  theme: defaultTheme,
};

const CloseContainer = styled.div<{ left?: boolean }>`
  display: flex;
  margin-${left}: 8px;
  color: ${({ theme }) => theme.jajiga.paletteInkLighter};
  cursor: pointer;
  transition: color ${({ theme }) => theme.jajiga.durationFast} ease-in-out;
  
  &:hover {
    color: ${({ theme }) => theme.jajiga.paletteInkLighterHover};
  }
  &:active {
    color: ${({ theme }) => theme.jajiga.paletteInkLighterActive};
  }
`;

CloseContainer.defaultProps = {
  theme: defaultTheme,
};

const StyledClose = styled.div`
  display: flex;
  border-radius: 100%;

  &:focus {
    outline: none;
    box-shadow: 0px 0 0px 2px ${({ theme }) => theme.jajiga.paletteCloudNormalActive};
  }
`;
StyledClose.defaultProps = {
  theme: defaultTheme,
};

const Tag = (props: TagProps) => {
  const { icon, selected, children, size = SIZES.NORMAL, onClick, onRemove, dataTest } = props;

  return (
    <StyledTag
      data-test={dataTest}
      size={size}
      onClick={onClick}
      removable={!!onRemove}
      selected={selected}
      icon={!!icon}>
      {icon && (
        <IconContainer>
          <Icon iconName={icon} />
        </IconContainer>
      )}
      {children}
      {(!!onRemove || selected) && (
        <CloseContainer
          onClick={ev => {
            ev.stopPropagation();
            if (onRemove) {
              onRemove();
            }
          }}>
          <StyledClose tabIndex={0} role="button">
            <Icon iconName="cross-mark" size="small" />
          </StyledClose>
        </CloseContainer>
      )}
    </StyledTag>
  );
};

export default Tag;
