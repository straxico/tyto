import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, number, boolean, select } from '@storybook/addon-knobs';

import RenderInRtl from 'utils/rtl/RenderInRtl';
import SPACINGS_AFTER from 'utils/common/getSpacingToken/consts';
import Icon from 'Atoms/Icon';
import { TYPE_OPTIONS, SIZE_OPTIONS } from './consts';
// import Stack from '../Stack';
import Button from './index';

storiesOf('Button', module)
  .add(
    'Default',
    () => {
      const children = text('Children', 'Default button');
      return <Button>{children}</Button>;
    },
    {
      info:
        'This is the default configuration of this component. Visit jajiga.Kiwi for more detailed guidelines.',
    },
  )
  .add(
    'only icon',
    () => {
      return <Button icon="search" iconLeft="home" />;
    },
    {
      info:
        'This is the default configuration of this component. Visit jajiga.Kiwi for more detailed guidelines.',
    },
  )
  .add(
    'Basic buttons',
    () => {
      const children = text('Children', 'Button');
      const block = boolean('Block', false);
      const type = select('Type', [TYPE_OPTIONS.PRIMARY, TYPE_OPTIONS.SECONDARY], 'primary');
      const size = select('Size', Object.values(SIZE_OPTIONS), 'normal');

      return (
        <Button fullwidth={block} type={type as ButtonType} size={size as ButtonSize}>
          {children}
        </Button>
      );
    },
    {
      info:
        'Basic buttons have three sizes (large, normal and small) and can be either primary or secondary type. Visit jajiga.Kiwi for more detailed guidelines.',
    },
  )
  .add(
    'Button with icons',
    () => {
      const children = text('Children', 'Button');
      const block = boolean('Block', false);
      const type = select('Type', [TYPE_OPTIONS.PRIMARY, TYPE_OPTIONS.SECONDARY], 'primary');
      const size = select('Size', Object.values(SIZE_OPTIONS), 'small');

      return (
        <Button
          fullwidth={block}
          type={type as ButtonType}
          size={size as ButtonSize}
          iconLeft="home"
          iconRight="home">
          {children}
        </Button>
      );
    },
    {
      info:
        "Buttons with icon are great when you need to draw more attention to the action. However, it's essential to not over-use these buttons. If everything tries to grab attention, things usually get messy. Visit jajiga.Kiwi for more detailed guidelines.",
    },
  )
  .add(
    'Facebook button',
    () => (
      <Button type="facebook" iconLeft="home" bordered>
        Sign in with Facebook
      </Button>
    ),
    {
      info: 'We use social buttons only in normal size.',
    },
  )
  .add(
    'Google button',
    () => (
      <Button type="google" iconLeft="home" bordered>
        Sign in with Google
      </Button>
    ),
    {
      info: 'We use social buttons only in normal size.',
    },
  )
  // .add(
  //   'Status buttons',
  //   () => {
  //     const children = text('Children', 'Button');

  //     return (
  //       <Stack>
  //         <Button type="info" size="small" iconLeft="home">
  //           {children}
  //         </Button>
  //         <Button type="success" size="small" iconLeft="home">
  //           {children}
  //         </Button>
  //         <Button type="warning" size="small" iconLeft="home">
  //           {children}
  //         </Button>
  //         <Button type="critical" size="small" iconLeft="home">
  //           {children}
  //         </Button>
  //       </Stack>
  //     );
  //   },
  //   {
  //     info:
  //       'We use status buttons exclusively in Alert messages when we need to show supporting action connected to the displayed message. We only use the small size of buttons. Visit jajiga.Kiwi for more detailed guidelines.',
  //   },
  // )
  .add(
    'Circled button',
    () => {
      const size = select('Size', Object.values(SIZE_OPTIONS), SIZE_OPTIONS.NORMAL);
      const type = select(
        'Type',
        [TYPE_OPTIONS.PRIMARY, TYPE_OPTIONS.SECONDARY],
        TYPE_OPTIONS.PRIMARY,
      );

      return (
        <Button
          type={type as ButtonType}
          size={size as ButtonSize}
          iconLeft="home"
          circled
          title="Button"
        />
      );
    },
    {
      info:
        'Button can be also rendered in circled shape, but only when it does have iconLeft and not have children. Use title prop to ensure accessibility.',
    },
  )
  .add(
    'Destructive buttons',
    () => {
      const children = text('Children', 'Destructive button');
      const bordered = boolean('Bordered', false);
      const size = select('Size', Object.values(SIZE_OPTIONS), 'normal');

      return (
        <Button bordered={bordered} type="critical" size={size as ButtonSize} iconLeft="home">
          {children}
        </Button>
      );
    },
    {
      info:
        "Destructive buttons are a specific version of critical status buttons, paired together with 'Remove' icon. We use them when we need to inform our users about possible dangerous actions (canceling a booking, removing an item, etc.). Visit jajiga.Kiwi for more detailed guidelines.",
    },
  )
  .add(
    'Button as a link',
    () => {
      const children = text('Children', 'I am a link');
      const href = text('Href', 'https://kiwi.com');
      const external = boolean('External', false);
      const disabled = boolean('Disabled', false);
      const size = select('Size', Object.values(SIZE_OPTIONS), 'normal');

      return (
        <Button
          href={href}
          external={external}
          size={size as ButtonSize}
          disabled={disabled}
          bordered
          iconLeft="home">
          {children}
        </Button>
      );
    },
    {
      info:
        'If you need to, you can pass some href to this component and it will automatically render into anchor.',
    },
  )
  .add(
    'Playground',
    () => {
      const children = text('Children', 'Button');
      const href = text('Href', undefined);
      const external = boolean('External', false);
      const disabled = boolean('Disabled', false);
      const block = boolean('Block', false);
      const type = select('Type', Object.values(TYPE_OPTIONS), 'primary');
      const size = select('Size', Object.values(SIZE_OPTIONS), 'normal');
      const width = number('Width', 0);
      const bordered = boolean('Bordered', false);
      const circled = boolean('Circled', false);
      const loading = boolean('Loading', false);
      const submit = boolean('Submit', false);
      const dataTest = text('dataTest', 'test');
      const ariaExpanded = boolean('Aria expanded', false);
      const ariaControls = text('Aria controls', 'element ID');
      const tabIndex = text('tabIndex', '0');
      const spaceAfter = select(
        'spaceAfter',
        [null, ...Object.values(SPACINGS_AFTER)],
        SPACINGS_AFTER.NORMAL,
      );
      const title = text('Title', 'Additional information for accessibility');

      return (
        <Button
          href={href}
          external={external}
          disabled={disabled}
          circled={circled}
          fullwidth={block}
          bordered={bordered}
          loading={loading}
          dataTest={dataTest}
          type={type as ButtonType}
          size={size as ButtonSize}
          iconLeft="home"
          iconRight="home"
          submit={submit}
          width={width}
          ariaControls={ariaControls}
          ariaExpanded={ariaExpanded}
          tabIndex={tabIndex}
          spaceAfter={spaceAfter as spaceAfterType}
          title={title}>
          {children}
        </Button>
      );
    },
    {
      info: 'Some description about this type of component. ',
    },
  )
  .add(
    'Accessibility',
    () => {
      const children = text('Children', 'Button');
      const ariaExpanded = boolean('Aria expanded', false);
      const ariaControls = text('Aria controls', 'element ID');
      const title = text('Title', 'Additional information for accessibility');

      return (
        <Button ariaControls={ariaControls} ariaExpanded={ariaExpanded} title={title}>
          {children}
        </Button>
      );
    },
    {
      info: 'This is a preview of component accessibility props',
    },
  )
  .add(
    'RTL',
    () => (
      <RenderInRtl>
        <Button type="info" icon="home">
          Button
        </Button>
      </RenderInRtl>
    ),
    {
      info: 'This is a preview of this component in RTL setup.',
    },
  );
