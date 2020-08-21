import { css } from 'styled-components';

import { isPositionBottom, isPositionLeft, isPositionRight, isPositionTop } from './isPosition';
import { TOOLTIP_ARROW_SIZE } from '../consts';

const resolveTooltipArrowPosition = ({ position }: ResolveTooltipArrowPositionProps) => {
  const cssPosition =
    (isPositionTop(position) && 'bottom') ||
    (isPositionBottom(position) && 'top') ||
    (isPositionLeft(position) && 'right') ||
    (isPositionRight(position) && 'left');
  return css`
    ${cssPosition}: -${TOOLTIP_ARROW_SIZE}px; // TODO: use token sizeTooltipArrow
  `;
};

export default resolveTooltipArrowPosition;
