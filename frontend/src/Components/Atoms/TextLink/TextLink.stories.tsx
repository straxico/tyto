import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, select } from '@storybook/addon-knobs';

import { TYPE_OPTIONS, SIZE_OPTIONS } from './consts';
import TextLink from './index';

const validate = rel => (rel !== undefined && rel !== '' ? rel : undefined);

storiesOf('TextLink', module)
  .add(
    'Primary link',
    () => {
      const href = text('Href', 'https://kiwi.com');
      const external = boolean('External', false);
      const title = text('Title', 'Primary link');

      return (
        <TextLink external={external} href={href} type="primary">
          {title}
        </TextLink>
      );
    },
    {
      info:
        'Text links are used in paragraphs when part of the text needs to be actionable. It inherits the visual style of the parent paragraph. Visit jajiga.Kiwi for more detailed guidelines.',
    },
  )
  .add(
    'Secondary link',
    () => {
      const href = text('Href', 'https://kiwi.com');
      const external = boolean('External', false);
      const title = text('Title', 'Secondary link');

      return (
        <TextLink external={external} href={href} type="secondary">
          {title}
        </TextLink>
      );
    },
    {
      info:
        'Text links are used in paragraphs when part of the text needs to be actionable. It inherits the visual style of the parent paragraph. Visit jajiga.Kiwi for more detailed guidelines.',
    },
  )

  .add(
    'Playground',
    () => {
      const href = text('Href', 'https://kiwi.com');
      const type = select('Type', Object.values(TYPE_OPTIONS), TYPE_OPTIONS.SECONDARY);
      const size = select('Size', Object.values(SIZE_OPTIONS), SIZE_OPTIONS.SMALL);
      const external = boolean('External', true);
      const title = text('Text', 'Custom link');
      const rel = text('Rel', undefined);
      const tabIndex = text('tabIndex', '');

      return (
        <TextLink
          external={external}
          href={href}
          type={type}
          size={size}
          rel={validate(rel)}
          tabIndex={tabIndex}>
          {title}
        </TextLink>
      );
    },
    {
      info:
        'You can try all possible configurations of this component. However, check jajiga.Kiwi for more detailed design guidelines.',
    },
  );
