type AlertType = 'info' | 'success' | 'warning' | 'critical';

type AlertProps = Globals &
  spaceAfter & {
    type?: AlertType;
    children?: React$Node;
    title?: Translation;
    /** see icon list at storybook */
    icon?: React$Element<any> | boolean;
    closable?: boolean;
    inlineActions?: React$Node;
    onClose?: () => void | Promise<any>;
  };
