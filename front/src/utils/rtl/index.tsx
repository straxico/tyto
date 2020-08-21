const leftToRight: LeftToRight = (left, right) => ({ theme }) => (theme.rtl ? right : left);

const rtlSpacing: RtlSpacing = value => ({ theme }) => {
  if (!theme.rtl) {
    return value;
  }
  const parts = value.split(' ').filter(part => !Number.isNaN(parseFloat(part)) && part);
  return parts.length === 4 ? [parts[0], parts[3], parts[2], parts[1]].join(' ') : value;
};

const textAlign: TextAlign = value => ({ theme }) => {
  if (theme.rtl) {
    if (value === 'left') {
      return leftToRight('left', 'right')({ theme });
    }
    if (value === 'right') {
      return leftToRight('right', 'left')({ theme });
    }
  }
  return value;
};

const left = leftToRight('left', 'right');

const right = leftToRight('right', 'left');

const borderRadius: BorderRadius = value => ({ theme }) => {
  if (!theme.rtl) {
    return value;
  }
  const parts = value.split(' ').filter(part => !Number.isNaN(parseFloat(part)) && part);

  return parts.length === 4 ? [parts[1], parts[0], parts[3], parts[2]].join(' ') : value;
};

const translate3d: Translate3d = value => ({ theme }) => {
  if (!theme.rtl) {
    return `translate3d(${value})`;
  }
  const parts = value.split(',').filter(part => !Number.isNaN(parseFloat(part)) && part);
  const x = parts[0];
  const newX = x[0] === '-' ? x.slice(1) : `-${x}`;
  return `translate3d(${newX},${parts[1]},${parts[2]})`;
};

export { textAlign, leftToRight, rtlSpacing, left, right, borderRadius, translate3d };
