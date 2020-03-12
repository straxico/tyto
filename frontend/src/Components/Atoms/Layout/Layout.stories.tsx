import * as React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';

import RenderInRtl from 'utils/rtl/RenderInRtl';
import Card from '../Card';

import Layout, { LayoutColumn } from './index';

const CustomDiv = styled.div`
  height: 400px;
  background: rgba(0, 169, 145, 0.2);
`;

storiesOf('Layout', module)
  .add('Search', () => (
    <Layout type="Search">
      <LayoutColumn>
        <Card>hi</Card>
      </LayoutColumn>
      <LayoutColumn>
        <Card>hi</Card>
      </LayoutColumn>
      <LayoutColumn>
        <Card>hi</Card>
      </LayoutColumn>
    </Layout>
  ))
  .add('Booking', () => {
    return (
      <Layout type="Booking">
        <LayoutColumn>
          <Card>hi</Card>
        </LayoutColumn>
        <LayoutColumn>
          <Card>hi</Card>
        </LayoutColumn>
      </Layout>
    );
  })
  .add('MMB', () => {
    return (
      <Layout type="MMB">
        <LayoutColumn>
          <Card>hi</Card>
        </LayoutColumn>
      </Layout>
    );
  })
  .add('RTL', () => (
    <RenderInRtl>
      <Layout type="Search">
        <LayoutColumn>
          <Card>
            <CustomDiv>First</CustomDiv>
          </Card>
        </LayoutColumn>
        <LayoutColumn>
          <Card>
            <CustomDiv>Second</CustomDiv>
          </Card>
        </LayoutColumn>
        <LayoutColumn>
          <Card>
            <CustomDiv>Third</CustomDiv>
          </Card>
        </LayoutColumn>
      </Layout>
    </RenderInRtl>
  ));
