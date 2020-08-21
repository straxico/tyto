import * as React from 'react';

import ActiveButton from './ActiveButton';
import PageButtonLink from './PageButtonLink';

const Pages = ({ pageCount, selectedPage, onPageChange, enlargement = 1, size }: PagesProps) => (
  <>
    {Array(...Array(pageCount)).map((_, index) => {
      const key = index + enlargement;
      return selectedPage === key ? (
        <ActiveButton key={key} size={size}>
          {key}
        </ActiveButton>
      ) : (
        <PageButtonLink key={key} onPageChange={onPageChange} size={size}>
          {key}
        </PageButtonLink>
      );
    })}
  </>
);
// Fix by SKM
// const PageItems = props => {
//   return props.items;
// };

export default Pages;
