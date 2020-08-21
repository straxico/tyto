type ModalState = {
  scrolled: boolean;
  loaded: boolean;
  fixedClose: boolean;
  fullyScrolled: boolean;
  modalWidth: number;
  footerHeight: number;
  hasModalSection: boolean;
};

type ModalSize = 'small' | 'normal' | 'large';

type ModalOnClose = (
  ev: React.KeyboardEvent<HTMLDivElement> | React.SyntheticEvent<HTMLButtonElement> | MouseEvent,
) => void | Promise<any>;

type ModalProps = Globals & {
  theme?: any;
  size?: ModalSize;
  children: React$Node;
  onClose?: ModalOnClose;
  fixedFooter?: boolean;
  isMobileFullPage?: boolean;
};

// modal context.....................
type ModalContextProps = {
  setDimensions?: () => void;
  decideFixedFooter?: () => void;
  setHasModalSection?: () => void;
  removeHasModalSection?: () => void;
  manageFocus?: () => void;
  hasModalSection?: boolean;
  isMobileFullPage?: boolean;
  isInsideModal?: boolean;
};

type WithModalContextType = (
  arg0: React$ComponentType<any>,
) => (arg0: { [key: string]: any }) => any;

// modalFooter....................................
type ModalFooterProps = Globals &
  ModalContextProps & {
    children: React$Node;
    flex?: string | Array<string>;
  };

// modalHeader...............
type ModalHeaderProps = Globals &
  ModalContextProps & {
    children?: React$Node;
    illustration?: React$Element<typeof Illustration>;
    title?: React$Node;
    description?: React$Node;
    suppressed?: boolean;
  };
// modalSection...............
type ModalSectionProps = Globals &
  ModalContextProps & {
    children: React$Node;
    suppressed?: boolean;
  };
