import { DIRECTIONS } from '../consts';

const getDirection: StackGetDirection = direction => {
  if (!direction) {
    return '';
  }
  return Object.values(DIRECTIONS).indexOf(direction) !== -1 ? direction : DIRECTIONS.ROW;
};
export default getDirection;
