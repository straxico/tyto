// ..............list index.....................
type ListSize = 'small' | 'normal' | 'large';

type ListType = 'primary' | 'secondary';

type ListProps = Globals &
  spaceAfter & {
    children: React$Node;
    size?: ListSize;
    type?: ListType;
  };

// ..............listItem index.................
type ListItemProps = Globals & {
  children: React$Node;
};
