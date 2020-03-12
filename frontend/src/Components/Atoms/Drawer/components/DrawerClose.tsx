import React from 'react';
import styled from 'styled-components';
import defaultTheme from 'utils/token';
import { left } from 'utils/rtl';
import ButtonLink from '../../ButtonLink';

const StyledDrawerClose = styled.div`
  margin-${left}: ${({ theme }) => theme.jajiga.spaceMedium};
`;

StyledDrawerClose.defaultProps = {
  theme: defaultTheme,
};

const DrawerClose = ({ onClick }: DrawerCloseProps) => {
  return (
    <StyledDrawerClose>
      <ButtonLink onClick={onClick} iconLeft="close" type="secondary" title="close" transparent />
    </StyledDrawerClose>
  );
};

export default DrawerClose;
