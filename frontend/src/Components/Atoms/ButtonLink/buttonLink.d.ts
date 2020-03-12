type ButtonLinkType = 'primary' | 'secondary';
type ButtonLinkSize = 'small' | 'normal' | 'large';

type ButtonLinkProps = Globals &
  Ref &
  spaceAfter & {
    children?: React$Node;
    component?: Component;
    onClick?: (e: React.SyntheticEvent<HTMLButtonElement>) => void | Promise<any>;
    disabled?: boolean;
    block?: boolean;
    external?: boolean;
    type?: ButtonLinkType;
    size?: ButtonLinkSize;
    href?: string;
    width?: number;
    icon?: React$Node;
    iconLeft?: React$Node;
    iconRight?: React$Node;
    circled?: boolean;
    submit?: boolean;
    transparent?: boolean;
    tabIndex?: string;
    ariaExpanded?: boolean;
    ariaControls?: string;
    role?: string;
    title?: string;
  };
