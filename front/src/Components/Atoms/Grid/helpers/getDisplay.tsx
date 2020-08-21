import { css } from 'styled-components';

import isDefined from 'Atoms/Stack/helpers/isDefined';

const getDisplay: GridGetDisplay = (inline, force) =>
  css`
    display: ${(isDefined(inline) || force) && (inline ? 'inline-grid' : 'grid')};
    display: ${(isDefined(inline) || force) && (inline ? '-ms-inline-grid' : '-ms-grid')};
  `;

export default getDisplay;
