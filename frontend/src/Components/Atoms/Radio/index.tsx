import React from 'react';
import styled from 'styled-components';

import defaultTheme from 'utils/token';
import { StyledText } from 'Atoms/Text';
import { rtlSpacing } from 'utils/rtl';
import getFieldDataState from 'utils/common/getFieldDataState';

const getBorderColor = () => ({ theme, hasError, disabled, checked }) =>
  hasError && !disabled && !checked
    ? theme.jajiga.borderColorCheckboxRadioError
    : theme.jajiga.borderColorCheckboxRadio;

const Glyph = styled.span<{ disabled: boolean }>`
  visibility: hidden;
  width: 12px;
  height: 12px;
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.jajiga.colorIconCheckboxRadioDisabled : theme.jajiga.colorIconCheckboxRadio};
  border-radius: ${({ theme }) => theme.jajiga.borderRadiusCircle};
  flex-shrink: 0;
`;

Glyph.defaultProps = {
  theme: defaultTheme,
};

const IconContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.jajiga.backgroundInput};
  height: ${({ theme }) => theme.jajiga.heightCheckbox};
  width: ${({ theme }) => theme.jajiga.widthCheckbox};
  border-radius: ${({ theme }) => theme.jajiga.borderRadiusCircle};
  transform: scale(1);
  transition: all ${({ theme }) => theme.jajiga.durationFast} ease-in-out;
`;

IconContainer.defaultProps = {
  theme: defaultTheme,
};

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${({ theme }) => rtlSpacing(`0 0 0 ${theme.jajiga.spaceXSmall}`)};
  flex: 1; // IE wrapping fix
`;

TextContainer.defaultProps = {
  theme: defaultTheme,
};

const Info = styled.span`
  font-size: ${({ theme }) => theme.jajiga.fontSizeFormFeedback};
  color: ${({ theme }) => theme.jajiga.colorInfoCheckBoxRadio};
  line-height: ${({ theme }) => theme.jajiga.lineHeightText};
`;

Info.defaultProps = {
  theme: defaultTheme,
};

const LabelText = styled.span`
  font-weight: ${({ theme }) => theme.jajiga.fontWeightNormal};
  font-size: ${({ theme }) => theme.jajiga.fontSizeFormLabel};
  color: ${({ theme }) => theme.jajiga.colorFormLabel};
  line-height: ${({ theme }) => theme.jajiga.heightCheckbox};

  ${StyledText} {
    font-weight: ${({ theme }) => theme.jajiga.fontWeightNormal};
    font-size: ${({ theme }) => theme.jajiga.fontSizeFormLabel};
    color: ${({ theme }) => theme.jajiga.colorFormLabel};
    line-height: ${({ theme }) => theme.jajiga.heightCheckbox};
  }
`;

LabelText.defaultProps = {
  theme: defaultTheme,
};

const Input = styled.input`
  position: absolute;
  opacity: 0;

  &:checked ~ ${TextContainer} > ${LabelText} {
    font-weight: ${({ theme }) => theme.jajiga.fontWeightMedium};
    & > ${StyledText} {
      font-weight: ${({ theme }) => theme.jajiga.fontWeightMedium};
    }
  }

  &:checked + ${IconContainer} > ${Glyph} {
    visibility: visible;
  }

  &:focus + ${IconContainer} {
    outline: 0;
    border: ${({ theme }) =>
      `2px ${theme.jajiga.borderStyleInput} ${theme.jajiga.borderColorCheckboxRadioFocus}`};
  }
`;

Input.defaultProps = {
  theme: defaultTheme,
};

const Label = styled(({ disabled, theme, type, hasError, ...props }) => (
  <label {...props}>{props.children}</label>
))`
  font-family: ${({ theme }) => theme.jajiga.fontFamily};
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: self-start;
  opacity: ${({ disabled, theme }) => (disabled ? theme.jajiga.opacityCheckboxDisabled : '1')};
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  position: relative;

  ${IconContainer} {
    border: 1px solid ${getBorderColor()};
  }

  &:hover ${IconContainer} {
    border-color: ${({ disabled, theme }) =>
      !disabled && theme.jajiga.borderColorCheckboxRadioHover};
  }

  &:active ${IconContainer} {
    border-color: ${({ disabled, theme }) =>
      disabled ? getBorderColor() : theme.jajiga.borderColorCheckboxRadioActive};
    transform: ${({ disabled, theme }) =>
      !disabled && `scale(${theme.jajiga.modifierScaleCheckboxRadioActive})`};
  }
`;

Label.defaultProps = {
  theme: defaultTheme,
};

const Radio = React.forwardRef((props: RadioProps, ref: RefType) => {
  const {
    label,
    value,
    hasError = false,
    disabled = false,
    checked = false,
    onChange,
    name,
    info,
    readOnly,
    tabIndex,
    dataTest,
  } = props;
  return (
    <Label disabled={disabled} hasError={hasError} checked={checked}>
      <Input
        data-test={dataTest}
        data-state={getFieldDataState(hasError)}
        value={value}
        type="radio"
        disabled={disabled}
        checked={checked}
        onChange={onChange}
        name={name}
        tabIndex={tabIndex}
        ref={ref}
        readOnly={readOnly}
      />
      <IconContainer>
        <Glyph disabled={disabled} />
      </IconContainer>
      {(label || info) && (
        <TextContainer>
          {label && <LabelText>{label}</LabelText>}
          {info && <Info>{info}</Info>}
        </TextContainer>
      )}
    </Label>
  );
});

Radio.displayName = 'Radio';

export default Radio;
