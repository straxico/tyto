import { useEffect, useRef } from 'react';

const useUnmount = (calback, data) => {
  const mounted = useRef(null);

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);

  useEffect(
    () => () => {
      if (!mounted.current) {
        calback(data);
      }
    },
    [calback, data],
  );
};
export default useUnmount;
