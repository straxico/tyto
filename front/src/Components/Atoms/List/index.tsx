import React from 'react';
import styled from 'styled-components';

import getSpacingToken from 'utils/common/getSpacingToken';
import defaultTheme from 'utils/token';
import { SIZES, TYPES } from './consts';
import ListContext from './ListContext';
import { getLineHeightToken } from './ListItem';

const getSizeToken = ({ theme, size }) => {
  const sizeTokens = {
    [SIZES.SMALL]: theme.jajiga.fontSizeTextSmall,
    [SIZES.NORMAL]: theme.jajiga.fontSizeTextNormal,
    [SIZES.LARGE]: theme.jajiga.fontSizeTextLarge,
  };
  return sizeTokens[size];
};

const getTypeToken = ({ theme, type }) => {
  const typeTokens = {
    [TYPES.PRIMARY]: theme.jajiga.colorTextPrimary,
    [TYPES.SECONDARY]: theme.jajiga.colorTextSecondary,
  };

  return typeTokens[type];
};

const StyledList = styled(({ className, children, dataTest }) => (
  <ul className={className} data-test={dataTest}>
    {children}
  </ul>
))`
  display: flex;
  width: 100%;
  flex-direction: column;
  font-size: ${getSizeToken};
  line-height: ${getLineHeightToken};
  color: ${getTypeToken};
  list-style: none;
  padding: 0;
  margin: 0;
  margin-bottom: ${getSpacingToken};
`;

StyledList.defaultProps = {
  theme: defaultTheme,
};

const List = ({
  children,
  size = SIZES.NORMAL as ListSize,
  type = TYPES.PRIMARY as ListType,
  spaceAfter,
  dataTest,
}: ListProps) => (
  <StyledList type={type} size={size} dataTest={dataTest} spaceAfter={spaceAfter}>
    <ListContext.Provider value={{ size, type }}>{children}</ListContext.Provider>
  </StyledList>
);

export default List;

export { default as ListItem } from './ListItem';
