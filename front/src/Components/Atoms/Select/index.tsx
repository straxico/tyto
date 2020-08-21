import React from 'react';
import styled from 'styled-components';
import getFieldDataState from 'utils/common/getFieldDataState';
import getSpacingToken from 'utils/common/getSpacingToken';
import { right, left, rtlSpacing } from 'utils/rtl';
import Icon from 'Atoms/Icon';
import FormFeedback from 'Atoms/FormFeedback';
import TYPE_OPTIONS from 'Atoms/FormFeedback/consts';
import defaultTheme from 'utils/token';
import FormLabel from 'Atoms/FormLabel';

import SIZE_OPTIONS from './consts';

const getSelectSize = ({ theme, size }) => {
  const tokens = {
    [SIZE_OPTIONS.SMALL]: theme.jajiga.heightInputSmall,
    [SIZE_OPTIONS.NORMAL]: theme.jajiga.heightInputNormal,
  };
  return tokens[size];
};

const Label = styled.label<{ spaceAfter: spaceAfterType }>`
  position: relative;
  display: block;
  width: 100%;
  margin-bottom: ${getSpacingToken};
`;

Label.defaultProps = {
  theme: defaultTheme,
};

const StyledSelect = styled(
  React.forwardRef(
    (
      {
        className,
        dataTest,
        children,
        value,
        disabled,
        name,
        error,
        tabIndex,
        onChange,
        onFocus,
        onBlur,
        id,
        options,
      }: SelectProps,
      ref: RefType,
    ) => (
      <select
        id={id}
        data-test={dataTest}
        data-state={getFieldDataState(error)}
        value={value}
        className={className}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        disabled={disabled}
        name={name}
        tabIndex={tabIndex}
        ref={ref}>
        {children}
      </select>
    ),
  ),
)<{ filled: boolean; size: SelectSize }>`
  appearance: none;
  background: ${({ theme }) => theme.jajiga.backgroundInput};
  border-radius: ${({ theme }) => theme.jajiga.borderRadiusNormal};
  cursor: pointer;
  color: ${({ theme, filled }) =>
    filled ? theme.jajiga.colorTextInput : theme.jajiga.colorPlaceholderInput};
  font-size: ${({ theme, size }) =>
    size === SIZE_OPTIONS.SMALL
      ? theme.jajiga.fontSizeInputSmall
      : theme.jajiga.fontSizeInputNormal};
  height: ${getSelectSize};
  padding: ${({ theme, size, prefix }) =>
    rtlSpacing(
      (size === SIZE_OPTIONS.SMALL &&
        !prefix &&
        `0 ${theme.jajiga.spaceXLarge} 0 ${theme.jajiga.spaceSmall}`) ||
        (size === SIZE_OPTIONS.SMALL &&
          prefix &&
          `0 ${theme.jajiga.spaceXLarge} 0 ${theme.jajiga.paddingLeftSelectPrefix}`) ||
        (prefix && `0 ${theme.jajiga.spaceXXLarge} 0 ${theme.jajiga.paddingLeftSelectPrefix}`) ||
        `0 ${theme.jajiga.spaceXXLarge} 0 ${theme.jajiga.spaceSmall}`,
    )};
  outline: none;
  width: 100%;
  transition: box-shadow ${({ theme }) => theme.jajiga.durationFast} ease-in-out;
  z-index: 2;

  > option {
    color: ${({ theme }) => theme.jajiga.colorTextInput};
  }

  &::-ms-expand {
    display: none;
  }

  // IE Bug fix: highlighted background color and color of text
  &::-ms-value {
    background: transparent;
    color: ${({ theme, filled }) =>
      filled ? theme.jajiga.colorTextInput : theme.jajiga.colorPlaceholderInput};
  }

  /* Based on state of select */
  border: 0;
  box-shadow: inset 0 0 0
    ${({ theme, error }) =>
      `${theme.jajiga.borderWidthInput} ${
        error ? theme.jajiga.borderColorInputError : theme.jajiga.borderColorInput
      }`};

  &:hover {
    box-shadow: inset 0 0 0
      ${({ theme, error }) =>
        `${theme.jajiga.borderWidthInput} ${
          error ? theme.jajiga.borderColorInputErrorHover : theme.jajiga.borderColorInputHover
        }`};
  }

  &:focus {
    box-shadow: inset 0 0 0
      ${({ theme }) =>
        `${theme.jajiga.borderWidthInputFocus} ${theme.jajiga.borderColorInputFocus}`};
  }

  &:disabled {
    color: ${({ theme }) => theme.jajiga.colorTextInputDisabled};
    background: ${({ theme }) => theme.jajiga.backgroundInputDisabled};
    cursor: default;

    &:hover {
      box-shadow: inset 0 0 0 1px ${({ theme }) => theme.jajiga.borderColorInput};
    }
  }
`;

