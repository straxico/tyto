type SelectOption = {
  id: string | number;
  name?: string;
  active?: 0 | 1;
};

type SelectSize = 'small' | 'normal';
type SelectProps = Globals &
  Ref &
  spaceAfter & {
    size?: SelectSize;
    label?: Translation;
    filled?: boolean;
    placeholder?: Translation;
    value?: string | number;
    disabled?: boolean;
    name?: string;
    error?: React$Node;
    help?: React$Node;
    tabIndex?: number;
    children?: React$Node;
    className?: React$Node;
    onChange?: (ev) => void | Promise<any>;
    onFocus?: (ev) => void | Promise<any>;
    onBlur?: (ev) => void | Promise<any>;
    options: SelectOption[];
    prefix?: React$Node;
  };
