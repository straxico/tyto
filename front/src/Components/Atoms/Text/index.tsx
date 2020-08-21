import defaultTheme from 'utils/token';
import { textAlign } from 'utils/rtl';
import React from 'react';
import styled from 'styled-components';
import getSpacingToken from 'utils/common/getSpacingToken';
import {
  TYPE_OPTIONS,
  WEIGHT_OPTIONS,
  ELEMENT_OPTIONS,
  ALIGN_OPTIONS,
  SIZE_OPTIONS,
} from './consts';
import { getLinkStyle, StyledTextLink } from '../TextLink';
import { TYPE_OPTIONS as TEXTLINK_TYPE_OPTIONS } from '../TextLink/consts';

const getTypeToken = ({ theme, type }) => {
  const typeTokens = {
    [TYPE_OPTIONS.PRIMARY]: theme.jajiga.colorTextPrimary,
    [TYPE_OPTIONS.SECONDARY]: theme.jajiga.colorTextSecondary,
    [TYPE_OPTIONS.INFO]: theme.jajiga.colorTextInfo,
    [TYPE_OPTIONS.SUCCESS]: theme.jajiga.colorTextSuccess,
    [TYPE_OPTIONS.WARNING]: theme.jajiga.colorTextWarning,
    [TYPE_OPTIONS.CRITICAL]: theme.jajiga.colorTextCritical,
    [TYPE_OPTIONS.WHITE]: theme.jajiga.colorTextWhite,
  };
  return typeTokens[type];
};

const getWeightToken = ({ theme, weight }) => {
  const weightTokens = {
    [WEIGHT_OPTIONS.NORMAL]: theme.jajiga.fontWeightNormal,
    [WEIGHT_OPTIONS.BOLD]: theme.jajiga.fontWeightBold,
  };
  return weightTokens[weight];
};

const getSizeToken = ({ theme, size }) => {
  const sizeTokens = {
    [SIZE_OPTIONS.LARGE]: theme.jajiga.fontSizeTextLarge,
    [SIZE_OPTIONS.NORMAL]: theme.jajiga.fontSizeTextNormal,
    [SIZE_OPTIONS.SMALL]: theme.jajiga.fontSizeTextSmall,
  };
  return sizeTokens[size];
};

const getLineHeightToken = ({ theme, size }) => {
  const lineHeightTokens = {
    [SIZE_OPTIONS.LARGE]: theme.jajiga.lineHeightTextLarge,
    [SIZE_OPTIONS.NORMAL]: theme.jajiga.lineHeightTextNormal,
    [SIZE_OPTIONS.SMALL]: theme.jajiga.lineHeightTextSmall,
  };
  return lineHeightTokens[size];
};

export const StyledText = styled(({ element: TextElement, children, className, dataTest, id }) => (
  <TextElement className={className} data-test={dataTest} id={id}>
    {children}
  </TextElement>
))`
  font-size: ${getSizeToken};
  font-weight: ${getWeightToken};
  color: ${getTypeToken};
  line-height: ${getLineHeightToken};
  text-align: ${({ align }) => textAlign(align)};
  text-transform: ${({ uppercase }) => uppercase && `uppercase`};
  font-style: ${({ italic }) => italic && `italic`};
  margin: 0;
  margin-bottom: ${getSpacingToken};
  a:not(${StyledTextLink}) {
    // TextLink in Text always win
    ${({ theme }) =>
      getLinkStyle({ theme, type: TEXTLINK_TYPE_OPTIONS.PRIMARY })} // Get styles from TextLink
  }
`;

StyledText.defaultProps = {
  theme: defaultTheme,
};

const Text = ({
  type = TYPE_OPTIONS.PRIMARY as TextTypeAtom,
  size = SIZE_OPTIONS.NORMAL as TextSize,
  weight = WEIGHT_OPTIONS.NORMAL as TextWeight,
  align = ALIGN_OPTIONS.LEFT as TextAlignAtom,
  element = ELEMENT_OPTIONS.P as TextElement,
  uppercase = false,
  italic = false,
  spaceAfter,
  children,
  id,
  className,
}: TextProps) => {
  return (
    <StyledText
      id={id}
      type={type}
      size={size}
      weight={weight}
      align={align}
      element={element}
      uppercase={uppercase}
      italic={italic}
      spaceAfter={spaceAfter}
      className={className}>
      {children}
    </StyledText>
  );
};

export default Text;
