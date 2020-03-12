/* eslint-disable complexity */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import Link from 'next/link';
import styled, { css } from 'styled-components';
import defaultTheme from 'utils/token';
import Icon from 'Atoms/Icon';
import getIconSpacing from 'Atoms/Button/helpers/getIconSpacing';
import { TYPE_OPTIONS, SIZE_OPTIONS } from './consts';

const getColor = ({ theme, type }) => {
  const tokens = {
    [TYPE_OPTIONS.PRIMARY]: theme.jajiga.colorTextLinkPrimary,
    [TYPE_OPTIONS.SECONDARY]: theme.jajiga.colorTextLinkSecondary,
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

const IconContainer = styled(({ ...rest }: IconProps & { right?: boolean }) => <Icon {...rest} />)`
  margin: ${getIconSpacing()};
`;

IconContainer.defaultProps = {
  theme: defaultTheme,
};

export const getLinkStyle = ({ theme, type }: GetLinkStyleProps) => css`
  /* Common styles for TextLink and "a" in Text */
  &,
  &:link,
  &:visited {
    color: ${getColor({ theme, type })};
    font-weight: ${theme.jajiga.fontWeightLinks};
  }
  &:hover,
  &:active {
    color: ${type === TYPE_OPTIONS.SECONDARY
      ? theme.jajiga.colorTextLinkSecondaryHover
      : theme.jajiga.colorTextLinkPrimaryHover};
  }
`;

export const StyledTextLink = styled(({ theme, type, component: Component, ...props }) => (
  <Component {...props}>{props.children}</Component>
))`
  font-family: ${({ theme }) => theme.jajiga.fontFamily};
  font-weight: ${({ theme }) => theme.jajiga.fontWeightLinks};
  font-size: ${getSizeToken};
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  transition: color ${({ theme }) => theme.jajiga.durationFast} ease-in-out;
  ${getLinkStyle};
  ${IconContainer} {
    color: ${({ theme, type }) =>
      type === TYPE_OPTIONS.SECONDARY
        ? theme.jajiga.colorTextLinkSecondaryHover
        : theme.jajiga.colorTextLinkPrimaryHover};
  }
  &:focus {
    outline-width: 3px;
  }
`;

StyledTextLink.defaultProps = {
  theme: defaultTheme,
};

const DefaultComponent = props => <a {...props} />;
/** TextLink Atom
 * use next/Link when pass href
 */
const TextLink = ({
  type = TYPE_OPTIONS.PRIMARY as TextLinkType,
  size = SIZE_OPTIONS.NORMAL as TextLinkSize,
  children,
  external = false,
  rel,
  icon,
  onClick,
  tabIndex,
  className,
  component = DefaultComponent,
  href,
  as,
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
    <>
      {href ? (
        <Link href={href} as={as} replace={replace} scroll={scroll} prefetch={prefetch} passHref>
          <StyledTextLink
            type={type}
            size={size}
            target={external ? '_blank' : undefined}
            rel={relValues && relValues.join(' ')}
            onClick={onClick}
            tabIndex={tabIndex || (undefined)}
            role={undefined}
            className={className}
            component={component}>
            {icon && <IconContainer className={icon as IconName} size={size} right />}
            {children}
          </StyledTextLink>
        </Link>
      ) : (
        <StyledTextLink
          type={type}
          size={size}
          target={external ? '_blank' : undefined}
          rel={relValues && relValues.join(' ')}
          onClick={onClick}
          tabIndex={tabIndex || '0'}
          role={'button'}
          className={className}
          component={component}>
          {icon && <IconContainer className={icon as IconName} size={size} right />}
          {children}
        </StyledTextLink>
      )}
    </>
  );
};
export default TextLink;
