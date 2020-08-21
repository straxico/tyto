type ListChoiceProps = Globals & {
  title: string;
  description?: string;
  selectable?: boolean;
  selected?: boolean;
  icon?: IconName;
  className?: string;
  onClick?: (
    e: React.SyntheticEvent<HTMLDivElement> | React.KeyboardEvent<HTMLElement>,
  ) => void | Promise<any>;
};
