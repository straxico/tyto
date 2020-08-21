import React from 'react';

const ListContext = React.createContext<ListContextProps>({
  size: null,
  type: null,
});

export default ListContext;
