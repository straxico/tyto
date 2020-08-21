import * as React from 'react';
import styled, { css } from 'styled-components';

import Button from 'Atoms/Button';
import defaultTheme from 'utils/token';

const StyledButton = styled.div<{ transparent: any }>`
  &:hover,
  &:active,
  &:focus {
    background: ${({ theme }) => theme.jajiga.backgroundButtonSecondary};
    color: ${({ theme }) => theme.jajiga.colorTextButtonSecondary};
    transform: none;
    cursor: default;
  }
  ${({ transparent }) =>
    transparent &&
    css`
      &&& {
        background-color: transparent;
      }
    `};
`;

StyledButton.defaultProps = {
  theme: defaultTheme,
};

const ActiveButton = ({ children, transparent, size }: ActiveButtonProps) => {
  return (
    <Button
      type="secondary"
      size={size}
      component={props => <StyledButton {...props} transparent={transparent} />}>
      {children}
    </Button>
  );
};

export default ActiveButton;
