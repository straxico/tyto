import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select } from '@storybook/addon-knobs';

import Icon from 'Atoms/Icon';
import { TYPE_OPTIONS } from './consts';

import Badge from './index';

storiesOf('Badge', module)
  .add(
    'Default',
    () => {
      const content = text('Content', 'Badge');

      return <Badge icon="home">{content}</Badge>;
    },
    {
      info: 'Check jajiga.Kiwi for more detailed design guidelines.',
    },
  )

  .add(
    'Neutral',
    () => {
      const content = text('Content', 'Badge');
      return (
        <Badge type={TYPE_OPTIONS.NEUTRAL as BadgeType} icon="home">
          {content}
        </Badge>
      );
    },
    {
      info: 'Check jajiga.Kiwi for more detailed design guidelines.',
    },
  )
  .add(
    'Info',
    () => {
      const content = text('Content', 'Badge');
      return (
        <Badge type={TYPE_OPTIONS.INFO as BadgeType} icon="home">
          {content}
        </Badge>
      );
    },
    {
      info: 'Check jajiga.Kiwi for more detailed design guidelines.',
    },
  )
  .add(
    'Info Inverted',
    () => {
      const content = text('Content', 'Badge');
      return (
        <Badge type={TYPE_OPTIONS.INFO_INVERTED as BadgeType} icon="home">
          {content}
        </Badge>
      );
    },
    {
      info: 'Check jajiga.Kiwi for more detailed design guidelines.',
    },
  )
  .add(
    'Success',
    () => {
      const content = text('Content', 'Badge');
      return (
        <Badge type={TYPE_OPTIONS.SUCCESS as BadgeType} icon="home">
          {content}
        </Badge>
      );
    },
    {
      info: 'Check jajiga.Kiwi for more detailed design guidelines.',
    },
  )
  .add(
    'Success Inverted',
    () => {
      const content = text('Content', 'Badge');
      return (
        <Badge type={TYPE_OPTIONS.SUCCESS_INVERTED as BadgeType} icon="home">
          {content}
        </Badge>
      );
    },
    {
      info: 'Check jajiga.Kiwi for more detailed design guidelines.',
    },
  )
  .add(
    'Warning',
    () => {
      const content = text('Content', 'Badge');
      return (
        <Badge type={TYPE_OPTIONS.WARNING as BadgeType} icon="home">
          {content}
        </Badge>
      );
    },
    {
      info: 'Check jajiga.Kiwi for more detailed design guidelines.',
    },
  )
  .add(
    'Warning Inverted',
    () => {
      const content = text('Content', 'Badge');
      return (
        <Badge type={TYPE_OPTIONS.WARNING_INVERTED as BadgeType} icon="home">
          {content}
        </Badge>
      );
    },
    {
      info: 'Check jajiga.Kiwi for more detailed design guidelines.',
    },
  )
  .add(
    'Critical',
    () => {
      const content = text('Content', 'Badge');
      return (
        <Badge type={TYPE_OPTIONS.CRITICAL as BadgeType} icon="home">
          {content}
        </Badge>
      );
    },
    {
      info: 'Check jajiga.Kiwi for more detailed design guidelines.',
    },
  )
  .add(
    'Critical Inverted',
    () => {
      const content = text('Content', 'Badge');
      return (
        <Badge type={TYPE_OPTIONS.CRITICAL_INVERTED as BadgeType} icon="home">
          {content}
        </Badge>
      );
    },
    {
      info: 'Check jajiga.Kiwi for more detailed design guidelines.',
    },
  )
  .add(
    'Dark',
    () => {
      const content = text('Content', 'Badge');
      return (
        <Badge type={TYPE_OPTIONS.DARK as BadgeType} icon="home">
          {content}
        </Badge>
      );
    },
    {
      info: 'Check jajiga.Kiwi for more detailed design guidelines.',
    },
  )
  .add(
    'White',
    () => {
      const content = text('Content', 'Badge');
      return (
        <div style={{ backgroundColor: '#46515e', padding: '10px' }}>
          <Badge type={TYPE_OPTIONS.WHITE as BadgeType} icon="home">
            {content}
          </Badge>
        </div>
      );
    },
    {
      info: 'Check jajiga.Kiwi for more detailed design guidelines.',
    },
  )
  .add('Badge with translated node', () => (
    <Badge icon="home">
      <span>Content should </span>
      <span>be</span>
      <span> with space</span>
    </Badge>
  ))
  .add(
    'Playground',
    () => {
      const content = text('Content', 'Badge');
      const type = select('Type', Object.values(TYPE_OPTIONS), TYPE_OPTIONS.INFO);
      const dataTest = text('dataTest', 'test');
      const ariaLabel = text('ariaLabel', 'test');

      return (
        <Badge type={type as BadgeType} icon="home" dataTest={dataTest} ariaLabel={ariaLabel}>
          {content}
        </Badge>
      );
    },
    {
      info:
        'You can try all possible configurations of this component. However, check jajiga.Kiwi for more detailed design guidelines.',
    },
  )
  .add(
    'Accessibility',
    () => {
      const content = text('Content', 'Badge');
      const ariaLabel = text('ariaLabel', 'test');

      return (
        <Badge icon="home" ariaLabel={ariaLabel}>
          {content}
        </Badge>
      );
    },
    {
      info: 'This is a preview of component accessibility props',
    },
  );
