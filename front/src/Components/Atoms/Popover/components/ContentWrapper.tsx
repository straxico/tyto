import React, { useRef, useEffect, useContext, useMemo } from 'react';
import styled, { css } from 'styled-components';
import convertHexToRgba from '@kiwicom/orbit-design-tokens/lib/convertHexToRgba';

import transition from 'utils/transition';
import boundingClientRect from 'utils/boundingClientRect';
import defaultTheme from 'utils/token';
import media from 'utils/mediaQuery';
import useClickOutside from 'hooks/useClickOutside';
import Button from '../../Button';
import resolvePopoverPosition from '../helpers/resolvePopoverPosition';
import resolvePopoverHorizontal from '../helpers/resolvePopoverHorizontal';
import calculatePopoverPosition from '../helpers/calculatePopoverPosition';
import calculateVerticalPosition from '../helpers/calculateVerticalPosition';
import calculateHorizontalPosition from '../helpers/calculateHorizontalPosition';
import useDimensions from '../hooks/useDimensions';
import { ModalContext } from '../../Modal/ModalContext';
import getScrollableParent from '../helpers/getScrollableParent';

const mobileTop = theme => theme.jajiga.spaceXLarge;
const popoverPadding = theme => theme.jajiga.spaceMedium;
const actionsSpace = theme => theme.jajiga.spaceMedium;

const allSpacing = theme =>
  parseFloat(popoverPadding(theme)) * 2 +
  parseFloat(mobileTop(theme)) +
  parseFloat(actionsSpace(theme));

const StyledContentWrapper = styled.div<{ actionsHeight }>`
  overflow: auto;
  max-height: ${({ actionsHeight, theme }) =>
    // Calculates all the spacing relative to viewport to get space for action box
    `calc(100vh - ${allSpacing(theme) + actionsHeight}px)`};

  ${media.largeMobile(css`
    max-height: 100%;
  `)}
`;

StyledContentWrapper.defaultProps = {
  theme: defaultTheme,
};

const StyledActions = styled.div`
  padding: ${({ theme }) => popoverPadding(theme)};
  padding-top: 0;
`;

StyledActions.defaultProps = {
  theme: defaultTheme,
};

const StyledPopoverParent = styled.div<IStyledPopoverParent>`
  position: fixed;
  ${({ theme, fullscreen }) =>
    fullscreen
      ? `top: 0;
      height: 100%;`
      : `
      bottom:0;
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  box-shadow: ${theme.jajiga.boxShadowRaisedReverse};
  `}
  left: 0;
  box-sizing: border-box;
  right: 0;
  width: 100%;
  height: auto;
  background-color: ${({ theme }) => theme.jajiga.backgroundModal}; // TODO: Add token
  z-index: 1000;
  transition: ${transition(['opacity', 'transform'], 'fast', 'ease-in-out')};
  transform: translateY(${({ shownMobile }) => (shownMobile ? '0%' : '100%')});
  max-height: ${({ theme }) => `calc(100% - ${mobileTop(theme)})`};
  &:focus {
    outline: 0;
  }
  ${media.largeMobile(css<any>`
    z-index: ${({ isInsideModal }) => (isInsideModal ? '1000' : '600')};
    position: ${({ fixed }) => (fixed ? 'fixed' : 'absolute')};
    left: auto;
    right: auto;
    bottom: auto;
    width: ${({ width }) => (width ? `${width}` : 'auto')};
    opacity: ${({ shown }) => (shown ? '1' : '0')};
    transform: none;
    border-radius: ${({ theme }) => theme.jajiga.borderRadiusNormal};
    box-shadow: ${({ theme }) => theme.jajiga.boxShadowRaised};
    max-height: none;
    ${resolvePopoverPosition}
    ${resolvePopoverHorizontal}
  `)}

  ${media.largeMobile(css`
    ${resolvePopoverPosition}
    ${resolvePopoverHorizontal}
  `)}
`;

StyledPopoverParent.defaultProps = {
  theme: defaultTheme,
};

const StyledPopoverPadding = styled.div<{ noPadding: boolean }>`
  padding: ${({ noPadding, theme }) => (noPadding ? 0 : popoverPadding(theme))};
`;

StyledPopoverPadding.defaultProps = {
  theme: defaultTheme,
};

const StyledPopoverContent = styled.div``;

const StyledOverlay = styled.div<{ shown: boolean; isInsideModal: boolean }>`
  display: block;
  position: fixed;
  opacity: ${({ shown }) => (shown ? '1' : '0')};
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => convertHexToRgba(theme.jajiga.paletteInkNormal, 60)};
  transition: opacity ${({ theme }) => theme.jajiga.durationNormal} ease-in-out;
  z-index: 999;

  ${media.largeMobile(css`
    display: none;
  `)};
`;
StyledOverlay.defaultProps = {
  theme: defaultTheme,
};

const StyledPopoverClose = styled.div`
  padding: ${({ theme }) => popoverPadding(theme)};
  padding-top: 0;

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
  dataTest,
  preferredPosition,
  preferredAlign,
  containerRef,
  noPadding,
  overlapped,
  shown,
  fixed,
  actions,
  fullscreen, // skm
  childRef, // skm
  focusIn, // skm
}: ContentWrapperProps) => {
  const { isInsideModal } = useContext(ModalContext);
  const popover = useRef(null);
  const content = useRef(null);
  const overlay = useRef(null);
  const actionsRef = useRef(null);
  const position = calculatePopoverPosition(preferredPosition, preferredAlign);
  const scrollableParent = useMemo(() => getScrollableParent(containerRef.current), [containerRef]);
  const dimensions = useDimensions({ containerRef, popover, content, fixed, scrollableParent });
  const verticalPosition = calculateVerticalPosition(position[0], dimensions);
  const horizontalPosition = calculateHorizontalPosition(position[1], dimensions);
  const actionsDimensions = useMemo(() => boundingClientRect(actionsRef), [actionsRef.current]);

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

  useClickOutside(popover, onClose);

  return (
    <>
      <StyledOverlay ref={overlay} shown={shown} isInsideModal={isInsideModal} />
      <StyledPopoverParent
        shownMobile={shown}
        shown={shown && verticalPosition != null && horizontalPosition != null}
        anchor={horizontalPosition}
        position={verticalPosition}
        containerTop={dimensions.containerTop}
        containerLeft={dimensions.containerLeft}
        containerPureTop={dimensions.containerPureTop}
        containerHeight={dimensions.containerHeight}
        containerWidth={dimensions.containerWidth}
        popoverHeight={dimensions.popoverHeight}
        popoverWidth={dimensions.popoverWidth}
        width={width}
        ref={popover}
        tabIndex={0}
        data-test={dataTest}
        noPadding={noPadding}
        overlapped={overlapped}
        fullscreen={fullscreen}
        role="tooltip"
        fixed={fixed}
        isInsideModal={isInsideModal}>
        <StyledPopoverContent ref={content}>
          <StyledContentWrapper actionsHeight={actionsDimensions && actionsDimensions.height}>
            <StyledPopoverPadding noPadding={noPadding}>{children}</StyledPopoverPadding>
          </StyledContentWrapper>

          {actions ? (
            <StyledActions ref={actionsRef}>{actions}</StyledActions>
          ) : (
            <StyledPopoverClose ref={actionsRef}>
              <Button type="secondary" onClick={onClose}>
                بستن
              </Button>
            </StyledPopoverClose>
          )}
        </StyledPopoverContent>
      </StyledPopoverParent>
    </>
  );
};

export default PopoverContentWrapper;
