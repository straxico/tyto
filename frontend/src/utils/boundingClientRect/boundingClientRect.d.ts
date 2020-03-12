type Dimensions = {
  top: number;
  right: number;
  bottom: number;
  left: number;
  height: number;
  width: number;
};

type BoundingClientRect = (ref: { current: HTMLElement | null } | null) => Dimensions | null;
