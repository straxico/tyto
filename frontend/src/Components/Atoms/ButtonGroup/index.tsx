import React from 'react';
import styled from 'styled-components';

import { borderRadius, rtlSpacing } from 'utils/rtl';
import defaultTheme from 'utils/token';
import { StyledButtonLink } from '../ButtonLink';
import { StyledButton } from '../Button';

const StyledButtonGroup = styled.div<{ connected: boolean }>`
  display: flex;

  & ${StyledButtonLink}, & ${StyledButton} {
    border-radius: ${({ connected }) => connected && '0'};
    margin: ${({ theme, connected }) =>
      rtlSpacing(
        connected ? theme.jajiga.marginButtonGroupConnected : theme.jajiga.marginButtonGroup,
      )};

    &:first-child {
      border-radius: ${({ connected, theme }) =>
        connected &&
        borderRadius(`${theme.jajiga.borderRadiusNormal} 0 0 ${theme.jajiga.borderRadiusNormal}`)};
    }

    &:last-child {
      border-radius: ${({ connected, theme }) =>
        connected &&
        borderRadius(`0 ${theme.jajiga.borderRadiusNormal} ${theme.jajiga.borderRadiusNormal} 0`)};
      margin: 0;
    }
  }
`;

StyledButtonGroup.defaultProps = {
  theme: defaultTheme,
};

const ButtonGroup = ({ children, connected, dataTest }: ButtonGroupProps) => {
  return (
    <StyledButtonGroup connected={connected} data-test={dataTest}>
      {children}
    </StyledButtonGroup>
  );
};

export default ButtonGroup;
