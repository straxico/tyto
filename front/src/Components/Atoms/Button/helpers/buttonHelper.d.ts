type ButtonBoxShadowState = 'default' | 'focus' | 'active' | 'hover';
type ButtongetButtonBoxShadow = (
  state: ButtonBoxShadowState,
) => ({
  disabled,
  bordered,
  theme,
  type,
}: {
  disabled: boolean;
  bordered: boolean;
  theme: Theme;
  type: ButtonType;
}) => FlattenInterpolation<ThemeProps<any>>;
// .......................................
type ButtonTypeTokenName =
  | 'backgroundButton'
  | 'backgroundButtonHover'
  | 'backgroundButtonActive'
  | 'backgroundButtonBordered'
  | 'backgroundButtonBorderedHover'
  | 'backgroundButtonBorderedActive'
  | 'colorTextButton'
  | 'colorTextButtonBordered'
  | 'colorTextButtonHover'
  | 'colorTextButtonBorderedHover'
  | 'colorTextButtonActive'
  | 'colorTextButtonBorderedActive'
  | 'borderColorButton'
  | 'borderColorButtonHover'
  | 'borderColorButtonActive';

type GetTypeToken = (
  name: ButtonTypeTokenName,
) => (arg0: ThemeProps & { type: ButtonType }) => string;
// ................................
type ButtongetButtonSpacing = () => ({
  theme,
  onlyIcon,
  iconRight,
  iconLeft,
  size,
}: {
  theme: Theme;
  onlyIcon: boolean;
  iconRight?: any;
  iconLeft?: any;
  size: ButtonSize;
}) => string;
// ............................
type ButtonGetIconSpacing = () => (
  arg0: ThemeProps & { left: boolean; size: ButtonSize; onlyIcon: boolean },
) => string | null;
// ............................
type ButtonSizeTokenName = 'heightButton' | 'loadingWidth' | 'loadingHeight' | 'fontSizeButton';
type ButtonGetSizeToken = (
  name: ButtonSizeTokenName,
) => (arg0: ThemeProps & { size: ButtonSize }) => string;
