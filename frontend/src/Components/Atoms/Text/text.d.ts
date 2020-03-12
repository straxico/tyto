type AtomTextAlign = 'left' | 'center' | 'right';
type AtomTextElement = 'p' | 'span' | 'div' | 'small' | 'strong';
type AtomTextType =
  | 'primary'
  | 'secondary'
  | 'attention'
  | 'info'
  | 'success'
  | 'warning'
  | 'critical'
  | 'white';
type AtomTextSize = 'large' | 'normal' | 'small';
type AtomTextWeight = 'normal' | 'bold';
type AtomTextElement = 'p' | 'span' | 'div' | 'small' | 'strong';
type AtomTextProps = {
  type?: AtomTextType;
  size?: StomTextSize;
  weight?: AtomTextWeight;
  align?: AtomTextAlign;
  italic?: boolean;
  uppercase?: boolean;
  element?: AtomTextElement;
  className?: string;
  children: any;
  id?: string;
};
