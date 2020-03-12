import { JUSTIFY } from '../consts';

const getJustify: StackGetJustify = justify => {
  const tokens = {
    [JUSTIFY.START]: 'flex-start',
    [JUSTIFY.END]: 'flex-end',
    [JUSTIFY.CENTER]: 'center',
    [JUSTIFY.BETWEEN]: 'space-between',
    [JUSTIFY.AROUND]: 'space-around',
  };
  return justify && tokens[justify];
};

export default getJustify;
