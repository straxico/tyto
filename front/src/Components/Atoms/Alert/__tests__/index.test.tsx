import React from 'react';
import { shallow, mount } from 'enzyme';
import defaultTheme from 'utils/token';
import SPACINGS_AFTER from 'utils/common/getSpacingToken/consts';
import Alert from '../index';
import { CLOSE_BUTTON_DATA_TEST } from '../consts';

const message = 'Alert message';

describe('Alert', () => {
  it('should contain children', () => {
    const component = shallow(<Alert>{message}</Alert>);
    expect(
      component
        .find('Alert__Content')
        .children()
        .exists(),
    ).toBe(true);
  });

  // it('should have margin-bottom', () => {
  //   const component = mount(<Alert spaceAfter={SPACINGS_AFTER.NORMAL}>{message}</Alert>);
  //   expect(component).toHaveStyleRule('margin-bottom', defaultTheme.orbit.spaceSmall);
  // });
  it('should be closable', () => {
    const onClose = jest.fn();
    const component = shallow(
      <Alert onClose={onClose} closable>
        {message}
      </Alert>,
    );

    const ButtonLink = component.find('AlertCloseButton');
    expect(ButtonLink.prop('dataTest')).toBe(CLOSE_BUTTON_DATA_TEST);
    ButtonLink.simulate('click');
    expect(onClose).toHaveBeenCalled();
  });
});
