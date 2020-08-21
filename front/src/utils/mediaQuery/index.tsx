import { css } from 'styled-components';

import defaultTheme from 'utils/token';
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

const mediaQueries: { [key in Devices]?: any } = Object.keys(QUERIES).reduce(
  (o: object, name: Devices) => ({
    [QUERIES[name]]: style =>
      css`
        @media ${() => getBreakpointWidth(QUERIES[name], defaultTheme)} {
          ${style};
        }
      `,
    ...o,
  }),
  {},
);

export default mediaQueries;
