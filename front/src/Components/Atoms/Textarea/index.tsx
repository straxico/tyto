import React from 'react';
import styled from 'styled-components';

import defaultTheme from 'utils/token';
import { rtlSpacing } from 'utils/rtl';
import getSpacingToken from 'utils/common/getSpacingToken';
import FormFeedback from '../FormFeedback';
import FormLabel from '../FormLabel';
import { SIZE_OPTIONS, RESIZE_OPTIONS } from './consts';

const Field = styled.label<{ fullHeight; spaceAfter }>`
  display: flex;
  width: 100%;
  height: ${({ fullHeight }) => fullHeight && '100%'};
  flex-direction: column;
  position: relative;
  // for usage with Stack
  flex: ${({ fullHeight }) => fullHeight && '1'};
  margin-bottom: ${getSpacingToken};
`;

Field.defaultProps = {
  theme: defaultTheme,
};

const getFontSize = () => ({ theme, size }) => {
  const tokens = {
    [SIZE_OPTIONS.SMALL]: theme.jajiga.fontSizeInputSmall,
    [SIZE_OPTIONS.NORMAL]: theme.jajiga.fontSizeInputNormal,
  };

  return tokens[size];
};

const getPadding = () => ({ theme, size }) => {
  const tokens = {
    [SIZE_OPTIONS.SMALL]: theme.jajiga.paddingTextareaSmall,
    [SIZE_OPTIONS.NORMAL]: theme.jajiga.paddingTextareaNormal,
  };
  return rtlSpacing(tokens[size]);
};

const StyledTextArea = styled.textarea<{ fullHeight; error; size; resize }>`
  appearance: none;
  box-sizing: border-box;
  display: block;
  width: 100%;
  height: ${({ fullHeight }) => fullHeight && '100%'};
  padding: ${getPadding()};
  border-radius: ${({ theme }) => theme.jajiga.borderRadiusNormal};
  box-shadow: inset 0 0 0
    ${({ theme, error }) =>
      `${theme.jajiga.borderWidthInput} ${
        error ? theme.jajiga.borderColorInputError : theme.jajiga.borderColorInput
      }`};
  background-color: ${({ disabled, theme }) =>
    disabled ? theme.jajiga.backgroundInputDisabled : theme.jajiga.backgroundInput};
  color: ${({ disabled, theme }) =>
    disabled ? theme.jajiga.colorTextInputDisabled : theme.jajiga.colorTextInput};
  font-size: ${getFontSize()};
  line-height: ${({ theme }) => theme.jajiga.lineHeightText};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'text')};
  font-family: ${({ theme }) => theme.jajiga.fontFamily};
  resize: ${({ resize }) => resize};
  transition: box-shadow ${({ theme }) => theme.jajiga.durationFast} ease-in-out;
  min-height: 44px; // TODO: create token

  // for usage with Stack
  flex: ${({ fullHeight }) => fullHeight && '1'};

  // IE 11 bug fix, border: 0 won't work - the box-shadow will be hidden
  border: 1px solid transparent;

  // IE 11 bug fix, hide scrollbar by default (shown only when scrollable)
  overflow: auto;

  &::placeholder {
    color: ${({ theme }) => theme.jajiga.colorPlaceholderInput};
  }

  &:hover {
    box-shadow: ${({ disabled, theme, error }) =>
      !disabled &&
      `inset 0 0 0 ${theme.jajiga.borderWidthInput} ${
        error ? theme.jajiga.borderColorInputErrorHover : theme.jajiga.borderColorInputHover
      }`};
  }

  &:focus {
    box-shadow: ${({ theme, disabled }) =>
      !disabled && `inset 0 0 0 2px ${theme.jajiga.borderColorInputFocus}`};
    outline: none;
  }
`;

StyledTextArea.defaultProps = {
  theme: defaultTheme,
};

// $FlowExpected
const Textarea = React.forwardRef((props: TextAreaProps, ref: RefType) => {
  const {
    size = SIZE_OPTIONS.NORMAL,
    disabled,
    resize = RESIZE_OPTIONS.VERTICAL,
    dataTest,
    spaceAfter,
  } = props;

  return (
    <Field fullHeight={props.fullHeight} spaceAfter={spaceAfter}>
      {props.label && (
        <FormLabel filled={!!props.value} disabled={disabled}>
          {props.label}
        </FormLabel>
      )}
      <StyledTextArea
        data-test={dataTest}
        name={props.name}
        value={props.value}
        rows={props.rows}
        size={size}
        fullHeight={props.fullHeight}
        disabled={disabled}
        error={props.error}
        placeholder={props.placeholder}
        maxLength={props.maxLength}
        onChange={props.onChange}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        resize={resize}
        tabIndex={props.tabIndex}
        ref={ref}
      />
      {props.help && !props.error && <FormFeedback type="help">{props.help}</FormFeedback>}
      {props.error && <FormFeedback type="error">{props.error}</FormFeedback>}
    </Field>
  );
});

Textarea.displayName = 'Textarea';

export default Textarea;
