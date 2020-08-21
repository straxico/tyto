import React from 'react';
import { storiesOf } from '@storybook/react';
import SvgIcon from '.';
import SvgIconHome from './SvgList/home';
import SvgIconArrow from './SvgList/arrow';
import SvgIconOrder from './SvgList/order';

const story = storiesOf('svg icon', module);

story.add('svg icon', () => {
  return (
    <>
      <SvgIcon viewBox="0 0 495.398 495.398" color="info" size="xxlarge">
        <SvgIconHome />
      </SvgIcon>
      <SvgIcon viewBox="0 0 495.398 495.398" color="secondary" size="xlarge">
        <SvgIconHome />
      </SvgIcon>
      <SvgIcon viewBox="0 0 495.398 495.398" color="attention" size="large">
        <SvgIconHome />
      </SvgIcon>
      <SvgIcon viewBox="0 0 495.398 495.398" color="tertiary" size="normal">
        <SvgIconHome />
      </SvgIcon>
      <SvgIcon viewBox="0 0 495.398 495.398" color="warning" size="small">
        <SvgIconHome />
      </SvgIcon>
    </>
  );
});
