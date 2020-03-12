type SlideState = {
  maxHeight: number | null;
  transitionFinished: boolean;
  visible: boolean;
};

type SlideProps = {
  children: React$Node;
  maxHeight: number | null;
  expanded?: boolean;
  ariaLabelledBy?: string;
  id?: string;
};
