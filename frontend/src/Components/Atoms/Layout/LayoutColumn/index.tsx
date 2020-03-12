import React from 'react';
import styled from 'styled-components';

import defaultTheme from 'utils/token';
import getViewportHideStyles from '../../Hide/helpers/getViewportHideStyles';

const StyledColumn = styled.div<{ hideOn }>`
  ${({ hideOn }) => !!hideOn && getViewportHideStyles(hideOn)};
`;

StyledColumn.defaultProps = {
  theme: defaultTheme,
};

const LayoutColumn = ({ children, hideOn, element = 'div' }: LayoutColumnProps) => (
  <StyledColumn hideOn={hideOn} as={element}>
    {children}
  </StyledColumn>
);

export default LayoutColumn;
