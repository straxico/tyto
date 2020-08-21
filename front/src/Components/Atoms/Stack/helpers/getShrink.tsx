import isDefined from './isDefined';

const getShrink: StackGetShrink = shrink => isDefined(shrink) && (shrink ? '1' : '0');

export default getShrink;
