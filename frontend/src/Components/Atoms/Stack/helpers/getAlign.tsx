import { ALIGNS } from '../consts';

const getAlign: StackGetAlign = align => {
  const tokens = {
    [ALIGNS.START]: 'flex-start',
    [ALIGNS.END]: 'flex-end',
    [ALIGNS.CENTER]: 'center',
  };
  return align && tokens[align];
};

export default getAlign;
