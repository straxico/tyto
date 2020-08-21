import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';

import Text from '../Text';
import TextLink from '../TextLink';

import Radio from './index';

storiesOf('Radio', module)
  .add(
    'Default',
    () => {
      const label = text('Label', 'Label');
      const checked = boolean('Checked', false);
      return <Radio label={label} checked={checked} />;
    },
    {
      info: 'Radio needs only label and onChange by default.',
    },
  )
  .add(
    'With help',
    () => {
      const label = text('Label', 'Label');
      const value = text('Value', 'value');
      const info = text('Info', 'Additional information to this choice');
      return <Radio label={label} value={value} info={info} />;
    },
    {
      info: 'Additionally you can add info to this component.',
    },
  )
  .add(
    'With TextLink in label',
    () => {
      const checked = boolean('checked', true);
      return (
        <Radio
          label={
            <Text>
              {'Lorem ipsum dolor sit&nbsp;'}
              <TextLink>amet</TextLink>.
            </Text>
          }
          checked={checked}
          value="value"
        />
      );
    },
    {
      info: 'Additionally you can add info to this component.',
    },
  )
  .add(
    'Playground',
    () => {
      const label = text('Label', 'Label');
      const value = text('Value', 'value');
      const checked = boolean('Checked', true);
      const disabled = boolean('Disabled', true);
      const hasError = boolean('hasError', false);
      const info = text('Info', 'Additional information for this choice');
      const name = text('Name', 'name');
      const dataTest = text('dataTest', 'test');

      return (
        <Radio
          label={label}
          value={value}
          checked={checked}
          disabled={disabled}
          hasError={hasError}
          name={name}
          info={info}
          dataTest={dataTest}
        />
      );
    },
    {
      info: 'Playground of Radio',
    },
  );
