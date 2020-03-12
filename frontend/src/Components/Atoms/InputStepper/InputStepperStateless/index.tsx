import React from 'react';
import styled from 'styled-components';
import defaultTheme from 'utils/token';
import { SIZE_OPTIONS } from 'Atoms/InputField/consts';
import getSpacingToken from 'utils/common/getSpacingToken';
import Button from '../../Button';
import InputField, { Input, Prefix } from '../../InputField';

const PrefixSuffix = styled(({ type, ...props }) => <div {...props} />)`
  flex-shrink: 0;
  z-index: 3;
  cursor: ${({ disabled }) => disabled && 'not-allowed'};
`;

PrefixSuffix.defaultProps = {
  theme: defaultTheme,
};

const StyledInputStepper = styled.div<{ spaceAfter }>`
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

const StyledButtonWrapper = styled.div`
  &:focus {
    outline: none;
    box-shadow: 0 0 1px 1px ${({ theme }) => theme.jajiga.colorTextButtonWhiteBordered},
      0 0 1px 3px rgba(1, 118, 210, 0.6); //TODO: Create token
  }

  &:focus:active {
    box-shadow: none;
  }
`;

StyledButtonWrapper.defaultProps = {
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
  size = SIZE_OPTIONS.NORMAL as InputFeildSize,
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
        prefix={(
<StyledButtonWrapper role="button" tabIndex={0} onKeyDown={onDecrement}>
            <Button
    disabled={
                disabledDecrement || disabled || (typeof value === 'number' && value <= +minValue)
              }
    iconLeft='caretdown'
              size={size}
              onClick={onDecrement}
    transparent
    
    title={titleDecrement}
            />
          </StyledButtonWrapper>
)}
        suffix={(
<StyledButtonWrapper role="button" tabIndex={0} onKeyDown={onIncrement}>
            <Button
    disabled={
                disabledIncrement || disabled || (typeof value === 'number' && value >= +maxValue)
              }
    iconLeft='caretup'
              size={size}
    onClick={onIncrement}
    transparent
    title={titleIncrement}
            />
          </StyledButtonWrapper>
)}
      />
    </StyledInputStepper>
  );
};

export default InputStepperStateless;
