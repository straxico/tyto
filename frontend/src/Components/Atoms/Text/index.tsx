import React from 'react';
import styled from 'styled-components';
import defaultTheme from 'utils/token';
import { textAlign } from 'utils/rtl';

import {
  TYPE_OPTIONS,
  WEIGHT_OPTIONS,
  ELEMENT_OPTIONS,
  ALIGN_OPTIONS,
  SIZE_OPTIONS,
} from './consts';

const getTypeToken = () => ({ theme, type }) => {
  const typeTokens = {
    [TYPE_OPTIONS.PRIMARY]: theme.jajiga.colorTextPrimary,
    [TYPE_OPTIONS.SECONDARY]: theme.jajiga.colorTextSecondary,
    [TYPE_OPTIONS.ATTENTION]: theme.jajiga.colorTextAttention,
    [TYPE_OPTIONS.INFO]: theme.jajiga.colorTextInfo,
    [TYPE_OPTIONS.SUCCESS]: theme.jajiga.colorTextSuccess,
    [TYPE_OPTIONS.WARNING]: theme.jajiga.colorTextWarning,
    [TYPE_OPTIONS.CRITICAL]: theme.jajiga.colorTextCritical,
    [TYPE_OPTIONS.WHITE]: theme.jajiga.colorTextWhite,
  };
  return typeTokens[type];
};

const getWeightToken = () => ({ theme, weight }) => {
  const weightTokens = {
    [WEIGHT_OPTIONS.NORMAL]: theme.jajiga.fontWeightNormal,
    [WEIGHT_OPTIONS.BOLD]: theme.jajiga.fontWeightBold,
  };
  return weightTokens[weight];
};

const getSizeToken = () => ({ theme, size }) => {
  const sizeTokens = {
    [SIZE_OPTIONS.LARGE]: theme.jajiga.fontSizeTextLarge,
    [SIZE_OPTIONS.NORMAL]: theme.jajiga.fontSizeTextNormal,
    [SIZE_OPTIONS.SMALL]: theme.jajiga.fontSizeTextSmall,
  };
  return sizeTokens[size];
};

export const StyledText = styled(({ element: TextElement, children, className, id }) => (
  <TextElement className={className} id={id}>
    {children}
  </TextElement>
))`
  font-size: ${getSizeToken()};
  font-weight: ${getWeightToken()};
  color: ${getTypeToken()};
  text-align: ${({ align }) => textAlign(align)};
  line-height: ${({ theme }) => theme.jajiga.lineHeightText};
  text-transform: ${({ uppercase }) => uppercase && `uppercase`};
  font-style: ${({ italic }) => italic && `italic`};
  margin: 0;
`;

StyledText.defaultProps = {
  theme: defaultTheme,
};

const Text = ({
  type = TYPE_OPTIONS.PRIMARY as AtomTextType,
  size = SIZE_OPTIONS.NORMAL as AtomTextSize,
  weight = WEIGHT_OPTIONS.NORMAL as AtomTextWeight,
  align = ALIGN_OPTIONS.LEFT as AtomTextAlign,
  element = ELEMENT_OPTIONS.P as AtomTextElement,
  italic = false,
  children,
  className,
  id,
}: AtomTextProps) => {
  return (
    <StyledText
      id={id}
      type={type}
      size={size}
      weight={weight}
      align={align}
      element={element}
      className={className}
      italic={italic}>
      {children}
    </StyledText>
  );
};

export default Text;
