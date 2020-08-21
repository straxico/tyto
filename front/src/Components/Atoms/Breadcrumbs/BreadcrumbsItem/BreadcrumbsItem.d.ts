type BreadcrumbsItemProps = Globals & {
  active?: boolean;
  component?: Component;
  children: React$Node;
  href?: string;
  contentKey?: string;
  onClick?: (ev?: React.SyntheticEvent<HTMLLinkElement>) => void | Promise<any>;
};
