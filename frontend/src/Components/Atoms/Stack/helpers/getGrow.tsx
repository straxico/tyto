import isDefined from './isDefined';

const getGrow: StackGetGrow = grow => isDefined(grow) && (grow ? '1' : '0');

export default getGrow;
