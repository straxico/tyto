import { SIZES, TOKENS } from '../consts';

const getSizeToken: ButtonLinkGetSizeToken = name => ({ theme, size }) => {
  const tokens = {
    [TOKENS.heightButton]: {
      [SIZES.LARGE]: theme.jajiga.heightButtonLarge,
      [SIZES.NORMAL]: theme.jajiga.heightButtonNormal,
      [SIZES.SMALL]: theme.jajiga.heightButtonSmall,
    },
    [TOKENS.fontSizeButton]: {
      [SIZES.LARGE]: theme.jajiga.fontSizeButtonLarge,
      [SIZES.NORMAL]: theme.jajiga.fontSizeButtonNormal,
      [SIZES.SMALL]: theme.jajiga.fontSizeButtonSmall,
    },
  };
  return tokens[name][size];
};

export default getSizeToken;
