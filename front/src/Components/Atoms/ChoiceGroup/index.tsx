import React from 'react';
import styled from 'styled-components';

import defaultTheme from 'utils/token';
import randomID from 'utils/randomID';
import Heading from '../Heading';
// import Stack from '../Stack';
import { LABEL_SIZES, LABEL_ELEMENTS } from './consts';
import FormFeedback, { StyledFormFeedback } from '../FormFeedback';
import FilterWrapper from './components/FilterWrapper';

const getHeadingSize = (size: string) => {
  const SIZES = {
    [LABEL_SIZES.NORMAL]: 'title3',
    [LABEL_SIZES.LARGE]: 'title2',
  };
  return SIZES[size];
};

const StyledChoiceGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  ${StyledFormFeedback} {
    position: relative;
    margin-top: ${({ theme }) => theme.jajiga.spaceXSmall};
    top: initial;
  }
`;

StyledChoiceGroup.defaultProps = {
  theme: defaultTheme,
};

class ChoiceGroup extends React.PureComponent<ChoiceGroupProps> {
  groupID = randomID('choiceGroupID');

  handleChange = (ev: { persist: () => void }) => {
    ev.persist();
    const { onChange } = this.props;
    if (onChange) {
      onChange(ev);
    }
  };

  render() {
    const {
      dataTest,
      label,
      labelSize = LABEL_SIZES.NORMAL,
      labelElement = LABEL_ELEMENTS.H4,
      error,
      children,
      filter,
      onOnlySelection,
    } = this.props;

    return (
      <StyledChoiceGroup data-test={dataTest} role="group" aria-labelledby={this.groupID}>
        {label && (
          <Heading
            id={this.groupID}
            type={getHeadingSize(labelSize) as HeadingType}
            element={labelElement as HeadingElement}
            spaceAfter="medium">
            {label}
          </Heading>
        )}
        {/* <Stack direction="column" spacing={filter ? 'none' : 'condensed'}>
          {React.Children.map(children, child => {
            return !filter ? (
              <React.Fragment>
                {React.cloneElement(child, {
                  onChange: this.handleChange,
                  hasError: !!error,
                })}
              </React.Fragment>
            ) : (
              <FilterWrapper child={child} onOnlySelection={onOnlySelection}>
                <React.Fragment>
                  {React.cloneElement(child, {
                    onChange: this.handleChange,
                    hasError: !!error,
                  })}
                </React.Fragment>
              </FilterWrapper>
            );
          })}
        </Stack> */}
        {error && <FormFeedback type="error">{error}</FormFeedback>}
      </StyledChoiceGroup>
    );
  }
}

export default ChoiceGroup;
