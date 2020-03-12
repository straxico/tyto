import { css } from 'styled-components';

import { QUERIES } from './consts';

export const getBreakpointWidth: GetBreakpointWidth = (name, theme, pure) => {
  const tokens = {
    [QUERIES.MEDIUMMOBILE]: theme.jajiga.widthBreakpointMediumMobile,
    [QUERIES.LARGEMOBILE]: theme.jajiga.widthBreakpointLargeMobile,
    [QUERIES.TABLET]: theme.jajiga.widthBreakpointTablet,
    [QUERIES.DESKTOP]: theme.jajiga.widthBreakpointDesktop,
    [QUERIES.LARGEDESKTOP]: theme.jajiga.widthBreakpointLargeDesktop,
  };
  if (pure) {
    return tokens[name];
  }
  return `(min-width: ${tokens[name]}px)`;
};

const mediaQueries: any = Object.keys(QUERIES).reduce(
  (o: object, name: Devices) => ({
    [QUERIES[name]]: style =>
      css`
        @media ${({ theme }) => getBreakpointWidth(QUERIES[name], theme)} {
          ${style};
        }
      `,
    ...o,
  }),
  {},
);

export default mediaQueries;
