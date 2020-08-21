import React from 'react';
import styled, { css } from 'styled-components';

import Slide from 'utils/Slide';
import defaultTheme from 'utils/token';
import randomID from 'utils/randomID';
import useBoundingRect from 'hooks/useBoundingRect';
import Heading from '../Heading';
import Stack from '../Stack';
import ButtonLink from '../ButtonLink';
// import ChevronDown from '../icons/ChevronDown';

// const AnimatedIcon = styled(ChevronDown)`
//   transition: transform ${({ theme }) => theme.jajiga.durationFast} ease-in-out;
//   ${({ expanded }) =>
//     expanded &&
//     css`
//       transform: rotate(180deg);
//     `};
// `;

// AnimatedIcon.defaultProps = {
//   theme: defaultTheme,
// };

const GetCollapseCardStyle = () => ({ isCard }) => {
  if (isCard) {
    return css`
      margin-bottom: 8px;
      box-shadow: 0px 1px 6px #00000029;
      padding: 8px 8px 8px 8px;
      border-radius: 5px;
    `;
  }
  return css`
    border-bottom: 1px solid ${({ theme }) => theme.jajiga.paletteCloudNormal};
    padding-bottom: ${({ theme }) => theme.jajiga.spaceSmall};
    margin-bottom: ${({ theme }) => theme.jajiga.spaceMedium};
  `;
};

const StyledCollapse = styled(({ className, children, dataTest, ariaLabel, isCard }) => (
  <div className={className} data-test={dataTest} aria-label={ariaLabel}>
    {children}
  </div>
))`
  width: 100%;
  display: block;
  ${GetCollapseCardStyle()};
  :last-child,
  :only-child {
    border: 0;
    margin: 0;
  }
`;

StyledCollapse.defaultProps = {
  theme: defaultTheme,
};

const StyledCollapseLabel = styled.div`
  width: 100%;
  display: block;
  cursor: pointer;
`;

StyledCollapseLabel.defaultProps = {
  theme: defaultTheme,
};

const StyledCollapseChildren = styled.div`
  margin: ${({ theme }) => theme.jajiga.spaceSmall} 0;
`;

StyledCollapseChildren.defaultProps = {
  theme: defaultTheme,
};

const StyledActionsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Collapse = ({
  initialExpanded = false,
  expanded: expandedProp,
  label,
  children,
  dataTest,
  onClick,
  actions,
  isCard,
}: CollapseProps) => {
  const isControlledComponent = React.useMemo(() => expandedProp != null, [expandedProp]);
  const [expandedState, setExpandedState] = React.useState(
    isControlledComponent ? expandedProp : initialExpanded,
  );
  const expanded = isControlledComponent ? expandedProp : expandedState;
  const [{ height }, node] = useBoundingRect({ height: expanded ? null : 0 });

  const slideID = React.useMemo(() => randomID('slideID'), []);
  const labelID = React.useMemo(() => randomID('labelID'), []);

  const handleClick = React.useCallback(
    event => {
      if (!isControlledComponent) {
        if (onClick) {
          onClick(event, !expanded);
        }

        setExpandedState(!expanded);
      } else if (onClick) {
        onClick(event, !expanded);
      }
    },
    [expanded, isControlledComponent, onClick],
  );

  return (
    <StyledCollapse dataTest={dataTest} isCard={isCard}>
      <StyledCollapseLabel
        onClick={handleClick}
        role="button"
        aria-expanded={expanded}
        aria-controls={slideID}
        id={labelID}>
        <Stack justify="between" align="center">
          <Heading element="h3" type="title3">
            {label}
          </Heading>
          <Stack inline grow={false} align="center" spacing="compact">
            <StyledActionsWrapper
              onClick={ev => {
                ev.stopPropagation();
              }}>
              {actions}
            </StyledActionsWrapper>
            <ButtonLink
              icon={expanded ? 'arrow-thin-up' : 'arrow-thin-down'}
              size="small"
              type="secondary"
              title="drawer_hide"
            />
          </Stack>
        </Stack>
      </StyledCollapseLabel>
      <Slide maxHeight={height} expanded={expanded} id={slideID} ariaLabelledBy={labelID}>
        <StyledCollapseChildren ref={node}>{children}</StyledCollapseChildren>
      </Slide>
    </StyledCollapse>
  );
};

export default Collapse;
