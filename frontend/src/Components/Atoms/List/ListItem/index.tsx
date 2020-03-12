import React from 'react';
import styled from 'styled-components';

import defaultTheme from 'utils/token';

export const Item = styled.li`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: ${({ theme }) => theme.jajiga.spaceXXSmall};

  &:last-child,
  &:last-of-type {
    margin: 0;
  }
`;

Item.defaultProps = {
  theme: defaultTheme,
};

const ListItem = ({ children }: ListItemProps) => (
  <Item>
    <span>{children}</span>
  </Item>
);

export default ListItem;
