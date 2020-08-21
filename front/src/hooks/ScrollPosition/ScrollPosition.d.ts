type windowPosition = {
  x?: number;
  scrollTop?: number;
  clientHeight?: number;
  scrollHeight?: number;
};

type elementPosition = {
  left: number;
  top: number;
  height: number;
  windowsHeight: number;
  windowScrollTop: number;
};
// EXAMPLE conditional type!
type getScrollPositionType = <T extends boolean = false>(prop: {
  element?: any;
  useWindow: T;
}) => T extends true ? windowPosition : elementPosition;

type ScrollPositionType = <T extends boolean = false>(props: {
  effect?: (props: {
    prevPos?: T extends true ? windowPosition : elementPosition;
    currPos?: T extends true ? windowPosition : elementPosition;
  }) => void;
  stop?: boolean;
  deps?: any[];
  element?: any;
  useWindow?: T;
  wait?: number;
}) => void;
