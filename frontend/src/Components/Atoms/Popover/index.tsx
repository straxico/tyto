import React, { useState, useRef } from 'react';
import styled from 'styled-components';

import Portal from 'utils/Portal';
import PopoverContentWrapper from './components/ContentWrapper';

const StyledPopoverChild = styled.div`
  position: relative;
`;

const Popover = ({
  children,
  content,
  preferredPosition = 'bottom',
  opened,
  width,
  noPadding,
  overlapped,
  onClose,
  onOpen,
  fullscreen = false,
  focusIn = false,
}: PopoverProps) => {
  const [shown, setShown] = useState<boolean>(false);
  const container = useRef(null);

  const resolveCallback = React.useCallback(() => {
    if (onClose && shown) onClose();
    if (onOpen && !shown) onOpen();
  }, [onClose, onOpen, shown]);

  const handleOut = () => {
    // If open prop is present ignore custom handler
    if (typeof opened === 'undefined') {
      setShown(false);
      resolveCallback();
    } else if (onClose) onClose();
  };

  const handleClick = () => {
    // If open prop is present ignore custom handler
    if (typeof opened === 'undefined') {
      setShown(!shown);
      resolveCallback();
    } else if (onOpen) onOpen();
  };

  const childRef = useRef(null);

  return (
    <React.Fragment>
      <StyledPopoverChild onClick={handleClick} ref={container}>
        {children}
      </StyledPopoverChild>
      {(shown || opened) && (
        <Portal element="popovers">
          <PopoverContentWrapper
            width={width}
            containerRef={container}
            preferredPosition={preferredPosition}
            onClose={handleOut}
            noPadding={noPadding}
            overlapped={overlapped}
            fullscreen={fullscreen}
            childRef={childRef}
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
    </React.Fragment>
  );
};

export default Popover;
