import React from 'react';
import styled from 'styled-components';

import getSpacingToken from 'utils/common/getSpacingToken';
import defaultTheme from 'utils/token';

const StyledSeparator = styled.hr<SeparatorProps>`
  width: 100%;
  height: ${({ theme }) => theme.jajiga.heightSeparator};
  background: ${({ theme }) => theme.jajiga.backgroundSeparator};
  box-sizing: border-box;
  border-style: none;
  margin-top: 0;
  margin-bottom: ${getSpacingToken};
`;

StyledSeparator.defaultProps = {
  theme: defaultTheme,
};

const Separator = ({ spaceAfter }: SeparatorProps) => <StyledSeparator spaceAfter={spaceAfter} />;

export default Separator;
