// components/ActiveButton
type ActiveButtonProps = {
  children: React$Node;
  transparent?: boolean;
  size?: PaginationSizes;
};

// components/CompactPages
type CompactPagesProps = {
  pageCount: number;
  selectedPage: number;
  onPageChange: (arg0: number) => void;
  size: PaginationSizes;
};

// component/PageButtonLink
type PageButtonLinkProps = PaginationOnPageChange & {
  children: number;
  size: PaginationSizes;
};

// components/Pages
type PagesProps = PaginationOnPageChange &
  PaginationPageCount &
  PaginationSelectedPage & {
    enlargement?: number;
    size: PaginationSizes;
  };

// Pagination
type PaginationOnPageChange = { readonly onPageChange: (arg0: number) => void };

type PaginationPageCount = { readonly pageCount: number };

type PaginationSelectedPage = { readonly selectedPage?: number };

type PaginationSizes = 'small' | 'normal';

type PaginationProps = Globals &
  PaginationOnPageChange &
  PaginationPageCount &
  PaginationSelectedPage & {
    hideLabels?: boolean;
    size?: PaginationSizes;
  };