StyledSelect.defaultProps = {
  theme: defaultTheme,
};

export const SelectContainer = styled(({ className, children }) => (
  <div className={className}>{children}</div>
))`
  position: relative;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.jajiga.backgroundInput};
  width: 100%;
  box-sizing: border-box;
  cursor: pointer;
`;

SelectContainer.defaultProps = {
  theme: defaultTheme,
};

const SelectPrefix = styled(({ className, children }) => (
  <div className={className}>{children}</div>
))`
  display: flex;
  align-items: center;
  position: absolute;
  padding: ${({ theme }) => `0 ${theme.jajiga.spaceSmall}`};
  pointer-events: none;
  z-index: 3;
  top: 0;
  height: ${getSelectSize};
`;

SelectPrefix.defaultProps = {
  theme: defaultTheme,
};

const SelectSuffix = styled(({ children, className }) => (
  <div className={className}>{children}</div>
))`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  pointer-events: none;
  z-index: 3;
  height: 100%;
  ${right}: ${({ theme }) => theme.jajiga.spaceXSmall};
  color: ${({ theme, disabled }) =>
    disabled ? theme.jajiga.colorTextInputDisabled : theme.jajiga.colorTextInput};

  & > * {
    width: ${({ theme, size }) => size === SIZE_OPTIONS.SMALL && theme.jajiga.widthIconSmall};
    height: ${({ theme, size }) => size === SIZE_OPTIONS.SMALL && theme.jajiga.heightIconSmall};
    margin-bottom: ${({ size, theme }) =>
      size === SIZE_OPTIONS.SMALL && theme.jajiga.spaceXXXSmall};
  }
`;

SelectSuffix.defaultProps = {
  theme: defaultTheme,
};

const StyledCustomValue = styled(({ prefix, theme, size, filled, ...props }) => <div {...props} />)`
  color: ${({ theme, filled }) =>
    filled ? theme.jajiga.colorTextInput : theme.jajiga.colorPlaceholderInput};
  font-family: ${({ theme }) => theme.jajiga.fontFamily};
  font-size: ${({ theme, size }) =>
    size === SIZE_OPTIONS.SMALL
      ? theme.jajiga.fontSizeInputSmall
      : theme.jajiga.fontSizeInputNormal};
  z-index: 3;
  position: absolute;
  height: 100%;
  line-height: ${getSelectSize};
  top: 0;
  ${left}: ${({ prefix, theme }) => (prefix ? '48px' : theme.jajiga.spaceSmall)};
  bottom: 0;
  pointer-events: none;
`;

StyledCustomValue.defaultProps = {
  theme: defaultTheme,
};

const Select = React.forwardRef((props: SelectProps, ref: RefType) => {
  const {
    size = SIZE_OPTIONS.NORMAL as SelectSize,
    label,
    placeholder,
    value,
    disabled = false,
    error,
    help,
    name,
    onChange,
    onBlur,
    onFocus,
    options,
    tabIndex,
    id,
    dataTest,
    required,
    prefix,
    spaceAfter,
    customValueText,
  } = props;
  const filled = !(value == null || value === '');
  return (
    <Label spaceAfter={spaceAfter}>
      {label && (
        <FormLabel filled={filled} disabled={disabled} required={required}>
          {label}
        </FormLabel>
      )}
      <SelectContainer disabled={disabled}>
        {prefix && (
          <SelectPrefix prefix={prefix} size={size}>
            {prefix}
          </SelectPrefix>
        )}
        {customValueText && (
          <StyledCustomValue filled={filled} size={size} prefix={prefix}>
            {customValueText}
          </StyledCustomValue>
        )}
        <StyledSelect
          id={id}
          dataTest={dataTest}
          size={size}
          disabled={disabled}
          error={error}
          value={value == null ? '' : value}
          prefix={prefix}
          name={name}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={onChange}
          filled={filled}
          customValueText={customValueText}
          tabIndex={tabIndex}
          options={[]} // styled select props need options!!!
          required={required}
          ref={ref}>
          {placeholder && (
            <option label={placeholder} value="">
              {placeholder}
            </option>
          )}
          {options.map(option => (
            <option key={`option-${option.value}`} value={option.value} disabled={option.disabled}>
              {option.label}
            </option>
          ))}
        </StyledSelect>
        <SelectSuffix size={size} disabled={disabled}>
          <Icon iconName="arrow-thin-down" />
        </SelectSuffix>
      </SelectContainer>
      {help && !error && (
        <FormFeedback type={TYPE_OPTIONS.HELP as FormFeedbackType}>{help}</FormFeedback>
      )}
      {error && <FormFeedback type={TYPE_OPTIONS.ERROR as FormFeedbackType}>{error}</FormFeedback>}
    </Label>
  );
});

Select.displayName = 'Select';

export default Select;
