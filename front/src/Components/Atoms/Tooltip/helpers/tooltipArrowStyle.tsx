import { css } from 'styled-components';

const tooltipArrowStyle = ({ position, theme }: TooltipArrowStyleProps) => {
  const arrows = {
    top: css`
      border-width: 7px 7px 0 7px; // TODO: create token sizeTooltipArrow
      border-color: ${theme.jajiga.backgroundTooltip} transparent transparent transparent;
    `,
    right: css`
      border-width: 7px 7px 7px 0; // TODO: create token sizeTooltipArrow
      border-color: transparent ${theme.jajiga.backgroundTooltip} transparent transparent;
    `,
    left: css`
      border-width: 7px 0 7px 7px; // TODO: create token sizeTooltipArrow
      border-color: transparent transparent transparent ${theme.jajiga.backgroundTooltip};
    `,
    bottom: css`
      border-width: 0 7px 7px 7px; // TODO: create token sizeTooltipArrow
      border-color: transparent transparent ${theme.jajiga.backgroundTooltip} transparent;
    `,
  };
  return arrows[position];
};

export default tooltipArrowStyle;
