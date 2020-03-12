import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, number, boolean, select } from '@storybook/addon-knobs';
import RenderInRtl from 'utils/rtl/RenderInRtl';
import SPACINGS_AFTER from 'utils/common/getSpacingToken/consts';
import { TYPES, SIZES } from './consts';

import ButtonLink from './index';
import Icon from '../Icon';

storiesOf('ButtonLink', module)
  .add('Default', () => <ButtonLink href="https://kiwi.com">ButtonLink</ButtonLink>, {
    info:
      'Link buttons have a similar look as classic links, but the area surrounding them is clickable. That makes them great to use outside of paragraphs or for less important actions in the interface. We use Link buttons only in a small and normal version.',
  })
  .add(
    'Secondary',
    () => (
      <ButtonLink href="https://kiwi.com" type="secondary">
        ButtonLink
      </ButtonLink>
    ),
    {
      info:
        'Link buttons have a similar look as classic links, but the area surrounding them is clickable. That makes them great to use outside of paragraphs or for less important actions in the interface. We use Link buttons only in a small and normal version.',
    },
  )
  .add(
    'Circled',
    () => {
      const circled = boolean('circled', true);
      const type = select('Type', Object.values(TYPES), TYPES.SECONDARY);
      const size = select('Size', Object.values(SIZES), SIZES.LARGE);

      return (
        <ButtonLink
          type={type as ButtonLinkType}
          size={size as ButtonLinkSize}
          iconLeft="home"
          circled={circled}
          title="Button"
        />
      );
    },
    {
      info:
        'Link buttons have a similar look as classic links, but the area surrounding them is clickable. That makes them great to use outside of paragraphs or for less important actions in the interface. We use Link buttons only in a small and normal version.',
    },
  )
  .add(
    'Playground',
    () => {
      const children = text('Children', 'ButtonLink');
      const disabled = boolean('Disabled', false);
      const block = boolean('Block', false);
      const type = select('Type', Object.values(TYPES), TYPES.SECONDARY);
      const size = select('Size', Object.values(SIZES), SIZES.LARGE);
      const width = number('Width', 0);
      const href = text('Href', '');
      const dataTest = text('dataTest', 'test');
      const external = boolean('External', false);
      const transparent = boolean('Transparent', false);
      const submit = boolean('Submit', false);
      const ariaExpanded = boolean('Aria expanded', false);
      const ariaControls = text('Aria controls', 'element ID');
      const tabIndex = text('tabIndex', '0');
      const title = text('Title', 'Additional information for accessibility');

      return (
        <ButtonLink
          disabled={disabled}
          block={block}
          type={type as ButtonLinkType}
          size={size as ButtonLinkSize}
          href={href}
          dataTest={dataTest}
          iconLeft="home"
          width={width}
          external={external}
          transparent={transparent}
          submit={submit}
          ariaExpanded={ariaExpanded}
          ariaControls={ariaControls}
          tabIndex={tabIndex}
          title={title}>
          {children}
        </ButtonLink>
      );
    },
    {
      info:
        'Link buttons have a similar look as classic links, but the area surrounding them is clickable. That makes them great to use outside of paragraphs or for less important actions in the interface. We use Link buttons only in a small and normal version.',
    },
  )
  .add(
    'Accessibility',
    () => {
      const children = text('Children', 'ButtonLink');
      const ariaExpanded = boolean('Aria expanded', false);
      const ariaControls = text('Aria controls', 'element ID');
      const title = text('Title', 'Additional information for accessibility');

      return (
        <ButtonLink ariaExpanded={ariaExpanded} ariaControls={ariaControls} title={title}>
          {children}
        </ButtonLink>
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
        <ButtonLink icon="home">ButtonLink</ButtonLink>
      </RenderInRtl>
    ),
    {
      info: 'This is a preview of this component in RTL setup.',
    },
  );
