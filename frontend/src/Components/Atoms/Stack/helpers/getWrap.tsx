import isDefined from './isDefined';

const getWrap: StackGetWrap = wrap => isDefined(wrap) && (wrap ? 'wrap' : 'nowrap');

export default getWrap;
