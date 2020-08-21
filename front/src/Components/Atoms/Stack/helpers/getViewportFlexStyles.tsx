import { css } from 'styled-components';

import getSpacingToken from 'utils/common/getSpacingToken/index';
import getJustify from './getJustify';
import getDirection from './getDirection';
import getWidth from './getWidth';
import getDisplay from './getDisplay';
import getShrink from './getShrink';
import getWrap from './getWrap';
import getGrow from './getGrow';
import getAlign from './getAlign';

const getViewportFlexStyles: StackGetViewportFlexStyles = viewport => props => {
  const { flex, theme } = props;
  const { inline, direction, wrap, grow, shrink, basis, justify, align, spaceAfter } = props[
    viewport
  ];

  return css`
    ${flex &&
      css`
        display: ${getDisplay(inline)};
        flex-direction: ${getDirection(direction)};
        flex-wrap: ${getWrap(wrap)};
        flex-grow: ${getGrow(grow)};
        flex-shrink: ${getShrink(shrink)};
        flex-basis: ${basis};
        justify-content: ${getJustify(justify)};
        align-content: ${getAlign(align)};
        align-items: ${getAlign(align)};
      `};
    width: ${getWidth(inline)};
    margin-bottom: ${getSpacingToken({ spaceAfter, theme })};
  `;
};

export default getViewportFlexStyles;
