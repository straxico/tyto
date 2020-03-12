type GridBasicProps = {
  inline?: boolean;
  rows?: string;
  columns?: string;
  gap?: string;
  rowGap?: string;
  columnGap?: string;
  maxWidth?: string;
};

type GridMediaQuery = GridBasicProps;

type GridProps = GridBasicProps &
  Globals & {
    element?: keyof JSX.IntrinsicElements;
    mediumMobile?: GridMediaQuery;
    largeMobile?: GridMediaQuery;
    tablet?: GridMediaQuery;
    desktop?: GridMediaQuery;
    largeDesktop?: GridMediaQuery;
    children: React$Node;
  };

type GridSmallMobile = {
  smallMobile: GridMediaQuery;
};
// ApplyGap.......................................
type GridApplyGap = (cellIndex: number, isGap: boolean) => number;
// AutoPlacement........................
type GridAutoPlacement = (
  childrenCount: number,
  columns: string | null,
  rows: string | null,
  columnGap: string | null,
  rowGap: string | null,
) => Interpolation[];
// CalculateColumnPlacement........................
type GridCalculateColumnPlacement = (childIndex: number, columnsCount: number) => number;
// CalculateRowPlacement...........................
type GridCalculateRowPlacement = (
  childIndex: number,
  columnsCount: number,
  rowsCount: number,
) => number;
// CompatibleGridTemplate....................
type GridCompatibleGridTemplate = (cells: string | null, gap: string | null) => string | null;
// GetDisplay..................
type GridGetDisplay = (inline: boolean | null, force: boolean) => any;
// GetProperty....................
type GridGetProperty = (
  property: 'rows' | 'columns' | 'gap' | 'rowGap' | 'columnGap',
  arg1: { index: number; devices: Devices[] },
  arg2: GridProps & GridSmallMobile,
) => string | null;
// GetViewportGridStyles...........................
type GridGetViewportGridStyles = (arg0: {
  viewport: Devices;
  index: number;
  devices: Devices[];
}) => (arg0: GridProps & GridSmallMobile) => Interpolation[] | boolean;

// GetViewportIEGridStyles......................................
type GridGetViewportIEGridStyles = (
  mediaQuery: GridBasicProps,
  childrenCount: number,
  arg2: { index: number; devices: Devices[] },
  arg3: GridProps & GridSmallMobile,
) => Interpolation[] | boolean;
// InsertGap............
type GridInsertGap = (values: string | null, gap: string) => string | null;
// LengthOf...................
type GridLengthOf = (value: string | null) => number | null;
// RealCellsCount.....................
type GridRealCellsCount = (gap: boolean, cells: number | null) => number;
// SplitToWords..................
type GridSplitToWords = (value: string | null) => string[] | null;
