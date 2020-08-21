import React, { useEffect } from 'react';
import useWindowViewPort from 'hooks/useWindowViewPort';
import { viewPortToken } from 'utils/token';
import getHideDom from 'Atoms/Hide/helpers/getHideDom';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = React.useState(true);
  const viewport = useWindowViewPort();
  React.useEffect(() => {
    const ismobTemp = getHideDom(viewPortToken.desktop, viewport);
    if (ismobTemp != isMobile) {
      setIsMobile(getHideDom(viewPortToken.desktop, viewport));
    }
  }, [viewport]);

  return isMobile;
};

export default useIsMobile;
