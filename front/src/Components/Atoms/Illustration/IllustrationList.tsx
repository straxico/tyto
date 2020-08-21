import React from 'react';
import styled, { css } from 'styled-components';

import defaultTheme from 'utils/token';
import mq from 'utils/mediaQuery';
import Illustration from './index';
import { NAMES } from './consts';

const List = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  border-radius: ${({ theme }) => theme.jajiga.borderRadiusLarge};
`;

List.defaultProps = {
  theme: defaultTheme,
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  width: 100%;
  min-height: 80px;
  background-color: white;
  margin-bottom: ${({ theme }) => theme.jajiga.spaceLarge};
  border-radius: ${({ theme }) => theme.jajiga.borderRadiusLarge};
  border: ${({ theme }) => theme.jajiga.borderWidthCard}
    ${({ theme }) => theme.jajiga.borderStyleCard} ${({ theme }) => theme.jajiga.paletteCloudNormal};
  padding: ${({ theme }) => theme.jajiga.spaceLarge};
  ${mq.largeMobile(css`
    flex-direction: row;
  `)};
`;

Container.defaultProps = {
  theme: defaultTheme,
};

const IllustrationJSX = styled.div`
  font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace;
  font-size: 12px;
  line-height: ${({ theme }) => theme.jajiga.lineHeightTextSmall};
  color: ${({ theme }) => theme.jajiga.paletteInkNormal};
  background-color: ${({ theme }) => theme.jajiga.paletteCloudLight};
  border: ${({ theme }) => theme.jajiga.borderWidthCard}
    ${({ theme }) => theme.jajiga.borderStyleCard} ${({ theme }) => theme.jajiga.paletteCloudNormal};
  margin-top: ${({ theme }) => theme.jajiga.spaceMedium};
  padding: ${({ theme }) => theme.jajiga.spaceXXSmall} ${({ theme }) => theme.jajiga.spaceXSmall};
  ${mq.largeMobile(css`
    margin: 0;
  `)};
`;

IllustrationJSX.defaultProps = {
  theme: defaultTheme,
};

const IllustrationList = () => (
  <List>
    {NAMES.map(illustration => {
      return (
        <Container key={illustration}>
          <Illustration name={illustration} />
          <IllustrationJSX>{`<Illustration name="${illustration}" />`}</IllustrationJSX>
        </Container>
      );
    })}
  </List>
);

export default IllustrationList;
