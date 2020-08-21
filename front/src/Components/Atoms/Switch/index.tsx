import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import defaultTheme from 'utils/token';

const StyledSwitchContainer = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`;
StyledSwitchContainer.defaultProps = {
  theme: defaultTheme,
};
const StyledSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  border-radius: ${({ theme }) => theme.jajiga.borderRadiusSwitch};
  transition: 0.4s;
  &:before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    border-radius: ${({ theme }) => theme.jajiga.borderRadiusCircle};
    transition: 0.4s;
  }
`;
StyledSlider.defaultProps = {
  theme: defaultTheme,
};
const StyledSwitch = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  &:checked + ${StyledSlider} {
    background-color: #ff0000;
  }
  &:focus + ${StyledSlider} {
    box-shadow: 0 0 1px #ff0000;
  }
  &:checked + ${StyledSlider}:before {
    transform: translateX(26px);
  }
`;
StyledSwitch.defaultProps = {
  theme: defaultTheme,
};
const Switch = ({ checked, onChange }) => {
  return (
    <>
      <StyledSwitchContainer>
        <StyledSwitch type="checkbox" checked={checked} onChange={onChange} />
        <StyledSlider />
      </StyledSwitchContainer>
    </>
  );
};
export default Switch;
