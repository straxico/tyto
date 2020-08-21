import React from 'react';
import { shallow } from 'enzyme';

import Tag from '../index';

describe('Tag', () => {
  const content = 'Brno';
  const dataTest = 'test';
  const onRemove = jest.fn();
  const onClick = jest.fn();

  const component = shallow(
    <Tag icon="home" dataTest={dataTest} onRemove={onRemove} onClick={onClick}>
      {content}
    </Tag>,
  );

  it('the onRemove should be called', () => {
    const CloseContainer = component.find('Tag__CloseContainer');
    CloseContainer.simulate('click', { stopPropagation() {} });
    expect(onRemove).toHaveBeenCalled();
  });

  it('the onClick should be called', () => {
    component.simulate('click');
    expect(onClick).toHaveBeenCalled();
  });

  it('should have passed props', () => {
    expect(component.render().prop('data-test')).toBe(dataTest);
  });
  it('should contain a content', () => {
    expect(component.render().text()).toBe(content);
  });
  it('should contain a icon', () => {
    expect(component.find('Icon').exists()).toBe(true);
  });
});
