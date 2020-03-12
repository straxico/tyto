import { rtlSpacing } from 'utils/rtl';
import { SIZE_OPTIONS } from 'Atoms/Button/consts';
import { TOKENS } from '../consts';

const getButtonLinkSpacing: GetButtonLinkSpacing = () => ({
  theme,
  onlyIcon,
  iconRight,
  iconLeft,
  size,
}) => {
  if (onlyIcon) return rtlSpacing(theme.jajiga.paddingButtonWithoutText)({ theme });
  const tokens = {
    [TOKENS.paddingButton]: {
      [SIZE_OPTIONS.LARGE]: theme.jajiga.paddingButtonLarge,
      [SIZE_OPTIONS.NORMAL]: theme.jajiga.paddingButtonNormal,
      [SIZE_OPTIONS.SMALL]: theme.jajiga.paddingButtonSmall,
    },
    [TOKENS.paddingButtonWithIcons]: {
      [SIZE_OPTIONS.LARGE]: theme.jajiga.paddingButtonLargeWithIcons,
      [SIZE_OPTIONS.NORMAL]: theme.jajiga.paddingButtonNormalWithIcons,
      [SIZE_OPTIONS.SMALL]: theme.jajiga.paddingButtonSmallWithIcons,
    },
    [TOKENS.paddingButtonWithLeftIcon]: {
      [SIZE_OPTIONS.LARGE]: theme.jajiga.paddingButtonLargeWithLeftIcon,
      [SIZE_OPTIONS.NORMAL]: theme.jajiga.paddingButtonNormalWithLeftIcon,
      [SIZE_OPTIONS.SMALL]: theme.jajiga.paddingButtonSmallWithLeftIcon,
    },
    [TOKENS.paddingButtonWithRightIcon]: {
      [SIZE_OPTIONS.LARGE]: theme.jajiga.paddingButtonLargeWithRightIcon,
      [SIZE_OPTIONS.NORMAL]: theme.jajiga.paddingButtonNormalWithRightIcon,
      [SIZE_OPTIONS.SMALL]: theme.jajiga.paddingButtonSmallWithRightIcon,
    },
  };
  if (iconLeft && iconRight) {
    return rtlSpacing(tokens[TOKENS.paddingButtonWithIcons][size])({ theme });
  }
  if (iconLeft && !iconRight) {
    return rtlSpacing(tokens[TOKENS.paddingButtonWithLeftIcon][size])({ theme });
  }
  if (!iconLeft && iconRight) {
    return rtlSpacing(tokens[TOKENS.paddingButtonWithRightIcon][size])({ theme });
  }
  return rtlSpacing(tokens[TOKENS.paddingButton][size])({ theme });
};

export default getButtonLinkSpacing;
