type LayoutType = 'Search' | 'Booking' | 'MMB';
type LayoutProps = Globals & {
  type: LayoutType;
  children: React$Node;
};
// LayoutColumn.........................
type LayoutColumnProps = Globals & {
  children: React$Node;
  element?: keyof JSX.IntrinsicElements;
  hideOn?: Devices[];
};
