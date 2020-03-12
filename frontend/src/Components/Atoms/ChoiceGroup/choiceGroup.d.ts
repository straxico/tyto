type ChoiceGroupLabelSize = 'normal' | 'large';

type ChoiceGroupLabelElement = 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type ChoiceGroupFilters = { label: string; value: string };
type ChoiceGroupProps = Globals & {
  children: React$Node;
  label?: Translation;
  labelSize?: ChoiceGroupLabelSize;
  labelElement?: ChoiceGroupLabelElement;
  error?: Translation;
  filter?: boolean;
  onOnlySelection?: (
    arg0: React.SyntheticEvent<HTMLButtonElement>,
    arg1: {},
  ) => void | Promise<any>;
  onChange: (arg0: React.InputEvent<HTMLInputElement>) => void | Promise<any>;
};
