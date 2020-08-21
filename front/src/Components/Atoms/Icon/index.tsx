import React from 'react';
import styled, { css } from 'styled-components';
import defaultTheme from 'utils/token';
import { ICON_SIZES, ICON_COLORS } from './consts';

export const getSize: IconGetSize = size => ({ theme }) => {
  const tokens = {
    [ICON_SIZES.VERYSMALL]: theme.jajiga.widthIconVerySmall,
    [ICON_SIZES.SMALL]: theme.jajiga.widthIconSmall,
    [ICON_SIZES.MEDIUM]: theme.jajiga.widthIconMedium,
    [ICON_SIZES.LARGE]: theme.jajiga.widthIconLarge,
  };
  return tokens[size] || tokens[ICON_SIZES.MEDIUM];
};

export const getColor = () => ({ theme, color }) => {
  const tokens = {
    [ICON_COLORS.ATTENTION]: theme.jajiga.colorIconAttention,
    [ICON_COLORS.PRIMARY]: theme.jajiga.colorIconPrimary,
    [ICON_COLORS.SECONDARY]: theme.jajiga.colorIconSecondary,
    [ICON_COLORS.TERTIARY]: theme.jajiga.colorIconTertiary,
    [ICON_COLORS.INFO]: theme.jajiga.colorIconInfo,
    [ICON_COLORS.SUCCESS]: theme.jajiga.colorIconSuccess,
    [ICON_COLORS.WARNING]: theme.jajiga.colorIconWarning,
    [ICON_COLORS.CRITICAL]: theme.jajiga.colorIconCritical,
    [ICON_COLORS.WHITE]: theme.jajiga.colorIconWhite,
  };
  return tokens[color];
};

const reverse = ({ reverseOnRtl, theme }) =>
  reverseOnRtl &&
  theme.rtl &&
  css`
    transform: scale(-1, 1);
  `;

export const StyledIcon = styled(
  ({ className, iconName, children, ariaHidden, ariaLabel, dataId }) => (
    <i
      className={`icon_${iconName} ${className}`}
      aria-hidden={ariaHidden ? 'true' : undefined}
      aria-label={ariaLabel}
      data-id={dataId}>
      {children}
    </i>
  ),
)`
  line-height: 1;
  display: inline-block;
  text-align: center;
  color: ${({ color, customColor }) => customColor || (color && getColor())};
  &:before {
    font: normal normal normal 14px/1 icon;
    font-size: ${({ size }) => getSize(size)};
    vertical-align: middle;
  }

  ${reverse};
`;

StyledIcon.defaultProps = {
  theme: defaultTheme,
};

const Icon = ({
  size,
  color,
  customColor,
  className,
  iconName,
  children,
  ariaHidden,
  reverseOnRtl,
  ariaLabel,
  dataId,
}: IconProps) => {
  return (
    <StyledIcon
      size={size}
      iconName={iconName || 'home'}
      className={className}
      customColor={customColor}
      color={color}
      ariaHidden={ariaHidden}
      reverseOnRtl={reverseOnRtl}
      ariaLabel={ariaLabel}
      dataId={dataId}>
      {children}
    </StyledIcon>
  );
};

Icon.defaultProps = {
  size: ICON_SIZES.MEDIUM,
};

export default Icon;
