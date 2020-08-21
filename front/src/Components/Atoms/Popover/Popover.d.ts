// helper: resolvePopoverPosition
type StyledPosition = PopoverPosition &
  DimensionsCore & {
    fixed?: boolean;
  };
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
  preferredAlign: AlignsCore,
) => [PositionsCore[], AlignsCore[]];

// helper: CalculateHorizontalPosition
type CalculateHorizontalPosition = (
  desiredAnchor: AlignsCore[],
  positions: DimensionsCore,
) => AlignsCore | null;

// helper: CalculateVerticalPosition

type CalculateVerticalPosition = (
  desiredPositions: PositionsCore[],
  positions: DimensionsCore,
) => PositionsCore | null;

// helper: getScrollableParen
type GetScrollableParent = (node: Node | null) => Node | null;

// components: ContentWrapper
type ContentWrapperProps = Globals & {
  children: React$Node;
  closeText?: Translation;
  preferredPosition: PositionsCore;
  preferredAlign: AlignsCore;
  containerRef: React$ElementRef<any>;
  width?: string;
  noPadding?: boolean;
  overlapped?: boolean;
  shown: boolean;
  fixed?: boolean;
  actions?: React$Node;
  fullscreen?: boolean;
  childRef?: React$ElementRef<any>;
  focusIn?: boolean;
  onClose: (ev) => void;
};

// hooks: UseDimensions
type Params = {
  containerRef: React$ElementRef<any> | null;
  popover: React$ElementRef<any> | null;
  content: React$ElementRef<any> | null;
  fixed?: boolean;
  scrollableParent?: Node;
};

type UseDimensions = (arg0: Params) => DimensionsCore;

type PositionsCore = 'top' | 'bottom';
type AlignsCore = 'start' | 'end';

type DimensionsCore = {
  containerTop: number;
  containerPureTop?: number;
  containerLeft: number;
  containerHeight: number;
  containerWidth: number;
  popoverHeight: number;
  popoverWidth: number;
  contentHeight: number;
  windowHeight: number;
  windowWidth: number;
  windowScrollTop: number;
  documentHeight?: number;
};

type PopoverPosition = {
  position: PositionsCore;
  overlapped: boolean;
};

type Anchor = {
  anchor?: AlignsCore;
};

type PopoverProps = Globals & {
  children: React$Node;
  content?: React$Node;
  preferredPosition?: PositionsCore;
  preferredAlign?: AlignsCore;
  opened?: boolean;
  width?: string;
  noPadding?: boolean;
  overlapped?: boolean;
  fixed?: boolean;
  actions?: React$Node;
  onOpen?: () => void | Promise<any>;
  onClose?: () => void | Promise<any>;
  fullscreen?: boolean; // skm
  focusIn?: boolean; // skm: focus on children on not
  buttonref?: React$ElementRef<any>;
};

type IStyledPopoverParent = {
  theme: any;
  position: any;
  containerTop: any;
  containerPureTop: any;
  containerLeft: any;
  containerHeight: any;
  containerWidth: any;
  popoverHeight: any;
  popoverWidth: any;
  width: string;
  ref: any;
  onClick?: any;
  tabIndex: any;
  noPadding: boolean;
  overlapped: any;
  role: any;
  fullscreen?: boolean;
  shownMobile?: boolean;
  isInsideModal?: boolean;
  fixed?: boolean;
  anchor?: any;
  shown?: boolean;
};
