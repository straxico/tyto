type TagSize = 'small' | 'normal';

type TagProps = Globals & {
  children: React$Node;
  icon?: IconName;
  selected?: boolean;
  size?: TagSize;
  onRemove?: () => void | Promise<any>;
  onClick?: () => void | Promise<any>;
};
