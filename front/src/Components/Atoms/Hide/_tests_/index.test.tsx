import React from 'react';
import { mount } from 'enzyme';

import theme from 'utils/token';
import { DEVICES, QUERIES } from 'utils/mediaQuery/consts';
import { getBreakpointWidth } from 'utils/mediaQuery/index';

import Icon from 'Atoms/Icon';
import Hide from '..';

describe('Hide', () => {
  const on = ['smallMobile', 'largeMobile', 'largeDesktop'] as Devices[];
  const block = false;
  const component = mount(
    <Hide on={on} block={block}>
      <Icon iconName="home" />
    </Hide>,
  );

  it('should have passed props', () => {
    expect(component.prop('on')).toBe(on);
    expect(component.prop('block')).toBe(block);
  });
  it('should contain children', () => {
    expect(component.find('Icon').exists()).toBe(true);
  });
  // it('should contain styles', () => {
  //   DEVICES.map(
  //     viewport =>
  //       viewport !== DEVICES[0] &&
  //       (on.indexOf(viewport) !== -1
  //         ? expect(component).toHaveStyleRule('display', 'none', {
  //             media: getBreakpointWidth(viewport, theme),
  //           })
  //         : expect(component).toHaveStyleRule('display', 'inline-block', {
  //             media: getBreakpointWidth(viewport, theme),
  //           })),
  //   );
  //   expect(component).toHaveStyleRule('display', 'none');
  // });
  // it('should be displayed block', () => {
  //   component.setProps({ block: true, on: on[1] });
  //   expect(component).toHaveStyleRule('display', 'block', {
  //     media: getBreakpointWidth(QUERIES.LARGEDESKTOP, theme),
  //   });
  // });
  // it('should be none', () => {
  //   component.setProps({ block: true, on: on[1] });
  //   expect(component).toHaveStyleRule('display', 'none', {
  //     media: getBreakpointWidth(QUERIES.LARGEMOBILE, theme),
  //   });
  // });
});
