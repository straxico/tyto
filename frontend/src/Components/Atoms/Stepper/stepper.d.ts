type StepperSharedProps = Globals & {
  name?: string;
  disabled?: boolean;
  maxValue?: number;
  minValue?: number;
  titleIncrement?: string;
  titleDecrement?: string;
  onChange?: (value: number) => void | Promise<any>;
  onFocus?: (ev: React.InputEvent<HTMLInputElement>) => void | Promise<any>;
  onBlur?: (ev: React.InputEvent<HTMLInputElement>) => void | Promise<any>;
};
type StepperProps = StepperSharedProps & {
  defaultValue?: number;
  step?: number;
};

type StepperState = {
  value: number;
};

type StepperStateLessProps = StepperSharedProps & {
  value: number | string;
  disabledIncrement?: boolean;
  disabledDecrement?: boolean;
  onKeyDown?: (ev: React.KeyboardEvent<HTMLInputElement>) => void | Promise<any>;
  onDecrement?: (
    ev: React.SyntheticEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>,
  ) => void | Promise<any>;
  onIncrement?: (
    ev: React.SyntheticEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>,
  ) => void | Promise<any>;
  onChange?: (arg0: React.InputEvent<HTMLInputElement>) => void | Promise<any>;
};
