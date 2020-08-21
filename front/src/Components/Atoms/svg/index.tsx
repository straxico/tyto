import React from 'react';
import styled, { css } from 'styled-components';
import { ICON_COLORS } from 'Atoms/Icon/consts';
import defaultTheme from 'utils/token';
import { getColor } from 'Atoms/Icon';
import { SVG_ICON_SIZES } from './consts';

export const getSize: IconGetSize = size => ({ theme }) => {
  const tokens = {
    [SVG_ICON_SIZES.SMALL]: theme.jajiga.widthSvgSmall,
    [SVG_ICON_SIZES.MEDIUM]: theme.jajiga.widthSvgMedium,
    [SVG_ICON_SIZES.LARGE]: theme.jajiga.widthSvgLarge,
    [SVG_ICON_SIZES.XLARGE]: theme.jajiga.widthSvgXLarge,
    [SVG_ICON_SIZES.XXLARGE]: theme.jajiga.widthSvgXXLarge,
  };
  return tokens[size] || tokens[SVG_ICON_SIZES.MEDIUM];
};

const reverse = ({ reverseOnRtl, theme }) =>
  reverseOnRtl &&
  theme.rtl &&
  css`
    transform: scale(-1, 1);
  `;

const StyledSvgIcon = styled(
  ({ className, viewBox, dataTest, children, ariaHidden, ariaLabel }) => (
    <svg
      className={className}
      viewBox={viewBox}
      data-test={dataTest}
      preserveAspectRatio="xMidYMid meet"
      aria-hidden={ariaHidden ? 'true' : undefined}
      aria-label={ariaLabel}>
      {children}
    </svg>
  ),
)`
  width: ${({ size }) => getSize(size)};
  height: ${({ size }) => getSize(size)};
  flex-shrink: 0; // prevent shrinking when used in flex-box
  vertical-align: middle;
  fill: currentColor;
  color: ${({ color, customColor }) => customColor || (color && getColor())};
  ${reverse};
`;

StyledSvgIcon.defaultProps = {
  theme: defaultTheme,
};

const SvgIcon = (props: SvgIconType) => {
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
    <StyledSvgIcon
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
    </StyledSvgIcon>
  );
};

SvgIcon.defaultProps = {
  size: SVG_ICON_SIZES.MEDIUM,
};

export default SvgIcon;
