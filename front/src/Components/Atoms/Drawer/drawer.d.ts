type DrawerOnClose = () => void | Promise<any>;

type DrawerPosition = 'left' | 'right';

type DrawerProps = Globals & {
  bodyNotScroll?: boolean;
  children: React$Node;
  onClose?: DrawerOnClose;
  shown: boolean;
  className?: string;
  width?: string;
  position?: DrawerPosition;
  noPadding?: boolean;
  suppressed?: boolean;
  title?: Translation;
  actions?: React$Node;
};
// getPosition.......................
type DrawerGetPosition = (arg0: { position: DrawerPosition; theme: Theme }) => Interpolation;
// GetTransitionAnimation........................
type DrawerGetTransitionAnimation = (arg0: {
  width: string;
  shown: boolean;
  position: DrawerPosition;
  theme: Theme;
}) => Interpolation;
// CloseProps...................
type DrawerCloseProps = { readonly onClick?: OnClose };
