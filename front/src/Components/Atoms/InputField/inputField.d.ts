type InputFieldSize = 'small' | 'normal';
type InputFieldType = 'text' | 'number' | 'email' | 'password' | 'passportid';
type InputFieldProps = Globals &
  Ref &
  DataAttrs &
  spaceAfter & {
    size?: InputFieldSize;
    type?: InputFieldType;
    inputMode?: InputMode;
    name?: string;
    label?: Translation;
    floatLable?: boolean;
    inlineLabel?: boolean;
    value?: string | number;
    placeholder?: Translation;
    prefix?: React$Node;
    suffix?: React$Node;
    help?: React$Node;
    error?: React$Node;
    tags?: React$Node;
    disabled?: boolean;
    maxValue?: number;
    minValue?: number;
    maxLength?: number;
    minLength?: number;
    required?: boolean;
    tabIndex?: string;
    readOnly?: boolean;
    autoComplete?: string;
    id?: string;
    containerRef?: React$ElementRef<any>;
    onChange?: (ev: React.InputEvent<HTMLInputElement>) => void | Promise<any>;
    onFocus?: (ev: React.InputEvent<HTMLInputElement>) => void | Promise<any>;
    onBlur?: (ev: React.InputEvent<HTMLInputElement>) => void | Promise<any>;
    onKeyDown?: (ev: React.KeyboardEvent<HTMLInputElement>) => void | Promise<any>;
    onKeyUp?: (ev: React.KeyboardEvent<HTMLInputElement>) => void | Promise<any>;
  };
