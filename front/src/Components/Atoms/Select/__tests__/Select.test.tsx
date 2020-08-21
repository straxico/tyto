import React from 'react';
import { shallow, mount } from 'enzyme';

import SPACINGS_AFTER from 'utils/common/getSpacingToken/consts';
import Select from '../index';

const mockChange = jest.fn();
const placeholder = 'Default placeholder';
const dataTest = 'test';
const tabIndex = -1;
const name = 'name';
const id = 'test-id';
const objectOptions = [
  { value: '1', label: 'One', disabled: true },
  { value: '2', label: 'Two', disabled: true },
  { value: '3', label: 'Three', disabled: true },
  { value: '4', label: 'Four', disabled: true },
  { value: 'hidden-five', label: 'Hidden Five' },
  { disabled: false, value: 'disabled-six', label: 'Disabled Six' },
] as SelectOption[];
const spaceAfter = SPACINGS_AFTER.NORMAL as spaceAfterType;

describe('Select', () => {
  const component = shallow(
    <Select
      id={id}
      value="1"
      name={name}
      placeholder={placeholder}
      options={objectOptions}
      onChange={mockChange}
      tabIndex={tabIndex}
      dataTest={dataTest}
      spaceAfter={spaceAfter}
    />,
  );
  const select = component.find('Select__StyledSelect');
  const label = component.find('Select__Label');
  it('should have data-test', () => {
    expect(select.render().prop('data-test')).toBe(dataTest);
  });
  it('should have data-state', () => {
    expect(select.render().prop('data-state')).toBe('ok');
  });
  it('should have name', () => {
    expect(select.render().prop('attribs').name).toBe(name);
  });
  it('should have spaceAfter', () => {
    expect(label.prop('spaceAfter')).toBe(spaceAfter);
  });
  it('should have tabindex', () => {
    expect(select.render().prop('tabindex')).toBe('-1');
  });
  it('should have placeholder', () => {
    expect(select.childAt(0).text()).toBe(placeholder);
  });
  it('should have placeholder id', () => {
    expect(select.render().prop('id')).toBe(id);
  });
});

describe(`Required field`, () => {
  const label = 'Label';
  const component = mount(
    <Select options={objectOptions} label={label} required onChange={mockChange} />,
  );
  it('should render asterisk', () => {
    expect(component.find('FormLabel__StyledAsterisk').exists()).toBe(true);
  });
});
