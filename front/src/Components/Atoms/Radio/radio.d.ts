type RadioProps = Globals &
  Ref & {
    readonly label?: React$Node;
    readonly value?: string;
    readonly hasError?: boolean;
    readonly disabled?: boolean;
    readonly name?: string;
    readonly checked?: boolean;
    readonly info?: React$Node;
    readonly readOnly?: boolean;
    tabIndex?: number;
    readonly onChange?: (ev: React.InputEvent<HTMLInputElement>) => void | Promise<any>;
  };
