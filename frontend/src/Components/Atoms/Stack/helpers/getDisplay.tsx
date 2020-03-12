import isDefined from './isDefined';

const getDisplay: StackGetDisplay = inline => {
  if (isDefined(inline)) return inline ? 'inline-flex' : 'flex';

  return '';
};

export default getDisplay;
