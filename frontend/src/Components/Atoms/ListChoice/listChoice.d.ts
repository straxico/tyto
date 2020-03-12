type ListChoiceProps = Globals & {
  title: Translation;
  description?: Translation;
  selectable?: boolean;
  selected?: boolean;
  icon: React$Node;
  onClick?: (
    e: React.SyntheticEvent<HTMLDivElement> | React.KeyboardEvent<HTMLElement>,
  ) => void | Promise<any>;
};
