import { useEffect, useState } from 'react';
import { DEVICES } from 'utils/mediaQuery/consts';
import { getBreakpointWidth } from 'utils/mediaQuery/index';
import defaultTheme from 'utils/token';

function useWindowViewPort() {
  const [viewport, setViewport] = useState();

  const sortList = list =>
    list.sort((a, b) => {
      return a[1] - b[1];
    });
  const devices = DEVICES.reduce<any>((list, vp) => {
    // eslint-disable-next-line no-param-reassign
    list.push([vp, getBreakpointWidth(vp, defaultTheme, true)]);
    return list;
  }, []);

  const handleResize = () => {
    let tempDevices = Object.assign([], devices);
    tempDevices.push(['current', window.innerWidth]);
    tempDevices = sortList(tempDevices);
    let currentViewport: any[];
    for (let i = 0; i < tempDevices.length; i += 1) {
      if (tempDevices[i][0] == 'current') {
        currentViewport = tempDevices[Math.abs(i - 1)];
      }
    }
    if (viewport !== currentViewport[0]) {
      setViewport(currentViewport[0]);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return viewport;
}
export default useWindowViewPort;
