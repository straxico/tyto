type BadgeType =
  | 'neutral'
  | 'dark'
  | 'info'
  | 'success'
  | 'warning'
  | 'critical'
  | 'white'
  | 'infoInverted'
  | 'criticalInverted'
  | 'successInverted'
  | 'warningInverted';

type BadgeProps = Globals & {
  children?: React$Node;
  type?: BadgeType;
  icon?: IconName;
  ariaLabel?: string;
};
