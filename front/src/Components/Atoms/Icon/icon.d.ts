type IconSize = 'small' | 'normal' | 'large' | 'verySmall';

type IconColor =
  | 'attention'
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'info'
  | 'success'
  | 'warning'
  | 'critical'
  | 'white';

type IconProps = Globals & {
  size?: IconSize;
  color?: IconColor;
  iconName?: IconName;
  className?: string;
  customColor?: string;
  children?: React$Node;
  viewBox?: string;
  ariaHidden?: boolean;
  reverseOnRtl?: boolean;
  ariaLabel?: string;
  dataId?: number;
};

type IconGetSize = (size: IconSize) => ({ theme: defaultTheme }) => string;
type IconNull = '';
