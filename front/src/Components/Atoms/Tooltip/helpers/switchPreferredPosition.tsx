import { RTL_POSITIONS } from '../consts';

const switchPreferredPosition: SwitchPreferredPositionType = ({ rtl }, preferredPosition) => {
  if (rtl) {
    if (preferredPosition === RTL_POSITIONS.LEFT) {
      return RTL_POSITIONS.RIGHT as TooltipPositions;
    }
    if (preferredPosition === RTL_POSITIONS.RIGHT) {
      return RTL_POSITIONS.LEFT as TooltipPositions;
    }
  }
  return preferredPosition;
};

export default switchPreferredPosition;
