type TextLinkType = 'primary' | 'secondary';

type TextLinkSize = 'large' | 'normal' | 'small';

type TextLinkProps = {
  children: React$Node;
  icon?: string;
  onClick?: (arg0: React.SyntheticEvent<HTMLLinkElement>) => void | Promise<any>;
  external?: boolean;
  type?: Type;
  size?: Size;
  rel?: string;
  tabIndex?: string;
  className?: string;
  component?: Component;
  /** next link */
  href?: Url;
  /** next link */
  as?: Url;
  /** next link */
  replace?: boolean;
  /** next link */
  scroll?: boolean;
  /** next link */
  shallow?: boolean;
  /** next link */
  passHref?: boolean;
  /** next link */
  onError?: (error: Error) => void;
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
};

type GetLinkStyle = (arg0: GetLinkStyleProps) => Interpolation[];
