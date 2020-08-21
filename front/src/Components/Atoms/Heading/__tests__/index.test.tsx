import React from 'react';
import { shallow, mount } from 'enzyme';

import defaultTheme from 'utils/token';
import SPACINGS_AFTER from 'utils/common/getSpacingToken/consts';
import Heading from '../index';
import { ELEMENT_OPTIONS, TYPE_OPTIONS } from '../consts';

describe('Heading in H2, type Title1, not inverted', () => {
  const element = ELEMENT_OPTIONS.H2;
  const type = TYPE_OPTIONS.TITLE1;
  const children = 'My lovely heading';
  const inverted = false;
  const dataTest = 'test';
  const id = 'id';

  const component = shallow(
    <Heading
      element={element as HeadingElement}
      type={type as HeadingType}
      inverted={inverted}
      dataTest={dataTest}
      id={id}>
      {children}
    </Heading>,
  );
  it('should contain children', () => {
    expect(
      component
        .find('Heading__StyledHeading')
        .render()
        .text(),
    ).toBe(children);
  });
  it('should have passed props', () => {
    expect(component.prop('type')).toBe(type);
    expect(component.prop('element')).toBe(element);
    expect(component.prop('inverted')).toBe(inverted);
    expect(component.prop('id')).toBe(id);
    expect(component.render().prop('data-test')).toBe(dataTest);
  });
  it(`should have been rendered in ${type}`, () => {
    expect(component.render().prop('name')).toBe(element);
  });
  // it('should have margin-bottom', () => {
  //   const mounted = mount(
  //     <Heading spaceAfter={SPACINGS_AFTER.NORMAL as spaceAfterType}>{children}</Heading>,
  //   );
  //   expect(mounted).toHaveStyleRule('margin-bottom', defaultTheme.jajiga.spaceSmall);
  // });
  // it('shouldnt have margin-bottom', () => {
  //   const mounted = mount(<Heading>{children}</Heading>);
  //   expect(mounted).toHaveStyleRule('margin-bottom', '0');
  // });
});
describe('Heading in DIV, type Title5', () => {
  const element = ELEMENT_OPTIONS.DIV as HeadingElement;
  const type = TYPE_OPTIONS.TITLE5 as HeadingType;
  const children = 'My lovely heading';

  const component = mount(
    <Heading element={element} type={type}>
      {children}
    </Heading>,
  );

  it('should have name element', () => {
    expect(component.render().prop('name')).toBe(element);
  });
  // it('should have text-transform uppercase', () => {
  //   expect(component).toHaveStyleRule('text-transform', 'uppercase');
  // });
});
