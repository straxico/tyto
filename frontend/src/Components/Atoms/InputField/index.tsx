/* eslint-disable complexity */
import React from 'react';
import styled from 'styled-components';

import defaultTheme from 'utils/token';
import { rtlSpacing } from 'utils/rtl';
import getSpacingToken from 'utils/common/getSpacingToken';
import randomID from 'utils/randomID';
import getFieldDataState from 'utils/common/getFieldDataState';
import { StyledButtonLink } from 'Atoms/ButtonLink/index';
import { SIZE_OPTIONS, TYPE_OPTIONS, TOKENS } from './consts';
import FormFeedback from '../FormFeedback';
import DefaultFormLabel from '../FormLabel';
import InputTags from './InputTags';

const getToken = name => ({ theme, size }) => {
  const tokens = {
    [TOKENS.heightInput]: {
      [SIZE_OPTIONS.SMALL]: theme.jajiga.heightInputSmall,
      [SIZE_OPTIONS.NORMAL]: theme.jajiga.heightInputNormal,
    },
    [TOKENS.fontSizeInput]: {
      [SIZE_OPTIONS.SMALL]: theme.jajiga.fontSizeInputSmall,
      [SIZE_OPTIONS.NORMAL]: theme.jajiga.fontSizeInputNormal,
    },
    [TOKENS.iconSize]: {
      [SIZE_OPTIONS.SMALL]: theme.jajiga.widthIconSmall,
      [SIZE_OPTIONS.NORMAL]: theme.jajiga.widthIconMedium,
    },
  };

  return tokens[name][size];
};

const getPadding = () => ({ theme, size }) => {
  const tokens = {
    [SIZE_OPTIONS.SMALL]: theme.jajiga.paddingInputSmall,
    [SIZE_OPTIONS.NORMAL]: theme.jajiga.paddingInputNormal,
  };
  return rtlSpacing(tokens[size]);
};

const getDOMType = type => {
  if (type === TYPE_OPTIONS.PASSPORTID) {
    return TYPE_OPTIONS.TEXT;
  }
  return type;
};

const Field = styled(
  ({ component: Component, className, children, spaceAfter, theme, ...props }) => {
    return (
      <Component className={className} {...props}>
        {children}
      </Component>
    );
  },
)`
  position: relative;
  display: block;
  z-index: 2;
  flex: 1 1 100%;
  width: 100%;
  max-width: 400px;
  margin-bottom: ${getSpacingToken};
`;

Field.defaultProps = {
  theme: defaultTheme,
};

export const FakeInput = styled(({ children, className }) => (
  <div className={className}>{children}</div>
))`
  width: 100%;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  box-sizing: border-box;
  height: ${getToken(TOKENS.heightInput)};
  border-radius: ${({ theme }) => theme.jajiga.borderRadiusNormal};
  box-shadow: inset 0 0 0
    ${({ theme, error }) =>
      `${theme.jajiga.borderWidthInput} ${
        error ? theme.jajiga.borderColorInputError : theme.jajiga.borderColorInput
      }`};
  background-color: ${({ disabled, theme }) =>
    disabled ? theme.jajiga.backgroundInputDisabled : theme.jajiga.backgroundInput};
  font-size: ${getToken(TOKENS.fontSizeInput)};
  transition: all ${({ theme }) => theme.jajiga.durationFast} ease-in-out;
`;

FakeInput.defaultProps = {
  theme: defaultTheme,
};

export const InputContainer = styled(
  React.forwardRef(({ children, className, ...props }: any, ref: any) => (
    <div className={className} ref={ref}>
      {children}
    </div>
  )),
)`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  height: ${getToken(TOKENS.heightInput)};
  border-radius: ${({ theme }) => theme.jajiga.borderRadiusNormal};
  color: ${({ disabled, theme }) =>
    disabled ? theme.jajiga.colorTextInputDisabled : theme.jajiga.colorTextInput};
  font-size: ${getToken(TOKENS.fontSizeInput)};
  ${({ disabled, readOnly }) => {
    if (readOnly) return `cursor: pointer;`;
    if (disabled) return `cursor: not-allowed;`;
    return `cursor: text;`;
  }}

  &:hover > ${FakeInput} {
    ${({ disabled, theme, error }) =>
      !disabled &&
      `box-shadow: inset 0 0 0 ${theme.jajiga.borderWidthInput} ${
        error ? theme.jajiga.borderColorInputErrorHover : theme.jajiga.borderColorInputHover
      }`};
  }

  ${StyledButtonLink}:active {
    box-shadow: none;
  }
`;

InputContainer.defaultProps = {
  theme: defaultTheme,
};
const styledDefaultFormLabel = styled(DefaultFormLabel)``;

const StyledInlineLabel = styled.div<{ size }>`
  height: 100%;
  display: flex;
  align-items: center;
  pointer-events: none;
  justify-content: center;
  padding: ${({ theme }) => rtlSpacing(`0 0 0 ${theme.jajiga.spaceSmall}`)};
  ${styledDefaultFormLabel} {
    margin-bottom: 0;
    font-size: ${getToken(TOKENS.fontSizeInput)};
    line-height: normal;
    z-index: 3;
    white-space: nowrap;
  }
`;

StyledInlineLabel.defaultProps = {
  theme: defaultTheme,
};

export const Prefix = styled(({ children, className }) => (
  <div className={className}>{children}</div>
))`
  height: 100%;
  color: ${({ theme }) => theme.jajiga.colorTextInputPrefix};
  display: flex;
  align-items: center;
  pointer-events: none;
  justify-content: center;
  padding: ${({ theme }) => rtlSpacing(`0 0 0 ${theme.jajiga.spaceSmall}`)};
  z-index: 3;

  & > svg {
    width: ${getToken(TOKENS.iconSize)};
    height: ${getToken(TOKENS.iconSize)};
    color: ${({ theme }) => theme.jajiga.colorIconInput};
  }
`;

