import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';

import RenderInRtl from 'utils/rtl/RenderInRtl';
import Icon from 'Atoms/Icon';
import Button from '../Button';
import ButtonLink from '../ButtonLink';

import ButtonGroup from './index';

storiesOf('ButtonGroup', module)
  .add(
    'With Buttons',
    () => {
      const connected = boolean('Connected', true);
      const dataTest = text('dataTest', 'test');
      return (
        <ButtonGroup connected={connected} dataTest={dataTest}>
          <Button icon="home">Button</Button>
          <Button icon="home" title="Show more" />
        </ButtonGroup>
      );
    },
    {
      info:
        'You can try all possible configurations of this component. However, check jajiga.Kiwi for more detailed design guidelines.',
    },
  )
  .add(
    'With ButtonLinks',
    () => {
      const connected = boolean('Connected', true);
      const dataTest = text('dataTest', 'test');
      return (
        <ButtonGroup connected={connected} dataTest={dataTest}>
          <ButtonLink type="secondary" icon="home">
            Button
          </ButtonLink>
          <ButtonLink type="secondary" icon="home" title="Show more" />
        </ButtonGroup>
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
        <ButtonGroup connected>
          <Button icon="home">Button</Button>
          <Button icon="home" title="Show more" />
        </ButtonGroup>
      </RenderInRtl>
    ),
    {
      info: 'This is a preview of this component in RTL setup.',
    },
  )
  .add(
    'button group connected',
    () => {
      return (
        <ButtonGroup connected>
          <Button icon="home" title="Show more">
            button
          </Button>
          <Button icon="home" title="Show more">
            button
          </Button>
          <Button icon="home" title="Show more">
            button
          </Button>
          <Button icon="home" title="Show more">
            button
          </Button>
          <Button icon="home" title="Show more">
            button
          </Button>
        </ButtonGroup>
      );
    },
    {
      info:
        'You can try all possible configurations of this component. However, check jajiga.Kiwi for more detailed design guidelines.',
    },
  )
  .add(
    'buttonLink group connected',
    () => {
      return (
        <ButtonGroup connected>
          <ButtonLink icon="home" title="Show more">
            button
          </ButtonLink>
          <ButtonLink icon="home" title="Show more">
            button
          </ButtonLink>
          <ButtonLink icon="home" title="Show more">
            button
          </ButtonLink>
          <ButtonLink icon="home" title="Show more">
            button
          </ButtonLink>
          <ButtonLink icon="home" title="Show more">
            button
          </ButtonLink>
          <ButtonLink icon="home" title="Show more">
            button
          </ButtonLink>
        </ButtonGroup>
      );
    },
    {
      info:
        'You can try all possible configurations of this component. However, check jajiga.Kiwi for more detailed design guidelines.',
    },
  );
