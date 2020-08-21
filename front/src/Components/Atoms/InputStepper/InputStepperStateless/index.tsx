import React from 'react';
import styled from 'styled-components';
import defaultTheme from 'utils/token';
import getSpacingToken from 'utils/common/getSpacingToken';
import { SIZE_OPTIONS } from '../../InputField/consts';
import ButtonLink from '../../ButtonLink';
import InputField, { Input, Prefix } from '../../InputField';

const StyledInputStepper = styled.div<{ spaceAfter: spaceAfterType }>`
  width: 100%;
  margin-bottom: ${getSpacingToken};
  ${Input} {
    text-align: center;
  }
  ${Prefix} {
    padding: 0;
    pointer-events: auto;
  }
`;

StyledInputStepper.defaultProps = {
  theme: defaultTheme,
};

const InputStepperStateless = ({
  label,
  error,
  onBlur,
  onFocus,
  onChange,
  onKeyDown,
  help,
  disabled,
  name,
  dataTest,
  size = SIZE_OPTIONS.NORMAL as InputFieldSize,
  maxValue,
  minValue,
  required,
  tabIndex,
  forwardedRef,
  spaceAfter,
  value,
  onDecrement,
  onIncrement,
  disabledIncrement,
  disabledDecrement,
  titleIncrement,
  titleDecrement,
}: InputStepperStateLessProps) => {
  return (
    <StyledInputStepper spaceAfter={spaceAfter}>
      <InputField
        dataTest={dataTest}
        size={size}
        label={label}
        disabled={disabled}
        required={required}
        name={name}
        error={error}
        help={help}
        type={typeof value === 'number' ? 'number' : 'text'}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        onKeyDown={onKeyDown}
        value={value}
        minValue={minValue}
        maxValue={maxValue}
        tabIndex={tabIndex}
        ref={forwardedRef}
        prefix={
          <ButtonLink
            type="secondary"
            disabled={
              disabledDecrement || disabled || (typeof value === 'number' && value <= +minValue)
            }
            icon="minus"
            size={size}
            onClick={onDecrement}
            transparent
            title={titleDecrement}
          />
        }
        suffix={
          <ButtonLink
            disabled={
              disabledIncrement || disabled || (typeof value === 'number' && value >= +maxValue)
            }
            type="secondary"
            icon="plus"
            size={size}
            onClick={onIncrement}
            transparent
            title={titleIncrement}
          />
        }
      />
    </StyledInputStepper>
  );
};

export default InputStepperStateless;
