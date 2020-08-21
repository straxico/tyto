import React from 'react';
import { mount } from 'enzyme';

import defaultTheme from 'utils/token';
import { ICON_SIZES, ICON_COLORS } from '../consts';
import Icon from '..';

describe('Icon', () => {
  const color = ICON_COLORS.PRIMARY as IconColor;
  const component = mount(<Icon color={color} />);
  const ico = component.find('i');
  it('should render SVG', () => {
    expect(component.find('i').exists()).toBe(true);
  });
  // it('should have default sizing', () => {
  //   expect(ico).toHaveStyleRule('height', defaultTheme.orbit.widthIconMedium);
  //   expect(ico).toHaveStyleRule('width', defaultTheme.orbit.widthIconMedium);
  // });
  // it('should have selected color', () => {
  //   expect(ico).toHaveStyleRule('color', defaultTheme.orbit.colorIconPrimary);
  // });
  // it('should have CSS properties', () => {
  //   expect(ico).toHaveStyleRule('vertical-align', 'middle');
  //   expect(ico).toHaveStyleRule('fill', 'currentColor');
  // });
});

describe('Icon with custom props', () => {
  const iconName = 'airbnb' as IconName;
  const size = ICON_SIZES.LARGE as IconSize;
  const customColor = '#FF0000';
  const ariaHidden = true;
  const ariaLabel = 'Accommodation';
  const component = mount(
    <Icon
      iconName={iconName}
      size={size}
      customColor={customColor}
      ariaHidden={ariaHidden}
      ariaLabel={ariaLabel}
    />,
  );
  const ico = component.find('i');
  it('should render i', () => {
    expect(component.find('i').exists()).toBe(true);
  });
  it('should render attributes', () => {
    expect(ico.render().prop('aria-hidden')).toBe(String(ariaHidden));
    expect(ico.render().prop('aria-label')).toBe(ariaLabel);
    expect(ico.render().hasClass('icon_airbnb')).toBe(true);
  });
  // it('should have default sizing', () => {
  //   expect(ico).toHaveStyleRule('height', defaultTheme.jajiga.widthIconLarge);
  //   expect(ico).toHaveStyleRule('width', defaultTheme.jajiga.widthIconLarge);
  // });
  // it('should have selected color', () => {
  //   expect(ico).toHaveStyleRule('color', customColor);
  // });
});
