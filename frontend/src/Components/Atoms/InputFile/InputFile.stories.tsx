import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, array, select } from '@storybook/addon-knobs';

import RenderInRtl from 'utils/rtl/RenderInRtl';

import InputFile from './index';

storiesOf('InputFile', module)
  .add(
    'Default',
    () => {
      const label = text('Label', 'Label');
      return (
        <InputFile
          label={label}
          onChange={() => console.log('change')}
          onFocus={() => console.log('change')}
          onBlur={() => console.log('change')}
          onRemoveFile={() => console.log('change')}
        />
      );
    },
    {
      info:
        'You can try all possible configurations of this component. However, check jajiga.Kiwi for more detailed design guidelines.',
    },
  )
  .add(
    'Filled with file',
    () => {
      const label = text('Label', 'Label');
      const fileName = text('fileName', 'file.png');

      return (
        <InputFile
          label={label}
          fileName={fileName}
          onChange={() => console.log('change')}
          onFocus={() => console.log('change')}
          onBlur={() => console.log('change')}
          onRemoveFile={() => console.log('change')}
        />
      );
    },
    {
      info:
        'You can try all possible configurations of this component. However, check jajiga.Kiwi for more detailed design guidelines.',
    },
  )
  .add(
    'With help',
    () => {
      const label = text('Label', 'Label');

      return (
        <InputFile
          label={label}
          help={(
<div>
              Supported files: <strong>PNG, JPG, PDF</strong>
            </div>
)}
          onChange={() => console.log('change')}
          onFocus={() => console.log('change')}
          onBlur={() => console.log('change')}
          onRemoveFile={() => console.log('change')}
        />
      );
    },
    {
      info:
        'You can try all possible configurations of this component. However, check jajiga.Kiwi for more detailed design guidelines.',
    },
  )
  .add(
    'With error',
    () => {
      const label = text('Label', 'Label');
      const error = text('Error', 'Error message (explain how to solve it)');

      return (
        <InputFile
          label={label}
          error={error}
          onChange={() => console.log('change')}
          onFocus={() => console.log('change')}
          onBlur={() => console.log('change')}
          onRemoveFile={() => console.log('change')}
        />
      );
    },
    {
      info:
        'You can try all possible configurations of this component. However, check jajiga.Kiwi for more detailed design guidelines.',
    },
  )
  .add(
    'Playground',
    () => {
      const label = text('Label', 'Label');
      const title = text('Title', 'Please select file');
      const name = text('Name', 'fileInput');
      const placeholder = text('Placeholder', 'No file has been selected yet');
      const fileName = text('fileName', undefined);
      const error = text('Error', 'No file has been selected yet');
      const help = text('Help', undefined);

      return (
        <InputFile
          label={label}
          title={title}
          name={name}
          placeholder={placeholder}
          fileName={fileName}
          error={error}
          help={help}
          onChange={() => console.log('change')}
          onFocus={() => console.log('change')}
          onBlur={() => console.log('change')}
          onRemoveFile={() => console.log('change')}
        />
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
        <InputFile label="My label" />
      </RenderInRtl>
    ),
    {
      info: 'This is a preview of this component in RTL setup.',
    },
  );
