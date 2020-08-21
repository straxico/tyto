import * as React from 'react';
import styled, { css } from 'styled-components';

import Slide from 'utils/Slide';
import defaultTheme from 'utils/token';

const StyledTileExpandable = styled.div<{
  expanded: boolean;
  initialExpanded: boolean;
  contentHeight: number;
}>`
  border-top: ${({ theme, expanded }) =>
    expanded
      ? `1px solid ${theme.jajiga.paletteCloudNormal}`
      : `0px solid ${theme.jajiga.paletteCloudNormal}`};
  padding: ${({ theme, expanded }) => expanded && `${theme.jajiga.spaceMedium} 0`};
  margin: 0 ${({ theme }) => theme.jajiga.spaceMedium};
  ${({ initialExpanded, theme }) =>
    !initialExpanded &&
    css`
      transition: max-height ${theme.jajiga.durationFast} ease-in-out,
        padding ${theme.jajiga.durationFast} ease-in-out,
        border-top ${theme.jajiga.durationFast} ease-in-out;
    `};
  font-size: ${({ theme }) => theme.jajiga.fontSizeTextNormal};
  line-height: ${({ theme }) => theme.jajiga.lineHeightTextNormal};
  color: ${({ theme }) => theme.jajiga.colorTextPrimary};
`;

StyledTileExpandable.defaultProps = {
  theme: defaultTheme,
};

class TileExpandable extends React.PureComponent<TileExpandableProps, TileExpandableState> {
  timeout: number;

  node: { current: any | HTMLDivElement };

  constructor(props: TileExpandableProps) {
    super(props);
    this.node = React.createRef();
    this.state = {
      contentHeight: 0,
    };
  }

  componentDidMount() {
    this.timeout = setTimeout(this.setHeight, 250); // Prevent showing children on initial render
    window.addEventListener('resize', this.setHeight);
  }

  componentDidUpdate() {
    // Calculate height on expand - for dynamic components like TripSector
    this.setHeight();
  }

  componentWillUnmount() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    window.removeEventListener('resize', this.setHeight);
  }

  setHeight = () => {
    const contentHeight = this.node.current?.clientHeight;
    this.setState({ contentHeight });
  };

  render() {
    const { expanded, children, initialExpanded } = this.props;
    return (
      <StyledTileExpandable
        expanded={expanded}
        contentHeight={this.state.contentHeight}
        initialExpanded={initialExpanded}>
        <Slide maxHeight={this.state.contentHeight} expanded={expanded}>
          <div ref={this.node}>{children}</div>
        </Slide>
      </StyledTileExpandable>
    );
  }
}

export default TileExpandable;
