/* eslint-disable complexity */
import * as React from 'react';
import styled, { css } from 'styled-components';

import getSpacingToken from 'utils/common/getSpacingToken';
import defaultTheme from 'utils/token';
import { TYPES, SIZES, TOKENS, BUTTON_STATES } from './consts';
import { ICON_SIZES } from '../Icon/consts';
import Icon, { getSize } from '../Icon';
import getIconSpacing from './helpers/getIconSpacing';
import getSizeToken from './helpers/getSizeToken';
import getTypeToken from './helpers/getTypeToken';
import getButtonSpacing from './helpers/getButtonLinkSpacing';
import getButtonLinkBoxShadow from './helpers/getButtonLinkBoxShadow';

// media query only for IE 10+, not Edge
const onlyIE = (style, breakpoint = 'all') =>
  css`
    @media ${breakpoint} and (-ms-high-contrast: none), (-ms-high-contrast: active) {
      ${style};
    }
  `;

const IconContainer = styled(
  ({
    size,
    iconName,
    ...rest
  }: IconProps & {
    size?: IconSize;
    type?: any;
    bordered?: boolean;
    onlyIcon?: boolean;
    left?: boolean;
  }) => <Icon size={size} iconName={iconName} {...rest} />,
)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: ${getIconSpacing()};

  > * {
    width: ${({ size }) => getSize(size)};
    height: ${({ size }) => getSize(size)};
  }
`;

IconContainer.defaultProps = {
  theme: defaultTheme,
};

export const StyledButtonLink = styled(
  ({
    onlyIcon,
    component,
    circled,
    external,
    block,
    type,
    icon,
    iconLeft,
    iconRight,
    sizeIcon,
    width,
    children,
    transparent,
    style,
    theme,
    dataTest,
    submit,
    buttonRef,
    ariaControls,
    ariaExpanded,
    spaceAfter,
    fullwidth,
    title,
    ...props
  }) => {
    const isButtonWithHref = component === 'button' && props.href;
    const Component = isButtonWithHref ? 'a' : component;
    const buttonType = submit ? 'submit' : 'button';
    return (
      <Component
        data-test={dataTest}
        type={!isButtonWithHref ? buttonType : undefined}
        {...props}
        ref={buttonRef}
        aria-controls={ariaControls}
        aria-expanded={ariaExpanded}
        aria-label={title}>
        {children}
      </Component>
    );
  },
)`
  font-family: ${({ theme }) => theme.jajiga.fontFamily};
  box-sizing: border-box;
  appearance: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: ${({ block, width, onlyIcon }) =>
    block
      ? '100%'
      : (width && `${width}px`) || (onlyIcon && getSizeToken(TOKENS.heightButton)) || 'auto'};
  flex: ${({ block }) => (block ? '1 1 auto' : '0 0 auto')};
  height: ${getSizeToken(TOKENS.heightButton)};
  background: ${getTypeToken(TOKENS.backgroundButton)};
  color: ${getTypeToken(TOKENS.colorTextButton)}!important;
  border: 0;
  border-radius: ${({ theme, circled }) =>
    circled ? getSizeToken(TOKENS.heightButton) : theme.jajiga.borderRadiusNormal};
  padding: ${getButtonSpacing()};
  font-weight: ${({ theme }) => theme.jajiga.fontWeightBold}!important;
  font-size: ${getSizeToken(TOKENS.fontSizeButton)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled, theme }) => (disabled ? theme.jajiga.opacityButtonDisabled : '1')};
  transition: all 0.15s ease-in-out !important;
  outline: 0;
  text-decoration: none;
  margin-bottom: ${getSpacingToken};

  &:hover {
    ${({ transparent, disabled }) =>
      !disabled &&
      css`
        background: ${!transparent && getTypeToken(TOKENS.backgroundButtonHover)};
        color: ${getTypeToken(TOKENS.colorTextButtonHover)}!important;
      `};
  }

  &:active {
    ${({ transparent, disabled }) =>
      !disabled &&
      css`
        background: ${!transparent && getTypeToken(TOKENS.backgroundButtonActive)};
        color: ${getTypeToken(TOKENS.colorTextButtonActive)}!important;
        ${getButtonLinkBoxShadow(BUTTON_STATES.ACTIVE)};
      `};
  }

  &:focus {
    ${getButtonLinkBoxShadow(BUTTON_STATES.FOCUS)};
  }
`;

StyledButtonLink.defaultProps = {
  theme: defaultTheme,
};

const StyledButtonLinkContent = styled.div`
  display: flex;
  flex-basis: 100%;
  justify-content: center;
  align-items: center;
  /* IE flexbox bug */
  ${onlyIE(css`
    min-width: 100%;
    max-width: 1px;
  `)}
`;

const StyledButtonLinkContentChildren = styled.div`
  display: flex;
  flex-basis: auto;
  justify-content: center;
  align-items: center;
`;

const ButtonLink = React.forwardRef((props: ButtonLinkProps, ref: RefType) => {
  const {
    external,
    children,
    component = 'button',
    href,
    size = SIZES.NORMAL as ButtonLinkSize,
    icon,
    iconLeft,
    type = TYPES.PRIMARY,
    onClick,
    width = 0,
    role,
    disabled,
    circled,
    submit,
    transparent,
    ariaExpanded,
    ariaControls,
    spaceAfter,
    dataTest,
    tabIndex,
    title,
    fullwidth,
    className,
  } = props;

  const iconRight = props.iconRight || icon;

  const sizeIcon = size === ICON_SIZES.SMALL ? ICON_SIZES.SMALL : ICON_SIZES.MEDIUM;

  const onlyIcon = (iconRight || iconLeft) && !children;

  return (
    <StyledButtonLink
      onClick={onClick}
      component={component}
      size={size}
      onlyIcon={onlyIcon}
      sizeIcon={sizeIcon}
      type={type}
      href={!disabled ? href : null}
      target={!disabled && href && external ? '_blank' : undefined}
      rel={!disabled && href && external ? 'noopener noreferrer' : undefined}
      iconLeft={iconLeft}
      iconRight={iconRight}
      buttonRef={ref}
      width={width}
      className={className}
      role={role}
      disabled={disabled}
      fullwidth={fullwidth}
      circled={circled}
      submit={submit}
      transparent={transparent}
      ariaExpanded={ariaExpanded}
      ariaControls={ariaControls}
      title={title}
      spaceAfter={spaceAfter}
      tabIndex={tabIndex}
      dataTest={dataTest}>
      <StyledButtonLinkContent>
        {iconRight && (
          <IconContainer
            iconName={iconRight}
            size={size as IconSize}
            type={type}
            onlyIcon={onlyIcon}
          />
        )}
        {children && <StyledButtonLinkContentChildren>{children}</StyledButtonLinkContentChildren>}
        {iconLeft && (
          <IconContainer
            iconName={iconLeft}
            size={size as IconSize}
            type={type}
            onlyIcon={onlyIcon}
            left
          />
        )}
      </StyledButtonLinkContent>
    </StyledButtonLink>
  );
});

ButtonLink.displayName = 'ButtonLink';

export default ButtonLink;
