import React, { useRef, useMemo, useCallback } from 'react';
import styled, { css } from 'styled-components';

import useTheme from 'hooks/useTheme';
import { StyledText } from 'Atoms/Text/index';
import { Item } from 'Atoms/List/ListItem/index';
import media from 'utils/mediaQuery/index';
import defaultTheme from 'utils/token';
import resolveContainerPosition from '../helpers/resolveContainerPosition';
import resolveTooltipArrowAlign from '../helpers/resolveTooltipArrowAlign';
import resolveTooltipArrowPosition from '../helpers/resolveTooltipArrowPosition';
import tooltipSize from '../helpers/tooltipSize';
import resolveContainerAlign from '../helpers/resolveContainerAlign';
import tooltipArrowStyle from '../helpers/tooltipArrowStyle';
import tooltipPadding from '../helpers/tooltipPadding';
import Button from '../../Button';
import calculateTooltipPosition from '../helpers/calculateTooltipPosition';
import calculateTooltipAlign from '../helpers/calculateTooltipAlign';
import sortPositionsAndAligns from '../helpers/sortPositionsAndAligns';
import useDimensions from '../hooks/useDimensions';

const StyledTooltip = styled.div`
  width: 100%;
`;

const StyledTooltipWrapper = styled.div`
  display: block;
  position: fixed;
  width: 100%;
  box-sizing: border-box;
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  background-color: ${({ theme }) => theme.jajiga.backgroundTooltip};
  box-shadow: ${({ theme }) => theme.jajiga.boxShadowRaisedReverse};
  padding: ${({ theme }) => theme.jajiga.spaceMedium}; // TODO: create token paddingTooltip
  visibility: ${({ shownMobile }) => (shownMobile ? 'visible' : 'hidden')};
  opacity: ${({ shownMobile }) => (shownMobile ? '1' : '0')};
  transition: bottom ${({ theme }) => theme.jajiga.durationNormal} ease-in-out,
    visibility ${({ theme }) => theme.jajiga.durationFast} linear
      ${({ shownMobile, theme }) => !shownMobile && theme.jajiga.durationNormal};
  z-index: 10012; // TODO: use some good value
  bottom: ${({ shownMobile, tooltipWidth }) => (shownMobile ? '0' : `-${tooltipWidth}px`)};
  left: 0;
  right: 0;
  max-height: ${({ theme }) => `calc(100% - ${theme.jajiga.spaceXLarge})`};
  overflow-y: scroll;

  img {
    max-width: 100%;
  }

  ${media.largeMobile(css`
    max-height: none;
    overflow: visible;
    width: auto;
    position: absolute;
    max-width: ${tooltipSize};
    border-radius: ${({ theme }) => theme.jajiga.borderRadiusNormal};
    padding: ${tooltipPadding};
    background-color: ${({ theme }) => theme.jajiga.backgroundTooltipLargeMobile};
    visibility: ${({ shown }) => (shown ? 'visible' : 'hidden')};
    opacity: ${({ shown }) => (shown ? '1' : '0')};
    transition: opacity ${({ theme }) => theme.jajiga.durationFast} ease-in-out,
      visibility ${({ theme }) => theme.jajiga.durationFast} ease-in-out;
    box-shadow: ${({ theme }) => theme.jajiga.boxShadowRaised};

    // prevent position, IEs don't have initial YAY
    top: auto;
    right: auto;
    bottom: auto;
    left: auto;

    // tooltip positions
    ${resolveContainerPosition};
    ${resolveContainerAlign};
  `)};

  &::after {
    width: 0;
    height: 0;
    border-style: solid;
    content: ' ';
    display: none;
    position: absolute;

    ${tooltipArrowStyle};

    ${resolveTooltipArrowPosition};
    ${resolveTooltipArrowAlign};

    ${media.largeMobile(css`
      display: block;
    `)};
  }
`;

StyledTooltipWrapper.defaultProps = {
  theme: defaultTheme,
};

