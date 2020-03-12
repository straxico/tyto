type TagSize = 'small' | 'normal';

type TagProps = Globals & {
  children: React$Node;
  icon?: React$Node;
  selected?: boolean;
  size?: TagSize;
  onRemove?: () => void | Promise<any>;
  onClick?: () => void | Promise<any>;
};
