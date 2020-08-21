import { rtlSpacing } from 'utils/rtl/index';
import { SIZE_OPTIONS, TOKENS } from '../consts';

const getIconSpacing: ButtonGetIconSpacing = () => ({ theme, left, size, onlyIcon }) => {
  if (onlyIcon) {
    return null;
  }
  const tokens = {
    [TOKENS.marginRightIcon]: {
      [SIZE_OPTIONS.LARGE]: theme.jajiga.marginButtonIconLarge,
      [SIZE_OPTIONS.NORMAL]: theme.jajiga.marginButtonIconNormal,
      [SIZE_OPTIONS.SMALL]: theme.jajiga.marginButtonIconSmall,
    },
  };

  return rtlSpacing(
    left
      ? `0 0 0 ${tokens[TOKENS.marginRightIcon][size]}`
      : `0 ${tokens[TOKENS.marginRightIcon][size]} 0 0`,
  )({ theme });
};

export default getIconSpacing;
