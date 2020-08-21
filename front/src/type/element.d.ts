type ButtonoldProps = {
  variant?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'dark'
    | 'light'
    | 'link'
    | 'outline-primary'
    | 'outline-secondary'
    | 'outline-success'
    | 'outline-danger'
    | 'outline-warning'
    | 'outline-info'
    | 'outline-dark'
    | 'outline-light';
  size?: 'sm' | 'lg';
  block?: boolean;
  active?: boolean;
  disabled?: boolean;
  href?: string;
  as?: string;
  shallow?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  noContent?: boolean;
  icon?: [string, 'before' | 'after'];
  align?: 'right' | 'left';
  className?: string;
  children?: React.ReactNode;
};
type selectControlType = {
  value?: number;
  setValue?: any;
  list: { id: number | string; name: string; active: number }[];
  placeholder?: string;
  size?: 'lg' | 'sm';
  icon?: string;
  className?: string;
  disabled?: boolean;
};

type inputControlType = {
  value?: string;
  setValue?: any;
  type?: 'text' | 'email' | 'password';
  placeholder?: string;
  size?: 'lg' | 'sm';
  icon?: string;
  className?: string;
  children?: React.ReactNode;
};

type selectType = {
  value: number | string;
  setValue: any;
  disabled?: boolean;
  list: { id: number | string; name: string; active: number }[];
  icon?: string;
};

type NouisliderProps = {
  animate?: boolean;
  behaviour?: string;
  className?: string;
  clickablePips?: boolean;
  connect?: boolean | boolean[];
  direction?: 'ltr' | 'rtl';
  disabled?: boolean;
  keyboardSupport?: boolean;
  id?: string;
  limit?: number;
  margin?: number;
  onChange?: noUiSlider.Callback;
  onEnd?: noUiSlider.Callback;
  onSet?: noUiSlider.Callback;
  onSlide?: noUiSlider.Callback;
  onStart?: noUiSlider.Callback;
  onUpdate?: noUiSlider.Callback;
  orientation?: 'horizontal' | 'vertical';
  padding?: number;
  pips?: noUiSlider.PipsOptions;
  range: { [key: string]: number | number[] };
  snap?: boolean;
  start: number | number[] | number[][];
  step?: number;
  style?: React.CSSProperties;
  tooltips?: boolean | object[];
};
