import Avatar from 'Atoms/Avatar';
import { storiesOf } from '@storybook/react';
import React from 'react';

storiesOf('Avatar', module)
  .add(
    'Default',
    () => {
      return (
        <Avatar
          src="https://www.jajiga.com/public/avatar/small/1812131820361125435.jpg"
          alt="have alt"
        />
      );
    },
    {
      info:
        'This is the default configuration of this component. Visit Orbit.Kiwi for more detailed guidelines.',
    },
  )

  .add(
    'small',
    () => {
      return (
        <Avatar
          src="https://www.jajiga.com/public/avatar/small/1812131820361125435.jpg"
          size="small"
        />
      );
    },
    {
      info:
        'This is the default configuration of this component. Visit Orbit.Kiwi for more detailed guidelines.',
    },
  );
