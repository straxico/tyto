type StickyProps = {
  offset?: number;
  children: React$Node;
};

type StickyState = {
  sticky: boolean;
  height: number;
  width: number;
  initialTop: number;
  initialWidth: boolean;
};
