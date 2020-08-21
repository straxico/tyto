import { css } from 'styled-components';
// TODO convert to local lib
// import convertHexToRgba from '@kiwicom/jajiga-design-tokens/lib/convertHexToRgba';
import { BUTTON_STATES } from '../consts';

const convertHexToRgba = (e, b) => e;

const getButtonLinkBoxShadow: GetButtonLinkBoxShadow = state => ({
  theme,
  disabled,
  transparent,
}) => {
  if (disabled) {
    return null;
  }
  if (state === BUTTON_STATES.ACTIVE && !transparent) {
    return css`
      box-shadow: inset 0 0 6px 3px ${convertHexToRgba(theme.jajiga.paletteInkNormal, 8)};
      // TODO: token
    `;
  }
  if (state === BUTTON_STATES.FOCUS) {
    return css`
      box-shadow: 0 0 1px 1px ${theme.jajiga.colorTextButtonWhiteBordered},
        0 0 1px 3px ${convertHexToRgba(theme.jajiga.paletteBlueNormal, 60)}; // TODO: Create token
      ${!transparent &&
        css`
          &:active {
            box-shadow: inset 0 0 6px 3px ${convertHexToRgba(theme.jajiga.paletteInkNormal, 8)};
          }
        `};
    `;
  }
  return null;
};

export default getButtonLinkBoxShadow;