const StyledTooltipContent = styled.div`
  font-family: ${({ theme }) => theme.jajiga.fontFamily};
  font-size: ${({ theme }) => theme.jajiga.fontSizeTextNormal};
  font-weight: ${({ theme }) => theme.jajiga.fontWeightNormal};
  line-height: ${({ theme }) => theme.jajiga.lineHeightTextNormal};
  color: ${({ theme }) => theme.jajiga.paletteInkNormal};
  margin-bottom: 16px;

  & ${StyledText}, ${Item} {
    font-size: ${({ theme }) => theme.jajiga.fontSizeTextNormal};
    font-weight: ${({ theme }) => theme.jajiga.fontWeightNormal};
    color: ${({ theme }) => theme.jajiga.paletteInkNormal};
  }

  ${media.largeMobile(css`
    color: ${({ theme }) => theme.jajiga.paletteWhite};
    font-size: ${({ theme }) => theme.jajiga.fontSizeTextSmall};
    font-weight: ${({ theme }) => theme.jajiga.fontWeightMedium};
    margin-bottom: 0;

    & ${StyledText}, ${Item} {
      color: ${({ theme }) => theme.jajiga.paletteWhite};
      font-weight: ${({ theme }) => theme.jajiga.fontWeightMedium};
      font-size: ${({ theme }) => theme.jajiga.fontSizeTextSmall};
    }
  `)};
`;

StyledTooltipContent.defaultProps = {
  theme: defaultTheme,
};

const StyledTooltipClose = styled.div`
  ${media.largeMobile(css`
    display: none;
    visibility: hidden;
  `)}
`;

StyledTooltipClose.defaultProps = {
  theme: defaultTheme,
};

const StyledTooltipOverlay = styled.div<{ shownMobile }>`
  position: fixed;
  display: block;
  visibility: ${({ shownMobile }) => (shownMobile ? 'visible' : 'hidden')};
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(23, 27, 30, 0.6); // TODO: token
  z-index: 10011; // TODO: use some good value
  opacity: ${({ shownMobile }) => (shownMobile ? '1' : '0')};
  transition: opacity ${({ theme }) => theme.jajiga.durationNormal} ease-in-out,
    visibility ${({ theme }) => theme.jajiga.durationFast} linear
      ${({ shownMobile, theme }) => !shownMobile && theme.jajiga.durationNormal};

  ${media.largeMobile(css`
    display: none;
    visibility: hidden;
  `)};
`;

StyledTooltipOverlay.defaultProps = {
  theme: defaultTheme,
};

const TooltipContent = ({
  dataTest,
  shownMobile,
  shown,
  size,
  tooltipId,
  children,
  onClose,
  onCloseMobile,
  onEnter,
  preferredPosition,
  containerRef,
}: TooltipContentType) => {
  const theme = useTheme();
  const overlay = useRef(null);
  const tooltip = useRef(null);
  const content = useRef(null);
  const [positions, aligns] = useMemo(() => sortPositionsAndAligns(preferredPosition, theme), [
    preferredPosition,
    theme,
  ]);
  const dimensions = useDimensions({ containerRef, tooltip, content }, children);
  const position = useMemo(() => calculateTooltipPosition(positions, dimensions), [
    dimensions,
    positions,
  ]);
  const align = useMemo(() => calculateTooltipAlign(position, aligns, dimensions), [
    aligns,
    dimensions,
    position,
  ]);
  const handleClickOutside = useCallback(
    ev => {
      ev.stopPropagation();
      if (ev.target === overlay.current) {
        onCloseMobile();
      }
    },
    [onCloseMobile],
  );
  return (
    <StyledTooltip data-test={dataTest}>
      <StyledTooltipOverlay shownMobile={shownMobile} ref={overlay} onClick={handleClickOutside} />
      <StyledTooltipWrapper
        shown={shown && position && align}
        shownMobile={shownMobile}
        size={size}
        align={align}
        position={position}
        ref={tooltip}
        containerTop={dimensions.containerTop}
        containerLeft={dimensions.containerLeft}
        containerHeight={dimensions.containerHeight}
        containerWidth={dimensions.containerWidth}
        tooltipHeight={dimensions.tooltipHeight}
        tooltipWidth={dimensions.tooltipWidth}
        contentHeight={dimensions.contentHeight}
        role="tooltip"
        aria-hidden={!shown && !shownMobile}
        id={tooltipId}
        onMouseEnter={onEnter}
        onMouseLeave={onClose}>
        <StyledTooltipContent ref={content}>{children}</StyledTooltipContent>
        <StyledTooltipClose>
          <Button type="secondary" onClick={onCloseMobile}>
            close
          </Button>
        </StyledTooltipClose>
      </StyledTooltipWrapper>
    </StyledTooltip>
  );
};

export default TooltipContent;
