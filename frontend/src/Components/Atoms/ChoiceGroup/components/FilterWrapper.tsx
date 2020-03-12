import React from 'react';
import styled from 'styled-components';

import defaultTheme from 'utils/token';
import ButtonLink from 'Atoms/ButtonLink';

const StyledOnlyButton = styled(ButtonLink)``;

const StyledContentWrapper = styled.div`
  width: 100%;
  padding: 0px 4px;
  border-radius: 4px;
  display: flex;
  align-items: center;

  &:hover,
  &:focus-within {
    background-color: ${({ theme }) => theme.jajiga.paletteProductLight};

    ${StyledOnlyButton} {
      visibility: visible;
      opacity: 1;
    }
  }

  ${StyledOnlyButton} {
    visibility: hidden;
    opacity: 0;
  }
`;

StyledContentWrapper.defaultProps = {
  theme: defaultTheme,
};

type FilterWrapperProps = {
  child: any;
  children: any;
  onOnlySelection?: (
    arg0: React.SyntheticEvent<HTMLButtonElement>,
    arg1: {},
  ) => void | Promise<any>;
};

type FilterWrapperType = (arg0: FilterWrapperProps) => any;

const FilterWrapper: FilterWrapperType = ({ child, children, onOnlySelection }) => {
  return (
    <StyledContentWrapper>
      {children}
      {onOnlySelection && (
        <StyledOnlyButton
          type="secondary"
          size="small"
          onClick={ev => {
            onOnlySelection(ev, { value: child.props.value, label: child.props.label });
          }}
          transparent>
          Only
        </StyledOnlyButton>
      )}
    </StyledContentWrapper>
  );
};

export default FilterWrapper;
