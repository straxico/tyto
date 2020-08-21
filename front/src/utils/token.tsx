import shadeColor from 'utils/common/shadeColor';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

export const defaultColors = {
  PrimaryColor: '#ff0000',
  SecondaryColor: '#6378f1',
  TertiaryColor: '#f6bf04',
};

export const viewPortToken: {
  mobile: Devices[];
  desktop: Devices[];
} = {
  mobile: ['smallMobile', 'mediumMobile', 'largeMobile'],
  desktop: ['largeDesktop', 'desktop', 'tablet'],
};

const jajigaTokens = {
  ...(defaultTokens as kiwiToken),
  // font size

  fontSizeHeadingTitle1: '26px',
  fontSizeHeadingTitle2: '22px',
  fontSizeHeadingTitle3: '16px',
  fontSizeHeadingTitle4: '14px',
  fontSizeHeadingTitle5: '12px',
  fontSizeHeadingDisplay: '40px',
  fontSizeHeadingDisplaySubtitle: '22px',
  fontSizeTextLarge: '16px',
  fontSizeTextNormal: '14px',
  fontSizeTextSmall: '12px',

  // Border radius
  borderRadiusCircle: '50%',
  borderRadiusNormal: '3px',
  borderRadiusLarge: '6px',
  borderRadiusSmall: '2px',
  borderRadiusBadge: '12px',
  // Breakpoints
  widthBreakpointMediumMobile: '414',
  widthBreakpointLargeMobile: '576',
  widthBreakpointTablet: '834', // mehran change 768 to 834
  widthBreakpointDesktop: '992',
  widthBreakpointLargeDesktop: '1200',

  fontFamily: 'JIS, arial',
  avatarSizeNormal: '60px', // M
  avatarSizeSmall: '32px', // M
  backgroundAvatar: '#FFFFFF', // M
  backgroundButtonPrimary: defaultColors.PrimaryColor, // skm
  backgroundButtonPrimaryActive: defaultColors.PrimaryColor, // skm
  backgroundButtonPrimaryActiveShadow: shadeColor(defaultColors.PrimaryColor, -20), // skm: new
  backgroundButtonPrimaryHover: shadeColor(defaultColors.PrimaryColor, -10), // skm
  backgroundButtonSecondary: defaultColors.SecondaryColor,
  backgroundButtonSecondaryHover: shadeColor(defaultColors.SecondaryColor, -10), // skm
  backgroundTooltip: defaultColors.SecondaryColor,
  backgroundTooltipLargeMobile: defaultColors.SecondaryColor,

  borderColorInputFocus: defaultColors.SecondaryColor,
  borderRadiusSwitch: '34px', // m
  colorTextPrimary: '#484848',
  colorTextButtonSecondary: 'white',
  colorTextButtonSecondaryHover: 'white',
  colorTextLinkPrimary: defaultColors.PrimaryColor,
  colorTextLinkSecondary: defaultColors.SecondaryColor,
  colorTextLinkGray: '#484848',

  heightButtonLarge: '46px', // skm
  heightButtonNormal: '42px', // skm
  heightButtonSmall: '38px', // skm
  widthIconLarge: '36px', // skm
  widthIconMedium: '22px', // skm
  widthIconSmall: '16px', // skm
  widthIconVerySmall: '8px',
  widthSvgXXLarge: '70px', // m
  widthSvgXLarge: '44px', // m
  widthSvgLarge: '26px', // m
  widthSvgMedium: '16px', // m
  widthSvgSmall: '14px', // m
  colorIconWhite: '#FFFFFF', // m

  paddingInputFile: '0 6px 0 0', // skm
};

const defaultTheme = { jajiga: jajigaTokens, rtl: true };
export default defaultTheme;
