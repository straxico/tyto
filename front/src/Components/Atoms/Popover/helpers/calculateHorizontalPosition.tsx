import { ALIGNS } from '../consts';

const isInside = (p: AlignsCore, canBe) => {
  if (p === ALIGNS.START && canBe[p]) {
    return ALIGNS.START;
  }
  if (p === ALIGNS.END && canBe[p]) {
    return ALIGNS.END;
  }
  return false;
};

const calculateHorizontalPosition: CalculateHorizontalPosition = (desiredAnchor, positions) => {
  const canBe = {
    [ALIGNS.START]: positions.containerLeft + positions.popoverWidth < positions.windowWidth,
    [ALIGNS.END]: positions.containerLeft + positions.containerWidth >= positions.popoverWidth,
  };

  // // FIX: at first mount all dimensions are zero
  // if (positions.windowWidth == 0 || positions.popoverWidth == 0) return null;
  const possibleAnchor = desiredAnchor
    .map(p => isInside(p, canBe))
    .filter(p => typeof p === 'string');

  const posAnchor = possibleAnchor[0];
  if (typeof posAnchor === 'string') {
    return posAnchor;
  }
  // set default return start
  return ALIGNS.START as AlignsCore;
};

export default calculateHorizontalPosition;
