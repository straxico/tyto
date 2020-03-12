import { css } from 'styled-components';

import { left, right } from 'utils/rtl/index';
import POSITIONS from '../consts';

const getPosition: DrawerGetPosition = ({ position, theme }) => css`
  ${position === POSITIONS.RIGHT ? right({ theme }) : left({ theme })}: 0;
`;
export default getPosition;
