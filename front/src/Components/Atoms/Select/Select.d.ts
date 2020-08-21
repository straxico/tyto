type SelectOption = {
  value: string | number;
  label?: string;
  disabled?: boolean;
};

type SelectSize = 'small' | 'normal';
type SelectProps = Globals &
  Ref &
  spaceAfter & {
    id?: string;
    required?: boolean;
    size?: SelectSize;
    label?: Translation;
    placeholder?: TranslationString;
    value?: string | number;
    disabled?: boolean;
    name?: string;
    error?: React$Node;
    help?: React$Node;
    tabIndex?: number;
    onChange?: (ev: React.InputEvent<HTMLSelectElement>) => void | Promise<any>;
    onFocus?: (ev: React.InputEvent<HTMLSelectElement>) => void | Promise<any>;
    onBlur?: (ev: React.InputEvent<HTMLSelectElement>) => void | Promise<any>;
    options: SelectOption[];
    prefix?: React$Node;
    customValueText?: Translation;
    className?: React$Node;
    children?: React$Node;
  };
