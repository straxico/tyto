import React from 'react';

import QueryContext from 'utils/ThemeProvider/QueryContext';
import useMediaQueryContext from 'utils/ThemeProvider/QueryContext/useMediaQueryContext';

const useMediaQuery: any = () => {
  const media = React.useContext(QueryContext);
  if (media != null && Object.values(media).some(v => v != null)) {
    return media;
  }
  return useMediaQueryContext();
};

export default useMediaQuery;
