type CollapseProps = Globals & {
  initialExpanded?: boolean;
  expanded?: boolean;
  isCard?: boolean;
  label: Translation;
  children: React$Node;
  actions?: React$Node;
  onClick?: (e: React.SyntheticEvent<HTMLDivElement>, state: boolean) => void | Promise<any>;
};
