type CardProps = Globals &
  spaceAfter & {
    children?: React$Node;
    closable?: boolean;
    onClose?: (arg0: ev) => void | Promise<any>;
  };

type CardState = {
  expandedSections: Array<number>;
  initialExpandedSections: Array<number>;
};
// CardHeader....................
type CardHeaderProps = Globals & {
  icon?: React$Node;
  title: React$Node;
  subTitle?: React$Node;
  actions?: React$Node;
  dataA11ySection?: string;
};
// CardSectionContent............
type CardSectionContentProps = {
  children: React$Node;
  expanded?: boolean;
  expandable?: boolean;
  visible?: boolean;
};

type CardSectionContentState = {
  contentHeight: number;
};
// CardSectionHeader .............
type CardSectionHeaderProps = {
  children: React$Node;
  actions?: React$Node;
};
// CardSection......................
type CardSectionProps = Globals & {
  children: React$Node;
  expandable?: boolean;
  initialExpanded?: boolean;
  onClose?: () => void | Promise<any>;
  onExpand?: () => void | Promise<any>;
};

type CardSectionContextType = {
  expandable: boolean;
  expanded: boolean;
  handleToggleSection: () => void;
  onKeyDownHandler: (ev) => void | Promise<any>;
};
