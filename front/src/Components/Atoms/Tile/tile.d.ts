type TileState = {
  expanded?: boolean;
  initialExpanded?: boolean;
};

type TileProps = Globals & {
  theme?: any;
  className?: string;
  title?: React$Node;
  description?: React$Node;
  icon?: IconName;
  children?: React$Node;
  external?: boolean;
  href?: string;
  onClick?: (
    e: React.SyntheticEvent<HTMLDivElement> | React.KeyboardEvent<HTMLElement>,
  ) => void | Promise<any>;
  expanded?: boolean;
};

// TileExpandable
type TileExpandableState = {
  contentHeight: number;
};
type TileExpandableProps = {
  readonly expanded?: boolean;
  readonly initialExpanded?: boolean;
  readonly children: React$Node;
};

// TileHeader
type TileHeaderProps = {
  readonly icon?: React$Node;
  readonly title?: React$Node;
  readonly description?: React$Node;
  readonly external?: boolean;
  readonly onClick?: (ev: React.SyntheticEvent<HTMLDivElement>) => void;
  readonly isExpandable?: boolean;
  readonly isExpanded?: boolean;
};

type IconRightProps = {
  external?: boolean;
  isExpandable?: boolean;
  isExpanded?: boolean;
};
