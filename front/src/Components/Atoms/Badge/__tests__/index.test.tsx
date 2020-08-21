import React from 'react';
import { shallow } from 'enzyme';
import Badge from '../index';

describe('Badge', () => {
  const content = 'badge';
  const type = 'info';
  const ariaLabel = content;

  const component = shallow(
    <Badge type={type} icon="home" ariaLabel={ariaLabel}>
      {content}
    </Badge>,
  );
  it('should have passed props', () => {
    expect(component.prop('type')).toBe(type);
    expect(component.render().prop('aria-label')).toBe(ariaLabel);
  });
  it('should contain a content', () => {
    expect(component.render().text()).toBe(content);
  });
  it('should contain a icon', () => {
    expect(component.find('Icon').exists()).toBe(true);
  });
});
