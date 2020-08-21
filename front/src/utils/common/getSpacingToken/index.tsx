import SPACINGS_AFTER from './consts';

const getSpacingToken = ({ spaceAfter, theme }: SpacingTokenProps) => {
  const tokens = {
    [SPACINGS_AFTER.NONE]: '0',
    [SPACINGS_AFTER.SMALLEST]: theme.jajiga.spaceXXSmall,
    [SPACINGS_AFTER.SMALL]: theme.jajiga.spaceXSmall,
    [SPACINGS_AFTER.NORMAL]: theme.jajiga.spaceSmall,
    [SPACINGS_AFTER.MEDIUM]: theme.jajiga.spaceMedium,
    [SPACINGS_AFTER.LARGE]: theme.jajiga.spaceLarge,
    [SPACINGS_AFTER.LARGEST]: theme.jajiga.spaceXLarge,
  };
  return spaceAfter && tokens[spaceAfter];
};

export default getSpacingToken;
