import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text } from '@storybook/addon-knobs';

import SPACINGS_AFTER from 'utils/common/getSpacingToken/consts';
import { SIZE_OPTIONS, NAMES } from './consts';
import IllustrationList from './IllustrationList';

import Illustration from './index';

storiesOf('Illustration', module)
  .add(
    'Playground',
    () => {
      const size = select(
        'Size',
        Object.values(SIZE_OPTIONS),
        SIZE_OPTIONS.MEDIUM,
      ) as illustrationSizeType;
      const name = select('Name', Object.values(NAMES), 'Accommodation');
      const dataTest = text('dataTest', 'test');
      const spaceAfter = select(
        'spaceAfter',
        [null, ...Object.values(SPACINGS_AFTER)],
        'spaceafter',
      ) as spaceAfterType;
      return <Illustration size={size} name={name} dataTest={dataTest} spaceAfter={spaceAfter} />;
    },
    {
      info: 'Explore our new set of illustrations for Kiwi.com.',
    },
  )
  .add(
    'List of all Illustrations',
    () => {
      return <IllustrationList />;
    },
    {
      info: 'Explore our new set of illustrations for Kiwi.com.',
    },
  );