Prefix.defaultProps = {
  theme: defaultTheme,
};

const Suffix = styled(({ children, className }) => <div className={className}>{children}</div>)`
  height: ${getToken(TOKENS.heightInput)};
  color: ${({ theme }) => theme.jajiga.colorTextInputPrefix};
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  pointer-events: ${({ disabled }) => disabled && 'none'};
  z-index: 3;
  padding: ${({ theme, readOnly }) =>
    readOnly ? rtlSpacing(`0 ${theme.jajiga.spaceSmall} 0 0`) : `0`};
}

  & svg {
    color: ${({ theme }) => theme.jajiga.colorIconSecondary};
  }
`;

Suffix.defaultProps = {
  theme: defaultTheme,
};

export const Input = styled(
  React.forwardRef(
    ({ type, size, theme, error, help, inlineLabel, ...props }: any, ref: RefType) => (
      <input type={getDOMType(type)} {...props} ref={ref} />
    ),
  ),
)<InputFieldProps>`
  appearance: none;
  -webkit-text-fill-color: ${({ disabled }) => disabled && 'inherit'};
  font-family: ${({ theme }) => theme.jajiga.fontFamily};
  border: none;
  padding: ${getPadding()};
  font-size: inherit;
  font-weight: ${({ inlineLabel, theme }) =>
    inlineLabel ? theme.jajiga.fontWeightMedium : theme.jajiga.fontWeightNormal};
  color: inherit;
  background-color: transparent;
  cursor: inherit;
  flex: 1 1 20%;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border-radius: ${({ theme }) => theme.jajiga.borderRadiusNormal};
  z-index: 2;

  // FIREFOX flexbox bug: the input doesn't shrink properly
  min-width: 0;

  font-variant-numeric: ${({ type }) => type === TYPE_OPTIONS.PASSPORTID && 'tabular-nums'};
  letter-spacing: ${({ type }) => type === TYPE_OPTIONS.PASSPORTID && '2px'};

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[data-com-onepassword-filled] {
    background-color: inherit !important;
  }

  &:focus {
    outline: none;
    & ~ ${FakeInput} {
      box-shadow: inset 0 0 0
        ${({ theme }) =>
          `${theme.jajiga.borderWidthInputFocus} ${theme.jajiga.borderColorInputFocus}`};
    }
  }

  &::placeholder {
    color: ${({ theme }) => theme.jajiga.colorPlaceholderInput};
    /* Firefox */
    opacity: 1;
  }

  /* Internet Explorer 10-11 */
  &:-ms-input-placeholder {
    color: ${({ theme }) => theme.jajiga.colorPlaceholderInput};
  }

  /* Microsoft Edge */
  &::-ms-input-placeholder {
    color: ${({ theme }) => theme.jajiga.colorPlaceholderInput};
  }

  &::-ms-clear,
  &::-ms-reveal {
    display: none;
  }
`;

Input.defaultProps = {
  theme: defaultTheme,
};

const FormLabel = ({
  label,
  isFilled,
  required,
}: {
  label: Translation;
  isFilled: boolean;
  required?: boolean;
}) => (
  <DefaultFormLabel filled={isFilled} required={required}>
    {label}
  </DefaultFormLabel>
);

const InputField = React.forwardRef((props: InputFieldProps, ref: RefType) => {
  const {
    disabled,
    size = SIZE_OPTIONS.NORMAL,
    type = TYPE_OPTIONS.TEXT,
    label,
    inlineLabel,
    required,
    error,
    name,
    prefix,
    onChange,
    onFocus,
    onBlur,
    onKeyUp,
    onKeyDown,
    placeholder,
    minValue,
    maxValue,
    minLength,
    maxLength,
    suffix,
    help,
    value,
    tags,
    tabIndex,
    readOnly,
    autoComplete,
    spaceAfter,
    id,
    containerRef,
  } = props;

  const forID = id || (label ? React.useMemo(() => randomID('inputFieldID'), []) : undefined);

  return (
    <Field
      component={label ? 'label' : 'div'}
      spaceAfter={spaceAfter}
      htmlFor={label ? forID : undefined}>
      {label && !inlineLabel && <FormLabel label={label} isFilled={!!value} required={required} />}
      <InputContainer
        size={size}
        disabled={disabled}
        readOnly={readOnly}
        error={error}
        ref={containerRef}>
        {prefix && <Prefix size={size}>{prefix}</Prefix>}
        {label && inlineLabel && (
          <StyledInlineLabel size={size}>
            <FormLabel label={label} isFilled={!!value} required={required} />
          </StyledInlineLabel>
        )}
        {tags && <InputTags>{tags}</InputTags>}
        <Input
          data-state={getFieldDataState(!!error)}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          onKeyUp={onKeyUp}
          onKeyDown={onKeyDown}
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          min={minValue}
          max={maxValue}
          minLength={minLength}
          maxLength={maxLength}
          size={size}
          ref={ref}
          error={error}
          tabIndex={tabIndex}
          inlineLabel={inlineLabel}
          readOnly={readOnly}
          autoComplete={autoComplete}
          id={forID}
        />
        {suffix && (
          <Suffix size={size} readOnly={readOnly}>
            {suffix}
          </Suffix>
        )}
        <FakeInput size={size} disabled={disabled} error={error} />
      </InputContainer>
      {help && !error && <FormFeedback type="help">{help}</FormFeedback>}
      {error && <FormFeedback type="error">{error}</FormFeedback>}
    </Field>
  );
});

/* TODO: removable containers must be removed, at fututre */

export default InputField;
