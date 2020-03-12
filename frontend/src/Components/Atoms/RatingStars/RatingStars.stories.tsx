import React from 'react';
import { storiesOf } from '@storybook/react';
import { number, text, select, boolean } from '@storybook/addon-knobs';

import RenderInRtl from 'utils/rtl/RenderInRtl';
import MAX_STARS from './consts';
import { ICON_COLORS, ICON_SIZES } from '../Icon/consts';

import RatingStars from '.';

storiesOf('RatingStars', module)
  .add(
    'Playground',
    () => {
      const rating = number('rating', 4.4, { min: 0, max: MAX_STARS });
      const size = select('size', [null, ...Object.values(ICON_SIZES)], 'small');
      const color = select(
        'color',
        [null, ICON_COLORS.PRIMARY, ICON_COLORS.SECONDARY, ICON_COLORS.ATTENTION],
        'primary',
      );
      const showEmpty = boolean('showEmpty', true);
      const dataTest = text('dataTest', 'test');

      return (
        <RatingStars
          rating={rating}
          size={size as IconSize}
          color={color as IconColor}
          showEmpty={showEmpty}
          dataTest={dataTest}
        />
      );
    },
    {
      info: 'Playground of RatingStars',
    },
  )
  .add(
    'RTL',
    () => (
      <RenderInRtl>
        <RatingStars rating={3.3} />
      </RenderInRtl>
    ),
    {
      info: 'This is a preview of this component in RTL setup.',
    },
  );
