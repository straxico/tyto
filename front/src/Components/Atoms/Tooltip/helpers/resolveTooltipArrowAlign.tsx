import { css } from 'styled-components';

import { isHorizontal, isVertical } from './isPosition';
import { isAlignCenter, isAlignEnd, isAlignStart } from './isAlign';
import { TOOLTIP_ARROW_SIZE, TOOLTIP_PADDING } from '../consts';

// TODO: use tokens for 12px and 7px - paddings and sizeTooltipArrow
const resolveTooltipArrowAlign = ({
  position,
  align,
  tooltipWidth,
  tooltipHeight,
}: ResolveTooltipArrowAlignProps) => {
  if (isVertical(position)) {
    if (isAlignCenter(align)) {
      return css`
        left: ${Math.floor(tooltipWidth / 2 - TOOLTIP_ARROW_SIZE)}px; // TODO: use token
      `;
    }
    if (isAlignStart(align)) {
      return css`
        left: ${TOOLTIP_PADDING}px; // TODO: use token
      `;
    }
    if (isAlignEnd(align)) {
      return css`
        right: ${TOOLTIP_PADDING}px; // TODO: use token
      `;
    }
  } else if (isHorizontal(position)) {
    if (isAlignCenter(align)) {
      return css`
        top: ${Math.floor(tooltipHeight / 2 - TOOLTIP_ARROW_SIZE)}px; // TODO: use token
      `;
    }
    if (isAlignStart(align)) {
      return css`
        top: ${TOOLTIP_PADDING}px; // TODO: use token
      `;
    }
    if (isAlignEnd(align)) {
      return css`
        bottom: ${TOOLTIP_PADDING}px; // TODO: use token
      `;
    }
  }
  return null;
};

export default resolveTooltipArrowAlign;
