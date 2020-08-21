type ButtonType =
  | 'primary'
  | 'secondary'
  | 'info'
  | 'success'
  | 'warning'
  | 'critical'
  | 'facebook'
  | 'google'
  | 'white'
  | 'transparent';

type ButtonSize = 'small' | 'normal' | 'large';

type ButtonProps = Globals &
  Ref &
  spaceAfter & {
    children?: React$Node;
    component?: Component;
    href?: string;
    id?: string;
    className?: string;
    onClick?: (e: React.SyntheticEvent<HTMLButtonElement>) => void | Promise<any>;
    external?: boolean;
    circled?: boolean;
    bordered?: boolean;
    disabled?: boolean;
    fullwidth?: boolean;
    loading?: boolean;
    type?: ButtonType;
    size?: ButtonSize;
    width?: number;
    submit?: boolean;
    icon?: IconName;
    iconLeft?: IconName;
    iconRight?: IconName;
    tabIndex?: string;
    ariaExpanded?: boolean;
    ariaControls?: string;
    role?: string;
    title?: string;
    transparent?: any;
  };

type ButtonGroupProps = Globals & {
  children: React$Node;
};
