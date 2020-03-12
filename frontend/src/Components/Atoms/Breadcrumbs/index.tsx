import React from 'react';
import styled from 'styled-components';

import Icon from 'Atoms/Icon';
import defaultTheme from 'utils/token';
import Button from '../Button';

const StyledBreadcrumbs = styled.nav`
  font-size: ${({ theme }) => theme.jajiga.fontSizeTextSmall};
`;

StyledBreadcrumbs.defaultProps = {
  theme: defaultTheme,
};

const StyledBreadcrumbsList = styled.ol`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const StyledBackButtonWrapper = styled.span`
  margin-right: ${({ theme }) => theme.jajiga.spaceSmall};
`;

StyledBackButtonWrapper.defaultProps = {
  theme: defaultTheme,
};

const GoBackButton = ({ onClick }) => {
  return (
    <StyledBackButtonWrapper>
      <Button
        iconLeft="home"
        circled
        type="secondary"
        size="small"
        onClick={onClick}
        title="back"
      />
    </StyledBackButtonWrapper>
  );
};

const Breadcrumbs = ({ children, dataTest, onGoBack }: BreadcrumbsProps) => (
  <StyledBreadcrumbs aria-label="Breadcrumb" role="navigation" data-test={dataTest}>
    <StyledBreadcrumbsList vocab="http://schema.org/" typeof="BreadcrumbList">
      {onGoBack && <GoBackButton onClick={onGoBack} />}
      {React.Children.map(children, (item, key) => {
        return React.cloneElement(item, {
          active: key === React.Children.count(children) - 1,
          contentKey: key + 1,
        });
      })}
    </StyledBreadcrumbsList>
  </StyledBreadcrumbs>
);

export default Breadcrumbs;

export { default as BreadcrumbsItem } from './BreadcrumbsItem';
