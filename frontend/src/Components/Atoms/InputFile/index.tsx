import React from 'react';
import styled from 'styled-components';

import defaultTheme from 'utils/token';
import getSpacingToken from 'utils/common/getSpacingToken';
import getFieldDataState from 'utils/common/getFieldDataState';
import { rtlSpacing } from 'utils/rtl';
import Button from '../Button';
import ButtonLink, { StyledButtonLink } from '../ButtonLink';
import FormLabel from '../FormLabel';
import FormFeedback from '../FormFeedback';

const Field = styled.label<{ spaceAfter }>`
  display: block;
  position: relative;
  width: 100%;
  margin-bottom: ${getSpacingToken};
`;

Field.defaultProps = {
  theme: defaultTheme,
};

const FakeInput = styled(({ children, className }) => <div className={className}>{children}</div>)`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: ${({ theme }) => rtlSpacing(theme.jajiga.paddingInputFile)};
  height: ${({ theme }) => theme.jajiga.heightInputNormal};
  border-radius: ${({ theme }) => theme.jajiga.borderRadiusNormal};
  box-shadow: inset 0 0 0
    ${({ theme, error }) =>
      `${theme.jajiga.borderWidthInput} ${
        error ? theme.jajiga.borderColorInputError : theme.jajiga.borderColorInput
      }`};
  background-color: ${({ theme }) => theme.backgroundInput};
  transition: box-shadow ${({ theme }) => theme.jajiga.durationFast} ease-in-out;

  &:hover {
    box-shadow: inset 0 0 0
      ${({ theme, error }) =>
        `${theme.jajiga.borderWidthInput} ${
          error ? theme.jajiga.paletteRedNormalHover : theme.jajiga.borderColorInputHover
        }`};
  }

  ${StyledButtonLink}:active {
    box-shadow: none;
  }
`;

FakeInput.defaultProps = {
  theme: defaultTheme,
};

const Input = styled.input`
  // we need to hide the input, but not with display or visibility so we can trigger the focus
  opacity: 0;
  position: absolute;
  height: 0;

  &:focus ~ ${FakeInput} {
    box-shadow: ${({ theme }) =>
      `inset 0 0 0 ${theme.jajiga.borderWidthInputFocus} ${theme.jajiga.borderColorInputFocus}`};
  }
`;

Input.defaultProps = {
  theme: defaultTheme,
};

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

const StyledFileInput = styled.div<{ error: any; fileName: any }>`
  font-family: ${({ theme }) => theme.jajiga.fontFamily};
  color: ${({ error, fileName, theme }) => getFileInputColor({ error, fileName }, theme)};
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: ${({ theme }) => rtlSpacing(`0 0 0 ${theme.jajiga.spaceSmall}`)};
`;

StyledFileInput.defaultProps = {
  theme: defaultTheme,
};

const InputButton = styled(Button)`
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
    placeholder = 'No file selected',
    title = 'Select file',
    onRemoveFile,
    dataTest,
    spaceAfter,
  } = props;

  return (
    <Field spaceAfter={spaceAfter}>
      <Input
        data-test={dataTest}
        data-state={getFieldDataState(!!props.error)}
        type="file"
        name={props.name}
        onChange={props.onChange}
        onFocus={props.onChange}
        onBlur={props.onBlur}
        ref={ref}
        tabIndex={props.tabIndex}
      />
      {props.label && <FormLabel filled={!!props.fileName}>{props.label}</FormLabel>}
      <FakeInput error={props.error}>
        <InputButton type="secondary" size="small" icon="">
          {title}
        </InputButton>
        <StyledFileInput fileName={props.fileName} error={props.error}>
          {props.fileName || placeholder}
        </StyledFileInput>
        {props.fileName && (
          <CloseButton
            type="secondary"
            transparent
            icon=""
            onClick={ev => {
              ev.preventDefault();
              if (onRemoveFile) {
                onRemoveFile();
              }
            }}
          />
        )}
      </FakeInput>
      {props.help && !props.error && <FormFeedback type="help">{props.help}</FormFeedback>}
      {props.error && <FormFeedback type="error">{props.error}</FormFeedback>}
    </Field>
  );
});

export default InputFile;
