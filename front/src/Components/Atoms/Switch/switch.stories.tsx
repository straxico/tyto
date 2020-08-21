import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import Switch from 'Atoms/Switch';

const SwitchStory = () => {
  const [checked, setChecked] = useState(true);
  return <Switch checked={checked} onChange={e => setChecked(e.target.checked)} />;
};

storiesOf('switch', module).add('switch normal', () => {
  return <SwitchStory />;
});
