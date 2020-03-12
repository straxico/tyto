type ValidateIncrementParams = {
  value: number;
  maxValue?: number;
  step?: number;
};

type ValidateIncrement = (arg0: ValidateIncrementParams) => number;
