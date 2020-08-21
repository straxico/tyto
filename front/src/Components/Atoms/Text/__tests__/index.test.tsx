import React from 'react';
import { shallow, mount } from 'enzyme';
import SPACINGS_AFTER from 'utils/common/getSpacingToken/consts';
import defaultTheme from 'utils/token';
import Text from '../index';
import { SIZE_OPTIONS, TYPE_OPTIONS } from '../consts';

describe('Text', () => {
  const text = 'Children text';
  const dataTest = 'test';
  const spaceAfter = SPACINGS_AFTER.NORMAL as spaceAfterType;
  const type = TYPE_OPTIONS.PRIMARY as TextTypeAtom;
  const size = SIZE_OPTIONS.SMALL as TextSize;
  const id = 'id';
  const component = shallow(
    <Text type={type} size={size} spaceAfter={spaceAfter} id={id}>
      {text}
    </Text>,
  );
  it('should have passed props', () => {
    expect(component.prop('type')).toBe(type);
    expect(component.prop('size')).toBe(size);
    expect(component.prop('spaceAfter')).toBe(spaceAfter);
    expect(component.prop('id')).toBe(id);
  });
  it('should contain children', () => {
    expect(component.children().text()).toBe(text);
  });
  // it('should have margin-bottom', () => {
  //   const mounted = shallow(<Text spaceAfter={spaceAfter}>{text}</Text>);
  //   expect(mounted).toHaveStyleRule('margin-bottom', defaultTheme.jajiga.spaceSmall);
  // });
});
