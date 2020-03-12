type ButtonLinkTypeTokenName =
  | 'backgroundButton'
  | 'backgroundButtonHover'
  | 'backgroundButtonActive'
  | 'colorTextButton'
  | 'colorTextButtonHover'
  | 'colorTextButtonActive';

type ButtonLinkGetTypeToken = (
  name: ButtonLinkTypeTokenName,
) => (arg0: ThemeProps & { type: ButtonLinkType }) => string;
// .....................................................
type ButtonLinkTokenName = 'heightButton' | 'fontSizeButton';

type ButtonLinkGetSizeToken = (
  name: ButtonLinkTokenName,
) => (
  arg0: ThemeProps & {
    size: ButtonLinkSize;
  },
) => string;
// ......................................
type ButtonLinkGetIconSpacing = () => (
  arg0: ThemeProps & {
    right: boolean;
    onlyIcon: boolean;
    size: ButtonLinkSize;
  },
) => string | null;
// .....................................
type GetButtonLinkSpacing = () => (
  arg0: ThemeProps &
    ButtonLinkProps & {
      onlyIcon: boolean;
      size: ButtonLinkSize;
    },
) => string;
// .......................................
type ButtonLinkBoxShadowState = 'active' | 'focus';

type GetButtonLinkBoxShadow = (
  state: ButtonLinkBoxShadowState,
) => (arg0: ThemeProps & ButtonLinkProps) => FlattenInterpolation<ThemeProps<any>>;
