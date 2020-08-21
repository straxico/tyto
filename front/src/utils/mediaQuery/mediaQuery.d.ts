type Devices =
  | 'largeDesktop'
  | 'desktop'
  | 'tablet'
  | 'largeMobile'
  | 'mediumMobile'
  | 'smallMobile';

type QueryFunction = (style: Interpolation[]) => Interpolation[];

type MediaQueries = {
  [key: Devices]: QueryFunction;
};
type GetBreakpointWidth = (name: string, theme: Theme, pure?: boolean) => string | number;
