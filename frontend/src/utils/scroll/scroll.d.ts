export const addScrollHandler: (
  onScrollFunction: () => void,
  element?: Node,
  options?: any,
) => HTMLElement;

export const removeScrollHandler: (onScrollFunction: () => void, element?: Node) => HTMLElement;

export const getScrollingElement: () => HTMLElement;
