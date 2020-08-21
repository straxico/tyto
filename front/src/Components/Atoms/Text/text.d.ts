type TextAlignAtom = 'left' | 'center' | 'right';
type TextElement = 'p' | 'span' | 'div' | 'small' | 'strong';
type TextTypeAtom =
  | 'primary'
  | 'secondary'
  | 'attention'
  | 'info'
  | 'success'
  | 'warning'
  | 'critical'
  | 'white';
type TextSize = 'large' | 'normal' | 'small';
type TextWeight = 'normal' | 'bold';

type TextProps = {
  type?: TextTypeAtom;
  size?: TextSize;
  weight?: TextWeight;
  align?: TextAlignAtom;
  italic?: boolean;
  uppercase?: boolean;
  element?: TextElement;
  className?: string;
  children: any;
  id?: string;
  spaceAfter?: spaceAfterType;
};
