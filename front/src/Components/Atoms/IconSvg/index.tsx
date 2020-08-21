import React from 'react';
import styled, { css } from 'styled-components';

import { ICON_SIZES, ICON_COLORS } from 'Atoms/Icon/consts';
import defaultTheme from 'utils/token';

export const getSize: IconGetSize = size => ({ theme }) => {
  const tokens = {
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

const StyledIcon = styled(({ className, viewBox, dataTest, children, ariaHidden, ariaLabel }) => (
  <svg
    className={className}
    viewBox={viewBox}
    data-test={dataTest}
    preserveAspectRatio="xMidYMid meet"
    aria-hidden={ariaHidden ? 'true' : undefined}
    aria-label={ariaLabel}>
    {children}
  </svg>
))`
  width: ${({ size }) => getSize(size)};
  height: ${({ size }) => getSize(size)};
  flex-shrink: 0; // prevent shrinking when used in flex-box
  vertical-align: middle;
  fill: currentColor;
  color: ${({ color, customColor }) => customColor || (color && getColor())};
  ${reverse};
`;

StyledIcon.defaultProps = {
  theme: defaultTheme,
};

const OrbitIcon = (props: IconProps) => {
  const {
    size,
    color,
    customColor,
    className,
    children,
    viewBox,
    dataTest,
    ariaHidden,
    reverseOnRtl,
    ariaLabel,
  } = props;
  return (
    <StyledIcon
      viewBox={viewBox}
      size={size}
      className={className}
      dataTest={dataTest}
      customColor={customColor}
      color={color}
      ariaHidden={ariaHidden}
      reverseOnRtl={reverseOnRtl}
      ariaLabel={ariaLabel}>
      {children}
    </StyledIcon>
  );
};

OrbitIcon.defaultProps = {
  size: ICON_SIZES.MEDIUM,
};

export default OrbitIcon;
