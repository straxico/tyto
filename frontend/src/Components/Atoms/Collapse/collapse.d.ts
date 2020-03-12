type CollapseProps = Globals & {
  initialExpanded?: boolean;
  expanded?: boolean;
  label: Translation;
  children: React$Node;
  onClick?: (e: React.SyntheticEvent<HTMLDivElement>, state: boolean) => void | Promise<any>;
};
