import { SIZE_OPTIONS, TOKENS } from '../consts';

const getSizeToken: ButtonGetSizeToken = name => ({ theme, size }) => {
  const tokens = {
    [TOKENS.heightButton]: {
      [SIZE_OPTIONS.LARGE]: theme.jajiga.heightButtonLarge,
      [SIZE_OPTIONS.NORMAL]: theme.jajiga.heightButtonNormal,
      [SIZE_OPTIONS.SMALL]: theme.jajiga.heightButtonSmall,
    },
    [TOKENS.loadingWidth]: {
      [SIZE_OPTIONS.LARGE]: theme.jajiga.widthIconMedium,
      [SIZE_OPTIONS.NORMAL]: theme.jajiga.widthIconMedium,
      [SIZE_OPTIONS.SMALL]: theme.jajiga.widthIconSmall,
    },
    [TOKENS.loadingHeight]: {
      [SIZE_OPTIONS.LARGE]: theme.jajiga.heightIconMedium,
      [SIZE_OPTIONS.NORMAL]: theme.jajiga.heightIconMedium,
      [SIZE_OPTIONS.SMALL]: theme.jajiga.heightIconSmall,
    },
    [TOKENS.fontSizeButton]: {
      [SIZE_OPTIONS.LARGE]: theme.jajiga.fontSizeButtonLarge,
      [SIZE_OPTIONS.NORMAL]: theme.jajiga.fontSizeButtonNormal,
      [SIZE_OPTIONS.SMALL]: theme.jajiga.fontSizeButtonSmall,
    },
  };
  return tokens[name][size];
};

export default getSizeToken;
