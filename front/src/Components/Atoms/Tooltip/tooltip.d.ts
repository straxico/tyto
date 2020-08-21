type TooltipUseDimensions = (
  arg0: {
    containerRef: React$ElementRef<any> | null;
    tooltip: React$ElementRef<any> | null;
    content: React$ElementRef<any> | null;
  },
  children: React$Node,
) => TooltipDimensions;

type CalculateTooltipAlign = (
  position: TooltipPositions | null,
  aligns: TooltipAligns[],
  dimensions: TooltipDimensions,
) => TooltipAligns | null;

type CalculateTooltipPosition = (
  positions: TooltipPositions[],
  dimensions: TooltipDimensions,
) => TooltipPositions | null;

type isAlign = (a: string) => boolean;
type isPosition = (p: string) => boolean;
type resolveContainerAlignProp = TooltipDimensions & TooltipAlign & TooltipPosition;
type resolveContainerPositionProps = TooltipDimensions & TooltipPosition;
type ResolveTooltipArrowAlignProps = TooltipDimensions & TooltipAlign & TooltipPosition;
type ResolveTooltipArrowPositionProps = TooltipPosition;

type PositionsAndAlignsType = [TooltipPositions[], TooltipAligns[]];

type SortPositionsAndAlignsType = (
  preferredPosition: TooltipPositions | null,
  theme: Theme,
) => PositionsAndAlignsType;
type SwitchPreferredPositionType = (
  theme: Theme,
  preferredPosition: TooltipPositions,
) => TooltipPositions;
type TooltipArrowStyleProps = TooltipPosition & ThemeProps;

type TooltipPaddingProps = TooltipDimensions & ThemeProps;

type TooltipSizeProps = TooltipSize;

type TooltipContentType = Globals & {
  shownMobile: boolean;
  shown: boolean;
  size: Sizes;
  tooltipId: string;
  children: React$Node;
  onClose: () => void;
  onCloseMobile: () => void;
  onEnter: () => void;
  preferredPosition: TooltipPositions | null;
  containerRef: React$ElementRef<any>;
};

type TooltipDimensions = {
  containerTop: number;
  containerLeft: number;
  containerHeight: number;
  containerWidth: number;
  tooltipHeight: number;
  tooltipWidth: number;
  contentHeight: number;
  windowWidth: number;
  windowHeight: number;
  containerTopPure: number;
  containerLeftPure: number;
};

type TooltipAligns = 'center' | 'start' | 'end';

type TooltipAlign = {
  align: TooltipAligns;
};

type TooltipPositions = 'right' | 'left' | 'top' | 'bottom';

type TooltipPosition = {
  position: TooltipPositions;
};

type TooltipSizes = 'small' | 'medium';

type TooltipSize = {
  size: TooltipSizes;
};

type TooltipProps = Globals & {
  children: React$Node;
  content: React$Node;
  size?: TooltipSizes;
  stopPropagation?: boolean;
  preferredPosition?: TooltipPositions;
  enabled?: boolean;
  tabIndex?: number;
  removeUnderlinedText?: boolean;
};
