import * as React from 'react';

import ButtonLink from '../../ButtonLink';

const PageButtonLink = ({ children, onPageChange, size }: PageButtonLinkProps) => (
  <ButtonLink onClick={() => onPageChange(children)} type="secondary" size={size}>
    {children}
  </ButtonLink>
);

export default PageButtonLink;
