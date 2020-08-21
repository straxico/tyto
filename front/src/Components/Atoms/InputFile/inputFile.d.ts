type InputFileProps = Globals &
  Ref &
  DataAttrs &
  spaceAfter & {
    size?: InputFieldSize;
    label?: Translation;
    floatLable?: boolean;
    inlineLabel?: boolean;
    title?: React$Node;
    name?: string;
    placeholder?: Translation;
    fileName?: string;
    allowedFileTypes?: string[];
    help?: React$Node;
    error?: React$Node;
    disabled?: boolean;
    tabIndex?: number;
    required?: boolean;
    id?: string;
    onChange?: (ev: React.InputEvent<HTMLInputElement>) => void | Promise<any>;
    onFocus?: (ev: React.InputEvent<HTMLInputElement>) => void | Promise<any>;
    onBlur?: (ev: React.InputEvent<HTMLInputElement>) => void | Promise<any>;
    onRemoveFile?: () => void | Promise<any>;
  };
