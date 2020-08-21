import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select, boolean } from '@storybook/addon-knobs';

import RenderInRtl from 'utils/rtl/RenderInRtl';
import { SIZES } from './consts';

import Tag from './index';

storiesOf('Tag', module)
  .add(
    'Default',
    () => {
      const content = text('Content', 'Brno');

      return (
        <Tag icon="home" onClick={() => console.log('action')}>
          {content}
        </Tag>
      );
    },
    {
      info: 'Check jajiga.Kiwi for more detailed design guidelines.',
    },
  )
  .add(
    'Playground',
    () => {
      const content = text('Content', 'Transport');
      const size = select('size', Object.values(SIZES), SIZES.NORMAL);
      const selected = boolean('selected', true);
      const dataTest = text('dataTest', 'test');
      return (
        <Tag
          icon="home"
          size={size as TagSize}
          selected={selected}
          onClick={() => console.log('action')}
          onRemove={() => console.log('action')}
          dataTest={dataTest}>
          {content}
        </Tag>
      );
    },
    {
      info:
        'You can try all possible configurations of this component. However, check jajiga.Kiwi for more detailed design guidelines.',
    },
  )
  .add(
    'RTL',
    () => (
      <RenderInRtl>
        <Tag icon="home" onRemove={() => console.log('action')}>
          Transport
        </Tag>
      </RenderInRtl>
    ),
    {
      info: 'This is a preview of this component in RTL setup.',
    },
  );
