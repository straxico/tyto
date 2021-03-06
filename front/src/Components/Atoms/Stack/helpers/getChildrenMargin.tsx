import { css } from 'styled-components';

import { rtlSpacing } from 'utils/rtl';
import { QUERIES } from 'utils/mediaQuery/consts';
import getDesktopSpacing from './getDesktopSpacing';
import { SPACINGS } from '../consts';
import isMobileViewport from './isMobileViewport';
import getMobileSpacing from './getMobileSpacing';
import getProperty from './getProperty';
import getDirectionSpacingTemplate from './getDirectionSpacingTemplate';

const getChildrenMargin: StackGetChildrenMargin = ({ viewport, index, devices }) => props => {
  if (props[viewport] || viewport === QUERIES.DESKTOP) {
    const spacing = getProperty('spacing', { index, devices }, props);
    if (spacing === SPACINGS.NONE) return false;
    const isMobile = isMobileViewport(viewport);
    const spacingTokens = isMobile ? getMobileSpacing() : getDesktopSpacing();
    const direction = getProperty('direction', { index, devices }, props);
    const margin =
      spacing &&
      direction &&
      String(getDirectionSpacingTemplate(direction)).replace('__spacing__', spacingTokens[spacing]);
    return css`
      & > * {
        margin: ${margin && rtlSpacing(margin)}!important;
        ${isMobile &&
          css`
            &:last-child {
              margin: 0 !important;
            }
          `};
      }
    `;
  }
  return false;
};

export default getChildrenMargin;
