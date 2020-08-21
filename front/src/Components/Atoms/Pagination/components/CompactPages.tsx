import * as React from 'react';

import Icon from 'Atoms/Icon';
import Pages from './Pages';
import PageButtonLink from './PageButtonLink';

const MeatBalls = () => <Icon iconName="dots-h" size="small" color="primary" />;

const CompactPages = ({ pageCount, selectedPage, onPageChange, size }: CompactPagesProps) => {
  if (selectedPage > pageCount - 4) {
    return (
      <>
        <PageButtonLink onPageChange={onPageChange} size={size}>
          {1}
        </PageButtonLink>
        <MeatBalls />
        <Pages
          pageCount={5}
          selectedPage={selectedPage}
          onPageChange={onPageChange}
          enlargement={pageCount - 4}
          size={size}
        />
      </>
    );
  }
  if (selectedPage < 5) {
    return (
      <>
        <Pages pageCount={5} selectedPage={selectedPage} onPageChange={onPageChange} size={size} />
        <MeatBalls />
        <PageButtonLink onPageChange={onPageChange} size={size}>
          {pageCount}
        </PageButtonLink>
      </>
    );
  }
  return (
    <>
      <PageButtonLink onPageChange={onPageChange} size={size}>
        {1}
      </PageButtonLink>
      <MeatBalls />
      <Pages
        pageCount={3}
        selectedPage={selectedPage}
        onPageChange={onPageChange}
        enlargement={selectedPage - 1}
        size={size}
      />
      <MeatBalls />
      <PageButtonLink onPageChange={onPageChange} size={size}>
        {pageCount}
      </PageButtonLink>
    </>
  );
};

export default CompactPages;
