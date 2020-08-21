import { rtlSpacing } from 'utils/rtl';
import { SIZES, TOKENS } from '../consts';

const getIconSpacing: ButtonLinkGetIconSpacing = () => ({ theme, right, size, onlyIcon }) => {
  if (onlyIcon) {
    return null;
  }
  const tokens = {
    [TOKENS.marginRightIcon]: {
      [SIZES.LARGE]: theme.jajiga.marginButtonIconLarge,
      [SIZES.NORMAL]: theme.jajiga.marginButtonIconNormal,
      [SIZES.SMALL]: theme.jajiga.marginButtonIconSmall,
    },
  };
  return rtlSpacing(
    right
      ? `0 0 0 ${tokens[TOKENS.marginRightIcon][size]}`
      : `0 ${tokens[TOKENS.marginRightIcon][size]} 0 0`,
  )({ theme });
};

export default getIconSpacing;
