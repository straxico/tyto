import React from 'react';
import { storiesOf } from '@storybook/react';

import Separator from './index';
import Text from '../Text';

storiesOf('Separator', module)
  .add(
    'Default',
    () => {
      return (
        <>
          <Text>salam</Text>
          <Separator />
          <Text>salam</Text>
        </>
      );
    },
    {
      info:
        'This is the default configuration of this component. Visit jajiga.Kiwi for more detailed guidelines.',
    },
  )
  .add(
    'Playground',
    () => {
      return <Separator />;
    },
    {
      info:
        'You can try all possible configurations of this component. However, check jajiga.Kiwi for more detailed design guidelines.',
    },
  );
