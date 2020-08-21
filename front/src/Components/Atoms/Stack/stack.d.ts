type Direction = 'row' | 'column' | 'row-reverse' | 'column-reverse';

type StackAlign = 'start' | 'end' | 'center';

type StackJustify = 'start' | 'end' | 'center' | 'between' | 'around';

type StackSpacing =
  | 'none'
  | 'extraTight'
  | 'tight'
  | 'condensed'
  | 'compact'
  | 'natural'
  | 'comfy'
  | 'loose'
  | 'extraLoose';

type StackMediaQuery = spaceAfter & {
  inline?: boolean;
  direction?: Direction;
  wrap?: boolean;
  grow?: boolean;
  shrink?: boolean;
  basis?: string;
  align?: Align;
  justify?: Justify;
  spacing?: Spacing;
};

type StackSmallMobile = {
  smallMobile: MediaQuery;
};

type StackProps = Globals &
  spaceAfter & {
    inline?: boolean;
    direction?: Direction;
    flex?: boolean;
    wrap?: boolean;
    grow?: boolean;
    shrink?: boolean;
    basis?: string;
    align?: StackAlign;
    justify?: StackJustify;
    spacing?: StackSpacing;
    mediumMobile?: StackMediaQuery;
    largeMobile?: StackMediaQuery;
    tablet?: StackMediaQuery;
    desktop?: StackMediaQuery;
    largeDesktop?: StackMediaQuery;
    element?: string;
    children: React$Node;
    onClick?: any;
  };
// GetAlign..........
type StackGetAlign = (align: StackAlign) => string;
// GetChildrenMargin..............
type StackGetChildrenMargin = (arg0: {
  viewport: Devices;
  index: number;
  devices: Devices[];
}) => (arg0: StackProps & StackSmallMobile) => Interpolation | boolean;
// GetDesktopSpacing..............
type StackGetDesktopSpacing = () => {
  [key: string]: string;
};
// GetDirection............
type StackGetDirection = (direction: Direction) => string;
// GetDirectionSpacingTemplate....................
type StackGetDirectionSpacingTemplate = (direction: string | null) => string;
// .....................
type StackGetDisplay = (inline: boolean) => string;
// GetGrow.............
type StackGetGrow = (grow: boolean) => string;
// GetJustify ..............
type StackGetJustify = (justify: StackJustify) => string;
// GetMobileSpacing...................
type StackGetMobileSpacing = () => {
  [key: string]: string;
};
// GetProperty ........................
type StackGetProperty = (
  property: 'spacing' | 'direction',
  arg1: { index: number; devices: Devices[] },
  arg2: StackProps & StackSmallMobile,
) => (Direction | null) | (Spacing | null);
// GetShrink...................
type StackGetShrink = (shrink: boolean) => string;
// GetViewportFlexStyles.........
type StackGetViewportFlexStyles = (viewport: Devices) => Interpolation;
// GetWidth.....................
type StackGetWidth = (inline: boolean) => string;
// GetWrap...........
type StackGetWrap = (wrap: boolean) => string;
// IsDefined....................
type IsDefinedProperty =
  | number
  | boolean
  | string
  | {
      [key: string]: Property;
    };

type StackIsDefined = (property: IsDefinedProperty | null) => boolean;
// IsMobileViewport................
type StackIsMobileViewport = (viewport: Devices) => boolean;
// ShouldUseFlex................
type StackShouldUseFlex = (arg0: StackProps) => boolean;
