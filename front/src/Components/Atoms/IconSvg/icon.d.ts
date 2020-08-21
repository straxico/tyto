type IconSize = 'small' | 'normal' | 'large';

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
};

type IconGetSize = (size: IconSize) => ({ theme: defaultTheme }) => string;
