import { css } from 'styled-components';

import { isHorizontal, isVertical } from './isPosition';
import { isAlignCenter, isAlignEnd, isAlignStart } from './isAlign';
import { TOOLTIP_ARROW_SIZE, TOOLTIP_PADDING } from '../consts';

const resolveContainerAlign = ({
  align,
  position,
  containerTop,
  containerLeft,
  containerHeight,
  containerWidth,
  tooltipHeight,
  tooltipWidth,
}: resolveContainerAlignProp) => {
  if (isAlignCenter(align)) {
    if (isHorizontal(position)) {
      return css`
        top: ${Math.floor(containerTop + containerHeight / 2 - tooltipHeight / 2)}px;
      `;
    }
    if (isVertical(position)) {
      return css`
        left: ${Math.floor(containerLeft + containerWidth / 2 - tooltipWidth / 2)}px;
      `;
    }
    return null;
  }
  if (isAlignStart(align)) {
    if (isHorizontal(position)) {
      return css`
        top: ${Math.floor(containerTop - TOOLTIP_ARROW_SIZE)}px; // TODO: use token
      `;
    }
    if (isVertical(position)) {
      return css`
        left: ${Math.floor(
          containerLeft + containerWidth / 2 - TOOLTIP_PADDING - TOOLTIP_ARROW_SIZE,
        )}px; // TODO: use tokens
      `;
    }
  } else if (isAlignEnd(align)) {
    if (isHorizontal(position)) {
      return css`
        top: ${Math.floor(
          containerTop - tooltipHeight + containerHeight + TOOLTIP_ARROW_SIZE,
        )}px; // TODO: use token
      `;
    }
    if (isVertical(position)) {
      return css`
        left: ${Math.floor(
          containerLeft + containerWidth - tooltipWidth + TOOLTIP_ARROW_SIZE,
        )}px; // TODO: use token
      `;
    }
  }
  return null;
};

export default resolveContainerAlign;
