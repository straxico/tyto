type SvgIconSize = 'small' | 'normal' | 'large' | 'xlarge' | 'xxlarge';

type SvgIconType = Globals & {
  size?: SvgIconSize;
  color?: IconColor;
  className?: string;
  customColor?: string;
  children: any;
  viewBox?: string;
  ariaHidden?: boolean;
  reverseOnRtl?: boolean;
  ariaLabel?: string;
};
