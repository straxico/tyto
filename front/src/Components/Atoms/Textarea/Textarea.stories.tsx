import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import RenderInRtl from 'utils/rtl/RenderInRtl';
import SPACINGS_AFTER from 'utils/common/getSpacingToken/consts';
import { SIZE_OPTIONS, RESIZE_OPTIONS } from './consts';

import Textarea from './index';

storiesOf('Textarea', module)
  .add(
    'Default',
    () => {
      const value = text('Value', '');
      const placeholder = text('Placeholder', 'Placeholder');

      return (
        <Textarea placeholder={placeholder} onChange={() => console.log('change')} value={value} />
      );
    },
    {
      info: 'Some description about this type of textarea in general.',
    },
  )
  .add(
    'Small size',
    () => {
      const value = text('Value', '');
      const placeholder = text('Placeholder', 'Placeholder');

      return (
        <Textarea
          size="small"
          placeholder={placeholder}
          onChange={() => console.log('change')}
          value={value}
        />
      );
    },
    {
      info: 'Some description about this type of textarea in general.',
    },
  )
  .add(
    'With label',
    () => {
      const label = text('Label', 'Label');
      const value = text('Value', '');
      const placeholder = text('Placeholder', 'Placeholder');

      return (
        <Textarea
          label={label}
          placeholder={placeholder}
          onChange={() => console.log('change')}
          value={value}
        />
      );
    },
    {
      info: 'Some description about this type of textarea in general.',
    },
  )
  .add(
    'With help',
    () => {
      const value = text('Value', 'Something');
      const placeholder = text('Placeholder', 'Placeholder');
      const help = text('Help', 'Everything is fine.');

      return (
        <Textarea
          placeholder={placeholder}
          help={help}
          onChange={() => console.log('change')}
          value={value}
        />
      );
    },
    {
      info: 'Some description about this type of textarea in general.',
    },
  )
  .add(
    'With error',
    () => {
      const value = text('Value', 'Something');
      const placeholder = text('Placeholder', 'Placeholder');
      const error = text('Error', 'Something went wrong.');

      return (
        <Textarea
          placeholder={placeholder}
          error={error}
          onChange={() => console.log('change')}
          value={value}
        />
      );
    },
    {
      info: 'Some description about this type of textarea in general.',
    },
  )
  .add(
    'Playground',
    () => {
      const size = select('Size', Object.values(SIZE_OPTIONS), SIZE_OPTIONS.SMALL);
      const label = text('Label', 'Label');
      const value = text('Value', '');
      const fullHeight = boolean('fullHeight', true);
      const placeholder = text('Placeholder', 'Placeholder');
      const help = text('Help', undefined);
      const error = text('Error', 'Something went wrong.');
      const disabled = boolean('Disabled', true);
      const resize = select('resize', Object.values(RESIZE_OPTIONS), RESIZE_OPTIONS.VERTICAL);
      const maxLength = number('maxLength', undefined);
      const dataTest = text('dataTest', 'test');
      const rows = number('rows', 3);
      const spaceAfter = select(
        'spaceAfter',
        [null, ...Object.values(SPACINGS_AFTER)],
        SPACINGS_AFTER.NORMAL,
      );
      return (
        <Textarea
          size={size as TextAreaSize}
          label={label}
          value={value}
          fullHeight={fullHeight}
          placeholder={placeholder}
          help={help}
          error={error}
          rows={rows}
          disabled={disabled}
          maxLength={maxLength}
          resize={resize as TextAreaResize}
          onChange={() => console.log('change')}
          onFocus={() => console.log('focus')}
          onBlur={() => console.log('blur')}
          dataTest={dataTest}
          spaceAfter={spaceAfter as spaceAfterType}
        />
      );
    },
    {
      info: 'Some description about this type of textarea in general.',
    },
  )
  .add(
    'RTL',
    () => (
      <RenderInRtl>
        <Textarea placeholder="My placeholder" value="Content of the Textarea" />
      </RenderInRtl>
    ),
    {
      info: 'This is a preview of this component in RTL setup.',
    },
  );
