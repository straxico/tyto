import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, select } from '@storybook/addon-knobs';

import RenderInRtl from 'utils/rtl/RenderInRtl';
import Icon from 'Atoms/Icon';
import ListChoice from './index';

storiesOf('ListChoice', module)
  .add(
    'Default',
    () => {
      const title = text('title', 'Choice Title');
      const description = text('description', 'Further description');

      return (
        <ListChoice
          title={title}
          description={description}
          icon={Icon && <Icon />}
          onClick={() => console.log('onclisk')}
        />
      );
    },
    {
      info: 'Some description about this type of ListChoice in general.',
    },
  )
  .add(
    'Multiple choices',
    () => (
      <React.Fragment>
        <ListChoice
          title="Choice Title"
          description="Further description"
          selectable
          icon={<Icon />}
          onClick={() => console.log('onclisk')}
        />
        <ListChoice
          title="Choice Title"
          description="Further description"
          selectable
          selected
          icon={<Icon />}
          onClick={() => console.log('onclisk')}
        />
        <ListChoice
          title="Choice Title"
          description="Further description"
          selectable
          icon={<Icon />}
          onClick={() => console.log('onclisk')}
        />
      </React.Fragment>
    ),
    {
      info: 'Some description about this type of ListChoice in general.',
    },
  )
  .add(
    'Playground',
    () => {
      const title = text('title', 'Choice Title');
      const description = text('description', 'Further description');
      const selectable = boolean('selectable', true);
      const selected = boolean('selected', false);

      return (
        <ListChoice
          title={title}
          description={description}
          selectable={selectable}
          selected={selected}
          icon={<Icon />}
          onClick={() => console.log('onclisk')}
        />
      );
    },
    {
      info: 'Some description about this type of InputField in general.',
    },
  )
  .add(
    'RTL',
    () => (
      <RenderInRtl>
        <React.Fragment>
          <ListChoice
            title="Choice Title"
            description="Further description"
            selectable
            icon={<Icon />}
            onClick={() => console.log('onclisk')}
          />
          <ListChoice
            title="Choice Title"
            description="Further description"
            selectable
            selected
            icon={<Icon />}
            onClick={() => console.log('onclisk')}
          />
          <ListChoice
            title="Choice Title"
            description="Further description"
            selectable
            icon={<Icon />}
            onClick={() => console.log('onclisk')}
          />
        </React.Fragment>
      </RenderInRtl>
    ),
    {
      info: 'Some description about this type of ListChoice.',
    },
  );
