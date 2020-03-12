import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';

import RenderInRtl from 'utils/rtl/RenderInRtl';
import { POSITIONS } from './consts';
import Stack from '../Stack';
import Button from '../Button';
import ListChoice from '../ListChoice';
import Text from '../Text';
import Icon from '../Icon';
import Separator from '../Separator';
import Hide from '../Hide';

import Popover from './index';

const selects = (
  <>
    <Stack align="center">
      <Stack spacing="none">
        <Text>Adult</Text>
        <Text type="secondary">11+</Text>
      </Stack>
    </Stack>
    <Stack align="center">
      <Stack spacing="none">
        <Text>Child</Text>
        <Text type="secondary">2-11</Text>
      </Stack>
    </Stack>
  </>
);

const content = <Stack>{selects}</Stack>;

const overlappedContent = (
  <Stack>
    {selects}
    <Hide on={['smallMobile', 'mediumMobile']} block>
      <Separator />
      <Stack direction="row" justify="between">
        <Button type="secondary" size="small">
          Cancel
        </Button>
        <Button size="small">Done</Button>
      </Stack>
    </Hide>
  </Stack>
);

const longContent = (
  <Stack>
    {selects}
    {selects}
    {selects}
    {selects}
    {selects}
    {selects}
    {selects}
  </Stack>
);

storiesOf('Popover', module)
  .addDecorator(withKnobs)

  .add(
    'Default',
    () => {
      return (
        <Popover content={content}>
          <Button type="secondary" iconRight="home">
            Open popover
          </Button>
        </Popover>
      );
    },
    {
      info:
        'You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.',
    },
  )
  .add(
    'Prefered Position',
    () => {
      const preferredPosition = select(
        'preferredPosition',
        Object.values(POSITIONS),
        POSITIONS.TOP,
      );
      return (
        <Popover
          noPadding
          content={
                        <div>
              <ListChoice
    title="Choice Title"
    description="Further description"
                selectable
                icon={<Icon />}
    onClick={() => console.log('click')}
              />
            </div>
          }
          preferredPosition={preferredPosition as PositionsCore}>
          <Button type="secondary" iconRight="home">
            Open popover
          </Button>
        </Popover>
      );
    },
    {
      info:
        'You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.',
    },
  )
  .add(
    'With ListChoice',
    () => {
      const width = text('width', '250px');
      return (
        <Popover
          noPadding
          width={width}
          content={
                        <div>
              <ListChoice
    title="Choice Title"
    description="Further description"
    selectable
                icon={<Icon />}
    onClick={() => console.log('click')}
              />
              <ListChoice
    title="Choice Title"
    description="Further description"
                selectable
                selected
    icon={<Icon />}
    onClick={() => console.log('click')}
              />
              <ListChoice
    title="Choice Title"
    description="Further description"
                selectable
    icon={<Icon />}
    onClick={() => console.log('click')}
              />
            </div>
          }
          preferredPosition="top">
          <Button type="secondary" iconRight="home">
            Open popover
          </Button>
        </Popover>
      );
    },
    {
      info:
        'You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.',
    },
  )
  .add(
    'Opened by prop',
    () => {
      const opened = boolean('opened', false);

      return (
        <Popover
          opened={opened}
          content={content}
          onOpen={() => console.log('click')}
          onClose={() => console.log('click')}>
          <Button type="secondary" iconRight="home">
            Open popover
          </Button>
        </Popover>
      );
    },
    {
      info:
        'You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.',
    },
  )
  .add(
    'Overlapped',
    () => {
      const overlapped = boolean('overlapped', true);

      return (
        <Popover
          overlapped={overlapped}
          content={overlappedContent}
          onOpen={() => console.log('click')}
          onClose={() => console.log('click')}>
          <Button type="secondary" iconRight="home">
            Open popover
          </Button>
        </Popover>
      );
    },
    {
      info:
        'You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.',
    },
  )
  .add(
    'Multiple Popovers',
    () => {
      return (
        <Stack flex>
          <Popover
            content={overlappedContent}
            onOpen={() => console.log('click')}
            onClose={() => console.log('click')}>
            <Button type="secondary" iconRight="home">
              Open popover
            </Button>
          </Popover>
          <Popover
            content={overlappedContent}
            onOpen={() => console.log('click')}
            onClose={() => console.log('click')}>
            <Button type="secondary" iconRight="home">
              Open popover
            </Button>
          </Popover>
        </Stack>
      );
    },
    {
      info:
        'You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.',
    },
  )
  .add(
    'Long content',
    () => {
      return (
        <Popover
          content={longContent}
          onOpen={() => console.log('click')}
          onClose={() => console.log('click')}>
          <Button type="secondary" iconRight="home">
            Open popover
          </Button>
        </Popover>
      );
    },
    {
      info:
        'You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.',
    },
  )
  .add(
    'Playground',
    () => {
      const preferredPosition = select(
        'preferredPosition',
        Object.values(POSITIONS),
        POSITIONS.BOTTOM,
      );
      const width = text('width', '350px');
      const noPadding = boolean('noPadding', false);
      const overlapped = boolean('overlapped', false);

      return (
        <Popover
          width={width}
          content={content}
          preferredPosition={preferredPosition as PositionsCore}
          noPadding={noPadding}
          overlapped={overlapped}
          onOpen={() => console.log('click')}
          onClose={() => console.log('click')}>
          <Button type="secondary" iconRight="home">
            Open popover
          </Button>
        </Popover>
      );
    },
    {
      info:
        'You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.',
    },
  )
  .add(
    'RTL',
    () => {
      const preferredPosition = select(
        'preferredPosition',
        Object.values(POSITIONS),
        POSITIONS.BOTTOM,
      );

      return (
        <RenderInRtl>
          <Popover content={content} preferredPosition={preferredPosition as PositionsCore}>
            <Button type="secondary" iconRight="home">
              Open popover
            </Button>
          </Popover>
        </RenderInRtl>
      );
    },
    {
      info:
        'You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.',
    },
  );
