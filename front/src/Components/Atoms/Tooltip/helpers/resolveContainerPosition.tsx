import { css } from 'styled-components';
import { isPositionBottom, isPositionTop, isPositionRight, isPositionLeft } from './isPosition';
import { TOOLTIP_ARROW_SIZE } from '../consts';

const resolveContainerPosition = ({
  position,
  containerTop,
  containerLeft,
  containerHeight,
  containerWidth,
  tooltipHeight,
  tooltipWidth,
}: resolveContainerPositionProps) => {
  if (isPositionTop(position)) {
    return css`
      top: ${Math.floor(containerTop - tooltipHeight - TOOLTIP_ARROW_SIZE)}px; // TODO: use token
    `;
  }
  if (isPositionBottom(position)) {
    return css`
      top: ${Math.floor(containerTop + containerHeight + TOOLTIP_ARROW_SIZE)}px; // TODO: use token
    `;
  }
  if (isPositionRight(position)) {
    return css`
      left: ${Math.floor(containerLeft + containerWidth + TOOLTIP_ARROW_SIZE)}px; // TODO: use token
    `;
  }
  if (isPositionLeft(position)) {
    return css`
      left: ${Math.floor(containerLeft - tooltipWidth - TOOLTIP_ARROW_SIZE)}px; // TODO: use token
    `;
  }
  return null;
};

export default resolveContainerPosition;
