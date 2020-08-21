import React from 'react';
import { shallow } from 'enzyme';

import Icon from 'Atoms/Icon';
import Tooltip from '../index';

describe('Tooltip', () => {
  const content = 'Write some message to the user';
  const component = shallow(
    <Tooltip content={content}>
      <Icon />
    </Tooltip>,
  );
  it('it should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
