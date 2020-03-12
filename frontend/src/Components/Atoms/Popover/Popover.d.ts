// helper: resolvePopoverPosition
type StyledPosition = PopoverPosition & DimensionsCore;
type ResolvePopoverPosition = (arg0: StyledPosition) => Interpolation | null;

// helper: resolvePopoverHorizontial
type StyledAnchor = Anchor &
  DimensionsCore & {
    theme: Theme;
  };
type ResolvePopoverHorizontal = (arg0: StyledAnchor) => Interpolation | null;

// helper: CalculatePopoverPosition
type CalculatePopoverPosition = (
  preferredPosition: PositionsCore,
) => [PositionsCore[], AnchorsCore[]];

// helper: CalculateHorizontalPosition
type CalculateHorizontalPosition = (
  desiredAnchor: AnchorsCore[],
  positions: DimensionsCore,
) => AnchorsCore | null;

// helper: CalculateVerticalPosition

type CalculateVerticalPosition = (
  desiredPositions: PositionsCore[],
  positions: DimensionsCore,
) => PositionsCore | null;

// components: ContentWrapper
type ContentWrapperProps = {
  children: React$Node;
  closeText?: Translation;
  preferredPosition: PositionsCore;
  containerRef: React$ElementRef<any>;
  width?: string;
  noPadding?: boolean;
  overlapped?: boolean;
  onClose: () => void;
  fullscreen?: boolean;
  childRef?: React$ElementRef<any>;
  focusIn?: boolean;
};

// hooks: UseDimensions
type Params = {
  containerRef: React$ElementRef<any> | null;
  popover: React$ElementRef<any> | null;
  content: React$ElementRef<any> | null;
};

type UseDimensions = (arg0: Params) => DimensionsCore;

type PositionsCore = 'top' | 'bottom';
type AnchorsCore = 'start' | 'end';

type DimensionsCore = {
  containerTop: number;
  containerLeft: number;
  containerHeight: number;
  containerWidth: number;
  popoverHeight: number;
  popoverWidth: number;
  contentHeight?: number;
  windowHeight?: number;
  windowWidth?: number;
  windowScrollTop?: number;
};

type PopoverPosition = {
  position: PositionsCore;
  overlapped: boolean;
};

type Anchor = {
  anchor?: AnchorsCore;
};

type PopoverProps = {
  readonly children: React$Node;
  readonly content: React$Node;
  readonly preferredPosition?: PositionsCore;
  readonly opened?: boolean;
  readonly width?: string;
  readonly noPadding?: boolean;
  readonly overlapped?: boolean;
  readonly onOpen?: () => void | Promise<any>;
  readonly onClose?: () => void | Promise<any>;
  readonly fullscreen?: boolean;
  readonly focusIn?: boolean; // skm: focus on children on not
};
