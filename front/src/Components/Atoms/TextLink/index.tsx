/* eslint-disable complexity */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import Link from 'next/link';
import styled, { css } from 'styled-components';
import defaultTheme from 'utils/token';
import Icon, { StyledIcon } from 'Atoms/Icon';
import getIconSpacing from 'Atoms/Button/helpers/getIconSpacing';
import { TYPE_OPTIONS, SIZE_OPTIONS } from './consts';

const getColor = ({ theme, type }) => {
  const tokens = {
    [TYPE_OPTIONS.PRIMARY]: theme.jajiga.colorTextLinkPrimary,
    [TYPE_OPTIONS.SECONDARY]: theme.jajiga.colorTextLinkSecondary,
    [TYPE_OPTIONS.GRAY]: theme.jajiga.colorTextLinkGray,
  };
  return tokens[type];
};

const getSizeToken = () => ({ theme, size }) => {
  const sizeTokens = {
    [SIZE_OPTIONS.LARGE]: theme.jajiga.fontSizeTextLarge,
    [SIZE_OPTIONS.NORMAL]: theme.jajiga.fontSizeTextNormal,
    [SIZE_OPTIONS.SMALL]: theme.jajiga.fontSizeTextSmall,
  };
  return size && sizeTokens[size];
};

const IconContainer = styled(({ ...rest }: IconProps & { right?: boolean }) => (
  <Icon {...rest} />
))``;

IconContainer.defaultProps = {
  theme: defaultTheme,
};

export const getLinkStyle = ({ theme, type, noHover, isBold }: GetLinkStyleProps) => css`
  /* Common styles for TextLink and "a" in Text */
  &,
  &:link,
  &:visited {
    color: ${getColor({ theme, type })};
    font-weight: ${isBold ? 'bold' : theme.jajiga.fontWeightLinks};
  }
  &:hover,
  &:active {
    color: ${!noHover &&
      (type === TYPE_OPTIONS.SECONDARY
        ? theme.jajiga.colorTextLinkSecondaryHover
        : theme.jajiga.colorTextLinkPrimaryHover)};
  }
`;

export const StyledTextLink = styled(
  ({ theme, type, isBold, noHover, component: Component, ...props }) => (
    <Component {...props}>{props.children}</Component>
  ),
)`
  font-family: ${({ theme }) => theme.jajiga.fontFamily};
  font-weight: ${({ theme, isBold }) => (isBold ? 'bold' : theme.jajiga.fontWeightLinks)};
  font-size: ${getSizeToken};
  cursor: pointer;
  display: inline-flex;
  text-decoration: none;
  align-items: center;
  transition: color ${({ theme }) => theme.jajiga.durationFast} ease-in-out;
  ${getLinkStyle};
  ${StyledIcon} {
    margin: ${getIconSpacing()};
    color: ${({ theme, type }) => getColor({ theme, type })};
  }
  &:focus {
    outline-width: 3px;
  }
`;

StyledTextLink.defaultProps = {
  theme: defaultTheme,
};

const DefaultComponent = props => <a {...props} />;

const NextComponent = props => (
  <Link
    href={props.href}
    as={props.hrefas}
    replace={props.replace}
    scroll={props.scroll}
    prefetch={props.prefetch}
    passHref>
    <a className={props.className} onClick={props.onClick}>
      {props.children}
    </a>
  </Link>
);

const TextLink = ({
  type = TYPE_OPTIONS.PRIMARY as TextLinkType,
  size = SIZE_OPTIONS.NORMAL as TextLinkSize,
  iconSize,
  children,
  external = false,
  rel,
  noHover,
  icon,
  onClick,
  isBold,
  tabIndex,
  className,
  component,
  href,
  hrefas,
  replace,
  scroll,
  prefetch,
}: TextLinkProps) => {
  const relValues = rel ? rel.split(' ') : [];
  // add noopener and noreferrer whenever external
  if (relValues && external) {
    if (!relValues.includes('noopener')) {
      relValues.push('noopener');
    }
    if (!relValues.includes('noreferrer')) {
      relValues.push('noreferrer');
    }
  }

  return (
    <StyledTextLink
      type={type}
      size={size}
      target={external ? '_blank' : undefined}
      rel={relValues && relValues.join(' ')}
      onClick={onClick}
      noHover={noHover}
      isBold={isBold}
      tabIndex={tabIndex || (!href ? '0' : undefined)}
      role={!href ? 'button' : undefined}
      className={className}
      component={component || (!external && href ? NextComponent : DefaultComponent)}
      href={href}
      hrefas={hrefas}
      replace={replace}
      scroll={scroll}
      prefetch={prefetch}>
      {icon && <Icon iconName={icon} size={iconSize || size} />}
      {children}
    </StyledTextLink>
  );
};
export default TextLink;
