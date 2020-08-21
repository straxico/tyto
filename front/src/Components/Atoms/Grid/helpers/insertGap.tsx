import splitToWords from './splitToWords';

const insertGap: GridInsertGap = (values, gap) => {
  const array = splitToWords(values);
  if (array) {
    return array
      .map((col, i, arr) => (gap && i + 1 < arr.length ? `${col} ${gap}` : col))
      .join(' ');
  }
  return undefined;
};

export default insertGap;
