import React, { useContext } from 'react';
import styled, { css } from 'styled-components';

import defaultTheme from 'utils/token';

import { rtlSpacing } from 'utils/rtl';
import Icon from 'Atoms/Icon';
import { SIZES, TYPES } from '../consts';
import { StyledText } from '../../Text';
import ListContext from '../ListContext';

export const getLineHeightToken = ({ theme, size }) => {
  const lineHeightTokens = {
    [SIZES.SMALL]: theme.jajiga.lineHeightTextSmall,
    [SIZES.NORMAL]: theme.jajiga.lineHeightTextNormal,
    [SIZES.LARGE]: theme.jajiga.lineHeightTextLarge,
  };
  return lineHeightTokens[size];
};

const getSizeTokenLabel = ({ theme, size }) => {
  const sizeTokens = {
    [SIZES.SMALL]: theme.jajiga.fontSizeTextSmall,
    [SIZES.NORMAL]: theme.jajiga.fontSizeTextSmall,
    [SIZES.LARGE]: theme.jajiga.fontSizeTextNormal,
  };
  return sizeTokens[size];
};

const getIconSizeFromType = ({ theme, type }) => {
  const tokens = {
    [TYPES.PRIMARY]: css`
      height: ${theme.jajiga.heightIconSmall};
      width: ${theme.jajiga.widthIconSmall};
    `,
    [TYPES.SECONDARY]: css`
      height: ${theme.jajiga.heightIconSmall};
      width: ${theme.jajiga.widthIconSmall};
    `,
    [TYPES.SEPARATED]: css`
      height: ${theme.jajiga.heightIconMedium};
      width: ${theme.jajiga.widthIconMedium};
    `,
  };
  return tokens[type];
};

export const Item = styled(({ type, theme, ...props }) => <li {...props} />)`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: ${({ theme }) => theme.jajiga.spaceXXSmall};
  &:last-child,
  &:last-of-type {
    margin: 0;
  }
  ${StyledText} {
    line-height: inherit;
    font-size: inherit;
  }
  ${({ type, theme }) =>
    type === TYPES.SEPARATED &&
    css`
      border-bottom: 1px solid ${theme.jajiga.paletteCloudDark};
      padding: ${theme.jajiga.spaceXSmall};
      &,
      ${StyledText} {
        font-weight: ${theme.jajiga.fontWeightMedium};
      }
      :last-child {
        border-bottom: none;
      }
    `}
`;

Item.defaultProps = {
  theme: defaultTheme,
};

const IconContainer = styled.div<{ type; size }>`
  display: flex;
  align-items: center;
  margin: ${({ theme, type }) =>
    rtlSpacing(
      `${type === TYPES.SEPARATED ? theme.jajiga.spaceXXSmall : 0} ${theme.jajiga.spaceXSmall} 0 0`,
    )};
  flex: 0 0 auto;
  height: ${({ theme, type, size }) =>
    type === TYPES.SEPARATED ? theme.heightIconLarge : getLineHeightToken({ theme, size })};
  // Icons
  i {
    ${getIconSizeFromType};
  }
`;

IconContainer.defaultProps = {
  theme: defaultTheme,
};

const StyledLabel = styled.div<{ size }>`
  font-weight: ${({ theme }) => theme.jajiga.fontWeightNormal};
  color: ${({ theme }) => theme.jajiga.colorTextSecondary};
  font-size: ${getSizeTokenLabel};
`;

const StyledSpan = styled.span`
  width: 100%;
`;

StyledLabel.defaultProps = {
  theme: defaultTheme,
};

const ListItem = ({ label, children, icon, dataTest, className, iconSize }: ListItemProps) => {
  const { size, type } = useContext(ListContext);
  return (
    <Item data-test={dataTest} type={type} className={className}>
      <IconContainer type={type} size={size}>
        {icon && <Icon iconName={icon} size={iconSize} />}
      </IconContainer>

      <StyledSpan>
        {label && <StyledLabel size={size}>{label}</StyledLabel>}
        {children}
      </StyledSpan>
    </Item>
  );
};

export default ListItem;
