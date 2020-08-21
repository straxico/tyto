import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';

import RenderInRtl from 'utils/rtl/RenderInRtl';
import Text from '../Text';
import TextLink from '../TextLink';

import Checkbox from './index';

storiesOf('CheckBox', module)
  .add(
    'Default',
    () => {
      const label = text('Label', 'Label');
      const checked = boolean('Checked', false);
      return <Checkbox label={label} checked={checked} onChange={() => console.log('change')} />;
    },
    {
      info: 'Checkbox needs only label and onChange by default.',
    },
  )
  .add(
    'With help',
    () => {
      const label = text('Label', 'Label');
      const value = text('Value', 'value');
      const info = text('Info', 'Additional information to this choice');
      return (
        <Checkbox label={label} value={value} info={info} onChange={() => console.log('change')} />
      );
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
        <Checkbox
          label={
            <Text>
              I instruct Kiwi.com to cancel this booking under the herein specified conditions and
              to process a refund in accordance with Kiwi.com&rsquo;&nbsp;
              <TextLink>Terms and Conditions</TextLink>
.
</Text>
          }
          checked={checked}
          value="value"
          onChange={() => console.log('change')}
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
      const dataTest = text('dataTest', 'test');
      const name = text('name', 'name');
      return (
        <Checkbox
          label={label}
          value={value}
          checked={checked}
          disabled={disabled}
          name={name}
          hasError={hasError}
          dataTest={dataTest}
          info={info}
          onChange={() => console.log('change')}
        />
      );
    },
    {
      info: 'Playground of Checkbox',
    },
  )
  .add(
    'RTL',
    () => (
      <RenderInRtl>
        <Checkbox
          label={
            <Text>
              I instruct Kiwi.com to cancel this booking under the herein specified conditions and
              to process a refund in accordance with Kiwi.com&rsquo;&nbsp;
              <TextLink>Terms and Conditions</TextLink>
.
</Text>
          }
          checked
          value="value"
          onChange={() => console.log('change')}
        />
      </RenderInRtl>
    ),
    {
      info: 'This is a preview of this component in RTL setup.',
    },
  );
