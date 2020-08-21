/* eslint-disable complexity */
import React from 'react';
import styled, { css } from 'styled-components';

import getSpacingToken from 'utils/common/getSpacingToken';
import { ICON_SIZES } from 'Atoms/Icon/consts';
import defaultTheme from 'utils/token';
import Icon, { getSize } from 'Atoms/Icon';
import Loading, { StyledSpinner, StyledLoading } from 'Atoms/Loading';
import { TYPE_OPTIONS, SIZE_OPTIONS, TOKENS, BUTTON_STATES } from './consts';
import getSizeToken from './helpers/getSizeToken';
import getTypeToken from './helpers/getTypeToken';
import getButtonSpacing from './helpers/getButtonSpacing';
import getIconSpacing from './helpers/getIconSpacing';
import getButtonBoxShadow from './helpers/getButtonBoxShadow';

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
    left,
    ...rest
  }: IconProps & {
    type?: any;
    bordered?: boolean;
    onlyIcon?: boolean;
    left?: boolean;
  }) => <Icon size={size} {...rest} />,
)`
  margin: ${getIconSpacing()};
  color: ${({ bordered }) =>
    bordered ? getTypeToken(TOKENS.colorTextButtonBordered) : getTypeToken(TOKENS.colorTextButton)};
  transition: background ${({ theme }) => theme.jajiga.durationFast} ease-in-out,
    box-shadow ${({ theme }) => theme.jajiga.durationFast} ease-in-out;
`;

IconContainer.defaultProps = {
  theme: defaultTheme,
};

const LoadingContainer = styled(({ ...rest }) => <Loading {...rest} />)`
  background-color: inherit;
`;

export const StyledButton = styled(
  ({
    theme,
    component,
    circled,
    external,
    type,
    icon,
    iconRight,
    iconLeft,
    sizeIcon,
    width,
    bordered,
    loading,
    onlyIcon,
    fullwidth,
    style,
    dataTest,
    submit,
    buttonRef,
    ariaControls,
    ariaExpanded,
    spaceAfter,
    title,
    ...props
  }) => {
    const isButtonWithHref = component === 'button' && props.href;
    const Component = isButtonWithHref ? 'a' : component;
    const buttonType = submit ? 'submit' : 'button';
    return (
      <Component
        data-test={dataTest}
        aria-controls={ariaControls}
        aria-expanded={ariaExpanded}
        aria-label={title}
        type={!isButtonWithHref ? buttonType : undefined}
        {...props}
        ref={buttonRef}>
        {props.children}
      </Component>
    );
  },
)`
  position: relative;
  display: ${({ href, component }) => (href || component === 'a' ? 'inline-flex' : 'flex')};
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  appearance: none;
  text-decoration: none;
  white-space: nowrap;
  width: ${({ fullwidth, width, onlyIcon }) =>
    fullwidth
      ? '100%'
      : (width && `${width}px`) || (onlyIcon && getSizeToken(TOKENS.heightButton)) || 'auto'};
  flex: ${({ fullwidth }) => (fullwidth ? '1 1 auto' : '0 0 auto')};
  height: ${getSizeToken(TOKENS.heightButton)};
  background: ${({ bordered }) =>
    bordered
      ? getTypeToken(TOKENS.backgroundButtonBordered)
      : getTypeToken(TOKENS.backgroundButton)};
  color: ${({ bordered }) =>
    bordered ? getTypeToken(TOKENS.colorTextButtonBordered) : getTypeToken(TOKENS.colorTextButton)};
  border: 0;
  border-radius: ${({ theme, circled }) =>
    circled ? getSizeToken(TOKENS.heightButton) : theme.jajiga.borderRadiusNormal};
  padding: ${getButtonSpacing()};
  font-family: ${({ theme }) => theme.jajiga.fontFamily};
  font-weight: ${({ theme }) => theme.jajiga.fontWeightNormal}!important;
  font-size: ${getSizeToken(TOKENS.fontSizeButton)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: all 0.15s ease-in-out !important;
  outline: 0;
  opacity: ${({ disabled, theme }) => disabled && theme.jajiga.opacityButtonDisabled};
  margin-bottom: ${getSpacingToken};
  ${getButtonBoxShadow(BUTTON_STATES.DEFAULT)};

  &:hover {
    background: ${({ disabled, bordered }) =>
      !disabled &&
      (bordered
        ? getTypeToken(TOKENS.backgroundButtonBorderedHover)
        : getTypeToken(TOKENS.backgroundButtonHover))};
    color: ${({ disabled, bordered }) =>
      !disabled &&
      (bordered
        ? getTypeToken(TOKENS.colorTextButtonBorderedHover)
        : getTypeToken(TOKENS.colorTextButtonHover))}!important;
    ${getButtonBoxShadow(BUTTON_STATES.HOVER)};

    ${IconContainer} {
      color: red;
      color: ${({ disabled, bordered }) =>
        !disabled &&
        (bordered
          ? getTypeToken(TOKENS.colorTextButtonBorderedHover)
          : getTypeToken(TOKENS.colorTextButtonHover))};
    }
  }

  &:active {
    ${({ disabled, bordered }) =>
      !disabled &&
      css`
        background: ${bordered
          ? getTypeToken(TOKENS.backgroundButtonBorderedActive)
          : getTypeToken(TOKENS.backgroundButtonActive)};
        color: ${bordered
          ? getTypeToken(TOKENS.colorTextButtonBorderedActive)
          : getTypeToken(TOKENS.colorTextButtonActive)}!important;
        ${!bordered && getButtonBoxShadow(BUTTON_STATES.ACTIVE)};
        & ${IconContainer} {
          color: ${bordered
            ? getTypeToken(TOKENS.colorTextButtonBorderedActive)
            : getTypeToken(TOKENS.colorTextButtonActive)};
        }
      `};
  }

  &:focus {
    ${({ bordered }) => !bordered && getButtonBoxShadow(BUTTON_STATES.FOCUS)};
  }

  ${StyledLoading} {
    background-color: inherit;
    border-radius: ${({ theme, circled }) =>
      circled ? getSizeToken(TOKENS.heightButton) : theme.jajiga.borderRadiusNormal};
  }

  ${StyledSpinner} {
    width: ${getSizeToken(TOKENS.loadingWidth)};
    height: ${getSizeToken(TOKENS.loadingHeight)};
  }
`;

