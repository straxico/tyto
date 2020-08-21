/* eslint-disable no-param-reassign */

/* Latest Sync with KIWI: Commits on nov 27 2019 */

import React, { useRef, useCallback, useMemo, useEffect } from 'react';
import styled from 'styled-components';

import Portal from 'utils/Portal';
import useTheme from 'hooks/useTheme';
import useStateWithTimeout from 'hooks/useStateWithTimeout';
import PopoverContentWrapper from './components/ContentWrapper';
import { POSITIONS, ALIGNS } from './consts';

const StyledPopoverChild = styled.div`
  position: relative;
`;

const Popover = ({
  children,
  content,
  preferredPosition = POSITIONS.BOTTOM as PositionsCore,
  preferredAlign = ALIGNS.START as AlignsCore,
  dataTest,
  opened,
  width,
  noPadding,
  overlapped,
  onClose,
  onOpen,
  fixed,
  actions,
  fullscreen = false,
  focusIn = false,
  buttonref, // skm
}: PopoverProps) => {
  const theme = useTheme();
  const transitionLength = useMemo(() => parseFloat(theme.jajiga.durationFast) * 1000, [
    theme.jajiga.durationFast,
  ]);
  const [shown, setShown, setShownWithTimeout, clearShownTimeout] = useStateWithTimeout<boolean>(
    false,
    transitionLength,
  );
  const [render, setRender, setRenderWithTimeout, clearRenderTimeout] = useStateWithTimeout<
    boolean
  >(false, transitionLength);

  let container = useRef(null);

  /** **************** IMPORTANT: BEGIN *****************
   DESC: if content is empty then set children as content
   USAGE: Search filters
   **/
  if (!content) {
    content = children;
    children = null;
    container = buttonref;
  }
  /** ***************** IMPORTANT: END ******************/

  const resolveCallback = useCallback(
    state => {
      if (onClose && !state) onClose();
      if (onOpen && state) onOpen();
    },
    [onClose, onOpen],
  );

  const handleOut = useCallback(
    ev => {
      // If open prop is present ignore custom handler
      if (container.current && !container.current.contains(ev.target)) {
        if (typeof opened === 'undefined') {
          setShown(false);
          clearShownTimeout();
          setRenderWithTimeout(false);
          resolveCallback(false);
        } else if (onClose) onClose();
      }
    },
    [clearShownTimeout, onClose, opened, resolveCallback, setRenderWithTimeout, setShown],
  );

  const handleClick = useCallback(() => {
    // If open prop is present ignore custom handler
    if (typeof opened === 'undefined') {
      if (shown) {
        setShown(false);
        clearShownTimeout();
        setRenderWithTimeout(false);
        resolveCallback(false);
      } else {
        setRender(true);
        clearRenderTimeout();
        setShownWithTimeout(true);
        resolveCallback(true);
      }
    } else if (opened) {
      resolveCallback(false);
    } else if (!opened) {
      resolveCallback(true);
    }
  }, [
    clearRenderTimeout,
    clearShownTimeout,
    opened,
    resolveCallback,
    setRender,
    setRenderWithTimeout,
    setShown,
    setShownWithTimeout,
    shown,
  ]);

  const childRef = useRef(null); // skm

  useEffect(() => {
    if (typeof opened !== 'undefined') {
      if (opened) {
        setRender(true);
        clearRenderTimeout();
        setShownWithTimeout(true);
      } else {
        setShown(false);
        clearShownTimeout();
        setRenderWithTimeout(false);
      }
    }
  }, [
    opened,
    clearRenderTimeout,
    clearShownTimeout,
    setRender,
    setShown,
    setShownWithTimeout,
    setRenderWithTimeout,
  ]);

  return (
    <>
      {children && (
        <StyledPopoverChild onClick={handleClick} ref={container}>
          {children}
        </StyledPopoverChild>
      )}
      {render && (
        <Portal element="popovers">
          <PopoverContentWrapper
            shown={shown}
            width={width}
            containerRef={container}
            preferredPosition={preferredPosition}
            preferredAlign={preferredAlign}
            onClose={handleOut}
            dataTest={dataTest}
            noPadding={noPadding}
            overlapped={overlapped}
            fullscreen={fullscreen}
            fixed={fixed}
            actions={actions}
            childRef={childRef} // skm
            focusIn={focusIn}>
            {fullscreen &&
              focusIn &&
              React.cloneElement(children, {
                containerRef: null, // IMPORTANT: This may says to cloneElement that skip containerRef reference!! TRICK
                ref: childRef,
              })}
            {content}
          </PopoverContentWrapper>
        </Portal>
      )}
    </>
  );
};

export default Popover;
