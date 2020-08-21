const tooltipPadding = ({ contentHeight, theme }: TooltipPaddingProps) => {
  // one-line text should have smaller top/bottom padding
  if (contentHeight <= Math.floor(parseFloat(theme.jajiga.lineHeightTextNormal))) {
    return `${theme.jajiga.spaceXSmall} ${theme.jajiga.spaceSmall}`; // TODO: create token
  }
  return theme.jajiga.spaceSmall; // TODO: create token
};

export default tooltipPadding;
