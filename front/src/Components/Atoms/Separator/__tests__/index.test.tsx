import * as React from 'react';
import { shallow } from 'enzyme';

import SPACINGS_AFTER from 'utils/common/getSpacingToken/consts';
import Separator from '../index';

describe('Separator', () => {
  const spaceAfter = SPACINGS_AFTER.LARGE;
  const component = shallow(<Separator spaceAfter={spaceAfter as spaceAfterType} />);
  it('should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
