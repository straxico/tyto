/* eslint-disable complexity */
import React, { createRef, useRef } from 'react';
import styled, { css } from 'styled-components';

import defaultTheme from 'utils/token';
import { rtlSpacing } from 'utils/rtl';
import getSpacingToken from 'utils/common/getSpacingToken';
import randomID from 'utils/randomID';
import getFieldDataState from 'utils/common/getFieldDataState';
import { StyledButtonLink } from 'Atoms/ButtonLink/index';
import media from 'utils/mediaQuery';
import { SIZE_OPTIONS, TYPE_OPTIONS, TOKENS } from './consts';
import FormFeedback from '../FormFeedback';
import DefaultFormLabel from '../FormLabel';
import formElementFocus from './helpers/formElementFocus';
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
  font-family: ${({ theme }) => theme.jajiga.fontFamily};
  position: relative;
  display: block;
  z-index: 2;
  flex: 1 1 100%;
  width: 100%;
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
  ${media.largeMobile(css<{ disabled; error }>`
    background-color: ${({ disabled, theme }) =>
      disabled ? theme.jajiga.backgroundInputDisabled : theme.jajiga.backgroundInput};
    border-radius: ${({ theme }) => theme.jajiga.borderRadiusNormal};
    box-shadow: inset 0 0 0
      ${({ theme, error }) =>
        `${theme.jajiga.borderWidthInput} ${
          error ? theme.jajiga.borderColorInputError : theme.jajiga.borderColorInput
        }`};
  `)}
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
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'text')};

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

export const StyledInlineLabel = styled.div<{ size; float }>`
  height: 100%;
  display: flex;
  align-items: center;
  pointer-events: none;
  justify-content: center;
  .float-label & {
    top: 0px;
    position: absolute;
    z-index: 2;
    padding: 0;
    right: 12px;
  }
  padding: ${({ theme }) => rtlSpacing(`0 0 0 ${theme.jajiga.spaceSmall}`)};
  ${DefaultFormLabel} {
    margin-bottom: 0;
    font-size: ${getToken(TOKENS.fontSizeInput)};
    line-height: normal;
    z-index: 3;
    white-space: nowrap;
    color: ${({ theme }) => theme.jajiga.colorFormLabelFilled};
    transition: transform 0.15s cubic-bezier(0.4, 0, 0.2, 1),
      color 0.15s cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);

    .focused & {
      transform: translateY(-100%) scale(0.85);
      color: ${({ theme }) => theme.jajiga.borderColorInputFocus};
    }
  }
  .focused & {
    border-top: 1px solid white;
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
    color: ${({ theme, disabled }) => {
      return disabled ? theme.jajiga.paletteInkLighter : theme.jajiga.paletteInkLight;
    }};
  }

  ${media.largeMobile(css`
    & svg {
      color: ${({ theme }) => theme.jajiga.colorIconInput};
    }
  `)}
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
    ({ type, size, theme, error, help, inlineLabel, dataAttrs, ...props }: any, ref: RefType) => (
      <input type={getDOMType(type)} {...props} {...dataAttrs} ref={ref} />
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
    & ${StyledInlineLabel} {
      top: 0;
    }
    & ~ ${FakeInput} {
      ${formElementFocus}
    }
  }

  &::placeholder {
    color: ${({ theme, disabled }) =>
      disabled ? theme.jajiga.paletteInkLighter : theme.jajiga.paletteInkLight};
    /* Firefox */
    opacity: 1;
  }

  /* Internet Explorer 10-11 */
  &:-ms-input-placeholder {
    color: ${({ theme, disabled }) =>
      disabled ? theme.jajiga.paletteInkLighter : theme.jajiga.paletteInkLight};
  }

  /* Microsoft Edge */
  &::-ms-input-placeholder {
    color: ${({ theme, disabled }) =>
      disabled ? theme.jajiga.paletteInkLighter : theme.jajiga.paletteInkLight};
  }

  &::-ms-clear,
  &::-ms-reveal {
    display: none;
  }
  ${media.largeMobile(css`
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
  `)}
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
    floatLable,
    inlineLabel,
    dataTest,
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
    inputMode,
    dataAttrs,
    containerRef, // skm
  } = props;

  const forID = React.useMemo(() => id || (label ? randomID('inputFieldID') : undefined), [
    id,
    label,
  ]);

  /** By skm: in order to handle onFocus event */
  let inputRef: any = ref;
  if (!inputRef) {
    inputRef = createRef<HTMLInputElement>();
  }

  const handleOnFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    inputRef.current.parentElement.classList.add('focused');
  };

  const handleOnBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!inputRef.current.value) inputRef.current.parentElement.classList.remove('focused');
  };

  return (
    <Field
      component={label ? 'label' : 'div'}
      spaceAfter={spaceAfter}
      htmlFor={label ? forID : undefined}>
      {label && !inlineLabel && !floatLable && (
        <FormLabel label={label} isFilled={!!value} required={required} />
      )}
      <InputContainer
        size={size}
        disabled={disabled}
        className={`${floatLable ? 'float-label' : ''}`}
        error={error}
        ref={containerRef}>
        {prefix && <Prefix size={size}>{prefix}</Prefix>}
        {label && (inlineLabel || floatLable) && (
          <StyledInlineLabel size={size} float={floatLable}>
            <FormLabel label={label} isFilled={!!value} required={required} />
          </StyledInlineLabel>
        )}
        {tags && <InputTags>{tags}</InputTags>}
        <Input
          data-test={dataTest}
          data-state={getFieldDataState(!!error)}
          onChange={onChange}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
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
          error={error}
          ref={inputRef}
          tabIndex={tabIndex}
          inlineLabel={inlineLabel}
          readOnly={readOnly}
          autoComplete={autoComplete}
          id={forID}
          inputMode={inputMode}
          dataAttrs={dataAttrs}
        />
        {suffix && (
          <Suffix disabled={disabled} size={size}>
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

InputField.displayName = 'InputField';

export default InputField;
