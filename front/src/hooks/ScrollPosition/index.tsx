// https://dev.to/n8tb1t/tracking-scroll-position-with-react-hooks-3bbj

import { useRef } from 'react';
import useLayoutEffect from '../useIsomorphicLayouEffect';

const isBrowser = typeof window !== `undefined`;

const defaultWindowPosition = {
  x: 0,
  scrollTop: 0,
  clientHeight: 0,
  scrollHeight: 0,
};
const defaultElementPosition = {
  left: 0,
  top: 0,
  height: 0,
  windowsHeight: 0,
  windowScrollTop: 0,
};
const getScrollPosition: getScrollPositionType = ({ element, useWindow }) => {
  if (!isBrowser) {
    return (useWindow ? defaultWindowPosition : defaultElementPosition) as any;
  }
  const target = element ? element.current : document.body;
  const position = target.getBoundingClientRect();
  return (useWindow
    ? {
        x: window.scrollX,
        scrollTop: window.pageYOffset,
        clientHeight: window.screen.height,
        scrollHeight: target.scrollHeight,
      }
    : {
        left: position.left,
        top: position.top,
        height: position.height,
        windowsHeight: window.innerHeight,
        windowScrollTop: window.scrollY,
      }) as any;
};

const useScrollPosition: ScrollPositionType = ({
  effect,
  deps = [],
  stop = false,
  element = false,
  useWindow = false,
  wait = null,
}) => {
  const position = useRef(getScrollPosition({ useWindow }));

  let throttleTimeout = null;

  const callBack = () => {
    const currPos = getScrollPosition({ element, useWindow });
    effect({ prevPos: position.current, currPos } as any);
    position.current = currPos;
    throttleTimeout = null;
  };

  useLayoutEffect(() => {
    if (!isBrowser) {
      return;
    }

    const handleScroll = () => {
      if (wait) {
        if (throttleTimeout === null) {
          throttleTimeout = setTimeout(callBack, wait);
        }
      } else {
        callBack();
      }
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);

    if (stop) {
      window.removeEventListener('scroll', handleScroll);
    }
    // eslint-disable-next-line consistent-return
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [stop, ...deps]);
};

export default useScrollPosition;
