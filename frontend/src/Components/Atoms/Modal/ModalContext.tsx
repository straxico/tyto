import React from 'react';

export const ModalContext = React.createContext<ModalContextProps>({
  setDimensions: () => {},
  decideFixedFooter: () => {},
  setHasModalSection: () => {},
  removeHasModalSection: () => {},
  manageFocus: () => {},
  hasModalSection: false,
  isMobileFullPage: false,
});

export const withModalContext: WithModalContextType = Component => props => (
  <ModalContext.Consumer>
    {contextProps => <Component {...props} {...contextProps} />}
  </ModalContext.Consumer>
);