StyledButton.defaultProps = {
  theme: defaultTheme,
};

const Button = React.forwardRef((props: ButtonProps, ref: RefType) => {
  const {
    component = 'button',
    children,
    bordered,
    disabled,
    href,
    size = SIZE_OPTIONS.NORMAL,
    icon,
    iconLeft,
    external,
    type = TYPE_OPTIONS.PRIMARY as ButtonType,
    fullwidth,
    loading = false,
    width = 0,
    role,
    onClick,
    circled,
    submit,
    tabIndex,
    ariaExpanded,
    id,
    className,
    ariaControls,
    spaceAfter,
    dataTest,
    title,
  } = props;
  const iconRight = props.iconRight || icon;
  const sizeIcon = size as IconSize;
  const onlyIcon = iconRight && !children;
  const isDisabled = loading || disabled;

  return (
    <StyledButton
      onClick={onClick}
      iconRight={iconRight}
      iconLeft={iconLeft}
      bordered={bordered}
      fullwidth={fullwidth}
      component={component}
      disabled={isDisabled}
      loading={loading}
      onlyIcon={onlyIcon}
      size={size}
      sizeIcon={sizeIcon}
      href={!disabled ? href : null}
      target={!disabled && href && external ? '_blank' : undefined}
      rel={!disabled && href && external ? 'noopener noreferrer' : undefined}
      type={type}
      width={width}
      id={id}
      className={className}
      buttonRef={ref}
      role={role}
      circled={circled}
      submit={submit}
      tabIndex={tabIndex}
      ariaExpanded={ariaExpanded}
      ariaControls={ariaControls}
      dataTest={dataTest}
      spaceAfter={spaceAfter}
      title={title}>
      {loading && <LoadingContainer type="buttonLoader" />}
      {iconRight && (
        <IconContainer
          iconName={iconRight as IconName}
          bordered={bordered}
          onlyIcon={onlyIcon}
          size={size as IconSize}
          // sizeIcon={sizeIcon}
          type={type}
        />
      )}
      {children && children}
      {iconLeft && (
        <IconContainer
          iconName={iconLeft as IconName}
          bordered={bordered}
          onlyIcon={onlyIcon}
          size={size as IconSize}
          // sizeIcon={sizeIcon}
          type={type}
          left
        />
      )}
    </StyledButton>
  );
});

Button.displayName = 'Button';

export default Button;
