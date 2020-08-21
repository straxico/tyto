type CheckboxProps = Globals &
  Ref & {
    label?: React$Node;
    value?: string;
    hasError?: boolean;
    disabled?: boolean;
    checked?: boolean;
    name?: string;
    info?: React$Node;
    tabIndex?: number;
    readOnly?: boolean;
    onChange?: (ev: React.InputEvent<HTMLInputElement>) => void | Promise<any>;
    className?: string;
  };
