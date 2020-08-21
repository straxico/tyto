type TextLinkType = 'primary' | 'secondary' | 'white' | 'gray';

type TextLinkSize = 'large' | 'normal' | 'small';

type TextLinkProps = {
  children: React$Node;
  icon?: IconName;
  iconSize?: IconSize;
  onClick?: any;
  external?: boolean;
  type?: TextLinkType;
  size?: TextLinkSize;
  isBold?: boolean;
  rel?: string;
  noHover?: boolean;
  tabIndex?: number;
  className?: string;
  component?: Component;
  /** next link */
  href?: Url;
  /** next link */
  hrefas?: Url;
  /** next link */
  replace?: boolean;
  /** next link */
  scroll?: boolean;
  /** next link */
  shallow?: boolean;
  /** next link */
  passHref?: boolean;
  /** next link */
  prefetch?: boolean;
};

type styledTextLink = {
  tokens?: {
    [key: string]: string | number;
  };
  type?: Type;
};

type GetLinkStyleProps = ThemeProps & {
  type: Type;
  noHover: boolean;
};

type GetLinkStyle = (arg0: GetLinkStyleProps) => Interpolation[];
