import React from 'react';
import { shallow } from 'enzyme';

import NotificationBadge from '../index';

describe('NotificationBadge', () => {
  const content = 'badge';
  const type = 'info';
  const dataTest = 'test';

  const wrapped = shallow(
    <NotificationBadge type={type} icon="home" dataTest={dataTest}>
      {content}
    </NotificationBadge>,
  );

  const component = wrapped.find('Badge');

  it('should have passed props', () => {
    expect(component.prop('type')).toBe(type);
    expect(component.render().prop('data-test')).toBe(dataTest);
  });
});
