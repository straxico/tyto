type SliderValue = number | number[];

type SliderCallback = (value: SliderValue) => void | Promise<any>;

type SliderAriaLabel = string | string[];

type SliderProps = Globals & {
  theme?: any;
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: SliderValue;
  onChange?: SliderCallback;
  onChangeBefore?: SliderCallback;
  onChangeAfter?: SliderCallback;
  label?: Translation;
  valueDescription?: Translation;
  ariaLabel?: SliderAriaLabel;
  ariaValueText?: string;
  histogramData?: Data;
  histogramDescription?: Translation;
  histogramLoading?: boolean;
  histogramLoadingText?: Translation;
};

type SliderState = {
  value: SliderValue;
  handleIndex: number | null;
  focused: boolean;
};
// bar..........................
type SliderBarProps = {
  value: SliderValue;
  max: number;
  min: number;
  onMouseDown: (event: React.MouseEvent<HTMLDivElement>) => void;
  hasHistogram: boolean;
};

type CalculateBarPosition = (
  value: Value,
  max: number,
  min: number,
  hasHistogram: boolean,
) => { left: number; width: number };
// handl......................................
type SliderCallback<A> = (event: A) => void;

type SliderHandleProps = {
  tabIndex: string | number;
  onMouseDown: SliderCallback<React.MouseEvent<HTMLDivElement>>;
  onFocus: SliderCallback<React.KeyboardEvent<HTMLDivElement>>;
  onTouchStart: SliderCallback<React.TouchEvent<HTMLDivElement>>;
  valueMax: number;
  valueMin: number;
  onTop: boolean;
  index: number;
  hasHistogram: boolean;
  value: SliderValue;
  ariaLabel: SliderAriaLabel | null;
  ariaValueText: string | null;
};

type CalculateLeftPosition = (
  valueNow: number,
  valueMin: number,
  valueMax: number,
  isFirst: boolean,
  isSimple: boolean,
) => number;

type SliderHandleIsFirst = (
  value: SliderValue,
  valueNow: number,
  index: number,
  hasHistogram: boolean,
) => boolean;
// histogram..........................
type SliderHistogramData = number[];

type SliderHistogramProps = {
  data: SliderHistogramData | null;
  value: SliderValue;
  min: number;
  step: number;
  loading?: boolean;
  loadingText?: Translation;
};
// utils/calculateCountof...................................
type SliderCalculateCountOf = (
  data: SliderHistogramData,
  value: SliderValue,
  min: number,
) => [number, number];
