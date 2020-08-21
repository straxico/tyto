// ..............list index.....................
type ListSize = 'small' | 'normal' | 'large';

type ListType = 'primary' | 'secondary' | 'separated';

type ListProps = Globals &
  spaceAfter & {
    children: React$Node;
    size?: ListSize;
    type?: ListType;
  };

type ListContextProps = {
  size?: ListSize;
  type?: ListType;
};
// ..............listItem index.................
type ListItemProps = Globals & {
  children: React$Node;
  label?: Translation;
  icon?: IconName;
  className?: string;
  iconSize?: IconSize;
};
