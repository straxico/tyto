import React from 'react';
import { mount } from 'enzyme';

import AirConditioner from 'Atoms/Icons/AirConditioner';
import { ICON_SIZES, ICON_COLORS } from 'Atoms/Icon/consts';
import defaultTheme from 'utils/token';

describe('Icon', () => {
  const color = ICON_COLORS.PRIMARY as IconColor;
  const component = mount(<AirConditioner color={color} />);
  const svg = component.find('svg');
  it('should render SVG', () => {
    expect(component.find('svg').exists()).toBe(true);
  });
  // it('should have default sizing', () => {
  //   expect(svg).toHaveStyleRule('height', defaultTheme.jajiga.widthIconMedium);
  //   expect(svg).toHaveStyleRule('width', defaultTheme.jajiga.widthIconMedium);
  // });
  // it('should have selected color', () => {
  //   expect(svg).toHaveStyleRule('color', defaultTheme.jajiga.colorIconPrimary);
  // });
  // it('should have CSS properties', () => {
  //   expect(svg).toHaveStyleRule('vertical-align', 'middle');
  //   expect(svg).toHaveStyleRule('fill', 'currentColor');
  // });
});

describe('Icon with custom props', () => {
  const dataTest = 'test';
  const size = ICON_SIZES.LARGE as IconSize;
  const customColor = '#FF0000';
  const ariaHidden = true;
  const ariaLabel = 'ArrowCircleDown';
  const component = mount(
    <AirConditioner
      size={size}
      customColor={customColor}
      dataTest={dataTest}
      ariaHidden={ariaHidden}
      ariaLabel={ariaLabel}
    />,
  );
  const svg = component.find('svg');
  it('should render SVG', () => {
    expect(component.find('svg').exists()).toBe(true);
  });
  it('should render attributes', () => {
    expect(svg.render().prop('data-test')).toBe(dataTest);
    expect(svg.render().prop('aria-hidden')).toBe(String(ariaHidden));
    expect(svg.render().prop('aria-label')).toBe(ariaLabel);
  });
  // it('should have default sizing', () => {
  //   expect(svg).toHaveStyleRule('height', defaultTheme.jajiga.widthIconLarge);
  //   expect(svg).toHaveStyleRule('width', defaultTheme.jajiga.widthIconLarge);
  // });
  // it('should have selected color', () => {
  //   expect(svg).toHaveStyleRule('color', customColor);
  // });
});
