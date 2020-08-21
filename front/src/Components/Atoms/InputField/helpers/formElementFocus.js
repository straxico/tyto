import { css } from 'styled-components';
import convertHexToRgba from '@kiwicom/orbit-design-tokens/lib/convertHexToRgba';

const formElementFocus = () => css`
  box-shadow: ${({ theme, error }) =>
    error
      ? // TODO: UPDATE TOKENS ==> `${theme.jajiga.borderWidthInputFocus} ${theme.jajiga.borderColorInputFocus}`
        `inset 0 0 0 1px ${theme.jajiga.paletteRedNormal}, 0 0 0 3px ${convertHexToRgba(
          theme.jajiga.paletteRedNormal,
          15,
        )};`
      : `inset 0 0 0 1px ${theme.jajiga.borderColorInputFocus}, 0 0 0 0px ${convertHexToRgba(
          theme.jajiga.borderColorInputFocus,
          15,
        )};`};
`;

export default formElementFocus;
