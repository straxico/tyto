type TextAreaSize = 'small' | 'normal';
type TextAreaResize = 'vertical' | 'none';
type TextAreaProps = Globals &
  spaceAfter & {
    size?: TextAreaSize;
    name?: string;
    rows?: number;
    label?: Translation;
    value?: string;
    fullHeight?: boolean;
    placeholder?: Translation;
    help?: React$Node;
    error?: React$Node;
    resize?: TextAreaResize;
    disabled?: boolean;
    maxLength?: number;
    tabIndex?: number;
    onChange?: (ev: React.InputEvent<HTMLTextAreaElement>) => void | Promise<any>;
    onFocus?: (ev: React.InputEvent<HTMLTextAreaElement>) => void | Promise<any>;
    onBlur?: (ev: React.InputEvent<HTMLTextAreaElement>) => void | Promise<any>;
  };
