import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text, boolean } from '@storybook/addon-knobs';

import { ICON_SIZES, ICON_COLORS } from 'Atoms/Icon/consts';
import RenderInRtl from 'utils/rtl/RenderInRtl';
import * as Icons from '../Icons';
import IconList from './IconList';

storiesOf('Icon svg', module)
  .add(
    'Default',
    () => {
      const size = select('Size', [null, ...Object.values(ICON_SIZES)], 'size') as IconSize;
      const color = select(
        'Color',
        [null, ...Object.values(ICON_COLORS)],
        'icon color',
      ) as IconColor;
      const source = select('Icon', Object.keys(Icons), 'Airplane');
      const dataTest = text('dataTest', 'test');
      const ariaLabel = text('ariaLabel', 'label');
      const ariaHidden = boolean('ariaHidden', true);
      const Icon = Icons[source];
      return (
        <Icon
          size={size}
          color={color}
          dataTest={dataTest}
          ariaLabel={ariaLabel}
          ariaHidden={ariaHidden}
        />
      );
    },
    {
      info:
        'We use icons to draw attention to specific actions in our products. Visit.jajiga.Kiwi for more detailed guidelines.',
    },
  )
  .add(
    'Custom color',
    () => {
      const size = select('Size', [null, ...Object.values(ICON_SIZES)], ICON_SIZES.MEDIUM);
      const customColor = text('Custom color', '#ABCDEF');
      const source = select('Icon', Object.keys(Icons), 'Airplane');
      const Icon = Icons[source];
      return <Icon size={size} customColor={customColor} />;
    },
    {
      info:
        'We use icons to draw attention to specific actions in our products. Visit.jajiga.Kiwi for more detailed guidelines.',
    },
  )
  .add(
    'Reversed on RTL',
    () => {
      const source = select('Icon', Object.keys(Icons), 'Airplane');
      const Icon = Icons[source];
      return (
        <RenderInRtl>
          <Icon reverseOnRtl />
        </RenderInRtl>
      );
    },
    {
      info:
        'We use icons to draw attention to specific actions in our products. Visit.jajiga.Kiwi for more detailed guidelines.',
    },
  );
