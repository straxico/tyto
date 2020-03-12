import React from 'react';
import KEY_CODE_MAP from 'utils/common/keyMaps';
import validateIncrement from 'utils/validateIncrement';
import validateDecrement from 'utils/validateDecrement';
import InputStepperStateless from './InputStepperStateless';
import { SIZE_OPTIONS } from '../InputField/consts';

class InputStepper extends React.Component<
  InputStepperProps & InputStepperForwardedRef,
  InputStepperState
> {
  state = {
    value: this.props.defaultValue || 0,
  };

  setValueAndInjectCallback = (value: number) => {
    const { onChange } = this.props;
    if (onChange) {
      onChange(value);
    }
    this.setState({ value });
  };

  incrementCounter = () => {
    const { value } = this.state;
    const { maxValue = Number.POSITIVE_INFINITY, step = 1 } = this.props;
    this.setValueAndInjectCallback(validateIncrement({ value, maxValue, step }));
  };

  decrementCounter = () => {
    const { value } = this.state;
    const { minValue = Number.NEGATIVE_INFINITY, step = 1 } = this.props;

    this.setValueAndInjectCallback(validateDecrement({ value, minValue, step }));
  };

  handleIncrementCounter = ev => {
    if (ev && ev.type === 'click') {
      this.incrementCounter();
    }
    if (ev && ev.type === 'keydown') {
      if (ev.keyCode === KEY_CODE_MAP.SPACE) {
        ev.preventDefault();
        this.incrementCounter();
      } else if (ev.keyCode === KEY_CODE_MAP.ENTER) {
        this.incrementCounter();
      }
    }
  };

  handleDecrementCounter = ev => {
    if (ev && ev.type === 'click') {
      this.decrementCounter();
    }
    if (ev && ev.type === 'keydown') {
      if (ev.keyCode === KEY_CODE_MAP.SPACE) {
        ev.preventDefault();
        this.decrementCounter();
      } else if (ev.keyCode === KEY_CODE_MAP.ENTER) {
        this.decrementCounter();
      }
    }
  };

  handleKeyDown = ev => {
    if (ev.keyCode === KEY_CODE_MAP.ARROW_DOWN) {
      ev.preventDefault();
      this.decrementCounter();
    }
    if (ev.keyCode === KEY_CODE_MAP.ARROW_UP) {
      ev.preventDefault();
      this.incrementCounter();
    }
  };

  handleChange = ev => {
    const { minValue = Number.NEGATIVE_INFINITY, maxValue = Number.POSITIVE_INFINITY } = this.props;
    const value = ev && parseInt(ev.target.value, 10);
    const prevValue = this.state.value;

    if (prevValue <= value) {
      this.setState({ value: validateIncrement({ value, maxValue, step: 0 }) });
    }

    if (prevValue >= value) {
      this.setState({ value: validateDecrement({ value, minValue, step: 0 }) });
    }
  };

  render() {
    const {
      label,
      error,
      onBlur,
      onFocus,
      help,
      disabled,
      name,
      dataTest,
      size = SIZE_OPTIONS.NORMAL as InputFeildSize,
      maxValue,
      minValue,
      required,
      tabIndex,
      forwardedRef,
      spaceAfter,
      titleIncrement,
      titleDecrement,
    } = this.props;
    const { value } = this.state;
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
        onChange={this.handleChange}
        onBlur={onBlur}
        onFocus={onFocus}
        onKeyDown={this.handleKeyDown}
        value={value || 0}
        minValue={minValue}
        maxValue={maxValue}
        tabIndex={tabIndex}
        forwardedRef={forwardedRef}
        spaceAfter={spaceAfter}
        onDecrement={this.handleDecrementCounter}
        onIncrement={this.handleIncrementCounter}
        titleIncrement={titleIncrement}
        titleDecrement={titleDecrement}
      />
    );
  }
}

const ForwardedInputStepper = React.forwardRef((props: InputStepperProps, ref: RefType) => (
  <InputStepper forwardedRef={ref} {...props} />
));

ForwardedInputStepper.displayName = 'InputStepper';

export default ForwardedInputStepper;
export { default as InputStepperStateless } from './InputStepperStateless';
