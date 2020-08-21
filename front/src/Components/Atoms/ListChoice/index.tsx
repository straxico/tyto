import React from 'react';
import styled from 'styled-components';

import defaultTheme from 'utils/token';
import { right } from 'utils/rtl';
import KEY_CODE_MAP from 'utils/common/keyMaps';
import Icon from 'Atoms/Icon';
import Heading, { StyledHeading } from '../Heading';
import Checkbox, { Label } from '../Checkbox';
import Text from '../Text';
import { getSize } from '../Icon';

const StyledListChoiceIcon = styled.div`
  display: flex;
  align-self: flex-start;
  flex: 0 0 auto;
  margin-${right}: ${({ theme }) => theme.jajiga.spaceSmall};

  i {
    width: ${getSize('small')};
    height: ${getSize('small')};
    color: ${({ theme }) => theme.jajiga.colorIconPrimary};
    transition: color ${({ theme }) => theme.jajiga.durationFast} ease-in-out;
  }
`;

StyledListChoiceIcon.defaultProps = {
  theme: defaultTheme,
};

const StyledListChoice = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  padding: ${({ theme }) => `${theme.jajiga.spaceSmall} ${theme.jajiga.spaceMedium}`};
  border-bottom: 1px solid ${({ theme }) => theme.jajiga.paletteCloudNormal};
  background-color: ${({ theme }) => theme.jajiga.paletteWhite};
  transition: background-color 0.15s ease-in-out;
  user-select: none;
  cursor: pointer;

  &:last-child {
    border: none;
  }

  &:focus,
  &:hover {
    background-color: ${({ theme }) => theme.jajiga.paletteCloudLight};
    ${StyledListChoiceIcon} i {
      color: ${({ theme }) => theme.jajiga.colorIconAttention};
    }
    outline: none;
  }

  ${Label} {
    width: auto;
  }
`;

StyledListChoice.defaultProps = {
  theme: defaultTheme,
};

const StyledListChoiceContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding-${right}: ${({ theme }) => theme.jajiga.spaceSmall};

  ${StyledHeading} {
    line-height: ${({ theme }) => theme.jajiga.lineHeightText};
  }
`;

StyledListChoiceContent.defaultProps = {
  theme: defaultTheme,
};

const ListChoice = ({
  dataTest,
  icon,
  title,
  description,
  selectable,
  onClick,
  selected,
  className,
}: ListChoiceProps) => {
  const handleKeyDown = ev => {
    if (onClick) {
      if (ev.keyCode === KEY_CODE_MAP.ENTER) {
        onClick(ev);
      } else if (ev.keyCode === KEY_CODE_MAP.SPACE) {
        ev.preventDefault();
        onClick(ev);
      }
    }
  };

  return (
    <StyledListChoice
      onClick={onClick}
      data-test={dataTest}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      className={className}>
      {icon && (
        <StyledListChoiceIcon>
          <Icon iconName={icon} />
        </StyledListChoiceIcon>
      )}
      <StyledListChoiceContent>
        <Heading type="title4" element="div">
          {title}
        </Heading>
        {description && (
          <Text type="secondary" size="small">
            {description}
          </Text>
        )}
      </StyledListChoiceContent>
      {selectable && <Checkbox checked={selected} readOnly tabIndex={-1} />}
    </StyledListChoice>
  );
};

export default ListChoice;
