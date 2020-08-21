import * as React from 'react';
import styled, { css } from 'styled-components';

import defaultTheme from 'utils/token';
import { rtlSpacing } from 'utils/rtl';
import Icon from 'Atoms/Icon';
import Heading from 'Atoms/Heading';
import Stack from 'Atoms/Stack';

const StyledTileHeader = styled.div`
  display: block;
  cursor: pointer;
  position: relative;
  padding: ${({ theme }) => theme.jajiga.spaceMedium}; /*TODO Create token paddingTile */
`;

StyledTileHeader.defaultProps = {
  theme: defaultTheme,
};

const StyledTileTitle = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

StyledTileTitle.defaultProps = {
  theme: defaultTheme,
};

const StyledTileIcon = styled.div`
  color: ${({ theme }) => theme.jajiga.colorHeading};
  display: flex;
  flex-shrink: 0;
  align-items: center;
  align-self: flex-start;
  margin: ${({ theme }) => rtlSpacing(`0 ${theme.jajiga.spaceXSmall} 0 0`)};
`;

StyledTileIcon.defaultProps = {
  theme: defaultTheme,
};

const StyledTileDescription = styled.div<{ hasTitle: boolean }>`
  font-family: ${({ theme }) => theme.jajiga.fontFamily};
  font-size: ${({ theme }) => theme.jajiga.fontSizeTextNormal};
  color: ${({ theme }) => theme.jajiga.colorTextPrimary};
  line-height: ${({ theme }) => theme.jajiga.lineHeightTextNormal};
  width: 100%;
  ${({ hasTitle, theme }) =>
    hasTitle &&
    css`
      margin-top: ${theme.jajiga.spaceXXSmall};
    `};
`;

StyledTileDescription.defaultProps = {
  theme: defaultTheme,
};

export const StyledIconRight = styled.div<{ isExpanded: boolean; isExpandable: boolean }>`
  color: ${({ theme }) => theme.jajiga.paletteInkLight};
  padding: ${({ theme }) => rtlSpacing(`0 0 0 ${theme.jajiga.spaceMedium}`)};
  transition: color ${({ theme }) => theme.jajiga.durationFast} ease-in-out;
  svg {
    ${({ isExpanded }) =>
      isExpanded &&
      css`
        transform: rotate(-180deg);
      `};
    transition: transform ${({ theme }) => theme.jajiga.durationFast} ease-in-out;
  }
`;

StyledIconRight.defaultProps = {
  theme: defaultTheme,
};

const getIconRight = ({ external, isExpandable }: IconRightProps) => {
  if (isExpandable) {
    return <Icon iconName="arrow-thin-down" size="normal" />;
  }
  if (external) {
    return <Icon iconName="new-window" size="normal" />;
  }
  return <Icon iconName="arrow-thin-right" size="normal" reverseOnRtl />;
};

const IconRight = ({ external, isExpandable, isExpanded }: IconRightProps) => (
  <StyledIconRight isExpandable={isExpandable} isExpanded={isExpanded}>
    {getIconRight({ external, isExpandable })}
  </StyledIconRight>
);

const TileHeader = ({
  icon,
  title,
  description,
  external,
  onClick,
  isExpandable,
  isExpanded,
}: TileHeaderProps) => (
  <StyledTileHeader onClick={onClick}>
    <Stack align="center" shrink spacing="none">
      {icon && (
        <StyledTileIcon>
          <Icon iconName={icon} />
        </StyledTileIcon>
      )}
      <Stack spacing="none" direction="column" shrink>
        {title && (
          <StyledTileTitle>
            <Heading type="title3" element="h3">
              {title}
            </Heading>
          </StyledTileTitle>
        )}
        {description && (
          <StyledTileDescription hasTitle={!!title}>{description}</StyledTileDescription>
        )}
      </Stack>
      <IconRight external={external} isExpandable={isExpandable} isExpanded={isExpanded} />
    </Stack>
  </StyledTileHeader>
);

export default TileHeader;
