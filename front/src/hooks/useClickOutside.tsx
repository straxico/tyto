import { useEffect } from 'react';

type UseClickOutside = (
  ref: { current: HTMLElement | null },
  handler: (ev: React.SyntheticEvent<HTMLElement>) => void,
) => void;

const useClickOutside: UseClickOutside = (ref, handler) => {
  useEffect(() => {
    const handleClose = event => {
      if (ref.current && !ref.current.contains(event.target)) {
        handler(event);
      }
    };
    window.addEventListener('mousedown', handleClose);
    window.addEventListener('touchstart', handleClose);
    return () => {
      window.removeEventListener('mousedown', handleClose);
      window.removeEventListener('touchstart', handleClose);
    };
  }, [handler, ref]);
};

export default useClickOutside;
