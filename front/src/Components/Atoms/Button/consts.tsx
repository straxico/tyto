export const TYPE_OPTIONS = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  INFO: 'info',
  SUCCESS: 'success',
  WARNING: 'warning',
  CRITICAL: 'critical',
  FACEBOOK: 'facebook',
  GOOGLE: 'google',
  WHITE: 'white',
  TRANSPARENT: 'transparent',
};

export const SIZE_OPTIONS = {
  SMALL: 'small',
  NORMAL: 'normal',
  LARGE: 'large',
};

export const TOKENS = {
  // Size tokens
  heightButton: 'heightButton' as ButtonSizeTokenName,
  loadingWidth: 'loadingWidth' as ButtonSizeTokenName,
  loadingHeight: 'loadingHeight' as ButtonSizeTokenName,
  fontSizeButton: 'fontSizeButton' as ButtonSizeTokenName,
  //
  paddingButton: 'paddingButton',
  paddingButtonWithIcons: 'paddingButtonWithIcons',
  paddingButtonWithLeftIcon: 'paddingButtonWithLeftIcon',
  paddingButtonWithRightIcon: 'paddingButtonWithRightIcon',
  marginRightIcon: 'marginRightIcon',
  // Type tokens
  backgroundButton: 'backgroundButton' as ButtonTypeTokenName,
  backgroundButtonHover: 'backgroundButtonHover' as ButtonTypeTokenName,
  backgroundButtonActive: 'backgroundButtonActive' as ButtonTypeTokenName,
  backgroundButtonActiveShadow: 'backgroundButtonActiveShadow' as ButtonTypeTokenName,
  backgroundButtonBordered: 'backgroundButtonBordered' as ButtonTypeTokenName,
  backgroundButtonBorderedHover: 'backgroundButtonBorderedHover' as ButtonTypeTokenName,
  backgroundButtonBorderedActive: 'backgroundButtonBorderedActive' as ButtonTypeTokenName,
  colorTextButton: 'colorTextButton' as ButtonTypeTokenName,
  colorTextButtonBordered: 'colorTextButtonBordered' as ButtonTypeTokenName,
  colorTextButtonHover: 'colorTextButtonHover' as ButtonTypeTokenName,
  colorTextButtonBorderedHover: 'colorTextButtonBorderedHover' as ButtonTypeTokenName,
  colorTextButtonActive: 'colorTextButtonActive' as ButtonTypeTokenName,
  colorTextButtonBorderedActive: 'colorTextButtonBorderedActive' as ButtonTypeTokenName,
  borderColorButton: 'borderColorButton' as ButtonTypeTokenName,
  borderColorButtonHover: 'borderColorButtonHover' as ButtonTypeTokenName,
  borderColorButtonActive: 'borderColorButtonActive' as ButtonTypeTokenName,
};

export const BUTTON_STATES = {
  DEFAULT: 'default' as ButtonBoxShadowState,
  HOVER: 'hover' as ButtonBoxShadowState,
  ACTIVE: 'active' as ButtonBoxShadowState,
  FOCUS: 'focus' as ButtonBoxShadowState,
};
