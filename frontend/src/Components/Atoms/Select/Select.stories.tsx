// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { object, select, text, boolean } from '@storybook/addon-knobs';

import SPACINGS_AFTER from 'utils/common/getSpacingToken/consts';
import Icon from 'Atoms/Icon';
import SIZE_OPTIONS from './consts';
import Select from './index';

const objectOptions = [
  { id: 0, name: 'Zero-th item' },
  { id: 1, name: 'First item' },
  { id: 2, name: 'Second item' },
  { id: 3, name: 'Third item' },
];

storiesOf('Select', module)
  .add('Default', () => <Select options={objectOptions} />, {
    info:
      'Selects are used for showing content hierarchy and are important for improving the reading experience for our users. Visit jajiga.Kiwi for more detailed guidelines.',
  })
  .add(
    'With prefix',
    () => (
      <Select
        label="Select box (with prefix)"
        options={objectOptions}
        prefix={<Icon className="home" color="secondary" />}
      />
    ),
    {
      info:
        'Selects are used for showing content hierarchy and are important for improving the reading experience for our users. Visit jajiga.Kiwi for more detailed guidelines.',
    },
  )
  .add(
    'With CountryFlag prefix',
    () => {
      return <Select label="Select box (with prefix)" options={objectOptions} />;
    },
    {
      info:
        'Selects are used for showing content hierarchy and are important for improving the reading experience for our users. Visit jajiga.Kiwi for more detailed guidelines.',
    },
  )
  .add(
    'With placeholder',
    () => {
      const placeholder = text('Placeholder', 'Select value from list');
      return (
        <Select
          label="Select box (with placeholder)"
          placeholder={placeholder}
          options={objectOptions}
        />
      );
    },
    {
      info:
        'Selects are used for showing content hierarchy and are important for improving the reading experience for our users. Visit jajiga.Kiwi for more detailed guidelines.',
    },
  )
  .add(
    'With help message',
    () => (
      <Select
        label="Select box (with help text)"
        options={objectOptions}
        help="Most common choice is Booking cancellation"
      />
    ),
    {
      info:
        'Selects are used for showing content hierarchy and are important for improving the reading experience for our users. Visit jajiga.Kiwi for more detailed guidelines.',
    },
  )
  .add(
    'With error message',
    () => (
      <Select
        label="Select box (with error text)"
        options={objectOptions}
        error={<div>You need to select some value.</div>}
      />
    ),
    {
      info:
        'Selects are used for showing content hierarchy and are important for improving the reading experience for our users. Visit jajiga.Kiwi for more detailed guidelines.',
    },
  )
  .add(
    'With small size',
    () => <Select label="Select box (small size)" size="small" options={objectOptions} />,
    {
      info:
        'Selects are used for showing content hierarchy and are important for improving the reading experience for our users. Visit jajiga.Kiwi for more detailed guidelines.',
    },
  )
  .add(
    'Playground',
    () => {
      const placeholder = text('Placeholder', 'Select value from list');
      const size = select('Size', Object.values(SIZE_OPTIONS), SIZE_OPTIONS.NORMAL);
      const disabled = boolean('Disabled', false);
      const name = text('Name', 'name');
      const option = object('Options', objectOptions);
      const value = select(
        'Value',
        [undefined].concat(...objectOptions.map(opt => opt.id)),
        'First item',
      );
      const dataTest = text('dataTest', 'test');

      return (
        <Select
          placeholder={placeholder}
          size={size as SelectSize}
          options={option}
          disabled={disabled}
          name={name}
          label={text('Label', 'Label')}
          dataTest={dataTest}
          value={value}
        />
      );
    },
    {
      info:
        'Selects are used for showing content hierarchy and are important for improving the reading experience for our users. Visit jajiga.Kiwi for more detailed guidelines.',
    },
  );
