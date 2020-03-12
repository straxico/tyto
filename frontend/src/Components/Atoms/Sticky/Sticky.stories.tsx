import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, number } from '@storybook/addon-knobs/react';
import Text from 'Atoms/Text';
import Card from '../Card';
// import CardHeader from "../Card/CardHeader";
// import CardSection from "../Card/CardSection";

import FloatingCard from './index';

storiesOf('Sticky', module).add('Playground', () => {
  return (
    <div style={{ height: '800px' }}>
      <FloatingCard offset={100}>
        <Card>
          <Text>offset 100px</Text>
          <Text>card</Text>
          <Text>card</Text>
          <Text>card</Text>
          <Text>card</Text>
          <Text>card</Text>
          <Text>card</Text>
        </Card>
      </FloatingCard>
    </div>
  );
});
