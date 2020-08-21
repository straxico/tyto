type Dimensions = {
  top: number;
  right: number;
  bottom: number;
  left: number;
  height: number;
  width: number;
  pureTop: number;
  pureLeft: number;
  pureRight: number;
  pureBottom: number;
};

type BoundingClientRect = (ref: { current: HTMLElement | null } | null) => Dimensions | null;
