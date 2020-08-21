import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';

import SPACINGS_AFTER from 'utils/common/getSpacingToken/consts';

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
      const spaceAfter = select(
        'spaceAfter',
        [null, ...Object.values(SPACINGS_AFTER)],
        SPACINGS_AFTER.LARGEST,
      );
      return <Separator spaceAfter={spaceAfter as spaceAfterType} />;
    },
    {
      info:
        'You can try all possible configurations of this component. However, check jajiga.Kiwi for more detailed design guidelines.',
    },
  );
