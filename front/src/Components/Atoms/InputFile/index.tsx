/* eslint-disable complexity */
import React, { createRef, useState } from 'react';
import styled from 'styled-components';

import defaultTheme from 'utils/token';
import getSpacingToken from 'utils/common/getSpacingToken';
import getFieldDataState from 'utils/common/getFieldDataState';
import { rtlSpacing } from 'utils/rtl';
import formElementFocus from 'Atoms/InputField/helpers/formElementFocus';
import randomID from 'utils/randomID';
import { InputContainer, StyledInlineLabel, FakeInput } from 'Atoms/InputField';
import { SIZE_OPTIONS } from 'Atoms/InputField/consts';
import Button from '../Button';
import ButtonLink, { StyledButtonLink } from '../ButtonLink';
import DefaultFormLabel from '../FormLabel';
import FormFeedback from '../FormFeedback';

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

const Input = styled.input`
  // we need to hide the input, but not with display or visibility so we can trigger the focus
  opacity: 0;
  position: absolute;
  height: 0;

  &:focus ~ ${FakeInput} {
    ${formElementFocus}
    /* box-shadow: ${({ theme }) =>
      `inset 0 0 0 ${theme.jajiga.borderWidthInputFocus} ${theme.jajiga.borderColorInputFocus}`}; */
  }

  & + ${FakeInput} {
    display: flex;
    justify-content: space-between;
    padding: 0 12px;
    align-items: center;
  }
`;

Input.defaultProps = {
  theme: defaultTheme,
};

const FormLabel = ({ label, required }: { label: Translation; required?: boolean }) => (
  <DefaultFormLabel required={required}>{label}</DefaultFormLabel>
);

const getFileInputColor = (
  { error, fileName }: { error: any; fileName: any },
  theme: { jajiga: { paletteRedNormal: any; colorTextInput: any; paletteInkLight: any } },
) => {
  if (error) {
    return theme.jajiga.paletteRedNormal;
  }
  if (fileName) {
    return theme.jajiga.colorTextInput;
  }
  return theme.jajiga.paletteInkLight;
};

const StyledFileInput = styled.div<{ error: any; fileName: any; float?: boolean }>`
  font-family: ${({ theme }) => theme.jajiga.fontFamily};
  color: ${({ error, fileName, theme }) => getFileInputColor({ error, fileName }, theme)};
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  /* padding: ${({ theme }) => rtlSpacing(`0 0 0 ${theme.jajiga.spaceSmall}`)}; */
  /* .float-label & {
    top: 0px;
    position: absolute;
    z-index: 2;
    padding: 0;
    right: 12px;
  } */
`;

StyledFileInput.defaultProps = {
  theme: defaultTheme,
};

const InputButton = styled(Button)`
  height: 30px; /* skm */
  flex-shrink: 0;
`;

const CloseButton = styled(ButtonLink)`
  flex-shrink: 0;

  & svg {
    color: ${({ theme }) => theme.jajiga.paletteInkLight};
  }
`;

CloseButton.defaultProps = {
  theme: defaultTheme,
};

const InputFile = React.forwardRef((props: InputFileProps, ref: RefType) => {
  const {
    disabled,
    size = SIZE_OPTIONS.NORMAL,
    label,
    floatLable,
    inlineLabel,
    onBlur,
    onChange,
    onFocus,
    placeholder = '',
    title = 'انتخاب',
    onRemoveFile,
    error,
    dataTest,
    spaceAfter,
    id,
    required,
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

  const [filename, setFilename] = useState(placeholder);

  const resetInputFile = () => {
    setFilename('');
    inputRef.current.parentElement.classList.remove('focused');
    inputRef.current.value = '';
  };
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('sdfs');
    if (e.target.files.length) {
      inputRef.current.parentElement.classList.add('focused');
      setFilename(e.target.files[0].name);
    }
  };

  const handleOnBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!inputRef.current.value) {
      setFilename('');
      inputRef.current.parentElement.classList.remove('focused');
    }
  };

  return (
    <Field
      component={label ? 'label' : 'div'}
      spaceAfter={spaceAfter}
      htmlFor={label ? forID : undefined}>
      {label && !inlineLabel && !floatLable && <FormLabel label={label} required={required} />}
      <InputContainer
        size={size}
        disabled={disabled}
        className={`${floatLable ? 'float-label' : ''}`}
        error={error}>
        {label && (inlineLabel || floatLable) && (
          <StyledInlineLabel size={size} float={floatLable}>
            <FormLabel label={label} required={required} />
          </StyledInlineLabel>
        )}
        <Input
          data-test={dataTest}
          data-state={getFieldDataState(!!props.error)}
          type="file"
          name={props.name}
          onChange={handleOnChange}
          onFocus={onFocus}
          onBlur={handleOnBlur}
          id={forID}
          ref={inputRef}
          tabIndex={props.tabIndex}
        />
        <FakeInput size={size} disabled={disabled} error={props.error}>
          <StyledFileInput fileName={props.fileName} error={props.error}>
            {filename}
          </StyledFileInput>
          {!filename && (
            <InputButton type="secondary" icon="cam" size="small">
              {title}
            </InputButton>
          )}
          {filename && (
            <CloseButton
              type="secondary"
              transparent
              icon="cross-mark"
              size="small"
              onClick={ev => {
                ev.preventDefault();
                if (onRemoveFile) {
                  onRemoveFile();
                }
                resetInputFile();
              }}
            />
          )}
        </FakeInput>
      </InputContainer>
      {props.help && !props.error && <FormFeedback type="help">{props.help}</FormFeedback>}
      {props.error && <FormFeedback type="error">{props.error}</FormFeedback>}
    </Field>
  );
});

export default InputFile;
