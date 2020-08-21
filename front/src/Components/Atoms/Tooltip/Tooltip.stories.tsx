import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select, boolean, number } from '@storybook/addon-knobs';

import RenderInRtl from 'utils/rtl/RenderInRtl';
import Icon from 'Atoms/Icon';
import { POSITIONS, SIZE_OPTIONS } from './consts';
import Stack from '../Stack';
import Alert from '../Alert';
import Text from '../Text';
import TextLink from '../TextLink';
import List from '../List';
import ListItem from '../List/ListItem';
import Heading from '../Heading';

import Tooltip from './index';

storiesOf('Tooltip', module)
  .add(
    'Tooltip on inline element',
    () => {
      const content = text('content', 'Write your text here.');
      const removeUnderlinedText = boolean('removeUnderlinedText', false);

      return (
        <Alert title="Lorem ipsum dolor sit amet">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam lectus justo, vulputate
          eget mollis sed, tempor sed magna.
          <Tooltip content={content} preferredPosition="left">
            <TextLink>Cras elementum.</TextLink>
          </Tooltip>
          Aliquam erat volutpat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum. Sed ac dolor sit amet purus malesuada congue.
          Sed vel lectus.
          <Tooltip content={content} removeUnderlinedText={removeUnderlinedText}>
            <Text>
              Aliquam erat volutpat. Excepteur sint occaecat cupidatat non proident, sunt in culpa
              qui officia deserunt mollit anim id est laborum. Sed ac dolor sit amet purus malesuada
              congue. Sed vel lectus.
            </Text>
          </Tooltip>
        </Alert>
      );
    },
    {
      info:
        'You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.',
    },
  )
  .add(
    'Tooltip on block element',
    () => {
      const content = text(
        'content',
        'Write your text here. If it’s longer than three lines though, consider format your content in some more structured way.',
      );
      return (
        <Tooltip content={content}>
          <Heading>Orbit design system</Heading>
        </Tooltip>
      );
    },
    {
      info:
        'You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.',
    },
  )
  .add(
    'Preferred position',
    () => {
      const size = select('size', Object.values(SIZE_OPTIONS), SIZE_OPTIONS.MEDIUM);
      const preferredPosition = select(
        'preferredPosition',
        Object.values(POSITIONS),
        POSITIONS.BOTTOM,
      );
      const content = text('content', 'Write your text here.');
      return (
        <Stack justify="center">
          <Tooltip
            preferredPosition={preferredPosition as TooltipPositions}
            size={size as TooltipSizes}
            content={content}>
            <Icon iconName="home" />
          </Tooltip>
        </Stack>
      );
    },
    {
      info:
        "If you want to, you can specify one preferred position. If it won't be possible to use it, the defaults will be used.",
    },
  )
  .add(
    'With image inside',
    () => {
      const size = select('size', Object.values(SIZE_OPTIONS), SIZE_OPTIONS.MEDIUM);
      const preferredPosition = select(
        'preferredPosition',
        Object.values(POSITIONS),
        POSITIONS.BOTTOM,
      );
      return (
        <Tooltip
          preferredPosition={preferredPosition as TooltipPositions}
          size={size as TooltipSizes}
          content={
            <Stack>
              <img
                src="/tooltip_card_preview.png"
                alt="Preview of card help in Tooltip component"
              />
              <Text>
                We take security very seriously. Especially when it comes to your personal and
                sensitive details.
              </Text>
              <List>
                <ListItem>
                  A common variant, especially in older software, is displaying a description.
                </ListItem>
                <ListItem>
                  A common variant, especially in older software, is displaying a description.
                </ListItem>
              </List>
            </Stack>
          }>
          <Icon iconName="home" />
        </Tooltip>
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
      const content = text('content', 'Write your text here.');
      const dataTest = text('dataTest', 'test');
      const size = select('size', Object.values(SIZE_OPTIONS), SIZE_OPTIONS.SMALL);
      const tabIndex = number('TabIndex', 0);
      const enabled = boolean('enabled', true);
      const removeUnderlinedText = boolean('removeUnderlinedText', false);
      const preferredPosition = select(
        'preferredPosition',
        Object.values(POSITIONS),
        POSITIONS.BOTTOM,
      );

      return (
        <Tooltip
          preferredPosition={preferredPosition as TooltipPositions}
          size={size as TooltipSizes}
          content={content}
          dataTest={dataTest}
          tabIndex={tabIndex}
          enabled={enabled}
          removeUnderlinedText={removeUnderlinedText}>
          <Icon />
        </Tooltip>
      );
    },
    {
      info:
        'You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.',
    },
  )
  .add(
    'RTL ',
    () => {
      return (
        <RenderInRtl>
          <Alert icon={<Icon iconName="home" />} title="Lorem ipsum dolor sit amet">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam lectus justo, vulputate
            eget mollis sed, tempor sed magna.
            <Tooltip content="Write your text here." preferredPosition="left">
              <TextLink>Cras elementum.</TextLink>
            </Tooltip>
            Aliquam erat volutpat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. Sed ac dolor sit amet purus malesuada
            congue. Sed vel lectus.
            <Tooltip content="Write your text here.">
              <Text>Another Tooltip.</Text>
            </Tooltip>
            Donec odio tempus molestie, porttitor ut, iaculis quis, sem.
          </Alert>
        </RenderInRtl>
      );
    },
    {
      info:
        'You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.',
    },
  );
