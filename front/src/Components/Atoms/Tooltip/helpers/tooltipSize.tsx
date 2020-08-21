import { SIZE_OPTIONS } from '../consts';

const tooltipSize = ({ size }: TooltipSizeProps) => {
  const sizes = {
    [SIZE_OPTIONS.SMALL]: '240px',
    [SIZE_OPTIONS.MEDIUM]: '380px',
  };
  return sizes[size];
};

export default tooltipSize;
