import React from 'react';
import styled from 'styled-components';

import { borderRadius, rtlSpacing } from 'utils/rtl';
import defaultTheme from 'utils/token';
import { StyledButtonLink } from '../ButtonLink';
import { StyledButton } from '../Button';

const StyledButtonGroup = styled.div`
  display: flex;

  ${StyledButtonLink}, ${StyledButton} {
    border-radius: 0;
    margin: ${({ theme }) => rtlSpacing(theme.jajiga.marginButtonGroup)};

    &:first-child {
      border-radius: ${({ theme }) =>
        borderRadius(`${theme.jajiga.borderRadiusNormal} 0 0 ${theme.jajiga.borderRadiusNormal}`)};
    }

    &:last-child {
      border-radius: ${({ theme }) =>
        borderRadius(`0 ${theme.jajiga.borderRadiusNormal} ${theme.jajiga.borderRadiusNormal} 0`)};
      margin: 0;
    }
  }
`;

StyledButtonGroup.defaultProps = {
  theme: defaultTheme,
};

const ButtonGroup = ({ children, dataTest }: ButtonGroupProps) => {
  return <StyledButtonGroup data-test={dataTest}>{children}</StyledButtonGroup>;
};

export default ButtonGroup;
