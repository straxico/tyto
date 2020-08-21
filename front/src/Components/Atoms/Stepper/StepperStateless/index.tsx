import React from 'react';
import styled from 'styled-components';

import Icon from 'Atoms/Icon';
import defaultTheme from 'utils/token';
import Button from '../../Button';

const StyledStepper = styled.div`
  display: flex;
  width: 100%;
  flex: 1 1 auto;
`;

const StyledStepperInput = styled.input`
  width: 100%;
  height: 32px; // TODO: create token sizeStepper
  padding: 0;
  border: 0;
  font-size: ${({ theme }) => theme.jajiga.fontSizeInputNormal};
  font-weight: ${({ theme }) => theme.jajiga.fontWeightBold};
  color: ${({ theme }) => theme.jajiga.paletteInkNormal};
  text-align: center;
  min-width: 0;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &:focus {
    outline: none;
  }
`;

StyledStepperInput.defaultProps = {
  theme: defaultTheme,
};

const StepperStateless = ({
  disabled,
  dataTest,
  value,
  name,
  minValue,
  maxValue,
  onKeyDown,
  onBlur,
  onFocus,
  onIncrement,
  onDecrement,
  titleIncrement,
  titleDecrement,
  disabledIncrement,
  disabledDecrement,
}: StepperStateLessProps) => {
  return (
    <StyledStepper data-test={dataTest}>
      <Button
        disabled={
          disabled || disabledDecrement || (typeof value === 'number' && value <= +minValue)
        }
        iconLeft="home"
        type="secondary"
        size="small"
        onClick={ev => {
          if (onDecrement) {
            onDecrement(ev);
          }
        }}
        title={titleDecrement}
      />
      <StyledStepperInput
        name={name}
        disabled={disabled}
        type="text"
        value={value || 0}
        min={minValue}
        max={maxValue}
        onKeyDown={ev => {
          if (onKeyDown) {
            onKeyDown(ev);
          }
        }}
        onBlur={onBlur}
        onFocus={onFocus}
        readOnly
      />
      <Button
        disabled={
          disabled || disabledIncrement || (typeof value === 'number' && value >= +maxValue)
        }
        iconLeft="home"
        type="secondary"
        size="small"
        onClick={ev => {
          if (onIncrement) {
            onIncrement(ev);
          }
        }}
        title={titleIncrement}
      />
    </StyledStepper>
  );
};

export default StepperStateless;
