import { SPACINGS } from '../consts';

const getDesktopSpacing: StackGetDesktopSpacing = () => ({
  [SPACINGS.EXTRATIGHT]: '2px',
  [SPACINGS.TIGHT]: '4px',
  [SPACINGS.CONDENSED]: '8px',
  [SPACINGS.COMPACT]: '12px',
  [SPACINGS.NATURAL]: '16px',
  [SPACINGS.COMFY]: '24px',
  [SPACINGS.LOOSE]: '32px',
  [SPACINGS.EXTRALOOSE]: '40px',
});

export default getDesktopSpacing;
