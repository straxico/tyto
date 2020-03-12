type LayoutProps = Globals & {
  type: 'Search' | 'Booking' | 'MMB';
  children: React$Node;
};
// LayoutColumn.........................
type LayoutColumnProps = Globals & {
  children: React$Node;
  element?: keyof JSX.IntrinsicElements;
  hideOn?: Devices[];
};
