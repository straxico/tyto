import React from 'react';
import styled from 'styled-components';

import defaultTheme from 'utils/token';
import getSpacingToken from 'utils/common/getSpacingToken';
import { SIZE_OPTIONS, baseURL } from './consts';

const getHeightToken = ({ theme, size }) => {
  const tokens = {
    [SIZE_OPTIONS.SMALL]: theme.jajiga.heightIllustrationSmall,
    [SIZE_OPTIONS.MEDIUM]: theme.jajiga.heightIllustrationMedium,
    [SIZE_OPTIONS.LARGE]: '280px', // TODO: create token heightIllustrationLarge
    [SIZE_OPTIONS.DISPLAY]: '460px', // TODO: create token heightIllustrationDisplay
  };
  return tokens[size];
};

export const StyledImage = styled.img.attrs<any>(({ theme, size, illustrationName }) => {
  const height = parseInt(getHeightToken({ theme, size }), 10);
  const illustrationPath = `${illustrationName}-Q85.png`;
  return {
    src: `${baseURL}/illustrations/0x${height}/${illustrationPath}`,
    srcSet: `${baseURL}/illustrations/0x${height *
      2}/${illustrationPath} 2x, ${baseURL}/illustrations/0x${height * 3}/${illustrationPath} 3x`,
  };
})<any>`
  display: inline-block;
  margin: auto 0;
  max-height: ${getHeightToken};
  max-width: 100%;
  background-color: ${({ theme }) => theme.jajiga.backgroundIllustration};
  margin-bottom: ${getSpacingToken};
`;

StyledImage.defaultProps = {
  theme: defaultTheme,
};

const Illustration = ({
  name,
  size = SIZE_OPTIONS.MEDIUM as illustrationSizeType,
  dataTest,
  spaceAfter,
}: illustrationProps) => (
  <StyledImage
    illustrationName={name}
    alt={name}
    size={size}
    data-test={dataTest}
    spaceAfter={spaceAfter}
  />
);

export default Illustration;
