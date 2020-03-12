import isDefined from './isDefined';

const getWidth: StackGetWidth = inline => isDefined(inline) && (!inline && '100%');

export default getWidth;
