type ValidateDecrementParams = {
  value: number;
  minValue?: number;
  step?: number;
};

type ValidateDecrement = (arg0: ValidateDecrementParams) => number;
