import React, { useRef, useEffect } from 'react';
import styled, { css, keyframes, ThemeProvider } from 'styled-components';
import defaultTheme from 'utils/token';
import media from 'utils/mediaQuery';
import Button from 'Atoms/Button';
import resolvePopoverPosition from '../helpers/resolvePopoverPosition';
import resolvePopoverHorizontal from '../helpers/resolvePopoverHorizontal';
import calculatePopoverPosition from '../helpers/calculatePopoverPosition';
import calculateVerticalPosition from '../helpers/calculateVerticalPosition';
import calculateHorizontalPosition from '../helpers/calculateHorizontalPosition';
import useDimensions from '../hooks/useDimensions';

const showAnimation = keyframes`
  from {
    transform: translateY(100%);
  }

  to {
    transform: translateY(0);
  }
`;

const opacityAnimation = keyframes`
  from {
    opacity: 0.9;
  }

  to {
    opacity: 1;
  }
`;

interface IStyledPopoverParent {
  theme: any;
  anchor: any;
  position: any;
  containerTop: any;
  containerLeft: any;
  containerHeight: any;
  containerWidth: any;
  popoverHeight: any;
  popoverWidth: any;
  width: string;
  ref: any;
  onClick: any;
  tabIndex: any;
  noPadding: boolean;
  overlapped: any;
  role: any;
  fullscreen?: boolean;
}
const StyledPopoverParent = styled.div<IStyledPopoverParent>`
  position: fixed;
  ${({ theme, fullscreen }) =>
    fullscreen
      ? `
      top: 0;
      height: 100%;`
      : `bottom:0; border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  box-shadow: ${theme.jajiga.boxShadowElevatedLevel1};
  `}
  left: 0;
  right: 0;
  width: 100%;
  box-sizing: border-box;
  animation: ${({ fullscreen }) => (fullscreen ? showAnimation : showAnimation)}
    ${({ theme }) => theme.jajiga.durationFast} linear;
  background-color: ${({ theme }) => theme.jajiga.backgroundModal}; // TODO: Add token
  padding: ${({ theme, noPadding }) => (noPadding ? 0 : theme.jajiga.spaceMedium)};
  overflow: hidden;
  z-index: 1000;

  &:focus {
    outline: 0;
  }
  ${media.largeMobile(css`
    position: absolute;
    left: auto;
    right: auto;
    bottom: auto;
    width: ${(props: IStyledPopoverParent) => (props.width ? `${props.width}` : 'auto')};
    animation: ${opacityAnimation} ${({ theme }) => theme.jajiga.durationFast} linear;
    border-radius: ${({ theme }) => theme.jajiga.borderRadiusNormal};

    ${resolvePopoverPosition}
    ${resolvePopoverHorizontal}
  `)}
`;

StyledPopoverParent.defaultProps = {
  theme: defaultTheme,
};

const StyledPopoverContent = styled.div``;

const StyledOverlay = styled.div`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(23, 27, 30, 0.6); // TODO: token
  animation: ${opacityAnimation} ${({ theme }) => theme.jajiga.durationFast} ease-in;
  z-index: 999;

  ${media.largeMobile(css`
    background-color: transparent;
  `)};
`;
StyledOverlay.defaultProps = {
  theme: defaultTheme,
};

const StyledPopoverClose = styled.div<{ noPadding: boolean }>`
  padding: ${({ theme, noPadding }) => (noPadding ? theme.jajiga.spaceMedium : 0)};
  padding-top: ${({ theme }) => theme.jajiga.spaceMedium};

  ${media.largeMobile(css`
    display: none;
    visibility: hidden;
    padding-bottom: 0;
  `)}
`;
StyledPopoverClose.defaultProps = {
  theme: defaultTheme,
};

const PopoverContentWrapper = ({
  children,
  onClose,
  width,
  preferredPosition,
  containerRef,
  noPadding,
  overlapped,
  fullscreen,
  childRef,
  focusIn,
}: ContentWrapperProps) => {
  const popover = useRef(null);
  const content = useRef(null);
  const overlay = useRef(null);
  const position = calculatePopoverPosition(preferredPosition);
  const dimensions = useDimensions({ containerRef, popover, content });
  const verticalPosition = calculateVerticalPosition(position[0], dimensions);
  const horizontalPosition = calculateHorizontalPosition(position[1], dimensions);

  const handleClick = React.useCallback(
    ev => {
      ev.stopPropagation();

      if (ev.target === overlay.current) {
        onClose();
      }
    },
    [onClose],
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      if (childRef.current) {
        childRef.current.focus();
      } else if (popover.current && !focusIn) {
        popover.current.focus();
      }
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider theme={defaultTheme}>
      <React.Fragment>
        <StyledOverlay ref={overlay} onClick={handleClick} />
        <StyledPopoverParent
          anchor={horizontalPosition}
          position={verticalPosition}
          containerTop={dimensions.containerTop}
          containerLeft={dimensions.containerLeft}
          containerHeight={dimensions.containerHeight}
          containerWidth={dimensions.containerWidth}
          popoverHeight={dimensions.popoverHeight}
          popoverWidth={dimensions.popoverWidth}
          width={width}
          ref={popover}
          onClick={handleClick}
          tabIndex={0}
          noPadding={noPadding}
          overlapped={overlapped}
          fullscreen={fullscreen}
          role="tooltip">
          <StyledPopoverContent ref={content}>
            {children}
            <StyledPopoverClose noPadding={noPadding}>
              <Button type="secondary" block onClick={onClose}>
                بستن
              </Button>
            </StyledPopoverClose>
          </StyledPopoverContent>
        </StyledPopoverParent>
      </React.Fragment>
    </ThemeProvider>
  );
};

export default PopoverContentWrapper;
