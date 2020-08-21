import React from 'react';
import { shallow, mount } from 'enzyme';

import defaultTheme from 'utils/token';
import SPACINGS_AFTER from 'utils/common/getSpacingToken/consts';
import List from '../index';
import ListItem from '../ListItem';

describe(`List with custom colored icons`, () => {
  const size = 'small';
  const type = 'secondary';
  const dataTest = 'test';
  const content = 'This contains a nice sentence';

  const component = shallow(
    <List
      size={size}
      type={type}
      dataTest={dataTest}
      spaceAfter={SPACINGS_AFTER.NORMAL as spaceAfterType}>
      <ListItem dataTest={dataTest}>{content}</ListItem>
      <ListItem dataTest={dataTest}>{content}</ListItem>
      <ListItem dataTest={dataTest}>{content}</ListItem>
    </List>,
  );

  const children = component.find('ListItem');

  it('should have passed props', () => {
    expect(component.prop('size')).toBe(size);
    expect(component.prop('type')).toBe(type);
  });

  // it('should have margin-bottom', () => {
  //   const mounted = mount(
  //     <List spaceAfter={SPACINGS_AFTER.NORMAL as spaceAfterType}>
  //       <ListItem dataTest={dataTest}>{content}</ListItem>
  //     </List>,
  //   );
  //   expect(mounted).toHaveStyleRule('margin-bottom', defaultTheme.jajiga.spaceSmall);
  // });

  it('should have children', () => {
    children.forEach(node => {
      expect(node.type()).toBe(ListItem);
      expect(node.render().text()).toBe(content);
    });
  });
});
