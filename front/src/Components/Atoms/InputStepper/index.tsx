import React from 'react';
import KEY_CODE_MAP from 'utils/common/keyMaps';
import validateIncrement from 'utils/validateIncrement';
import validateDecrement from 'utils/validateDecrement';
import useStateWithCallback from 'hooks/useStateWithCallback';
import InputStepperStateless from './InputStepperStateless';
import { SIZE_OPTIONS } from '../InputField/consts';

const InputStepper = React.forwardRef(
  ({ onChange, defaultValue = 0, ...props }: InputStepperProps, ref: RefType) => {
    const [value, setValue] = useStateWithCallback<number>(defaultValue, onChange);
    const incrementCounter = () => {
      const { maxValue = Number.POSITIVE_INFINITY, step = 1 } = props;
      setValue(validateIncrement({ value, maxValue, step }));
    };

    const decrementCounter = () => {
      const { minValue = Number.NEGATIVE_INFINITY, step = 1 } = props;
      setValue(validateDecrement({ value, minValue, step }));
    };

    const handleIncrementCounter = (ev?: any) => {
      if (ev && ev.type === 'click') {
        incrementCounter();
      }
      if (ev && ev.type === 'keydown') {
        if (ev.keyCode === KEY_CODE_MAP.SPACE) {
          ev.preventDefault();
          incrementCounter();
        } else if (ev.keyCode === KEY_CODE_MAP.ENTER) {
          incrementCounter();
        }
      }
    };

    const handleDecrementCounter = (ev?: any) => {
      if (ev && ev.type === 'click') {
        decrementCounter();
      }
      if (ev && ev.type === 'keydown') {
        if (ev.keyCode === KEY_CODE_MAP.SPACE) {
          ev.preventDefault();
          decrementCounter();
        } else if (ev.keyCode === KEY_CODE_MAP.ENTER) {
          decrementCounter();
        }
      }
    };

    const handleKeyDown = (ev: any) => {
      if (ev.keyCode === KEY_CODE_MAP.ARROW_DOWN) {
        ev.preventDefault();
        decrementCounter();
      }
      if (ev.keyCode === KEY_CODE_MAP.ARROW_UP) {
        ev.preventDefault();
        incrementCounter();
      }
    };

    const handleChange = (ev: any) => {
      const eventValue = ev && parseInt(ev.target.value, 10);
      const prevValue = value;

      const { maxValue, minValue } = props;

      if (prevValue <= eventValue) {
        setValue(validateIncrement({ value, maxValue, step: 0 }));
      }

      if (prevValue >= eventValue) {
        setValue(validateDecrement({ value, minValue, step: 0 }));
      }
    };

    const {
      label,
      error,
      onBlur,
      onFocus,
      help,
      disabled,
      name,
      dataTest,
      size = SIZE_OPTIONS.NORMAL as InputFieldSize,
      required,
      minValue,
      maxValue,
      tabIndex,
      spaceAfter,
      titleIncrement,
      titleDecrement,
    } = props;

    return (
      <InputStepperStateless
        dataTest={dataTest}
        size={size}
        label={label}
        disabled={disabled}
        required={required}
        name={name}
        error={error}
        help={help}
        onChange={handleChange}
        onBlur={onBlur}
        onFocus={onFocus}
        onKeyDown={handleKeyDown}
        value={value || 0}
        minValue={minValue}
        maxValue={maxValue}
        tabIndex={tabIndex}
        forwardedRef={ref}
        spaceAfter={spaceAfter}
        onDecrement={handleDecrementCounter}
        onIncrement={handleIncrementCounter}
        titleIncrement={titleIncrement}
        titleDecrement={titleDecrement}
      />
    );
  },
);

InputStepper.displayName = 'InputStepper';

export default InputStepper;

export { default as InputStepperStateless } from './InputStepperStateless';
