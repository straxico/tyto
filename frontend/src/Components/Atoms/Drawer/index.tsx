import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import styled, { css } from 'styled-components';
import convertHexToRgba from '@kiwicom/orbit-design-tokens/lib/convertHexToRgba';

import mq from 'utils/mediaQuery';
import defaultTheme from 'utils/token';
import { rtlSpacing } from 'utils/rtl';
import useTheme from 'hooks/useTheme';
import useStateWithTimeout from 'hooks/useStateWithTimeout';
import DrawerClose from './components/DrawerClose';
import POSITIONS from './consts';
import getPosition from './helpers/getPosition';
import getTransitionAnimation from './helpers/getTransitionAnimation';
import Stack from '../Stack';
import Heading from '../Heading';

const getPadding = ({ noPadding, theme, hasTopPadding }) => {
  const padding = space => (!hasTopPadding ? rtlSpacing(`0 ${space} ${space}`) : space);
  return (
    !noPadding &&
    css`
      padding: ${padding(theme.jajiga.spaceMedium)};
      ${mq.largeMobile(css`
        padding: ${padding(theme.jajiga.spaceXLarge)};
      `)};
    `
  );
};

const StyledDrawer = styled.div<{ overlayShown; shown }>`
  display: flex;
  visibility: ${({ overlayShown }) => (overlayShown ? 'visible' : 'hidden')};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme, shown }) =>
    shown ? convertHexToRgba(theme.jajiga.paletteInkNormal, 50) : 'transparent'};
  // TODO: use z-index framework
  z-index: 825;
  transition: background-color ${({ theme }) => theme.jajiga.durationFast} ease-in-out;
`;

StyledDrawer.defaultProps = {
  theme: defaultTheme,
};

const StyledDrawerSide = styled(({ theme, width, position, shown, suppressed, ...props }) => (
  <aside {...props} />
))`
  display: block;
  position: absolute;
  box-sizing: border-box;
  top: 0;
  bottom: 0;
  height: 100%;
  font-family: ${({ theme }) => theme.jajiga.fontFamily};
  overflow-y: auto;
  // TODO: use new elevation levels
  box-shadow: 0 4px 8px 0 ${({ theme }) => convertHexToRgba(theme.jajiga.paletteInkNormal, 16)},
    0 8px 24px 0 ${({ theme }) => convertHexToRgba(theme.jajiga.paletteInkNormal, 24)};
  background: ${({ theme, suppressed }) =>
    suppressed
      ? theme.jajiga.paletteCloudLight
      : theme.jajiga.paletteWhite}; // TODO: create token backgroundDrawer
  transition: transform ${({ theme }) => theme.jajiga.durationNormal} ease-in-out;
  width: 100%;
  ${mq.largeMobile(css<{ width }>`
    max-width: ${({ width }) => width};
  `)};
  ${getPosition};
  ${getTransitionAnimation};
`;

StyledDrawerSide.defaultProps = {
  theme: defaultTheme,
};

const StyledDrawerContent = styled(
  ({ theme, type, hasTopPadding, noPadding, hasClose, ...props }) => <div {...props} />,
)`
  ${getPadding};
  margin-bottom: ${({ theme, noPadding }) => noPadding && theme.jajiga.spaceLarge};
  margin-top: ${({ hasClose, theme, noPadding }) =>
    !hasClose && noPadding && theme.jajiga.spaceLarge};
`;

StyledDrawerContent.defaultProps = {
  theme: defaultTheme,
};

const StyledDrawerHeader = styled.div<{ suppressed; bordered; noPadding?: boolean }>`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: ${({ suppressed, bordered, theme }) =>
    suppressed && !bordered ? theme.jajiga.paletteCloudLight : theme.jajiga.paletteWhite};
  height: 64px;
  box-sizing: border-box;
  ${({ bordered, theme }) =>
    bordered &&
    css`
      border-bottom: 1px solid ${theme.jajiga.paletteCloudNormal};
    `};
  ${({ noPadding, theme }) =>
    !noPadding &&
    css`
      padding: 0 ${theme.jajiga.spaceMedium};
      ${mq.largeMobile(css`
        padding: ${rtlSpacing(`0 ${theme.jajiga.spaceMedium} 0 ${theme.jajiga.spaceXLarge}`)};
      `)};
    `};
`;

StyledDrawerHeader.defaultProps = {
  theme: defaultTheme,
};

const Drawer = ({
  bodyNotScroll,
  className,
  children,
  onClose,
  shown = true,
  width = '320px',
  position = POSITIONS.RIGHT as DrawerPosition,
  dataTest,
  noPadding,
  suppressed,
  title,
  actions,
}: DrawerProps) => {
  const theme = useTheme();
  const overlayRef = useRef(null);
  const timeoutLength = useMemo(() => parseFloat(theme.jajiga.durationNormal) * 1000, [
    theme.jajiga.durationNormal,
  ]);
  const [overlayShown, setOverlayShown, setOverlayShownWithTimeout] = useStateWithTimeout<boolean>(
    shown,
    timeoutLength,
  );
  const handleOnClose = useCallback(
    ev => {
      if (onClose && ev.target === overlayRef.current) {
        onClose();
      }
    },
    [onClose],
  );
  useEffect(() => {
    if (overlayShown !== shown) {
      if (shown) {
        setOverlayShown(true);
      } else if (!shown) {
        setOverlayShownWithTimeout(false);
      }
    }
  }, [overlayShown, setOverlayShown, setOverlayShownWithTimeout, shown]);
  useEffect(() => {
    if (bodyNotScroll && shown) {
      document.body.style.overflow = 'hidden';
    }

    if (bodyNotScroll && !shown) {
      document.body.style.overflow = 'unset';
    }
  }, [shown]);
  return (
    <StyledDrawer
      role="button"
      overlayShown={overlayShown}
      shown={shown}
      onClick={handleOnClose}
      data-test={dataTest}
      aria-hidden={!shown}
      ref={overlayRef}>
      <StyledDrawerSide
        className={className}
        shown={shown}
        width={width}
        position={position}
        role="navigation"
        suppressed={suppressed}>
        {(title || actions || onClose) && (
          <StyledDrawerHeader bordered={title || actions} suppressed={suppressed}>
            {title && <Heading type="title2">{title}</Heading>}
            {actions && (
              <Stack spacing="none" justify="end" flex shrink>
                {actions}
              </Stack>
            )}
            {onClose && <DrawerClose onClick={onClose} />}
          </StyledDrawerHeader>
        )}
        <StyledDrawerContent
          noPadding={noPadding}
          hasClose={!!onClose}
          hasTopPadding={title || actions}>
          {children}
        </StyledDrawerContent>
      </StyledDrawerSide>
    </StyledDrawer>
  );
};

export default Drawer;
