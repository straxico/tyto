import React from 'react';
import styled, { css } from 'styled-components';

import defaultTheme from 'utils/token';
import Slide, { StyledSlide } from 'utils/Slide';
import media from 'utils/mediaQuery';
import { CardSectionContext } from '../index';

const hasPaddingTop = ({ expandable, expanded, visible }) => expanded || visible || !expandable;

export const StyledCardSectionContent = styled.div<{
  expanded;
  expandable;
  visible;
  contentHeight;
}>`
  font-size: ${({ theme }) => theme.jajiga.fontSizeTextNormal};
  line-height: ${({ theme }) => theme.jajiga.lineHeightText};
  color: ${({ theme }) => theme.jajiga.colorTextPrimary};
  border-top: ${({ theme, expanded }) =>
    expanded
      ? `1px solid ${theme.jajiga.paletteCloudNormal}`
      : `0px solid ${theme.jajiga.paletteCloudNormal}`};
  padding-top: ${({ theme, expandable, expanded, visible }) =>
    hasPaddingTop({ expandable, expanded, visible }) && theme.jajiga.spaceMedium};
  transition: padding ${({ theme }) => theme.jajiga.durationFast} linear,
    border-top ${({ theme }) => theme.jajiga.durationFast} linear;

  ${media.desktop(css<{ expandable; expanded; visible }>`
    padding-top: ${({ theme, expandable, expanded, visible }) =>
      hasPaddingTop({ expandable, expanded, visible }) && theme.jajiga.spaceLarge};
  `)}

  ${StyledSlide} {
    max-height: ${({ expandable, visible }) => expandable && visible && 'none'};
  }
`;

StyledCardSectionContent.defaultProps = {
  theme: defaultTheme,
};

const withConsumer = CardSection => ({ children, visible }: CardSectionContentProps) => (
  <CardSectionContext.Consumer>
    {({ expandable, expanded }) => (
      <CardSection expandable={expandable} expanded={expanded} visible={visible}>
        {children}
      </CardSection>
    )}
  </CardSectionContext.Consumer>
);

class CardSectionContentComp extends React.Component<
  CardSectionContentProps,
  CardSectionContentState
> {
  state = {
    contentHeight: 0,
  };

  node = React.createRef<HTMLDivElement>();

  componentDidMount() {
    const { expandable } = this.props;
    if (expandable) {
      window.addEventListener('resize', this.setHeight);
      setTimeout(this.setHeight, 10);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { expandable } = this.props;

    if (expandable) {
      if (
        prevState.contentHeight !== this.state.contentHeight ||
        prevProps.children !== this.props.children
      ) {
        setTimeout(this.setHeight, 10);
      }

      if (prevProps.expanded !== this.props.expanded) {
        // Calculate height on expand - for dynamic components like TripSector
        this.setHeight();
      }
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setHeight);
  }

  setHeight = () => {
    this.setState({
      contentHeight: this.node.current.clientHeight,
    });
  };

  render() {
    const { children, expanded, expandable, visible } = this.props;

    return (
      <StyledCardSectionContent
        expanded={expanded}
        expandable={expandable}
        visible={visible}
        contentHeight={this.state.contentHeight}>
        {expandable ? (
          <Slide maxHeight={this.state.contentHeight} expanded={expanded}>
            <div ref={this.node}>{children}</div>
          </Slide>
        ) : (
          <div ref={this.node}>{children}</div>
        )}
      </StyledCardSectionContent>
    );
  }
}

const CardSectionContent = withConsumer(CardSectionContentComp);

export default CardSectionContent;
