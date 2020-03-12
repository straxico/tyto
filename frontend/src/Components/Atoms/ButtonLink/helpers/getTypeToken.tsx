import { TOKENS, TYPES } from '../consts';

const getTypeToken: ButtonLinkGetTypeToken = name => ({ theme, type }) => {
  const tokens = {
    [TOKENS.backgroundButton]: {
      [TYPES.PRIMARY]: theme.jajiga.backgroundButtonLinkPrimary,
      [TYPES.SECONDARY]: theme.jajiga.backgroundButtonLinkSecondary,
    },
    [TOKENS.backgroundButtonHover]: {
      [TYPES.PRIMARY]: theme.jajiga.backgroundButtonLinkPrimaryHover,
      [TYPES.SECONDARY]: theme.jajiga.backgroundButtonLinkSecondaryHover,
    },
    [TOKENS.backgroundButtonActive]: {
      [TYPES.PRIMARY]: theme.jajiga.backgroundButtonLinkPrimaryHover,
      [TYPES.SECONDARY]: theme.jajiga.backgroundButtonLinkSecondaryHover,
    },
    [TOKENS.colorTextButton]: {
      [TYPES.PRIMARY]: theme.jajiga.colorTextButtonLinkPrimary,
      [TYPES.SECONDARY]: theme.jajiga.colorTextButtonLinkSecondary,
    },
    [TOKENS.colorTextButtonHover]: {
      [TYPES.PRIMARY]: theme.jajiga.colorTextButtonLinkPrimaryHover,
      [TYPES.SECONDARY]: theme.jajiga.colorTextButtonLinkSecondaryHover,
    },
    [TOKENS.colorTextButtonActive]: {
      [TYPES.PRIMARY]: theme.jajiga.colorTextButtonLinkPrimaryActive,
      [TYPES.SECONDARY]: theme.jajiga.colorTextButtonLinkSecondaryActive,
    },
  };

  return tokens[name][type];
};

export default getTypeToken;
