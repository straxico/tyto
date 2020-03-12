import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';

import Heading from 'Atoms/Heading';
import ChoiceGroup from '../ChoiceGroup';
import Checkbox from '../Checkbox';
import Stack from '../Stack';

import Collapse from './index';

storiesOf('Collapse', module)
  .add(
    'Default',
    () => {
      const label = text('label', 'Duration');
      return (
        <Collapse label={label}>
          <Heading>mehran</Heading>
        </Collapse>
      );
    },
    {
      info:
        'You can try all possible configurations of this component. However, check jajiga.Kiwi for more detailed design guidelines.',
    },
  )
  .add(
    'Opened by default',
    () => {
      const label = text('label', 'Duration');
      return (
        <Collapse label={label} initialExpanded>
          <Heading>mehran</Heading>
        </Collapse>
      );
    },
    {
      info:
        'You can try all possible configurations of this component. However, check jajiga.Kiwi for more detailed design guidelines.',
    },
  )
  .add(
    'Multiple Collapses',
    () => {
      const label = text('label', 'Transportation');
      return (
        <Stack spacing="none">
          <Collapse label={label}>
            <ChoiceGroup
              filter
              onChange={() => console.log('onchange')}
              onOnlySelection={() => console.log('onchange')}>
              <Checkbox label="Flight" value="one" />
              <Checkbox label="Bus" value="two" />
              <Checkbox label="Train" value="three" />
            </ChoiceGroup>
          </Collapse>
          <Collapse label={label} initialExpanded>
            <ChoiceGroup
              filter
              onChange={() => console.log('onchange')}
              onOnlySelection={() => console.log('onchange')}>
              <Checkbox label="Flight" value="one" />
              <Checkbox label="Bus" value="two" />
              <Checkbox label="Train" value="three" />
            </ChoiceGroup>
          </Collapse>
          <Collapse label={label}>
            <ChoiceGroup
              filter
              onChange={() => console.log('onchange')}
              onOnlySelection={() => console.log('onchange')}>
              <Checkbox label="Flight" value="one" />
              <Checkbox label="Bus" value="two" />
              <Checkbox label="Train" value="three" />
            </ChoiceGroup>
          </Collapse>
        </Stack>
      );
    },
    {
      info:
        'You can try all possible configurations of this component. However, check jajiga.Kiwi for more detailed design guidelines.',
    },
  )
  .add(
    'Uncontrolled',
    () => {
      const label = text('label', 'Duration');
      const expanded = boolean('expanded', true);
      return (
        <Collapse label={label} expanded={expanded} onClick={() => console.log('action')}>
          <Heading>mehran</Heading>
        </Collapse>
      );
    },
    {
      info:
        'You can try all possible configurations of this component. However, check jajiga.Kiwi for more detailed design guidelines.',
    },
  );
