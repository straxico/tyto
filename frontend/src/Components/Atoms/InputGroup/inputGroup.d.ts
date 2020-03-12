type InputGroupProps = Globals &
  spaceAfter & {
    label?: Translation;
    flex?: string | Array<string>;
    size?: 'small' | 'normal';
    help?: React$Node;
    children: React$Node;
    error?: React$Node;
    onChange?: (
      ev: React.InputEvent<HTMLInputElement> | React.InputEvent<HTMLSelectElement>,
    ) => void | Promise<any>;
    onFocus?: (
      ev: React.InputEvent<HTMLInputElement> | React.InputEvent<HTMLSelectElement>,
    ) => void | Promise<any>;
    onBlur?: (
      ev: React.InputEvent<HTMLInputElement> | React.InputEvent<HTMLSelectElement>,
    ) => void | Promise<any>;
  };

type InputGroupState = {
  active: boolean;
  filled: boolean;
};
