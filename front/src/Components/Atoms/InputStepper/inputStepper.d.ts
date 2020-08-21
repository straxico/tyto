type InputStepperSharedProps = Globals &
  Ref &
  spaceAfter & {
    size?: InputFeildSize;
    label?: Translation;
    step?: number;
    help?: React$Node;
    error?: React$Node;
    name?: string;
    disabled?: boolean;
    maxValue?: number;
    minValue?: number;
    required?: boolean;
    tabIndex?: string;
    titleIncrement?: string;
    titleDecrement?: string;
    onFocus?: (ev) => void | Promise<any>;
    onBlur?: (ev) => void | Promise<any>;
  };

type InputStepperProps = InputStepperSharedProps & {
  defaultValue?: number;
  onChange?: (arg0: number) => void | Promise<any>;
};

type InputStepperState = {
  value: number;
};

type InputStepperForwardedRef = {
  forwardedRef: RefType;
};
// stateless
type InputStepperStateLessProps = InputStepperSharedProps & {
  value: number | string;
  forwardedRef?: RefType;
  disabledIncrement?: boolean;
  disabledDecrement?: boolean;
  onKeyDown?: (ev) => void | Promise<any>;
  onDecrement?: (ev) => void | Promise<any>;
  onIncrement?: (ev) => void | Promise<any>;
  onChange?: (arg0) => void | Promise<any>;
};
