type InputFileProps = Globals &
  spaceAfter & {
    label?: Translation;
    title?: React$Node;
    name?: string;
    placeholder?: Translation;
    fileName?: string;
    allowedFileTypes?: string[];
    help?: React$Node;
    error?: React$Node;
    tabIndex?: number;
    onChange?: (ev: React.InputEvent<HTMLInputElement>) => void | Promise<any>;
    onFocus?: (ev: React.InputEvent<HTMLInputElement>) => void | Promise<any>;
    onBlur?: (ev: React.InputEvent<HTMLInputElement>) => void | Promise<any>;
    onRemoveFile?: () => void | Promise<any>;
    ref?: Ref;
  };
