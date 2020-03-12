import React from 'react';
import styled from 'styled-components';

import getFieldDataState from 'utils/common/getFieldDataState';
import defaultTheme from 'utils/token';
import Icon from 'Atoms/Icon';
import { rtlSpacing } from 'utils/rtl';
import TOKENS from './consts';
import { StyledText } from '../Text';

const getToken = name => ({ theme, hasError, disabled, checked }) => {
  const tokens = {
    [TOKENS.borderColor]:
      hasError && !disabled && !checked
        ? theme.jajiga.borderColorCheckboxRadioError
        : theme.jajiga.borderColorCheckboxRadio,
    [TOKENS.iconColor]: disabled
      ? theme.jajiga.colorIconCheckboxRadioDisabled
      : theme.jajiga.colorIconCheckboxRadio,
  };

  return tokens[name];
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
  border-radius: ${({ theme }) => theme.jajiga.borderRadiusNormal};
  transform: scale(1);
  transition: all ${({ theme }) => theme.jajiga.durationFast} ease-in-out;

  & > i {
    visibility: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
  }
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
  opacity: 0;
  z-index: -1;
  position: absolute;

  &:checked ~ ${TextContainer} > ${LabelText} {
    font-weight: ${({ theme }) => theme.jajiga.fontWeightMedium};
    & > ${StyledText} {
      font-weight: ${({ theme }) => theme.jajiga.fontWeightMedium};
    }
  }

  &:checked + ${IconContainer} > i {
    visibility: visible;
  }

  &:focus + ${IconContainer} {
    border: ${({ theme }) =>
      `2px ${theme.jajiga.borderStyleInput} ${theme.jajiga.borderColorCheckboxRadioFocus}`};
  }

  &:active + ${IconContainer} {
    border-color: ${({ disabled, theme }) =>
      disabled ? getToken(TOKENS.borderColor) : theme.jajiga.borderColorCheckboxRadioActive};
    transform: ${({ disabled, theme }) =>
      !disabled && `scale(${theme.jajiga.modifierScaleCheckboxRadioActive})`};
  }
`;

Input.defaultProps = {
  theme: defaultTheme,
};

export const Label = styled(({ className, children, dataTest }) => (
  <label className={className} data-test={dataTest}>
    {children}
  </label>
))`
  font-family: ${({ theme }) => theme.jajiga.fontFamily};
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: self-start;
  opacity: ${({ disabled, theme }) => (disabled ? theme.jajiga.opacityCheckboxDisabled : '1')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  position: relative;

  ${IconContainer} {
    color: ${getToken(TOKENS.iconColor)};
    border: 1px solid ${getToken(TOKENS.borderColor)};
  }

  &:hover ${IconContainer} {
    border-color: ${({ disabled, theme }) =>
      !disabled && theme.jajiga.borderColorCheckboxRadioHover};
  }
`;

Label.defaultProps = {
  theme: defaultTheme,
};

const Checkbox = React.forwardRef((props: CheckboxProps, ref: RefType) => {
  const {
    label,
    value,
    hasError = false,
    disabled = false,
    checked = false,
    name,
    onChange,
    dataTest,
    info,
    readOnly,
    tabIndex,
  } = props;

  return (
    <Label disabled={disabled} hasError={hasError} checked={checked}>
      <Input
        data-test={dataTest}
        data-state={getFieldDataState(!!hasError)}
        value={value}
        type="checkbox"
        disabled={disabled}
        name={name}
        tabIndex={tabIndex}
        checked={checked}
        onChange={onChange}
        ref={ref}
        readOnly={readOnly}
      />
      <IconContainer>
        <Icon className="checkbox" size="large" />
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

Checkbox.displayName = 'Checkbox';

export default Checkbox;
