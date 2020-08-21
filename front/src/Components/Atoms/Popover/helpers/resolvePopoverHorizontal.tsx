import { css } from 'styled-components';

import { ALIGNS } from '../consts';

const resolvePopoverHorizontal: ResolvePopoverHorizontal = ({
  anchor,
  containerLeft,
  containerWidth,
  popoverWidth,
  theme,
}) => {
  if (anchor === ALIGNS.START) {
    // add abs for view popover in window
    return css`
      left: ${theme.rtl
        ? Math.floor(Math.abs(containerLeft + containerWidth - popoverWidth))
        : Math.floor(containerLeft)}px;
    `;
  }
  if (anchor === ALIGNS.END) {
    return css`
      left: ${Math.floor(containerLeft + containerWidth - popoverWidth)}px; /* TODO: use token */
    `;
  }
  return null;
};

export default resolvePopoverHorizontal;
