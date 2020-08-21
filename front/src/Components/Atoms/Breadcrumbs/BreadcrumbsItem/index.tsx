// @flow
import * as React from 'react';
import styled from 'styled-components';

import defaultTheme from 'utils/token';
import Icon from 'Atoms/Icon';

const StyledBreadcrumbsItem = styled.li`
  display: flex;
  align-items: center;
`;

const StyledBreadcrumbsItemAnchor = styled(
  ({ active, component: Component, children, theme, ...props }) => (
    <Component {...props}>{children}</Component>
  ),
)`
  font-weight: ${({ active, theme }) => active && theme.jajiga.fontWeightBold};
  color: ${({ theme }) => theme.jajiga.paletteInkLight};
  text-decoration: none;
  transition: color ${({ theme }) => theme.jajiga.durationFast} ease-in-out;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.jajiga.paletteInkLightHover};
    outline: none;
    text-decoration: underline;
  }
`;

StyledBreadcrumbsItemAnchor.defaultProps = {
  theme: defaultTheme,
};

const StyledBreadcrumbsItemIcon = styled(Icon)`
  margin: 0 ${({ theme }) => theme.jajiga.spaceXSmall};
`;

StyledBreadcrumbsItemIcon.defaultProps = {
  theme: defaultTheme,
};

const BreadcrumbsItem = ({
  active,
  children,
  dataTest,
  onClick,
  contentKey,
  // eslint-disable-next-line jsx-a11y/anchor-has-content
  component = props => <a {...props} />,
  ...props
}: BreadcrumbsItemProps) => (
  <StyledBreadcrumbsItem
    data-test={dataTest}
    aria-current={active ? 'page' : undefined}
    property="itemListElement"
    typeof="ListItem">
    <StyledBreadcrumbsItemAnchor
      component={component}
      active={active}
      onClick={onClick}
      property="item"
      typeof="WebPage"
      {...props}>
      <span property="name">{children}</span>
    </StyledBreadcrumbsItemAnchor>
    <meta property="position" content={contentKey} />
    {!active && <StyledBreadcrumbsItemIcon ariaHidden size="small" color="tertiary" />}
  </StyledBreadcrumbsItem>
);

export default BreadcrumbsItem;
