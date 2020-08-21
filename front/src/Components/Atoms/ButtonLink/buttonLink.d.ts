type ButtonLinkType = 'primary' | 'secondary';
type ButtonLinkSize = 'small' | 'normal' | 'large';

type ButtonLinkProps = Globals &
  Ref &
  spaceAfter & {
    children?: React$Node;
    component?: Component;
    onClick?: (e: React.SyntheticEvent<HTMLButtonElement>) => void | Promise<any>;
    disabled?: boolean;
    fullwidth?: boolean;
    external?: boolean;
    type?: ButtonLinkType;
    size?: ButtonLinkSize;
    href?: string;
    width?: number;
    icon?: IconName;
    iconLeft?: IconName;
    iconRight?: IconName;
    circled?: boolean;
    submit?: boolean;
    transparent?: boolean;
    tabIndex?: string;
    ariaExpanded?: boolean;
    ariaControls?: string;
    role?: string;
    title?: string;
    className?: string;
  };
